module DancingCubes.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (hsl, rgba, white)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (wave)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint =
                    { x = getFloat "camera x" computer
                    , y = getFloat "camera y" computer
                    , z = getFloat "camera z" computer
                    }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = hsl 0.6 0.5 0.2
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ cubes computer ]


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera x" ( 0, 16 ) 8
        , floatConfig "camera y" ( 0, 10 ) 0
        , floatConfig "camera z" ( 0, 16 ) 6
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "radius" ( 0, 6 ) 1
        , intConfig "number of cubes" ( 1, 100 ) 19
        , intConfig "number of waves" ( 1, 20 ) 2
        , floatConfig "cube size" ( 0.1, 4 ) 1
        , floatConfig "cycle duration" ( 1, 10 ) 5
        , floatConfig "wave height" ( 0.5, 6 ) 1.5
        ]
    , configBlock "Colors and light"
        True
        [ floatConfig "saturation" ( 0, 1 ) 0.8
        , floatConfig "lightness" ( 0, 1 ) 0.7
        ]
    ]


cubes : Computer -> Shape
cubes computer =
    let
        n =
            getInt "number of cubes" computer

        cycleDuration =
            getFloat "cycle duration" computer

        waveHeight =
            getFloat "wave height" computer

        numberOfWaves =
            getInt "number of waves" computer

        oneCube i =
            let
                ratio =
                    toFloat i / toFloat n

                delay =
                    toFloat numberOfWaves * cycleDuration * ratio
            in
            cube
                (matte
                    (hsl
                        ratio
                        (getFloat "saturation" computer)
                        (getFloat "lightness" computer)
                    )
                )
                (getFloat "cube size" computer)
                |> moveZ (getFloat "radius" computer)
                |> moveY
                    (wave
                        -waveHeight
                        waveHeight
                        cycleDuration
                        (computer.clock + delay)
                    )
                |> rotateY (degrees 360 * ratio)
    in
    group
        (List.range 0 (n - 1) |> List.map oneCube)
