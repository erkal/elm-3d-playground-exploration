module Main exposing (main)

import Color exposing (gray, hsl)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, floatConfig, gameWithConfigurations, getFloat)
import Playground3d.Animation exposing (wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Light as Light
import Playground3d.Scene as Scene exposing (..)
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}


initialConfigurations =
    [ floatConfig "a" ( 0, 3 ) 1
    , floatConfig "lux" ( 2, 5 ) 5
    , floatConfig "intensity above" ( 0, 300 ) 60
    , floatConfig "intensity below" ( 0, 300 ) 290
    ]



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    let
        firstLight =
            Light.point
                { position = { x = -45, y = 30, z = 45 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = -45, y = -30, z = 45 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux (10 ^ getFloat "lux" computer)
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux (getFloat "intensity above" computer)
                , intensityBelow = Illuminance.lux (getFloat "intensity below" computer)
                }
    in
    Scene.custom
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
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
        , backgroundColor = gray
        }
        (shapes computer model)


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = 10
            , y = wave -20 20 20 computer.time
            , z = 60
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ yellowBlocks computer
    ]


yellowBlocks computer =
    let
        delay i =
            0.1 * toFloat i

        wavy i =
            wave 0 1 4 (computer.time + delay i)

        oneBlock i =
            block (hsl (wavy i) 0.6 0.8) ( 1, 3, 1 )
                |> scale (getFloat "a" computer * toFloat i)
                |> moveX (getFloat "a" computer * toFloat i)
                |> rotateY (wavy i)
                |> rotateX (wavy i)
                |> rotateZ (wavy i)
                |> moveX (1.4 * toFloat i)
    in
    group
        (List.range -10 10
            |> List.map oneBlock
        )
