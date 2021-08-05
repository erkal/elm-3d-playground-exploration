module Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, green, hsl, lightBlue, red, rgb)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (spin, wave)
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


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 10, z = 0 }
        , eyePoint = { x = 0, y = 10, z = 30 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera
        , sunlightAzimuth = 0
        , sunlightElevation = 0
        , backgroundColor = lightBlue
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ axes
    , floor
    , cubes computer
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


floor : Shape
floor =
    cylinder (rgb 0.294 0.588 0.478) 30 1
        |> moveY -1.001


makeCube : Computer -> Int -> Shape
makeCube computer i =
    let
        w =
            wave 0.2 0.8 10 computer.time
    in
    block (hsl w 0.5 0.5) ( toFloat i, 1, toFloat i )
        |> moveY (toFloat i * 1.1)
        |> rotateY (0.1 * toFloat i)
        |> rotateY (spin 1000 computer.time)


cubes : Computer -> Shape
cubes computer =
    group
        (List.map (makeCube computer) (List.range 1 18))
