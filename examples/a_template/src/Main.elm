module Main exposing (main)

import Color exposing (blue, gray, green, red, rgb255)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Camera exposing (Camera, perspective)
import Scene as Scene exposing (..)


main =
    game view update init


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Model -> Model
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
    block gray ( 1, 1, 1 )
        |> scale (wave 1 2 14 computer.time)
        |> rotateX (wave 1 10 30 computer.time)
        |> rotateY (wave 1 10 30 computer.time)
        |> rotateZ (wave 1 10 30 computer.time)
