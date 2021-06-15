module Main exposing (main)

import Color exposing (hsl)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, gameWithConfigurations, getColor, getFloat, group, moveX, moveY, rotateY, rotateZ, scale, sphere)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 50, 60 ) )
        , ( "camera azimuth", ( 0, 0, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.5, pi / 2 ) )
        , ( "delay", ( 0, 0.15, 1 ) )
        , ( "number of spheres", ( 10, 50, 100 ) )
        , ( "saturation", ( 0, 0.5, 1 ) )
        , ( "lighting", ( 0, 0.7, 1 ) )
        ]
        [ ( "background color", hsl 0.85 0.32 0.45 )
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
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = getColor "background color" computer
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ cubes computer
        , cubes computer |> rotateY (degrees 120)
        , cubes computer |> rotateY (degrees 240)
        ]


makeCube : Computer -> Int -> Shape
makeCube computer i =
    let
        delay =
            getFloat "delay" computer

        n =
            floor (getFloat "number of spheres" computer)

        size =
            30 / toFloat n

        lighting =
            getFloat "lighting" computer

        saturation =
            getFloat "saturation" computer

        hue =
            Playground3d.waveWithDelay (delay * toFloat i) 0 1 7 computer.time
    in
    sphere (hsl hue saturation lighting) size
        |> scale (Playground3d.waveWithDelay (delay * toFloat i) 1 4 4 computer.time)
        |> moveX (Playground3d.waveWithDelay (delay * toFloat i) 3 4 1 computer.time)
        |> rotateY (Playground3d.waveWithDelay (delay * toFloat i) 0 10 20 computer.time)
        |> moveY (size * 1.1 * toFloat i)


cubes : Computer -> Shape
cubes computer =
    let
        n =
            floor (getFloat "number of spheres" computer)
    in
    group
        (List.range -(n // 2) (n // 2)
            |> List.map (makeCube computer)
        )
