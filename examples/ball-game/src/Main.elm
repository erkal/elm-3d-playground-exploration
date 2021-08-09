module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, blue, darkGray, gray, green, hsl, lightBlue, lightGray, orange, red, rgb255, white, yellow)
import Geometry exposing (Point, Vector, addVector, dotProduct, scaleBy, translateBy)
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
    { camera : Camera
    , ball : Ball
    }


type alias Ball =
    { position : Point
    , speed : Vector
    , -- in radians
      directionFromXAxis : Float
    , -- in radians per second
      rotationSpeed : Float
    , -- in radians
      rotation : Float
    }


initialBall : Ball
initialBall =
    { position = Point 0 0 0
    , speed = ( 0, 0, 0 )
    , directionFromXAxis = 0
    , rotationSpeed = 0
    , rotation = 0
    }


directionAsVector : Ball -> Vector
directionAsVector ball =
    let
        ( x, z ) =
            fromPolar ( 1, -ball.directionFromXAxis )
    in
    ( x, 0, z )



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.6
        ]
    , configBlock "Physics Parameters"
        True
        [ floatConfig "gas force" ( 0.005, 0.08 ) 0.04
        , floatConfig "friction" ( 0.9, 1 ) 0.97
        ]
    , configBlock "Color"
        True
        [ colorConfig "floor color" white
        ]
    ]


init : Computer -> Model
init computer =
    { camera =
        perspectiveWithOrbit
            { focalPoint = { x = 0, y = 0, z = 0 }
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , distance = getFloat "camera distance" computer
            }
    , ball = initialBall
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    { model
        | ball =
            model.ball
                |> handleArrowKeys computer
                |> friction computer 0.16
                |> physics computer 0.16
                |> gravity computer 0.16
                |> floor computer 0.16
        , camera =
            perspectiveWithOrbit
                { focalPoint = Point model.ball.position.x 0 model.ball.position.z
                , azimuth = getFloat "camera azimuth" computer
                , elevation = getFloat "camera elevation" computer
                , distance = getFloat "camera distance" computer
                }
    }


handleArrowKeys : Computer -> Ball -> Ball
handleArrowKeys computer ball =
    let
        direction =
            directionAsVector ball

        giveGas =
            if ball.position.y == 0 then
                addVector
                    (scaleBy
                        (getFloat "gas force" computer * toY computer.keyboard)
                        direction
                    )

            else
                identity

        jump =
            if ball.position.y == 0 && computer.keyboard.space then
                addVector ( 0, 1.5, 0 )

            else
                identity
    in
    { ball
        | directionFromXAxis = ball.directionFromXAxis - 0.04 * toX computer.keyboard
        , rotationSpeed =
            if toY computer.keyboard == 0 then
                dotProduct ball.speed direction

            else
                ball.rotationSpeed + 0.1 * toY computer.keyboard |> clamp -2 2
        , speed = ball.speed |> giveGas |> jump
    }


friction : Computer -> Float -> Ball -> Ball
friction computer dt ball =
    { ball
        | speed = ball.speed |> scaleBy (getFloat "friction" computer)
    }


gravity : Computer -> Float -> Ball -> Ball
gravity computer dt ball =
    { ball
        | speed =
            ball.speed |> addVector ( 0, -0.5 * dt, 0 )
    }


floor : Computer -> Float -> Ball -> Ball
floor computer dt ball =
    if ball.position.y < 0 then
        { ball
            | position = Point ball.position.x 0 ball.position.z
            , speed = ball.speed |> (\( vx, vy, vz ) -> ( vx, 0, vz ))
        }

    else
        ball


physics : Computer -> Float -> Ball -> Ball
physics computer dt ball =
    { ball
        | position = ball.position |> translateBy (scaleBy dt ball.speed)
        , rotation = ball.rotation + dt * ball.rotationSpeed
    }



-- VIEW


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
        , camera = model.camera
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
                    |> rotateZ -model.ball.rotation
                , cylinder black 0.1 0.8
                    |> rotateZ (degrees 90)
                    |> moveX 0.4
                    |> moveZ 0.6
                , cylinder black 0.1 0.8
                    |> rotateZ (degrees 90)
                    |> moveX 0.4
                    |> moveZ -0.6
                , cylinder darkGray 0.2 1.4
                    |> rotateX (degrees 90)
                ]
                |> rotateY model.ball.directionFromXAxis

        ( vx, _, vz ) =
            model.ball.speed

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
        [ playerBall

        -- , speedVector
        ]
        |> moveY 0.5
        |> moveX model.ball.position.x
        |> moveY model.ball.position.y
        |> moveZ model.ball.position.z
