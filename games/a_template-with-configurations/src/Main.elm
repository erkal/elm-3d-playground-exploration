module Main exposing (main)

import Color exposing (blue, gray, rgb255, white)
import Html exposing (Html)
import Playground3d exposing (Computer, floatConfig, gameWithConfigurations, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 8 ) 4
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
    ]


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
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ wavingCube computer
        , wavingCube computer |> moveX -2
        , wavingCube computer |> moveX 2
        ]


wavingCube : Computer -> Shape
wavingCube computer =
    block gray ( 1, 1, 1 )
        |> scale (wave 1 1.1 1 computer.time)
