module Main exposing (main)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import Color exposing (Color, black, blue, green, red, white)
import ColorPalette exposing (Palette(..))
import Dict
import Dict.Any as AnyDict exposing (AnyDict)
import Html exposing (Html, button, div, h2, hr, option, p, select, span, text)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onChange)
import LevelSelector as LS exposing (Levels)
import List.Nonempty as Nonempty
import Playground3d exposing (Computer, floatConfig, gameWithConfigurationsAndEditor, getFloat)
import Playground3d.Animation exposing (wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point)
import Playground3d.Scene as Scene exposing (..)
import TrixelGrid.CoordinateTransformations exposing (fromWorldCoordinates, toWorldCoordinates)
import TrixelGrid.Face as Face exposing (Face(..), LR(..))
import TrixelGrid.Vertex as Vertex exposing (Vertex, vertex)
import World exposing (ColorIndex, World)


main =
    gameWithConfigurationsAndEditor
        view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { levels : Levels World
    , selectedColorIndex : Int
    , mouseOveredUV : { u : Float, v : Float }
    }


mapCurrentWorld : (World -> World) -> Model -> Model
mapCurrentWorld up model =
    { model | levels = LS.mapCurrent up model.levels }


currentPalette : Model -> Palette
currentPalette =
    .levels >> LS.current >> .palette



-- INIT


initialConfigurations =
    [ floatConfig "camera x" ( -40, 40 ) 0
    , floatConfig "camera y" ( -40, 0 ) 0
    , floatConfig "camera z" ( 1, 50 ) 20
    , floatConfig "trixel scale" ( 0.5, 1 ) 1
    , floatConfig "minimum rotation degree" ( -(degrees 180), 0 ) 0
    , floatConfig "maximum rotation degree" ( 0, degrees 180 ) 0
    , floatConfig "rotation period" ( 1, 20 ) 5
    ]


init : Computer -> Model
init computer =
    { levels = LS.singleton World.empty
    , mouseOveredUV = { u = 0, v = 0 }
    , selectedColorIndex = 0
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateMouseOverUV computer
        |> insertTrixelOnMouseDown computer
        |> insertTrixelOnTouch computer
        |> removeTrixelOnShiftMouseDown computer


insertTrixelOnMouseDown : Computer -> Model -> Model
insertTrixelOnMouseDown computer model =
    if computer.mouse.down then
        model
            |> mapCurrentWorld
                (World.insert
                    (Face.at model.mouseOveredUV)
                    model.selectedColorIndex
                )

    else
        model


insertTrixelOnTouch : Computer -> Model -> Model
insertTrixelOnTouch computer model =
    computer.touches
        |> Dict.foldl
            (\_ xy ->
                case Playground3d.Camera.mouseOverXY (camera computer) computer.screen xy of
                    Nothing ->
                        identity

                    Just p ->
                        mapCurrentWorld
                            (World.insert
                                (Face.at
                                    (fromWorldCoordinates
                                        { x = p.x
                                        , y = p.y
                                        }
                                    )
                                )
                                model.selectedColorIndex
                            )
            )
            model


removeTrixelOnShiftMouseDown : Computer -> Model -> Model
removeTrixelOnShiftMouseDown computer model =
    if computer.keyboard.shift && computer.mouse.down then
        model
            |> mapCurrentWorld
                (World.remove (Face.at model.mouseOveredUV))

    else
        model


updateMouseOverUV : Computer -> Model -> Model
updateMouseOverUV computer model =
    case
        Playground3d.Camera.mouseOverXY
            (camera computer)
            computer.screen
            computer.mouse
    of
        Nothing ->
            model

        Just p ->
            { model
                | mouseOveredUV =
                    fromWorldCoordinates
                        { x = p.x
                        , y = p.y
                        }
            }



-- VIEW


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = getFloat "camera x" computer
            , y = getFloat "camera y" computer
            , z = getFloat "camera z" computer
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor =
            (LS.current model.levels).palette
                |> ColorPalette.get (LS.current model.levels).backgroundColorIndex
        , sunlightAzimuth = degrees 225
        , sunlightElevation = degrees 315
        }
        [ group
            [ group []
            , drawFaces computer model

            --, drawVertices
            --, axes
            --, drawMouseOveredFace computer model
            ]
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawMouseOveredFace : Computer -> Model -> Shape
drawMouseOveredFace computer model =
    drawFace computer
        (LS.current model.levels).palette
        ( Face.at model.mouseOveredUV, model.selectedColorIndex )


drawFaces : Computer -> Model -> Shape
drawFaces computer model =
    let
        world =
            LS.current model.levels
    in
    group
        (world.trixels |> AnyDict.toList |> List.map (drawFace computer world.palette))


drawFace : Computer -> Palette -> ( Face, ColorIndex ) -> Shape
drawFace computer palette ( Face lr u v, colorIndex ) =
    let
        { x, y } =
            { u = toFloat u
            , v = toFloat v
            }
                |> toWorldCoordinates

        drawLeftFace : Shape
        drawLeftFace =
            triangle (ColorPalette.get colorIndex palette)
                ( { x = 0, y = 0, z = 0 }
                , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
                , { x = 0, y = 1, z = 0 }
                )

        drawRightFace : Shape
        drawRightFace =
            drawLeftFace
                |> rotateZ (degrees 180)
                |> moveX (cos (degrees 30))
                |> moveY (1 + sin (degrees 30))

        minRot =
            getFloat "minimum rotation degree" computer

        maxRot =
            getFloat "maximum rotation degree" computer

        duration =
            getFloat "rotation period" computer

        faceCenter =
            let
                c =
                    toWorldCoordinates <|
                        case lr of
                            L ->
                                { u = 1 / 3, v = 1 / 3 }

                            R ->
                                { u = 2 / 3, v = 2 / 3 }
            in
            { x = c.x, y = c.y, z = 0 }

        rotationDegree =
            wave minRot maxRot duration computer.time

        rotation =
            identity
                -->> rotateAround ( faceCenter, ( 1, 0, 0 ) ) rotationDegree
                -->> rotateAround ( faceCenter, ( 0, 1, 0 ) ) rotationDegree
                >> rotateAround ( faceCenter, ( 0, 0, 1 ) ) rotationDegree
    in
    (case lr of
        L ->
            drawLeftFace

        R ->
            drawRightFace
    )
        |> scaleAround faceCenter (getFloat "trixel scale" computer)
        |> rotation
        |> moveX x
        |> moveY y


drawVertex : Color -> Float -> Vertex -> Shape
drawVertex color radius v =
    let
        { x, y } =
            Vertex.worldCoordinates v
    in
    cube color radius
        |> moveX x
        |> moveY y


drawVertices : Shape
drawVertices =
    let
        cartesianProduct : List a -> List b -> List ( b, a )
        cartesianProduct columns =
            let
                row i =
                    List.map (\j -> ( i, j )) columns
            in
            List.concatMap row
    in
    group
        (cartesianProduct
            (List.range -3 3)
            (List.range -2 2)
            |> List.map vertex
            |> List.map (drawVertex black 0.02)
        )



-- EDITOR


type EditorMsg
    = SelectPalette Palette
    | SelectColor Int
    | PressedButtonForSettingBackgroundColor
      -- LEVEL SELECTOR:
    | PressedPreviousLevelButton
    | PressedNextLevelButton
    | PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelOneUoButton


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        SelectPalette palette ->
            model
                |> mapCurrentWorld (World.setPalette palette)

        SelectColor colorIndex ->
            { model | selectedColorIndex = colorIndex }

        PressedButtonForSettingBackgroundColor ->
            model
                |> mapCurrentWorld (World.setBackgroundColorIndex model.selectedColorIndex)

        -- LEVEL SELECTOR:
        PressedPreviousLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LS.goToPrevious
                        |> Maybe.withDefault model.levels
            }

        PressedNextLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LS.goToNext
                        |> Maybe.withDefault model.levels
            }

        PressedAddLevelButton ->
            { model | levels = model.levels |> LS.add World.empty }

        PressedRemoveLevelButton ->
            { model | levels = model.levels |> LS.removeCurrent }

        PressedMoveLevelOneUoButton ->
            { model | levels = model.levels |> LS.moveLevelOneUp }


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div
        [ style "height" "100%"
        , style "width" "260px"
        , style "margin-top" "40px"
        , style "margin-left" "20px"
        , style "font-size" "12px"
        , style "overflow" "scroll"
        ]
        [ h2 [] [ text "Editing the selected level" ]
        , div [] [ text "Press mouse to add trixel" ]
        , div [] [ text "Hold shift and press mouse to remove trixel" ]
        , hr [] []
        , h2 [] [ text "Color Palette" ]
        , div [] [ selectColorPalette model ]
        , div [] [ buttonForSettingBackgroundColor ]
        , div [] [ text (String.fromInt model.selectedColorIndex) ]
        , div [] [ viewColorPalette model ]
        , hr [] []
        , levelSelection model
        , hr [] []
        , h2 [] [ text "What More?" ]
        ]


buttonForSettingBackgroundColor : Html EditorMsg
buttonForSettingBackgroundColor =
    button
        [ style "margin" "10px"
        , onClick PressedButtonForSettingBackgroundColor
        ]
        [ text "Set selected color as background color" ]


levelSelection : Model -> Html EditorMsg
levelSelection model =
    div []
        [ h2 [] [ text "Level Selection" ]
        , p []
            [ button [ onClick PressedPreviousLevelButton ] [ text "<" ]
            , span [ style "margin" "10px" ]
                [ text <|
                    String.concat
                        [ String.fromInt (LS.currentIndex model.levels)
                        , " / "
                        , String.fromInt (LS.size model.levels)
                        ]
                ]
            , button [ onClick PressedNextLevelButton ] [ text ">" ]
            ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedAddLevelButton ] [ text "Add level" ] ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedRemoveLevelButton ] [ text "Remove current level" ] ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedMoveLevelOneUoButton ] [ text "Move level one up" ] ]
        ]


optionWith : Palette -> Html EditorMsg
optionWith palette =
    option
        [ value (ColorPalette.toString palette) ]
        [ text (ColorPalette.toString palette) ]


selectColorPalette : Model -> Html EditorMsg
selectColorPalette model =
    div [ style "margin" "5px" ]
        [ text "Choose a palette:"
        , select
            [ onChange (ColorPalette.fromString >> SelectPalette)
            , value (ColorPalette.toString (currentPalette model))
            ]
            (List.map optionWith [ Parula, Inferno, Magma, Plasma, Viridis ])
        ]


viewColorPalette : Model -> Html EditorMsg
viewColorPalette model =
    let
        world =
            LS.current model.levels

        boxSize =
            13

        gutter =
            0

        borderOfSelected =
            2

        m =
            20

        showColor i color =
            let
                translateX =
                    toFloat (modBy m i) * (boxSize + gutter)

                translateY =
                    toFloat (i // m) * (boxSize + gutter)

                ( border, boxSize_ ) =
                    if model.selectedColorIndex == i then
                        ( borderOfSelected
                        , boxSize - 2 * borderOfSelected
                        )

                    else
                        ( 0
                        , boxSize
                        )
            in
            div
                [ style "position" "absolute"
                , style "width" (String.fromFloat boxSize_ ++ "px")
                , style "height" (String.fromFloat boxSize_ ++ "px")
                , style "background-color" (Color.toCssString color)
                , style "transform"
                    ("translate("
                        ++ String.fromFloat translateX
                        ++ "px,"
                        ++ String.fromFloat translateY
                        ++ "px)"
                    )
                , onClick (SelectColor i)
                , style "border" ("solid white " ++ String.fromFloat border ++ "px")
                ]
                []
    in
    div
        [ style "position" "relative"
        , style "overflow" "scroll"
        , style "height" "210px"
        ]
        (ColorPalette.colors world.palette
            |> Nonempty.indexedMap showColor
            |> Nonempty.toList
        )
