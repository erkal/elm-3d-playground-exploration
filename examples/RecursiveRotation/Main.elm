module RecursiveRotation.Main exposing (main)

import Camera exposing (Camera, orthographic)
import Color exposing (rgb255, rgba, white)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (spin)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera height" ( 1.4, 1.57 ) 1.57
        ]
    ]


init : Computer -> Model
init _ =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update _ _ model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    orthographic
        { focalPoint = { x = 0, y = 2, z = 0 }
        , azimuth = getFloat "camera height" computer
        , elevation = getFloat "camera height" computer
        , viewportHeight = 2
        }


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgba 0 0 0 0.7
        , sunlightAzimuth = degrees 90
        , sunlightElevation = -(degrees 180)
        }
        [ twentyBlocks computer
        ]


twentyBlocks : Computer -> Shape
twentyBlocks computer =
    helper computer 20


helper : Computer -> Int -> Shape
helper computer i =
    let
        angle =
            degrees (spin 8 computer.clock) / 4

        scaling =
            0.707 / cos (pi / 4 - angle)

        color =
            if modBy 2 i == 0 then
                rgb255 17 147 216

            else
                white
    in
    if i == 0 then
        group []

    else
        group
            [ cube (matte color) 1
            , helper computer (i - 1)
                |> scale scaling
                |> rotateY angle
                |> moveY 0.3
            ]
