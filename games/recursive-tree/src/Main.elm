module Main exposing (main)

import Color exposing (blue, gray, hsl, lightBlue)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, block, game, group, moveX, moveY, rotateY, rotateZ, scale, spin, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Temperature


main =
    game view update initialModel


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


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 3, z = 0 }
        , eyePoint = { x = 5, y = 12, z = 15 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    let
        firstLight =
            Light.point
                { position = { x = -4, y = 4, z = -4 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 10000
                }

        secondLight =
            Light.point
                { position = { x = 4, y = 4, z = 4 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 10000
                }

        thirdLight =
            Light.directional
                { azimuth = degrees -90
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 300
                }

        fourthLight =
            Light.soft
                { azimuth = degrees 0
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 60
                , intensityBelow = Illuminance.lux 60
                }
    in
    Scene.custom
        { screen = computer.screen
        , camera = camera
        , lights =
            Scene3d.fourLights
                firstLight
                secondLight
                thirdLight
                fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = lightBlue
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ group
        [ floor
        , recursiveTree computer 2 2 (1 + 0.001 * computer.mouse.x) (1 + 0.001 * computer.mouse.y) 5
        ]
        |> rotateY (spin 1000 computer.time)
    ]


floor : Shape
floor =
    let
        square color =
            block color ( 10, 1, 10 )
                |> moveY -1

        octaThing color =
            group
                [ square color
                , square color |> rotateY (degrees 45)
                ]
    in
    group
        [ octaThing gray
        , octaThing blue |> scale 1.1 |> moveY -0.1
        , octaThing gray |> scale 1.2 |> moveY -0.2
        ]


recursiveTree : Computer -> Float -> Float -> Float -> Float -> Int -> Shape
recursiveTree computer w h s t n =
    let
        hypotenuse e f =
            sqrt (e ^ 2 + f ^ 2)

        ( wLeft, wRight ) =
            ( hypotenuse s t
            , hypotenuse (w - s) t
            )

        wavyColor i =
            hsl (wave (toFloat i / 6) 1 10 computer.time) 0.6 0.6

        baseRect =
            block (wavyColor n) ( w, h, h )

        children =
            if n == 0 then
                []

            else
                [ recursiveTree computer w h s t (n - 1)
                    |> rotateY (wave -2 2 8 computer.time)
                    |> moveX (w / 2)
                    |> moveY (h / 2)
                    |> rotateZ (atan2 t s)
                    |> scale (wLeft / w)
                    |> moveX -(w / 2)
                    |> moveY (h / 2)
                , recursiveTree computer w h s t (n - 1)
                    |> rotateY (wave 2 -2 8 computer.time)
                    |> moveX -(w / 2)
                    |> moveY (h / 2)
                    |> rotateZ -(atan2 t (w - s))
                    |> scale (wRight / w)
                    |> moveX (w / 2)
                    |> moveY (h / 2)
                ]
    in
    group (baseRect :: children)
