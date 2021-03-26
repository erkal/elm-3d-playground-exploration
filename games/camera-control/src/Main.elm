module Main exposing (main)

import Color exposing (blue, green, hsl, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Mouse, Shape, block, cube, game, group, line, moveY, toX, toY, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point, Vector, translateBy)
import Playground3d.Scene as Scene


main =
    game view update init


type alias Model =
    { cameraPosition : Point
    , lookingDirection : Vector
    }



-- INIT


init : Computer -> Model
init computer =
    { lookingDirection = ( 0, 0, -1 )
    , cameraPosition = Point 0 3 10
    }



-- UPDATE


update : Computer -> Model -> Model
update ({ keyboard } as computer) model =
    { model
        | lookingDirection = model.lookingDirection
        , cameraPosition = model.cameraPosition |> translateBy ( 0.1 * toX keyboard, 0, -0.1 * toY keyboard )
    }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = model.cameraPosition |> translateBy model.lookingDirection
                , eyePoint = model.cameraPosition
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


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


floor : Shape
floor =
    block white ( 30, 2, 30 )
        |> moveY -1


shelf : Computer -> Shape
shelf computer =
    let
        color =
            hsl (wave 0 1 10 computer.time) 0.8 0.8
    in
    cube color 2
        |> moveY 1
