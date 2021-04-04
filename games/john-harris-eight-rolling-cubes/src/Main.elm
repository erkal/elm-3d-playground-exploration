module Main exposing (main)

import Color exposing (darkBlue, lightGray, red, white)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), RollDirection(..), Sign(..))
import Ease
import Html exposing (Html, br, div, p, text)
import Html.Attributes exposing (style)
import Playground3d exposing (Computer, Shape, Time, block, configurations, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, passedSecondsAfter, rotateAround, rotateX, rotateY, rotateZ)
import Playground3d.Camera as Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene
import World exposing (RollResult(..), World)



{-
   Eight Rolling Cubes Puzzle from John Harris.
   As in the following book of Martin Gardner:
   "Time Travel and Other Mathematical Bewilderments" (page 118)
-}


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { state : State
    , world : World
    }


type State
    = NoAnimation
    | AnimatingRoll
        { startedAt : Time
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        , newWorld : World
        }



-- INIT


initialConfigurations =
    configurations
        [ ( "camera x", ( -10, 0, 10 ) )
        , ( "camera y", ( -10, 0, 10 ) )
        , ( "camera z", ( 0, 10, 16 ) )
        , ( "sunlight azimuth", ( -pi, 2, pi ) )
        , ( "sunlight elevation", ( -pi, -2, 0 ) )
        , ( "cubes side length", ( 0.5, 0.95, 1 ) )
        , ( "duration of rolling animation", ( 0.1, 0.3, 1 ) )
        ]


init : Computer -> Model
init computer =
    { state = NoAnimation
    , world = World.init
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> handleMouseClick computer
        |> stopRollingAnimation computer


handleMouseClick : Computer -> Model -> Model
handleMouseClick computer model =
    if computer.mouse.click then
        case
            Camera.mouseOverXYAtZ
                (getFloat "cubes side length" computer)
                (camera computer)
                computer.screen
                computer.mouse
        of
            Nothing ->
                model

            Just { x, y } ->
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

    else
        model


stopRollingAnimation : Computer -> Model -> Model
stopRollingAnimation computer model =
    case model.state of
        NoAnimation ->
            model

        AnimatingRoll { startedAt, newWorld } ->
            if passedSecondsAfter startedAt computer.time > getFloat "duration of rolling animation" computer then
                { model
                    | state = NoAnimation
                    , world = newWorld
                }

            else
                model


startRollAnimation : Computer -> ( Int, Int ) -> RollDirection -> World -> Model -> Model
startRollAnimation computer startPosition rollDirection newWorld model =
    { model
        | state =
            AnimatingRoll
                { startedAt = computer.time
                , startPosition = startPosition
                , rollDirection = rollDirection
                , newWorld = newWorld
                }
    }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ style "width" "100%" ]
        [ header
        , viewShapes computer model
        ]


header =
    div
        [ style "position" "absolute"
        , style "width" "100%"
        , style "font-size" "20px"
        , style "text-align" "center"
        ]
        [ p []
            [ text "Eight Rolling Cubes Puzzle"
            , br [] []
            , text "by John Harris"
            ]
        , p [] [ text "Can you make all the red faces look down with the center cell vacant?" ]
        ]


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0.4, z = 0 }
        , eyePoint =
            { x = getFloat "camera x" computer
            , y = getFloat "camera y" computer
            , z = getFloat "camera z" computer
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


viewShapes : Computer -> Model -> Html Never
viewShapes computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = white
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
            lightGray

        bottom =
            block color ( 3, 3, 1 ) |> moveZ -0.5

        leftWall =
            block color ( 0.1, 3.2, 0.2 ) |> moveX -1.55
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

        redHalf =
            block red ( s, s, s / 2 ) |> moveZ (s / 4)

        blackHalf =
            block darkBlue ( s, s, s / 2 ) |> moveZ -(s / 4)

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
                        passedSecondsAfter startedAt computer.time / duration

                    easedDurationRatio =
                        Ease.inOutSine passedDurationRatio

                    rotationDegree =
                        (easedDurationRatio * degrees 90)
                            |> min (degrees 90)
                in
                rotateAround axis rotationDegree

            else
                identity
