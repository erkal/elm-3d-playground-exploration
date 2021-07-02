module Main exposing (main)

import Color exposing (black, blue, hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, configurations, gameWithConfigurations, getFloat, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera x", ( -40, 0, 40 ) )
        , ( "camera y", ( -40, 0, 40 ) )
        , ( "camera z", ( -40, 16, 40 ) )
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
                , eyePoint =
                    { x = getFloat "camera x" computer
                    , y = getFloat "camera y" computer
                    , z = getFloat "camera z" computer
                    }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ block white ( 40, 40, 1 ) |> moveZ -4
        , allShapes computer |> moveZ -0.5
        ]


makeUnit : Computer -> ( Int, Int ) -> Shape
makeUnit computer ( x, y ) =
    let
        duration =
            20

        bouncyRotate shape =
            shape
                |> rotateX (wave 0 rotDegree duration computer.time)

        twoBlock =
            group
                [ triangleBlock computer
                    |> moveY (1 / 2 + sqrt 3 / 6)
                    |> rotateZ (degrees 90)
                , squareBlock computer
                ]
                |> bouncyRotate

        rotateAroundHexagonCenter angle shape =
            shape
                |> moveY -((1 + sqrt 3) / 2)
                |> rotateZ angle
                |> moveY ((1 + sqrt 3) / 2)

        squareBlockOnRight =
            squareBlock computer
                |> bouncyRotate
                |> moveY ((1 + sqrt 3) / 2)
                |> moveX ((3 + sqrt 3) / 2)

        squareBlockOnLeft =
            squareBlock computer
                |> bouncyRotate
                |> rotateAroundHexagonCenter (degrees 240)

        rotDegree =
            pi
    in
    group
        [ twoBlock
        , twoBlock |> rotateAroundHexagonCenter (degrees 60)
        , twoBlock |> rotateAroundHexagonCenter (degrees 120)
        , twoBlock |> rotateAroundHexagonCenter -(degrees 60)
        , squareBlockOnRight
        , squareBlockOnLeft
        ]
        |> rotateX (wave 0 rotDegree duration computer.time)
        |> rotateY (wave 0 rotDegree duration computer.time)
        |> moveX (toFloat x * (3 + sqrt 3))
        |> moveY (toFloat y * (1 + sqrt 3))
        |> moveZ (wave -1 1 7 computer.time)


allShapes : Computer -> Shape
allShapes computer =
    group
        (cartesianProduct
            (List.range -1 1)
            (List.range -1 1)
            |> List.map (makeUnit computer)
        )


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


squareBlock : Computer -> Shape
squareBlock computer =
    cube (color computer) 1


color computer =
    hsl
        (wave 0 1 7 computer.time)
        0.8
        0.8


triangleBlock : Computer -> Shape
triangleBlock computer =
    let
        t =
            triangle (color computer)
                ( { x = 0, y = 0, z = 0 }
                , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
                , { x = 0, y = 1, z = 0 }
                )
                |> rotateZ -(degrees 30)
                |> moveX -0.5
                |> moveY -(sqrt 3 / 6)

        side =
            block (color computer) ( 1, 0.00000001, 1 )
                |> moveY -(sqrt 3 / 6)
    in
    group
        [ t |> moveZ -0.5
        , t |> moveZ 0.5
        , side
        , side |> rotateZ (degrees 120)
        , side |> rotateZ (degrees 240)
        ]
