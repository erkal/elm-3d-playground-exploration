module Main exposing (main)

import Camera exposing (Camera, orthographic)
import Color exposing (rgb255, white)
import Html exposing (Html)
import Playground exposing (Computer, configBlock, floatConfig, gameWithConfigurations, getFloat)
import Playground.Animation exposing (spin)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera height" ( 1.4, 1.57 ) 1.57
        ]
    ]


init : Computer -> Model
init _ =
    {}



-- UPDATE


update : Computer -> Model -> Model
update _ model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    orthographic
        { focalPoint = { x = 0, y = 2, z = 0 }
        , azimuth = getFloat "camera height" computer
        , elevation = getFloat "camera height" computer
        , viewportHeight = 2
        }


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = white
        , sunlightAzimuth = degrees 90
        , sunlightElevation = -(degrees 180)
        }
        [ twentyBlocks computer
        ]


twentyBlocks : Computer -> Shape
twentyBlocks computer =
    helper computer 20


helper : Computer -> Int -> Shape
helper computer i =
    let
        angle =
            degrees (spin 8 computer.time) / 4

        scaling =
            0.707 / cos (pi / 4 - angle)

        color =
            if modBy 2 i == 0 then
                rgb255 17 147 216

            else
                white
    in
    if i == 0 then
        group []

    else
        group
            [ cube (matte color) 1
            , helper computer (i - 1)
                |> scale scaling
                |> rotateY angle
                |> moveY 0.3
            ]
