module Main exposing (main)

import Camera exposing (Camera, perspective)
import CodeGraph exposing (CodeGraph, NodeName)
import Color exposing (blue, gray, green, red, rgb255)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    game view update init


type alias Model =
    CodeGraph Node Link


{-|

    All the data will be on edges.
    Nodes won't carry information.

-}
type Node
    = Variable VariableType
    | Modification ModificationType


type VariableType
    = Reference
    | Group
    | Number Float
    | Line
    | Circle
    | Rectangle


type ModificationType
    = AddTo
    | RotateBy
    | MultiplyBy
    | ScaleAround
    | SnapToRatioOnLine
    | Sin
    | Cos


type Link
    = Reference_To
    | Group_ElementWithIndex Int
    | Line_StartsAt
    | Line_EndsAt



-- INIT


init : Computer -> Model
init computer =
    CodeGraph.empty



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateTime computer


updateTime : Computer -> Model -> Model
updateTime computer model =
    -- TODO
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
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ axes
    , wavingCube computer
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


wavingCube : Computer -> Shape
wavingCube computer =
    block (matte gray) ( 1, 1, 1 )
        |> scale (wave 1 2 14 computer.time)
        |> rotateX (wave 1 10 30 computer.time)
        |> rotateY (wave 1 10 30 computer.time)
        |> rotateZ (wave 1 10 30 computer.time)
