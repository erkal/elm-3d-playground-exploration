module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, blue, darkGray, gray, green, hsl, lightBlue, lightGray, orange, red, rgb255, white, yellow)
import Geometry exposing (Point, Vector, addVector, scaleBy, translateBy)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getColor, getFloat, toX, toXY, toY)
import Playground.Light as Light
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    Ball


type alias Ball =
    { position : Point
    , speed : Vector
    , -- in radians
      rotationFromXAxis : Float
    , -- in radians per second
      rotationSpeed : Float
    , -- in radians
      rotation : Float
    }


initialBall : Ball
initialBall =
    { position = Point 0 0 0
    , speed = ( 0, 0, 0 )
    , rotationFromXAxis = 0
    , rotationSpeed = 0
    , rotation = 0
    }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.6
        ]
    , configBlock "Color"
        True
        [ colorConfig "floor color" white
        ]
    ]


init : Computer -> Model
init computer =
    initialBall



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> handleArrowKeys computer
        |> physics computer 0.16


handleArrowKeys : Computer -> Model -> Model
handleArrowKeys computer model =
    { model
        | rotationFromXAxis = model.rotationFromXAxis + 0.1 * toX computer.keyboard
        , rotationSpeed = toY computer.keyboard
    }


physics : Computer -> Float -> Model -> Model
physics computer dt model =
    { model
        | position = model.position |> translateBy (scaleBy dt model.speed)
        , rotation = model.rotation + dt * model.rotationSpeed
    }



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
    viewGame computer model


viewGame : Computer -> Model -> Html Never
viewGame computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 1 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 1 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 120
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
        , backgroundColor = rgb255 46 46 46
        }
        [ drawAxes
        , drawFloor computer
        , drawPlayer computer model
        ]


drawAxes : Shape
drawAxes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawFloor : Computer -> Shape
drawFloor computer =
    block (getColor "floor color" computer) ( 10, 1, 10 )
        |> moveY -0.5


drawPlayer : Computer -> Model -> Shape
drawPlayer computer model =
    let
        playerBall =
            group
                [ group
                    [ sphere red 0.5 |> moveX -0.02
                    , sphere yellow 0.5 |> moveX 0.02
                    ]
                    |> rotateZ -model.rotation
                , group
                    [ sphere yellow 0.3 |> moveX -0.06
                    , sphere red 0.3 |> moveX 0.06
                    ]
                    |> moveY 1
                , cylinder black 0.1 0.8 |> rotateZ (degrees 90) |> moveX 0.4 |> moveZ 0.6
                , cylinder black 0.1 0.8 |> rotateZ (degrees 90) |> moveX 0.4 |> moveZ -0.6
                , cylinder darkGray 0.2 1.4 |> rotateX (degrees 90)
                ]
                |> rotateY model.rotationFromXAxis

        ( vx, _, vz ) =
            model.speed

        ( speedLength, speedRot ) =
            toPolar ( vx, vz )

        speedVector =
            cylinder red 0.2 (2 * speedLength)
                |> moveY speedLength
                |> rotateZ -(degrees 90)
                |> rotateY -speedRot
                |> moveY 0.6
    in
    group
        [ speedVector
        , playerBall
        ]
        |> moveY 0.5
        |> moveX model.position.x
        |> moveZ model.position.z
