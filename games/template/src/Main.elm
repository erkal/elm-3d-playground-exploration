module Main exposing (main)

import Color exposing (blue, green, hsl, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, game, group, line, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    game view update initialModel


type alias Model =
    {}



-- INIT


initialModel : Model
initialModel =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 4, z = 8 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ group
        [ shelf computer
        ]
    , axes

    --|> rotateY (spin 1000 computer.time)
    ]


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
    block color ( 1.5, 1.75, 1 )
