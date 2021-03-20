module Main exposing (main)

import Color exposing (hsl, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateY, rotateZ, triangle, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "hue", ( 0, 0.8, 1 ) )
        , ( "saturation", ( 0, 0.8, 1 ) )
        , ( "lightness", ( 0, 0.7, 1 ) )
        ]


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
                , eyePoint = { x = 1, y = 3, z = 4 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ triangleBlock computer
            |> moveY (1 / 2 + sqrt 3 / 6)
        , squareBlock computer
        ]


squareBlock : Computer -> Shape
squareBlock computer =
    cube white 1



--|> moveX 0.5


triangleBlock : Computer -> Shape
triangleBlock computer =
    let
        t =
            triangle white
                ( { x = 0, y = 0, z = 0 }
                , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
                , { x = 0, y = 1, z = 0 }
                )
                |> rotateZ -(degrees 30)
                |> moveX -0.5
                |> moveY -(sqrt 3 / 6)

        side =
            block white ( 1, 0.00000001, 1 )
                |> moveY -(sqrt 3 / 6)
    in
    group
        [ t |> moveZ -0.5
        , t |> moveZ 0.5
        , side
        , side |> rotateZ (degrees 120)
        , side |> rotateZ (degrees 240)
        ]
