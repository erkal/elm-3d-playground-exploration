module JohnHarrisEightRollingCubes.Main exposing (main)

import Camera exposing (Camera, perspective, perspectiveWithOrbit)
import Color exposing (rgb255, rgba)
import Html exposing (Html, br, div, p, text)
import Html.Attributes exposing (class, style)
import JohnHarrisEightRollingCubes.Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), RollDirection(..), Sign(..))
import JohnHarrisEightRollingCubes.World as World exposing (RollResult(..), World)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)



{-
   Eight Rolling Cubes Puzzle from John Harris.
   As in the following book of Martin Gardner:
   "Time Travel and Other Mathematical Bewilderments" (page 118)
-}


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
    { state : State
    , world : World
    }


type State
    = NoAnimation
    | AnimatingRoll
        { startedAt : Float
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        , newWorld : World
        }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 20 ) 10
        , floatConfig "camera azimuth" ( -pi, pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "cubes side length" ( 0.5, 1 ) 0.9
        , floatConfig "duration of rolling animation" ( 0.1, 1 ) 0.25
        ]
    , configBlock "Colors and light"
        True
        [ colorConfig "color 1" (rgb255 244 88 67)
        , colorConfig "color 2" (rgb255 47 41 43)
        , colorConfig "board color" (rgb255 223 224 226)
        , floatConfig "sunlight azimuth" ( -pi, pi ) 2
        , floatConfig "sunlight elevation" ( -pi, 0 ) -2
        ]
    ]


init : Computer -> Model
init computer =
    { state = NoAnimation
    , world = World.init
    }



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model
        |> handlePointerInput computer
        |> stopRollingAnimation computer


handlePointerInputAt : { a | x : Float, y : Float } -> Computer -> Model -> Model
handlePointerInputAt { x, y } computer model =
    let
        startPosition =
            ( round x, round y )
    in
    case model.world |> World.rollCubeAt startPosition of
        NoCubeThere ->
            model

        CannotRoll ->
            model

        Roll rollDirection newWorld ->
            model
                |> startRollAnimation computer startPosition rollDirection newWorld


handlePointerInput : Computer -> Model -> Model
handlePointerInput computer model =
    if computer.pointer.isDown then
        case
            Camera.mouseOverXYAtZ
                (getFloat "cubes side length" computer)
                (camera computer)
                computer.screen
                computer.pointer
        of
            Nothing ->
                model

            Just xy ->
                handlePointerInputAt xy computer model

    else
        model


stopRollingAnimation : Computer -> Model -> Model
stopRollingAnimation computer model =
    case model.state of
        NoAnimation ->
            model

        AnimatingRoll { startedAt, newWorld } ->
            if computer.clock - startedAt > getFloat "duration of rolling animation" computer then
                { model
                    | state = NoAnimation
                    , world = newWorld
                }

            else
                model


startRollAnimation : Computer -> ( Int, Int ) -> RollDirection -> World -> Model -> Model
startRollAnimation computer startPosition rollDirection newWorld model =
    case model.state of
        NoAnimation ->
            { model
                | state =
                    AnimatingRoll
                        { startedAt = computer.clock
                        , startPosition = startPosition
                        , rollDirection = rollDirection
                        , newWorld = newWorld
                        }
            }

        _ ->
            model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ style "width" "100%" ]
        [ header
        , viewShapes computer model
        ]


header =
    div
        [ class "absolute w-full text-center"
        ]
        [ div [ class "font-bold pt-2 text-lg" ]
            [ text "Eight Rolling Cubes Puzzle"
            , br [] []
            , text "by John Harris"
            ]
        , p [] [ text "Can you make all the red faces look down" ]
        , p [] [ text " with the center cell vacant?" ]
        ]


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


viewShapes : Computer -> Model -> Html Never
viewShapes computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgba 0 0 0 0
        , sunlightAzimuth = getFloat "sunlight azimuth" computer
        , sunlightElevation = getFloat "sunlight elevation" computer
        }
        [ board computer
        , drawCubes computer model
        ]


board : Computer -> Shape
board computer =
    let
        color =
            getColor "board color" computer

        bottom =
            block (matte color) ( 3, 3, 1 ) |> moveZ -0.5

        leftWall =
            block (matte color) ( 0.1, 3.2, 0.2 ) |> moveX -1.55
    in
    group
        [ leftWall
        , leftWall |> rotateZ (degrees 90)
        , leftWall |> rotateZ (degrees 180)
        , leftWall |> rotateZ (degrees 270)
        , bottom

        --, block white ( 4, 4, 1 ) |> moveZ -0.51
        ]


drawCubes : Computer -> Model -> Shape
drawCubes computer model =
    group
        (model.world
            |> List.map (drawCube computer model)
        )


drawCube : Computer -> Model -> Cube -> Shape
drawCube computer model (Cube ( x, y ) redFaceDirection) =
    let
        s =
            getFloat "cubes side length" computer

        color1 =
            getColor "color 1" computer

        color2 =
            getColor "color 2" computer

        redHalf =
            block (matte color1) ( s, s, s / 2 ) |> moveZ (s / 4)

        blackHalf =
            block (matte color2) ( s, s, s / 2 ) |> moveZ -(s / 4)

        positionWithRedFaceDirection =
            case redFaceDirection of
                RedFaceDirection Z Positive ->
                    identity

                RedFaceDirection Z Negative ->
                    rotateX (degrees 180)

                RedFaceDirection Y Positive ->
                    rotateX -(degrees 90)

                RedFaceDirection Y Negative ->
                    rotateX (degrees 90)

                RedFaceDirection X Positive ->
                    rotateY (degrees 90)

                RedFaceDirection X Negative ->
                    rotateY -(degrees 90)
    in
    group
        [ redHalf
        , blackHalf
        ]
        |> positionWithRedFaceDirection
        |> rollingAnimation computer model ( x, y )
        |> moveZ (s / 2)
        |> moveX (toFloat x)
        |> moveY (toFloat y)


rollingAnimation : Computer -> Model -> ( Int, Int ) -> (Shape -> Shape)
rollingAnimation computer model pos =
    case model.state of
        NoAnimation ->
            identity

        AnimatingRoll { startedAt, startPosition, rollDirection, newWorld } ->
            if startPosition == pos then
                let
                    axis =
                        case rollDirection of
                            Up ->
                                ( { x = 0.5, y = 0.5, z = -0.5 }, ( -1, 0, 0 ) )

                            Down ->
                                ( { x = -0.5, y = -0.5, z = -0.5 }, ( 1, 0, 0 ) )

                            Left ->
                                ( { x = -0.5, y = 0.5, z = -0.5 }, ( 0, -1, 0 ) )

                            Right ->
                                ( { x = 0.5, y = -0.5, z = -0.5 }, ( 0, 1, 0 ) )

                    duration =
                        getFloat "duration of rolling animation" computer

                    passedDurationRatio =
                        (computer.clock - startedAt) / duration

                    easedDurationRatio =
                        --Ease.inOutSine
                        passedDurationRatio

                    rotationDegree =
                        (easedDurationRatio * degrees 90)
                            |> min (degrees 90)
                in
                rotateAround axis rotationDegree

            else
                identity
