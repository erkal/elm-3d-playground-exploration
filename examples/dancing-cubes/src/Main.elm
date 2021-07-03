module Main exposing (main)

import Color exposing (hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, floatConfig, gameWithConfigurations, getFloat)
import Playground3d.Animation exposing (wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
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
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ cubes computer ]


initialConfigurations =
    [ floatConfig "radius" ( 0, 6 ) 1
    , floatConfig "number of cubes" ( 1, 100 ) 19
    , floatConfig "cube size" ( 0.1, 4 ) 1
    , floatConfig "cycle duration" ( 1, 10 ) 5
    , floatConfig "wave height" ( 0.5, 6 ) 1.5
    , floatConfig "number of waves" ( 1, 20 ) 2
    , floatConfig "camera x" ( 0, 16 ) 8
    , floatConfig "camera y" ( 0, 10 ) 0
    , floatConfig "camera z" ( 0, 16 ) 6
    , floatConfig "saturation" ( 0, 1 ) 0.8
    , floatConfig "lightness" ( 0, 1 ) 0.7
    ]


cubes : Computer -> Shape
cubes computer =
    let
        n =
            floor (getFloat "number of cubes" computer)

        cycleDuration =
            getFloat "cycle duration" computer

        waveHeight =
            getFloat "wave height" computer

        numberOfWaves =
            toFloat (floor (getFloat "number of waves" computer))

        oneCube i =
            let
                ratio =
                    toFloat i / toFloat n

                delay =
                    numberOfWaves * cycleDuration * ratio
            in
            cube
                (hsl
                    ratio
                    (getFloat "saturation" computer)
                    (getFloat "lightness" computer)
                )
                (getFloat "cube size" computer)
                |> moveZ (getFloat "radius" computer)
                |> moveY
                    (wave
                        -waveHeight
                        waveHeight
                        cycleDuration
                        (computer.time + delay)
                    )
                |> rotateY (degrees 360 * ratio)
    in
    group
        (List.range 0 (n - 1) |> List.map oneCube)
