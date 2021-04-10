module Main exposing (main)

import Cell exposing (Cell, RollDirection(..))
import Color exposing (blue, green, hsl, red, rgb255, white)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Ease
import Html exposing (Html, br, div, h2, p, span, text)
import Html.Attributes exposing (style)
import Illuminance
import LuminousFlux
import Path exposing (Path)
import Playground3d exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Geometry exposing (Point, Vector)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Swipe exposing (Swipe)
import Temperature
import Wall exposing (Wall(..), WallDirection(..))
import World exposing (RestrictionRule(..), RollResult(..), World)



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
    , swipe : Swipe
    }


type State
    = NoAnimation
    | CongratulationsAnimation { startedAt : Time }
    | AnimatingRoll
        { startedAt : Time
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        , newWorld : World
        }
    | AnimatingMistake
        { startedAt : Time
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        }



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 20, 60 ) )
        , ( "camera azimuth", ( -pi, 0, pi ) )
        , ( "camera elevation", ( -pi / 2, -0.15, pi / 2 ) )
        , ( "cubes side length", ( 0.5, 0.95, 1 ) )
        , ( "duration of step animation", ( 0.1, 0.23, 1 ) )
        , ( "duration of mistake animation", ( 0.1, 0.5, 1 ) )
        , ( "height of following lights", ( 0.1, 5, 8 ) )
        , ( "lumens of following lights", ( 40000, 100000, 120000 ) )
        ]
        [ ( "background color", rgb255 223 224 226 )
        , ( "color 1", rgb255 244 88 67 )
        , ( "color 2", rgb255 255 200 40 )
        , ( "path color", rgb255 244 88 67 )
        , ( "board color", rgb255 165 166 169 )
        , ( "wall color", rgb255 38 48 64 )
        ]


init : Computer -> Model
init computer =
    { state = NoAnimation
    , world = World.init { start = ( -4, 3 ) }
    , swipe = Swipe.init
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateSwipe computer
        |> handleKeyboardInput computer
        |> handleSwipeInput computer
        |> stopAnimation computer
        |> startCongratulationsAnimation computer


updateSwipe : Computer -> Model -> Model
updateSwipe computer model =
    { model | swipe = Swipe.update computer { threshold = 20 } model.swipe }


handleKeyboardInput : Computer -> Model -> Model
handleKeyboardInput ({ keyboard } as computer) model =
    let
        (Cube startCell _) =
            model.world.cube

        maybeRollDirection =
            case [ keyboard.up, keyboard.down, keyboard.left, keyboard.right ] of
                [ True, False, False, False ] ->
                    Just Up

                [ False, True, False, False ] ->
                    Just Down

                [ False, False, True, False ] ->
                    Just Left

                [ False, False, False, True ] ->
                    Just Right

                _ ->
                    Nothing
    in
    case maybeRollDirection of
        Nothing ->
            model

        Just rollDirection ->
            attemptRollTo rollDirection startCell computer model


handleSwipeInput : Computer -> Model -> Model
handleSwipeInput computer model =
    let
        (Cube startCell _) =
            model.world.cube

        maybeRollDirection =
            if Swipe.swipedUp model.swipe then
                Just Up

            else if Swipe.swipedDown model.swipe then
                Just Down

            else if Swipe.swipedLeft model.swipe then
                Just Left

            else if Swipe.swipedRight model.swipe then
                Just Right

            else
                Nothing
    in
    case maybeRollDirection of
        Nothing ->
            model

        Just rollDirection ->
            attemptRollTo rollDirection startCell computer model


attemptRollTo : RollDirection -> Cell -> Computer -> Model -> Model
attemptRollTo rollDirection startCell computer model =
    case model.world |> World.rollCubeTo rollDirection of
        CannotRoll CannotCrossPath ->
            model

        CannotRoll MustBeInsideBoardBorders ->
            model

        CannotRoll TopFaceCannotBeRed ->
            model
                |> startMistakeAnimation computer startCell rollDirection

        Roll newWorld ->
            model
                |> startRollAnimation computer startCell rollDirection newWorld


stopAnimation : Computer -> Model -> Model
stopAnimation computer model =
    case model.state of
        AnimatingRoll { startedAt, newWorld } ->
            if passedSecondsAfter startedAt computer.time > getFloat "duration of step animation" computer then
                { model
                    | state = NoAnimation
                    , world = newWorld
                }

            else
                model

        AnimatingMistake { startedAt } ->
            if passedSecondsAfter startedAt computer.time > getFloat "duration of mistake animation" computer then
                { model | state = NoAnimation }

            else
                model

        _ ->
            model


startCongratulationsAnimation : Computer -> Model -> Model
startCongratulationsAnimation computer model =
    if World.isSolved model.world then
        { model
            | state = CongratulationsAnimation { startedAt = computer.time }
        }

    else
        model


startMistakeAnimation : Computer -> ( Int, Int ) -> RollDirection -> Model -> Model
startMistakeAnimation computer startPosition rollDirection model =
    case model.state of
        NoAnimation ->
            { model
                | state =
                    AnimatingMistake
                        { startedAt = computer.time
                        , startPosition = startPosition
                        , rollDirection = rollDirection
                        }
            }

        _ ->
            model


startRollAnimation : Computer -> ( Int, Int ) -> RollDirection -> World -> Model -> Model
startRollAnimation computer startPosition rollDirection newWorld model =
    case model.state of
        NoAnimation ->
            { model
                | state =
                    AnimatingRoll
                        { startedAt = computer.time
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
    div
        []
        [ div
            [ style "position" "absolute"
            , style "width" "100%"
            ]
            [ explanationText computer model ]
        , viewShapes computer model
        ]


explanationText : Computer -> Model -> Html Never
explanationText ({ time } as computer) model =
    div
        [ style "min-width" "320px"
        , style "max-width" "500px"
        , style "margin" "0 auto"
        ]
        [ h2
            [ style "margin" "10px"
            , style "text-align" "center"
            ]
            [ text "The Red-Faced Cube" ]
        , p
            [ style "margin" "10px", style "text-align" "center", style "font-weight" "bold" ]
            [ text "A puzzle from Martin Gardner's book Mathematical Carnival (1975)" ]
        , p
            [ style "margin" "10px 20px 10px 20px" ]
            [ span []
                [ text
                    """
                        Tour the board,
                            resting once only on every cell and
                            ending with the cube red side up in the northeast corner.
                    """
                ]
            , br [] []
            , span
                (case model.state of
                    AnimatingMistake { startedAt } ->
                        [ style "background-color" "red" ]

                    _ ->
                        []
                )
                [ text
                    """
                        At no time during the tour, however,
                            is the cube allowed to rest with the red side up.
                    """
                ]
            , br [] []
            , span []
                [ text
                    """
                        You can roll the cube via swiping or pressing arrow keys.
                    """
                ]
            ]
        ]


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = -0.5, y = 0.7, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


viewShapes : Computer -> Model -> Html Never
viewShapes computer model =
    let
        (Cube ( x, y ) _) =
            model.world.cube

        ( cubeX, cubeY ) =
            -- This is only for the camera follow rolling cube smoothly
            case model.state of
                AnimatingRoll { startedAt, rollDirection } ->
                    let
                        duration =
                            getFloat "duration of step animation" computer

                        passedDurationRatio =
                            passedSecondsAfter startedAt computer.time / duration

                        ( cameraShiftX, cameraShiftY ) =
                            case rollDirection of
                                Up ->
                                    ( 0, passedDurationRatio )

                                Down ->
                                    ( 0, -passedDurationRatio )

                                Left ->
                                    ( -passedDurationRatio, 0 )

                                Right ->
                                    ( passedDurationRatio, 0 )
                    in
                    ( toFloat x + cameraShiftX
                    , toFloat y + cameraShiftY
                    )

                _ ->
                    ( toFloat x
                    , toFloat y
                    )

        firstLight =
            Light.point
                { position = { x = cubeX + 0.5, y = cubeY + 0.5, z = getFloat "height of following lights" computer }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens (getFloat "lumens of following lights" computer)
                }

        secondLight =
            Light.point
                { position = { x = cubeX - 0.5, y = cubeY - 0.5, z = getFloat "height of following lights" computer }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens (getFloat "lumens of following lights" computer)
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 100
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 120
                , intensityBelow = Illuminance.lux 40
                }
    in
    Scene.custom
        { screen = computer.screen
        , camera = camera computer
        , lights =
            Scene3d.fourLights
                firstLight
                secondLight
                thirdLight
                fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = getColor "background color" computer
        }
        [ board computer
        , drawCubes computer model
        , drawWalls computer model
        , drawPath computer model

        --, axes
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        , sphere red 0.05
        ]


board : Computer -> Shape
board computer =
    let
        wallWidth =
            1 - getFloat "cubes side length" computer

        rightWall =
            block (getColor "wall color" computer) ( wallWidth, 8 + wallWidth, wallWidth )
                |> moveX 4
    in
    group
        [ block (getColor "board color" computer) ( 8.01, 8.01, 1 ) |> moveZ -0.5
        , rightWall
        , rightWall |> rotateZ (degrees 90)
        , rightWall |> rotateZ (degrees 180)
        , rightWall |> rotateZ (degrees 270)
        ]
        |> moveX -0.5
        |> moveY -0.5


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


allWalls : List Wall
allWalls =
    cartesianProduct (List.range -4 3) (List.range -4 3)
        |> List.concatMap
            (\(( x, y ) as cell) ->
                if x == 3 && y == -4 then
                    []

                else if x == 3 then
                    [ Wall cell S ]

                else if y == -4 then
                    [ Wall cell W ]

                else
                    [ Wall cell S, Wall cell W ]
            )


wallsNotCrossedBy : Path -> List Wall
wallsNotCrossedBy path =
    allWalls
        |> List.filter (\wall -> not (Path.crosses wall path))


drawWall : Computer -> Wall -> Shape
drawWall computer (Wall ( x, y ) wallDirection) =
    let
        wallWidth =
            1 - getFloat "cubes side length" computer

        southWall =
            block (getColor "wall color" computer)
                ( 1 + wallWidth, wallWidth, wallWidth )
                |> moveY -0.5

        westWall =
            southWall |> rotateZ (degrees 90)
    in
    (case wallDirection of
        S ->
            southWall

        W ->
            westWall
    )
        |> moveX (toFloat x)
        |> moveY (toFloat y)


drawWalls : Computer -> Model -> Shape
drawWalls computer model =
    group
        (wallsNotCrossedBy model.world.path
            |> List.map (drawWall computer)
        )


drawPath : Computer -> Model -> Shape
drawPath computer model =
    let
        color i =
            case model.state of
                CongratulationsAnimation { startedAt } ->
                    hsl (waveWithDelay (0.03 * toFloat i) 0 1 6 computer.time)
                        1
                        0.8

                _ ->
                    white

        animateHeight i =
            case model.state of
                CongratulationsAnimation { startedAt } ->
                    scale 0.9
                        >> moveZ (waveWithDelay (0.3 * toFloat i) 0.1 0.7 6 computer.time)

                _ ->
                    identity

        drawCellOnPath i ( x, y ) =
            cube (color i) 1
                |> animateHeight i
                |> moveZ -0.49
                |> moveX (toFloat x)
                |> moveY (toFloat y)
    in
    group
        (model.world.path
            |> Path.cells
            |> List.indexedMap drawCellOnPath
        )


drawCubes : Computer -> Model -> Shape
drawCubes computer model =
    let
        (Cube ( x, y ) redFaceDirection) =
            model.world.cube

        s =
            getFloat "cubes side length" computer

        color1 =
            getColor "color 1" computer

        color2 =
            getColor "color 2" computer

        redHalf =
            block color1 ( s, s, s / 2 ) |> moveZ (s / 4)

        yellowHalf =
            --block color2 ( s, s, excitedSideLength / 2 ) |> moveZ -(excitedSideLength / 4)
            block color2 ( s, s, s / 2 ) |> moveZ -(s / 4)

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
        , yellowHalf
        ]
        |> positionWithRedFaceDirection
        |> rollingAnimation computer model ( x, y )
        |> moveZ (s / 2)
        |> moveX (toFloat x)
        |> moveY (toFloat y)


rollingAnimation : Computer -> Model -> ( Int, Int ) -> (Shape -> Shape)
rollingAnimation computer model pos =
    case model.state of
        AnimatingRoll { startedAt, startPosition, rollDirection, newWorld } ->
            if startPosition == pos then
                let
                    duration =
                        getFloat "duration of step animation" computer

                    passedDurationRatio =
                        passedSecondsAfter startedAt computer.time / duration

                    easedDurationRatio =
                        Ease.inQuad
                            passedDurationRatio

                    rotationDegree =
                        (easedDurationRatio * degrees 90)
                            |> min (degrees 90)

                    rollAxis =
                        case rollDirection of
                            Up ->
                                ( { x = 0.5, y = 0.5, z = -0.5 }, ( -1, 0, 0 ) )

                            Down ->
                                ( { x = -0.5, y = -0.5, z = -0.5 }, ( 1, 0, 0 ) )

                            Left ->
                                ( { x = -0.5, y = 0.5, z = -0.5 }, ( 0, -1, 0 ) )

                            Right ->
                                ( { x = 0.5, y = -0.5, z = -0.5 }, ( 0, 1, 0 ) )
                in
                rotateAround rollAxis rotationDegree

            else
                identity

        AnimatingMistake { startedAt, startPosition, rollDirection } ->
            if startPosition == pos then
                let
                    duration =
                        getFloat "duration of mistake animation" computer

                    passedDurationRatio =
                        passedSecondsAfter startedAt computer.time / duration

                    easedDurationRatio =
                        sin
                            (pi * passedDurationRatio)

                    rotationDegree =
                        (easedDurationRatio * degrees 45)
                            |> clamp (degrees 0) (degrees 45)

                    rollAxis =
                        case rollDirection of
                            Up ->
                                ( { x = 0.5, y = 0.5, z = -0.5 }, ( -1, 0, 0 ) )

                            Down ->
                                ( { x = -0.5, y = -0.5, z = -0.5 }, ( 1, 0, 0 ) )

                            Left ->
                                ( { x = -0.5, y = 0.5, z = -0.5 }, ( 0, -1, 0 ) )

                            Right ->
                                ( { x = 0.5, y = -0.5, z = -0.5 }, ( 0, 1, 0 ) )
                in
                rotateAround rollAxis rotationDegree

            else
                identity

        _ ->
            identity
