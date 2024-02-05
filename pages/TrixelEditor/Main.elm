module TrixelEditor.Main exposing (main)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import Camera exposing (Camera, perspective)
import Color exposing (Color, black, blue, green, red, white)
import Dict.Any as AnyDict exposing (AnyDict)
import Geometry exposing (Point)
import Html exposing (Html, button, div, h2, hr, option, p, select, span, text)
import Html.Attributes exposing (class, style, value)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onChange)
import Json.Decode as Decode
import Json.Encode as Encode
import List.Nonempty as Nonempty
import Playground.Icons as Icons
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Pages.Pages as Pages exposing (Pages)
import Tools.PanAndZoom.PanAndZoom as PanAndZoom exposing (PanAndZoom)
import TrixelEditor.ColorPalette as ColorPalette exposing (Palette(..))
import TrixelEditor.TrixelGrid.CoordinateTransformations exposing (fromCanvasCoordinates, toCanvasCoordinates)
import TrixelEditor.TrixelGrid.Face as Face exposing (Face(..), LR(..))
import TrixelEditor.TrixelGrid.Vertex as Vertex exposing (Vertex, vertex)
import TrixelEditor.World as World exposing (ColorIndex, World)


main : Playground Model Msg
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    { pages : Pages World
    , panAndZoomUI : PanAndZoom
    , editorIsOn : Bool
    , selectedColorIndex : Int
    , mouseOveredUV : { u : Float, v : Float }
    }


mapCurrentWorld : (World -> World) -> Model -> Model
mapCurrentWorld up model =
    { model | pages = Pages.mapCurrent up model.pages }


currentPalette : Model -> Palette
currentPalette =
    .pages >> Pages.current >> .palette



-- INIT


initialConfigurations =
    [ configBlock "Parameters"
        True
        [ floatConfig "trixel scale" ( 0.5, 1 ) 1
        ]
    ]


init : Computer -> Model
init computer =
    { pages =
        Pages.init
            -- TODO: Decode encode World
            (always (Encode.string ""))
            (Decode.succeed World.empty)
            { name = "1", page = World.empty }
            []
    , panAndZoomUI = PanAndZoom.init { minZoom = 10, maxZoom = 70 }
    , editorIsOn = True
    , mouseOveredUV = { u = 0, v = 0 }
    , selectedColorIndex = 0
    }



-- UPDATE


update : Computer -> Message Msg -> Model -> Model
update computer message model =
    case message of
        Tick ->
            model
                |> updatePanAndZoomUI computer
                |> updateMouseOverUV computer
                |> insertTrixelOnPointerDown computer
                |> removeTrixelOnShiftMouseDown computer

        Message editorMsg ->
            model
                |> handleMsgFromEditor editorMsg


toPerspectiveCamera : Screen -> PanAndZoom -> Camera
toPerspectiveCamera screen panAndZoomUI =
    let
        { panX, panY, zoom } =
            PanAndZoom.get { yIsUp = True } panAndZoomUI
    in
    Camera.perspective
        { focalPoint =
            { x = panX
            , y = panY
            , z = 0
            }
        , eyePoint =
            { x = panX
            , y = panY
            , z = screen.height / zoom
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


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


updatePanAndZoomUI : Computer -> Model -> Model
updatePanAndZoomUI computer model =
    { model | panAndZoomUI = model.panAndZoomUI |> PanAndZoom.tick computer }


updateMouseOverUV : Computer -> Model -> Model
updateMouseOverUV computer model =
    case
        Camera.mouseOverXY
            (toPerspectiveCamera computer.screen model.panAndZoomUI)
            computer.screen
            computer.pointer
    of
        Nothing ->
            model

        Just p ->
            { model
                | mouseOveredUV =
                    fromCanvasCoordinates
                        { x = p.x
                        , y = p.y
                        }
            }



-- VIEW


view : Computer -> Model -> Html Msg
view computer model =
    div [ cursorForSpaceDragging computer model ]
        [ div [ class "fixed w-full h-full" ]
            [ Html.map never (viewWebGLCanvas computer model) ]
        , div
            [ class "absolute w-screen h-screen text-center text-lg text-white/60"
            ]
            [ div [ class "p-1" ] [ text "TRIXELS" ]
            ]
        , viewEditor computer model
        ]


cursorForSpaceDragging : Computer -> Model -> Html.Attribute Msg
cursorForSpaceDragging computer model =
    style "cursor" <|
        if List.member "Space" computer.keyboard.pressedKeys then
            if PanAndZoom.isPanningWithSpaceBar model.panAndZoomUI then
                "grabbing"

            else
                "grab"

        else
            "default"


viewWebGLCanvas : Computer -> Model -> Html Never
viewWebGLCanvas computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = toPerspectiveCamera computer.screen model.panAndZoomUI
        , backgroundColor =
            (Pages.current model.pages).palette
                |> ColorPalette.get (Pages.current model.pages).backgroundColorIndex
        , sunlightAzimuth = degrees 225
        , sunlightElevation = degrees 315
        }
        [ group
            [ drawFaces computer model

            --, drawGrid computer
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
        (Pages.current model.pages).palette
        ( Face.at model.mouseOveredUV, model.selectedColorIndex )


drawFaces : Computer -> Model -> Shape
drawFaces computer model =
    let
        world =
            Pages.current model.pages
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
                |> toCanvasCoordinates

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
                    toCanvasCoordinates <|
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


drawGridDot : Color -> Float -> Vertex -> Shape
drawGridDot color radius v =
    let
        { x, y } =
            Vertex.canvasCoordinates v
    in
    cylinder (matte color) radius 0.1
        |> rotateX (degrees 90)
        |> moveX x
        |> moveY y


drawGrid : Computer -> Shape
drawGrid computer =
    let
        cartesianProduct : List a -> List b -> List ( b, a )
        cartesianProduct columns =
            let
                row i =
                    List.map (\j -> ( i, j )) columns
            in
            List.concatMap row

        gridDotSize =
            0.05

        gridColor =
            Color.black
    in
    group
        (cartesianProduct
            (List.range -3 3)
            (List.range -2 2)
            |> List.map vertex
            |> List.map (drawGridDot gridColor gridDotSize)
        )



-- EDITOR


type Msg
    = PressedEditorOnOffButton
    | SelectPalette Palette
    | SelectColor Int
    | PressedButtonForSettingBackgroundColor
    | FromLevelEditor Pages.Msg


handleMsgFromEditor : Msg -> Model -> Model
handleMsgFromEditor editorMsg model =
    case editorMsg of
        PressedEditorOnOffButton ->
            { model | editorIsOn = not model.editorIsOn }

        SelectPalette palette ->
            model
                |> mapCurrentWorld (World.setPalette palette)

        SelectColor colorIndex ->
            { model | selectedColorIndex = colorIndex }

        PressedButtonForSettingBackgroundColor ->
            model
                |> mapCurrentWorld (World.setBackgroundColorIndex model.selectedColorIndex)

        FromLevelEditor levelEditorMsg ->
            { model | pages = model.pages |> Pages.update levelEditorMsg }


viewEditor : Computer -> Model -> Html Msg
viewEditor computer model =
    div
        [ class "prevent-elm-inputs" ]
        [ editorContent computer model
        , editorToggleButton model
        ]


editorToggleButton : Model -> Html Msg
editorToggleButton model =
    div
        [ class "fixed top-0 right-0"
        ]
        [ button
            [ class "w-10 p-2 text-white/20 hover:text-white active:text-white/60"
            , onClick PressedEditorOnOffButton
            ]
            [ if model.editorIsOn then
                Icons.icons.cross

              else
                Icons.icons.pen
            ]
        ]


editorContent : Computer -> Model -> Html Msg
editorContent computer model =
    if model.editorIsOn then
        div
            [ class "fixed top-0 right-0 w-[300px]"
            , style "height" <| String.fromFloat (computer.screen.height - 80) ++ "px"
            , class "bg-black/20"
            , class "border-[0.5px] border-white/20"
            , class "overflow-y-scroll"
            , class "text-xs text-white/60"
            ]
            [ viewInstructions
            , viewColorSelection model
            , pageSelection model
            ]

    else
        div [] []


viewInstructions : Html Msg
viewInstructions =
    div [ class "p-4 border-[0.5px] border-white/20" ]
        [ div [ class "text-lg" ] [ text "Instructions" ]
        , div [ class "pl-2" ] [ text "- Press mouse to add trixel" ]
        , div [ class "pl-2" ] [ text "- Hold shift and press mouse to remove trixel" ]
        , div [ class "pl-2" ] [ text "- Panning: SCROLL or SPACE + DRAG" ]
        , div [ class "pl-2" ] [ text "- Zooming: CTRL + SCROLL" ]
        ]


viewColorSelection : Model -> Html Msg
viewColorSelection model =
    div [ class "p-4 border-[0.5px] border-white/20" ]
        [ div [ class "text-lg" ] [ text "Color Palette" ]
        , selectColorPalette model
        , makeButton PressedButtonForSettingBackgroundColor "Set selected as background"
        , div [] [ text (String.fromInt model.selectedColorIndex) ]
        , viewColorPalette model
        ]


pageSelection : Model -> Html Msg
pageSelection model =
    div [ class "p-4 border-[0.5px] border-white/20" ]
        [ div [ class "text-lg" ] [ text "Pages" ]
        , div [ class "p-4" ]
            [ Html.map FromLevelEditor
                (Pages.view model.pages)
            ]
        ]


makeButton msg string =
    button
        [ class "m-1 p-2 rounded bg-black/40 hover:bg-black/80"
        , onClick msg
        ]
        [ text string ]


optionWith : Palette -> Html Msg
optionWith palette =
    option
        [ value (ColorPalette.toString palette) ]
        [ text (ColorPalette.toString palette) ]


selectColorPalette : Model -> Html Msg
selectColorPalette model =
    div [ class "p-2" ]
        [ span [ class "p-2" ] [ text "Choose a palette:" ]
        , select
            [ class "p-2 text-white/80 bg-black/20"
            , onChange (ColorPalette.fromString >> SelectPalette)
            , value (ColorPalette.toString (currentPalette model))
            ]
            (List.map optionWith [ Parula, Inferno, Magma, Plasma, Viridis ])
        ]


viewColorPalette : Model -> Html Msg
viewColorPalette model =
    let
        world =
            Pages.current model.pages

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
