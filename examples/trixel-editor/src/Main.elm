module Main exposing (main)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import Camera exposing (Camera, perspective)
import Color exposing (Color, black, blue, green, red, white)
import ColorPalette exposing (Palette(..))
import Dict.Any as AnyDict exposing (AnyDict)
import Geometry exposing (Point)
import Html exposing (Html, button, div, h2, hr, option, p, select, span, text)
import Html.Attributes exposing (class, style, value)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onChange)
import LevelSelector as LS exposing (Levels)
import List.Nonempty as Nonempty
import Playground exposing (Computer, configBlock, floatConfig, gameWithConfigurationsAndEditor, getFloat)
import Playground.Animation exposing (wave)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)
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
    [ configBlock "Camera"
        True
        [ floatConfig "camera x" ( -40, 40 ) 0
        , floatConfig "camera y" ( -40, 0 ) 0
        , floatConfig "camera z" ( 1, 50 ) 20
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "trixel scale" ( 0.5, 1 ) 1
        ]
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
        |> insertTrixelOnPointerDown computer
        |> removeTrixelOnShiftMouseDown computer


insertTrixelOnPointerDown : Computer -> Model -> Model
insertTrixelOnPointerDown computer model =
    if computer.pointer.isDown then
        model
            |> mapCurrentWorld
                (World.insert
                    (Face.at model.mouseOveredUV)
                    model.selectedColorIndex
                )

    else
        model


removeTrixelOnShiftMouseDown : Computer -> Model -> Model
removeTrixelOnShiftMouseDown computer model =
    if computer.keyboard.shift && computer.pointer.isDown then
        model
            |> mapCurrentWorld
                (World.remove (Face.at model.mouseOveredUV))

    else
        model


updateMouseOverUV : Computer -> Model -> Model
updateMouseOverUV computer model =
    case
        Camera.mouseOverXY
            (camera computer)
            computer.screen
            computer.pointer
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
            triangle (matte (ColorPalette.get colorIndex palette))
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
    in
    (case lr of
        L ->
            drawLeftFace

        R ->
            drawRightFace
    )
        |> scaleAround faceCenter (getFloat "trixel scale" computer)
        |> moveX x
        |> moveY y


drawVertex : Color -> Float -> Vertex -> Shape
drawVertex color radius v =
    let
        { x, y } =
            Vertex.worldCoordinates v
    in
    cube (matte color) radius
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
        [ class "fixed w-[300px] h-full top-0 right-0"
        , class "bg-black20"
        , class "border-[0.5px] border-white20"
        , class "overflow-y-scroll"
        , class "text-xs text-white60"
        ]
        [ div [ class "relative" ]
            [ viewInstructions
            , viewColorSelection model
            , levelSelection model
            ]
        ]


viewInstructions : Html EditorMsg
viewInstructions =
    div [ class "p-4 border-[0.5px] border-white20" ]
        [ div [ class "text-lg" ] [ text "Instructions" ]
        , div [ class "pl-2" ] [ text "- Press mouse to add trixel" ]
        , div [ class "pl-2" ] [ text "- Hold shift and press mouse to remove trixel" ]
        ]


viewColorSelection : Model -> Html EditorMsg
viewColorSelection model =
    div [ class "p-4 border-[0.5px] border-white20" ]
        [ div [ class "text-lg" ] [ text "Color Palette" ]
        , selectColorPalette model
        , makeButton PressedButtonForSettingBackgroundColor "Set selected as background"
        , div [] [ text (String.fromInt model.selectedColorIndex) ]
        , viewColorPalette model
        ]


levelSelection : Model -> Html EditorMsg
levelSelection model =
    div [ class "p-4 border-[0.5px] border-white20" ]
        [ div [ class "text-lg" ] [ text "Level Selection" ]
        , p []
            [ makeButton PressedPreviousLevelButton "<"
            , span [ style "margin" "10px" ]
                [ text <|
                    String.concat
                        [ String.fromInt (LS.currentIndex model.levels)
                        , " / "
                        , String.fromInt (LS.size model.levels)
                        ]
                ]
            , makeButton PressedNextLevelButton ">"
            ]
        , makeButton PressedAddLevelButton "Add level"
        , makeButton PressedRemoveLevelButton "Remove current level"
        , makeButton PressedMoveLevelOneUoButton "Move level one up"
        ]


makeButton msg string =
    button
        [ class "m-1 p-2 rounded bg-black40 hover:bg-black80"
        , onClick msg
        ]
        [ text string ]


optionWith : Palette -> Html EditorMsg
optionWith palette =
    option
        [ value (ColorPalette.toString palette) ]
        [ text (ColorPalette.toString palette) ]


selectColorPalette : Model -> Html EditorMsg
selectColorPalette model =
    div [ class "p-2" ]
        [ span [ class "p-2" ] [ text "Choose a palette:" ]
        , select
            [ class "p-2 text-white80 bg-black20"
            , onChange (ColorPalette.fromString >> SelectPalette)
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
            18

        gutter =
            0

        m =
            15

        showColor i color =
            let
                translateX =
                    toFloat (modBy m i) * (boxSize + gutter)

                translateY =
                    toFloat (i // m) * (boxSize + gutter)

                border =
                    if model.selectedColorIndex == i then
                        3

                    else
                        0
            in
            div
                [ class "absolute"
                , style "width" (String.fromFloat boxSize ++ "px")
                , style "height" (String.fromFloat boxSize ++ "px")
                , style "background-color" (Color.toCssString color)
                , style "transform" ("translate(" ++ String.fromFloat translateX ++ "px," ++ String.fromFloat translateY ++ "px)")
                , onClick (SelectColor i)
                , style "border" ("solid white " ++ String.fromFloat border ++ "px")
                ]
                []
    in
    div
        [ class "h-[320px]"
        ]
        (ColorPalette.colors world.palette
            |> Nonempty.indexedMap showColor
            |> Nonempty.toList
        )
