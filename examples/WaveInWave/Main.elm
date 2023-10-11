module WaveInWave.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (darkGray, gray, hsl)
import Html exposing (Html)
import Illuminance
import Light
import LuminousFlux
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material exposing (matte)
import Temperature
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


initialConfigurations =
    [ configBlock "Parameters"
        True
        [ intConfig "number of blocks" ( 10, 60 ) 25
        , floatConfig "frequency" ( 1, 20 ) 10
        , floatConfig "minWidth" ( 0, 45 ) 35
        , floatConfig "maxWidth" ( 10, 50 ) 37
        , floatConfig "period" ( 0.5, 10 ) 5
        ]
    , configBlock "Colors and light"
        True
        [ floatConfig "lux" ( 2, 5 ) 5
        , floatConfig "intensity above" ( 0, 300 ) 0
        , floatConfig "intensity below" ( 0, 300 ) 0
        ]
    ]



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
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
        , backgroundColor = darkGray
        }
        (shapes computer model)


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = 10
            , y = wave -20 20 20 computer.clock
            , z = 145
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ wavingBlocks computer
    , block (matte gray) ( 300, 1, 300 ) |> moveY -33
    ]


wavingBlocks : Computer -> Shape
wavingBlocks computer =
    let
        n =
            getInt "number of blocks" computer

        delayForColor i =
            0.004 * period * toFloat i

        color i =
            hsl (wave 0 1 3 (computer.clock + delayForColor i)) 0.65 0.7

        dist =
            80 / toFloat n

        frequency =
            getFloat "frequency" computer

        minWidth =
            getFloat "minWidth" computer

        maxWidth =
            getFloat "maxWidth" computer
                |> max minWidth

        period =
            getFloat "period" computer

        delayForXzWaving i =
            frequency * toFloat i / toFloat n

        xzWaving i =
            wave minWidth maxWidth period (computer.clock + delayForXzWaving i)

        ithBlock i =
            block (matte (color i))
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
