module Main exposing (main)

import Color exposing (blue, green, hsl, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, game, group, line, moveY, rotateY, spin, toX, toXY, toY, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    game
        view
        update
        initialModel


type alias Model =
    { x : Float
    , y : Float
    , z : Float
    }



-- INIT


initialModel : Model
initialModel =
    { x = 0
    , y = 2
    , z = 10
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    { model
        | x = model.x + 0.1 * toX computer.keyboard
        , z = model.z - 0.1 * toY computer.keyboard
    }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = model.x, y = 2, z = model.z - 10 }
                , eyePoint = { x = model.x, y = model.y, z = model.z }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 45)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ floor
    , shelf computer
    , axes
    ]


floor : Shape
floor =
    block white ( 30, 2, 30 ) |> moveY -1


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


shelf : Computer -> Shape
shelf computer =
    let
        color =
            hsl (wave 0 1 10 computer.time) 0.8 0.8
    in
    block color ( 1.5, 2, 1 )
        |> moveY 1
