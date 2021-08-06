module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (blue, gray, green, hsl, orange, red, rgb255)
import Html exposing (Html)
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getColor, getFloat, toX, toY)
import Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { x : Float
    , z : Float
    , vx : Float
    , vz : Float
    }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) (pi / 2)
        ]
    , configBlock "Color"
        True
        [ colorConfig "cube color" (hsl 0 0.36 0.5)
        ]
    ]


init : Computer -> Model
init computer =
    { x = 0
    , z = 0
    , vx = 0
    , vz = 0
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> handlePlayerInput computer
        |> physics computer


handlePlayerInput : Computer -> Model -> Model
handlePlayerInput computer model =
    { model
        | vx = model.vx + 0.05 * toX computer.keyboard
        , vz = model.vz - 0.05 * toY computer.keyboard
    }


physics : Computer -> Model -> Model
physics computer model =
    { model
        | x = model.x + 0.16 * model.vx
        , z = model.z + 0.16 * model.vz
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
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
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
    block gray ( 10, 1, 10 )
        |> moveY -0.5


drawPlayer : Computer -> Model -> Shape
drawPlayer computer model =
    let
        playerBall =
            sphere (getColor "cube color" computer) 0.5

        ( length, rotation ) =
            toPolar ( model.vx, model.vz )

        speedVector =
            cylinder orange 0.1 (2 * length)
                |> moveY length
                |> rotateZ -(degrees 90)
                |> rotateY -rotation
    in
    group
        [ speedVector
        , playerBall
        ]
        |> moveY 0.5
        |> moveX model.x
        |> moveZ model.z
