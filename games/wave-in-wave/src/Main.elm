module Main exposing (main)

import Color exposing (black, blue, darkGray, gray, green, hsl, lightBlue, red, white)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, block, configurations, gameWithConfigurations, getFloat, group, line, moveX, moveY, moveZ, rotateAround, rotateY, scaleAround, wave, waveWithDelay)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    {}



-- INIT


initialModel : Model
initialModel =
    {}


initialConfigurations =
    configurations
        [ ( "number of blocks", ( 10, 25, 60 ) )
        , ( "frequency", ( 1, 10, 20 ) )
        , ( "minWidth", ( 0, 35, 35 ) )
        , ( "maxWidth", ( 10, 37, 40 ) )
        , ( "period", ( 0.5, 5, 10 ) )
        , ( "lux", ( 2, 5, 5 ) )
        , ( "intensity above", ( 0, 0, 300 ) )
        , ( "intensity below", ( 0, 0, 300 ) )
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
        , backgroundColor = darkGray
        }
        (shapes computer model)


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = 10
            , y = wave -20 20 20 computer.time
            , z = 95
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ wavingBlocks computer
    , block gray ( 300, 1, 300 ) |> moveY -33
    ]


wavingBlocks : Computer -> Shape
wavingBlocks ({ time } as computer) =
    let
        n =
            floor (getFloat "number of blocks" computer)

        color i =
            hsl
                (waveWithDelay
                    (0.004 * period * toFloat i)
                    0
                    1
                    3
                    time
                )
                0.65
                0.7

        dist =
            60 / toFloat n

        frequency =
            getFloat "frequency" computer

        minWidth =
            getFloat "minWidth" computer

        maxWidth =
            getFloat "maxWidth" computer
                |> max minWidth

        period =
            getFloat "period" computer

        xzWaving i =
            waveWithDelay
                (frequency * toFloat i / toFloat n)
                minWidth
                maxWidth
                period
                time

        ithBlock i =
            block (color i)
                ( xzWaving i
                , 0.9 * dist
                , xzWaving i
                )
                |> moveY (toFloat i * dist)
                |> rotateY (0.1 * xzWaving i)
    in
    group
        (List.range -(n // 2) (n // 2)
            |> List.map ithBlock
        )
