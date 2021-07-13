module Main exposing (main)

import Color exposing (..)
import Html exposing (Html)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurations, getColor, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 8 ) 4
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
    , floatConfig "tommy" ( 0.1, 0.5 ) 0.3
    ]


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
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ sun computer
        , earthAndMoon computer
        , axes

        --, block gray ( 10, 0.01, 10 )
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


sun : Computer -> Shape
sun computer =
    sphere orange (getFloat "tommy" computer)


earthAndMoon : Computer -> Shape
earthAndMoon computer =
    let
        earth =
            sphere blue 0.1

        orbitDisc =
            cylinder blue 0.2 0.05
                |> rotateZ (degrees 20)

        moon =
            sphere white 0.04
                |> moveX 0.2
                |> rotateY (degrees (spin 3 computer.time))
                |> rotateZ (degrees 20)
    in
    group
        [ earth
        , moon
        , orbitDisc
        ]
        |> moveX 1
        |> rotateY (degrees (spin 10 computer.time))
