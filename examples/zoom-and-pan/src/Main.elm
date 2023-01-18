module Main exposing (main)

import Camera exposing (Camera)
import Color exposing (hsl, lightBlue, rgb255)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, style)
import Playground exposing (Computer, Screen, gameWithConfigurations)
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.PanAndZoomUI as PanAndZoomUI exposing (PanAndZoomUI)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { panAndZoomUI : PanAndZoomUI }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    { panAndZoomUI = PanAndZoomUI.init { minZoom = 0.1, maxZoom = 1 } }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    let
        zoomCenter =
            computer.pointer
                |> Camera.mouseOverXY (toPerspectiveCamera computer.screen model.panAndZoomUI) computer.screen
                |> Maybe.map (\p -> { x = p.x, y = p.y })
                |> Maybe.withDefault { x = 0, y = 0 }
    in
    { model | panAndZoomUI = model.panAndZoomUI |> PanAndZoomUI.tick computer zoomCenter }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ cursorForSpaceDragging computer model ]
        [ div [ class "fixed w-full h-full" ]
            [ viewWebGLCanvas computer model ]
        , div [ class "absolute w-screen h-screen text-center text-xs text-white60" ]
            [ div [ class "p-2" ] [ text ("zoom: " ++ String.fromInt (round (100 * (PanAndZoomUI.get model.panAndZoomUI).zoom)) ++ "%") ]
            , div [ class "p-1" ] [ text "Panning: SCROLL or SPACE + DRAG" ]
            , div [ class "p-1" ] [ text "Zooming: CTRL + SCROLL" ]
            ]
        ]


cursorForSpaceDragging : Computer -> Model -> Html.Attribute Never
cursorForSpaceDragging computer model =
    style "cursor" <|
        if List.member "Space" computer.keyboard.pressedKeys then
            if PanAndZoomUI.isPanningWithSpaceBar model.panAndZoomUI then
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


toPerspectiveCamera : Screen -> PanAndZoomUI -> Camera
toPerspectiveCamera screen panAndZoomUI =
    let
        { panX, panY, zoom } =
            PanAndZoomUI.get panAndZoomUI
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
