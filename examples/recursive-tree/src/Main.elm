module Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, gray, hsl, lightBlue)
import Html exposing (Html)
import Playground exposing (Computer, configBlock, floatConfig, gameWithConfigurations, getFloat)
import Playground.Animation exposing (spin, wave)
import Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ configBlock "Parameters"
        True
        [ floatConfig "s" ( 1, 2 ) 1.5
        , floatConfig "t" ( 1, 2 ) 1.5
        ]
    ]


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
        { focalPoint = { x = 0, y = 3, z = 0 }
        , eyePoint = { x = 5, y = 12, z = 15 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 4, z = 0 }
                , eyePoint = { x = 0, y = 15, z = 18 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = lightBlue
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ group
        [ floor
        , recursiveTree computer 2 2 (getFloat "s" computer) (getFloat "t" computer) 5
        ]
        |> rotateY (spin 1000 computer.time)
    ]


floor : Shape
floor =
    let
        square color =
            block color ( 10, 1, 10 )
                |> moveY -1

        octaThing color =
            group
                [ square color
                , square color |> rotateY (degrees 45)
                ]
    in
    group
        [ octaThing gray
        , octaThing blue |> scale 1.1 |> moveY -0.1
        , octaThing gray |> scale 1.2 |> moveY -0.2
        ]


recursiveTree : Computer -> Float -> Float -> Float -> Float -> Int -> Shape
recursiveTree computer w h s t n =
    let
        hypotenuse e f =
            sqrt (e ^ 2 + f ^ 2)

        ( wLeft, wRight ) =
            ( hypotenuse s t
            , hypotenuse (w - s) t
            )

        wavyColor i =
            hsl (wave (toFloat i / 6) 1 10 computer.time) 0.6 0.6

        baseRect =
            block (wavyColor n) ( w, h, h )

        children =
            if n == 0 then
                []

            else
                [ recursiveTree computer w h s t (n - 1)
                    |> scale 0.86
                    |> rotateY (wave -2 2 8 computer.time)
                    |> moveX (w / 2)
                    |> moveY (h / 2)
                    |> rotateZ (atan2 t s)
                    |> scale (wLeft / w)
                    |> moveX -(w / 2)
                    |> moveY (h / 2)
                , recursiveTree computer w h s t (n - 1)
                    |> scale 0.86
                    |> rotateY (wave 2 -2 8 (pi + computer.time))
                    |> moveX -(w / 2)
                    |> moveY (h / 2)
                    |> rotateZ -(atan2 t (w - s))
                    |> scale (wRight / w)
                    |> moveX (w / 2)
                    |> moveY (h / 2)
                ]
    in
    group (baseRect :: children)
