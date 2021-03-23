module Main exposing (main)

import Color exposing (blue, green, hsl, lightBlue, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, cylinder, game, group, line, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, wave)
import Playground3d.Camera as Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    game view update initialModel


type alias Model =
    {}



-- INIT


initialModel : Model
initialModel =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint = { x = 0, y = 5, z = 9 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera
        , backgroundColor = lightBlue
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ floorCubes computer
    , mouseIndicator computer model
    , block blue ( 100, 0.1, 100 ) |> moveY -1

    --, axes
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


floorCubes : Computer -> Shape
floorCubes computer =
    let
        p =
            Camera.mouseOverZX camera computer.screen computer.mouse
                |> Maybe.withDefault { x = 0, y = 0, z = 0 }

        distFromP ( x, z ) =
            sqrt ((p.x - toFloat x) ^ 2 + (p.z - toFloat z) ^ 2)

        floorCube ( x, z ) =
            let
                dist =
                    distFromP ( x, z )

                ( low, high ) =
                    ( -pi, pi )
            in
            group
                [ cylinder
                    (hsl (0.05 * dist) 1 0.75)
                    --( 0.6, 0.3, 0.6 )
                    0.4
                    0.2
                ]
                |> rotateX (0.3 * dist)
                |> rotateY (0.3 * dist)
                |> rotateZ (0.3 * dist)
                |> rotateX (wave low high 6 computer.time)
                |> rotateY (wave low high 6 computer.time)
                |> rotateZ (wave low high 6 computer.time)
                |> moveY (wave -0.5 1 3 computer.time)
                |> moveX (toFloat x)
                |> moveZ (toFloat z)
    in
    group
        (floorCubesCoordinates
            |> List.map floorCube
        )


floorCubesCoordinates =
    cartesianProduct
        (List.range -20 5)
        (List.range -15 15)


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


mouseIndicator : Computer -> Model -> Shape
mouseIndicator computer model =
    case Camera.mouseOverZX camera computer.screen computer.mouse of
        Just p ->
            cylinder (hsl 0 0.75 0.75) 0.1 3
                |> moveX p.x
                |> moveZ p.z

        --|> moveY 1
        Nothing ->
            group []
