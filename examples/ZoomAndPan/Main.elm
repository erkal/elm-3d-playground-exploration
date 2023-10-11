module ZoomAndPan.Main exposing (main)

import Camera exposing (Camera)
import Color exposing (hsl, lightBlue, rgb255)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, style)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.PanAndZoom.PanAndZoom as PanAndZoom exposing (PanAndZoom)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    { panAndZoomUI : PanAndZoom }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    { panAndZoomUI = PanAndZoom.init { minZoom = 0.1, maxZoom = 1 } }



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    { model | panAndZoomUI = model.panAndZoomUI |> PanAndZoom.tick computer }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ cursorForSpaceDragging computer model ]
        [ div [ class "fixed w-full h-full" ]
            [ viewWebGLCanvas computer model ]
        , div [ class "absolute w-screen h-screen text-center text-xs text-white/60" ]
            [ div [ class "p-2" ] [ text ("zoom: " ++ String.fromInt (round (100 * PanAndZoom.getZoom model.panAndZoomUI)) ++ "%") ]
            , div [ class "p-1" ] [ text "Panning: SCROLL or SPACE + DRAG" ]
            , div [ class "p-1" ] [ text "Zooming: CTRL + SCROLL" ]
            ]
        ]


cursorForSpaceDragging : Computer -> Model -> Html.Attribute Never
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
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ squares
        , drawPointer computer model
        ]


squares : Shape
squares =
    group
        (cartesianProduct
            (List.range -5 5)
            (List.range -5 5)
            |> List.indexedMap makeSquare
        )


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


makeSquare : Int -> ( Int, Int ) -> Shape
makeSquare index ( i, j ) =
    block (matte (hsl (toFloat index / 121) 0.32 0.45)) ( 300, 300, 40 )
        |> moveX (toFloat j * 400)
        |> moveY (toFloat i * 400)
        |> moveZ -21


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


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    let
        mouseOverXY =
            computer.pointer
                |> Camera.mouseOverXY (toPerspectiveCamera computer.screen model.panAndZoomUI) computer.screen
                |> Maybe.withDefault { x = 0, y = 0, z = 0 }
    in
    sphere (matte lightBlue) 50
        |> moveX mouseOverXY.x
        |> moveY mouseOverXY.y
