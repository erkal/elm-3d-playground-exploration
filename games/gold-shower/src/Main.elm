module Main exposing (main)

import Color exposing (black, blue, white, yellow)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, rotateY, rotateZ, scale, wave)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 20, 60 ) )
        , ( "camera azimuth", ( 0, 0, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.5, pi / 2 ) )
        , ( "delay", ( 0, 0.5, 1 ) )
        ]
        []


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = black
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ cubes computer
        , cubes computer |> rotateY (degrees 180)
        ]


makeCube : Computer -> Int -> Shape
makeCube computer i =
    let
        delay =
            getFloat "delay" computer
    in
    cube yellow 1
        |> rotateZ (Playground3d.waveWithDelay (delay * toFloat i) 1 3 4 computer.time)
        |> scale (Playground3d.waveWithDelay (delay * toFloat i) 1 3 4 computer.time)
        |> moveX 3
        |> rotateY (Playground3d.waveWithDelay (delay * toFloat i) 0 10 20 computer.time)
        |> moveY (1.1 * toFloat i)


cubes : Computer -> Shape
cubes computer =
    group
        (List.range 0 18
            |> List.map (makeCube computer)
        )
        |> moveY -10



--|> rotateY (wave -pi pi 7 time)
