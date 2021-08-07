module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (black, blue, gray, green, hsl, lightBlue, lightGray, orange, red, rgb255, white)
import Geometry exposing (Point, Vector, addVector, scaleBy, translateBy)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getAxis, getColor, getFloat)
import Playground.Light as Light
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurations view update initialConfigurations initialInputConfiguration init


type alias Model =
    Ball


type alias Ball =
    { position : Point
    , speed : Vector
    , acceleration : Vector
    }


initialBall : Ball
initialBall =
    { position = Point 0 0 0
    , speed = ( 0, 0, 0 )
    , acceleration = ( 0, 0, 0 )
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


initialInputConfiguration =
    [ ( "horizontal"
      , { description = "for horizontal movement"
        , positiveButton = "d"
        , negativeButton = "a"
        , gravity = 1
        , dead = 0.01
        , sensitivity = 1
        , snap = True
        }
      )
    , ( "horizontal"
      , { description = "for horizontal movement"
        , positiveButton = "ArrowRight"
        , negativeButton = "ArrowLeft"
        , gravity = 1
        , dead = 0.01
        , sensitivity = 1
        , snap = True
        }
      )
    , ( "vertical"
      , { description = "for vertical movement"
        , positiveButton = "s"
        , negativeButton = "w"
        , gravity = 1
        , dead = 0.01
        , sensitivity = 1
        , snap = True
        }
      )
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
    let
        x =
            getAxis "horizontal" computer

        z =
            getAxis "vertical" computer
    in
    if x /= 0 || z /= 0 then
        { model
            | acceleration =
                model.acceleration
                    |> addVector (scaleBy 0.001 ( x, 0, z ))
        }

    else
        model


physics : Computer -> Float -> Model -> Model
physics computer dt model =
    let
        newSpeed =
            model.speed |> addVector (scaleBy dt model.acceleration)
    in
    { model
        | speed = newSpeed
        , position = model.position |> translateBy (scaleBy dt newSpeed)
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
        ( fx, fy, fz ) =
            model.acceleration

        ( accelerationLength, accelerationRot ) =
            toPolar ( fx, -fz )

        playerBall =
            group
                [ sphere red 0.5 |> moveX -0.01
                , sphere black 0.5 |> moveX 0.01
                ]
                |> rotateY accelerationRot

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
