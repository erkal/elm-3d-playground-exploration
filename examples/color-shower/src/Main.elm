module Main exposing (main)

import Color exposing (hsl)
import Html exposing (Html)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurations, getColor, getFloat)
import Playground3d.Animation exposing (wave)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


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


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 60 ) 50
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
    , floatConfig "delay per index" ( 0, 1 ) 0.15
    , floatConfig "number of spheres" ( 10, 100 ) 50
    , floatConfig "saturation" ( 0, 1 ) 0.5
    , floatConfig "lighting" ( 0, 1 ) 0.7
    , colorConfig "background color" (hsl 0.85 0.32 0.45)
    ]


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
        [ spheresInAColumn computer
        , spheresInAColumn computer |> rotateY (degrees 120)
        , spheresInAColumn computer |> rotateY (degrees 240)
        ]


spheresInAColumn : Computer -> Shape
spheresInAColumn computer =
    let
        n =
            floor (getFloat "number of spheres" computer)
    in
    group
        (List.range -(n // 2) (n // 2)
            |> List.map (sphereWithIndex computer)
        )


sphereWithIndex : Computer -> Int -> Shape
sphereWithIndex computer i =
    let
        timeWithDelay =
            computer.time + toFloat i * getFloat "delay per index" computer

        n =
            floor (getFloat "number of spheres" computer)

        size =
            30 / toFloat n

        lighting =
            getFloat "lighting" computer

        saturation =
            getFloat "saturation" computer

        hue =
            wave 0 1 7 timeWithDelay
    in
    sphere (hsl hue saturation lighting) size
        |> scale (wave 1 4 4 timeWithDelay)
        |> moveX (wave 3 4 1 timeWithDelay)
        |> rotateY (wave 0 10 20 timeWithDelay)
        |> moveY (size * 1.1 * toFloat i)
