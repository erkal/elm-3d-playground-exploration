module Main exposing (main)

import Color exposing (black, blue, darkGray, hsl, rgb, white, yellow)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, configurations, cube, cylinder, gameWithConfigurations, getFloat, group, moveX, moveY, rotateY, rotateZ, scale, sphere, wave)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Temperature


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
        , ( "delay", ( 0, 0.04, 1 ) )
        , ( "number of cubes", ( 10, 15, 100 ) )
        , ( "saturation", ( 0, 0.8, 1 ) )
        , ( "lighting", ( 0, 0.7, 1 ) )
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
    let
        firstLight =
            Light.point
                { position = { x = -10, y = 5, z = 10 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 60000
                }

        secondLight =
            Light.point
                { position = { x = 10, y = 5, z = 10 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 60000
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 1200
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 20
                , intensityBelow = Illuminance.lux 10
                }
    in
    Scene.custom
        { screen = computer.screen
        , camera = camera computer
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
        , backgroundColor = black
        }
        [ cubes computer
        , cubes computer |> rotateY (degrees 90)
        , cubes computer |> rotateY (degrees 180)
        , cubes computer |> rotateY (degrees 270)
        ]


makeCube : Computer -> Int -> Shape
makeCube computer i =
    let
        delay =
            getFloat "delay" computer

        n =
            floor (getFloat "number of cubes" computer)

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
        |> rotateZ (Playground3d.waveWithDelay (delay * toFloat i) 1 3 4 computer.time)
        |> scale (Playground3d.waveWithDelay (delay * toFloat i) 1 4 4 computer.time)
        |> moveX (Playground3d.waveWithDelay (delay * toFloat i) 3 4 1 computer.time)
        |> rotateY (Playground3d.waveWithDelay (delay * toFloat i) 0 10 20 computer.time)
        |> moveY (size * 1.1 * toFloat i)


cubes : Computer -> Shape
cubes computer =
    let
        n =
            floor (getFloat "number of cubes" computer)
    in
    group
        (List.range -(n // 2) (n // 2)
            |> List.map (makeCube computer)
        )



--|> rotateY (wave -pi pi 7 time)
