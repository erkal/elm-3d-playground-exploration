module Main exposing (main)

import Color exposing (blue, white)
import Html exposing (Html)
import Playground3d exposing (Computer, configurations, gameWithConfigurations, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 20, 60 ) )
        , ( "camera azimuth", ( 0, 0, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.5, pi / 2 ) )
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
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ myCube computer ]


myCube : Computer -> Shape
myCube { time } =
    cube blue 4



--|> rotateY (wave -pi pi 7 time)
