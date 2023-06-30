module Template exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, gray, green, red, rgb255)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    game view update init


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}



-- UPDATE


update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 4, z = 8 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ axes
    , wavingCube computer
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


wavingCube : Computer -> Shape
wavingCube computer =
    block (matte (Color.hsl (wave 0 1 30 computer.clock) 0.4 0.4)) ( 1, 1, 1 )
        |> scale (wave 1 2 14 computer.clock)
        |> rotateX (wave 1 10 30 computer.clock)
        |> rotateY (wave 1 10 30 computer.clock)
        |> rotateZ (wave 1 10 30 computer.clock)
