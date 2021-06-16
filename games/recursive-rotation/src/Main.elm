module Main exposing (main)

import Color exposing (blue, darkGray, gray, hsl, red, rgb255, white, yellow)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getColor, getFloat, group, moveY, rotateY, scale, spin, wave)
import Playground3d.Camera exposing (Camera, orthographic, perspectiveWithOrbit)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 10, 60 ) )
        , ( "camera azimuth", ( 0, 0, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.5, pi / 2 ) )
        , ( "viewport height", ( 3, 5, 30 ) )
        ]
        [ ( "background color", rgb255 100 67 107 ) ]


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
        , distance = getFloat "camera distance" computer
        , viewportHeight = getFloat "viewport height" computer
        }


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = getColor "background color" computer
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 40)
        }
        [ cubeStack computer 10
            |> moveY -2
        ]


cubeStack : Computer -> Int -> Shape
cubeStack computer i =
    if i == 0 then
        group []

    else
        let
            angle =
                wave 0 (pi / 2) 14 computer.time

            scaling =
                1 / sqrt 2 / cos (abs (pi / 4 - angle))
        in
        group
            [ block (hsl (toFloat i / 10) 0.5 0.8) ( 5, 1, 5 )
            , cubeStack computer (i - 1)
                |> scale scaling
                |> rotateY angle
                |> moveY 1
            ]
