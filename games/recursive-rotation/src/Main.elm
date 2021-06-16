module Main exposing (main)

import Color exposing (black, rgb255, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, gameWithConfigurations, getColor, getFloat, group, moveY, rotateY, scale, wave)
import Playground3d.Camera exposing (Camera, orthographic)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera azimuth", ( 0, 0, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, pi / 2, pi / 2 ) )
        , ( "viewport height", ( 3, 10, 30 ) )
        , ( "number of squares", ( 5, 20, 50 ) )
        , ( "period", ( 3, 40, 60 ) )
        ]
        [ ( "background color", rgb255 220 220 220 ) ]


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
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , viewportHeight = getFloat "viewport height" computer
        }


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = getColor "background color" computer
        , sunlightAzimuth = degrees 90
        , sunlightElevation = -(degrees 180)
        }
        [ cubeStack computer (floor (getFloat "number of squares" computer))
            |> moveY -2
        ]


cubeStack : Computer -> Int -> Shape
cubeStack computer i =
    if i == 0 then
        group []

    else
        let
            period =
                getFloat "period" computer

            angle =
                wave 0 (pi / 2) period computer.time

            scaling =
                1 / sqrt 2 / cos (abs (pi / 4 - angle))

            color =
                if modBy 2 i == 0 then
                    black

                else
                    white
        in
        group
            [ block color ( 5, 1 / scaling, 5 )
            , cubeStack computer (i - 1)
                |> scale scaling
                |> rotateY angle
                |> moveY 1
            ]
