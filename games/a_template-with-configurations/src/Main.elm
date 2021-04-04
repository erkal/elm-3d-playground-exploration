module Main exposing (main)

import Color exposing (hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, rotateY)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "hue", ( 0, 0.5, 1 ) )
        , ( "saturation", ( 0, 0.5, 1 ) )
        , ( "lightness", ( 0, 0.5, 1 ) )
        , ( "rotation", ( 0, 0, 2 * pi ) )
        ]
        []


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
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ myCube computer ]


myCube : Computer -> Shape
myCube computer =
    let
        color =
            hsl
                (getFloat "hue" computer)
                (getFloat "saturation" computer)
                (getFloat "lightness" computer)
    in
    cube color 4
        |> rotateY (getFloat "rotation" computer)
