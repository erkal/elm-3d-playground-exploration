module Vortex.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (hsl, rgb255)
import Color.Oklch
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)


main : Playground () Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = \_ -> ()
        , update = \_ _ -> identity
        , view = view
        , hasTape = True
        }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 100 ) 50
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
        ]
    , configBlock "Time"
        True
        [ floatConfig "period" ( 0.1, 60 ) 40
        ]
    ]



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


view : Computer -> () -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgb255 26 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ group (List.range 0 n |> List.map (vortex computer))
        ]


n : Int
n =
    1200


wavyNumber : Computer -> Int -> Float
wavyNumber computer index =
    (toFloat index / toFloat n)
        + wave 0 1 (getFloat "period" computer) computer.clock


vortex : Computer -> Int -> Shape
vortex computer index =
    let
        s =
            wavyNumber computer index

        color =
            Color.Oklch.oklch 0.95 0.2 s
                |> Color.Oklch.toColor
    in
    block (matte color) ( 2, 4, 2 )
        |> scale (0.5 + s)
        |> moveX (10 * s)
        |> rotateY (0.1 * s * computer.clock)
        |> rotateX (toFloat index * 0.01 * s)
        |> rotateY (s * 2 * pi)
