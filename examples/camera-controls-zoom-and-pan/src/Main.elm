module Main exposing (main)

import Camera exposing (Camera, perspective)
import Camera2d exposing (Camera2d)
import Color exposing (blue, darkBlue, green, hsl, lightBlue, purple, red, rgb255)
import Html exposing (Html, div, li, text, ul)
import Html.Attributes exposing (class, style)
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getColor, getFloat)
import Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { camera2d : Camera2d }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    { camera2d = Camera2d.init }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    { model | camera2d = model.camera2d |> Camera2d.tick computer }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div []
        [ viewWebGLCanvas computer model
        , div
            [ class "absolute w-screen h-screen text-center text-xs text-white60"
            ]
            [ div [ class "p-2" ] [ text ("zoom: " ++ String.fromInt (round (100 * Camera2d.getZoom model.camera2d)) ++ "%") ]
            , div [ class "p-1" ] [ text "Panning: scroll horizontally and vertically" ]
            , div [ class "p-1" ] [ text "Zooming: press Control key and scroll vertically" ]
            ]
        ]


viewWebGLCanvas : Computer -> Model -> Html Never
viewWebGLCanvas computer model =
    div
        [ class "fixed w-full h-full" ]
        [ Scene.sunny
            { devicePixelRatio = computer.devicePixelRatio
            , screen = computer.screen
            , camera = Camera2d.toPerspectiveCamera computer.screen model.camera2d
            , backgroundColor = rgb255 46 46 46
            , sunlightAzimuth = -(degrees 135)
            , sunlightElevation = -(degrees 45)
            }
            [ squares
            , drawPointer computer model
            ]
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


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    let
        mouseOverXY =
            computer.pointer
                |> Camera.mouseOverXY (Camera2d.toPerspectiveCamera computer.screen model.camera2d) computer.screen
                |> Maybe.withDefault { x = 0, y = 0, z = 0 }
    in
    sphere (matte lightBlue) 50
        |> moveX mouseOverXY.x
        |> moveY mouseOverXY.y
