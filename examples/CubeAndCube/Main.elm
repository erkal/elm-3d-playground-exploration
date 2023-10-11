module CubeAndCube.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, gray, green, red, rgb255)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)


main : Playground {} Never
main =
    Playground.simpleApplication
        { initialConfigurations = []
        , init = \_ -> {}
        , update = \_ _ _ -> {}
        , view = view
        , hasTape = True
        }


colors =
    { lightPeach = matte (Color.rgb255 255 204 153)
    , softPink = matte (Color.rgb255 255 153 204)
    , lightMint = matte (Color.rgb255 153 255 204)
    , babyBlue = matte (Color.rgb255 153 204 255)
    , lightLilac = matte (Color.rgb255 204 153 255)
    , lightLemon = matte (Color.rgb255 255 255 153)
    }


view : Computer -> {} -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 2, z = 4 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = Color.rgb255 30 30 30
        , sunlightAzimuth = -(degrees 85)
        , sunlightElevation = -(degrees 80)
        }
        [ scene computer model ]


scene computer _ =
    group
        [ cube colors.lightLilac 1
            |> rotateX (pi / 4)
        , cube colors.lightLemon 1
            |> rotateY (pi / 4)
        , cube colors.softPink 1
            |> rotateZ (pi / 4)
        ]
        |> rotateX (sin computer.clock)
        |> rotateY (sin computer.clock)
        |> rotateZ (sin computer.clock)
