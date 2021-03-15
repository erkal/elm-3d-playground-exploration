module Main exposing (main)

import Color exposing (hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateY, waveWithDelay)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    {}



-- INIT


initialModel : Model
initialModel =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
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
    configurations
        [ ( "radius", ( 0, 1, 6 ) )
        , ( "number of cubes", ( 1, 30, 100 ) )
        , ( "cube size", ( 0.1, 1, 4 ) )
        , ( "cycle duration", ( 1, 5, 10 ) )
        , ( "wave height", ( 0.5, 1.5, 6 ) )
        , ( "number of waves", ( 1, 2, 20 ) )
        , ( "camera x", ( 0, 8, 16 ) )
        , ( "camera y", ( 0, 0, 10 ) )
        , ( "camera z", ( 0, 6, 16 ) )
        , ( "hue", ( 0, 0.8, 1 ) )
        , ( "saturation", ( 0, 0.7, 1 ) )
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
            in
            cube
                (hsl
                    ratio
                    (getFloat "hue" computer)
                    (getFloat "saturation" computer)
                )
                (getFloat "cube size" computer)
                |> moveZ (getFloat "radius" computer)
                |> moveY
                    (waveWithDelay
                        (numberOfWaves * cycleDuration * ratio)
                        -waveHeight
                        waveHeight
                        cycleDuration
                        computer.time
                    )
                |> rotateY (degrees 360 * ratio)
    in
    group
        (List.range 0 (n - 1) |> List.map oneCube)
