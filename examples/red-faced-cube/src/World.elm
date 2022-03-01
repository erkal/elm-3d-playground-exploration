module World exposing (..)

import Cell exposing (Cell, RollDirection(..))
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Path exposing (Path)
import Set exposing (Set)


type alias World =
    { playerCube : Cube
    , playerPath : Path
    , levelEditingCube : Cube
    , levelEditingPath : Path
    , calculatedSolutions : List Path
    }


empty : World
empty =
    World
        (Cube ( 0, 0 ) (RedFaceDirection Z Positive))
        (Path ( 0, 0 ) [])
        (Cube ( 0, 0 ) (RedFaceDirection Z Positive))
        (Path ( 0, 0 ) [])
        []


levelFromBook : World
levelFromBook =
    World
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        (Path ( -4, 3 ) [])
        (Cube ( 3, 3 ) (RedFaceDirection Z Positive))
        (Path ( 3, 3 ) [ ( 2, 3 ), ( 1, 3 ), ( 0, 3 ), ( 0, 2 ), ( 1, 2 ), ( 1, 1 ), ( 2, 1 ), ( 2, 2 ), ( 3, 2 ), ( 3, 1 ), ( 3, 0 ), ( 3, -1 ), ( 3, -2 ), ( 3, -3 ), ( 3, -4 ), ( 2, -4 ), ( 2, -3 ), ( 1, -3 ), ( 1, -4 ), ( 0, -4 ), ( 0, -3 ), ( 0, -2 ), ( 1, -2 ), ( 2, -2 ), ( 2, -1 ), ( 2, 0 ), ( 1, 0 ), ( 1, -1 ), ( 0, -1 ), ( 0, 0 ), ( 0, 1 ), ( -1, 1 ), ( -1, 0 ), ( -1, -1 ), ( -2, -1 ), ( -2, 0 ), ( -3, 0 ), ( -3, -1 ), ( -3, -2 ), ( -2, -2 ), ( -1, -2 ), ( -1, -3 ), ( -1, -4 ), ( -2, -4 ), ( -2, -3 ), ( -3, -3 ), ( -3, -4 ), ( -4, -4 ), ( -4, -3 ), ( -4, -2 ), ( -4, -1 ), ( -4, 0 ), ( -4, 1 ), ( -4, 2 ), ( -3, 2 ), ( -3, 1 ), ( -2, 1 ), ( -2, 2 ), ( -1, 2 ), ( -1, 3 ), ( -2, 3 ), ( -3, 3 ), ( -4, 3 ) ])
        []


reset : World -> World
reset world =
    let
        start =
            Path.firstCell world.levelEditingPath
    in
    { world
        | playerCube = Cube start (RedFaceDirection Z Positive)
        , playerPath = Path start []
    }


center : World -> { x : Float, y : Float }
center world =
    let
        cells =
            Path.cells world.levelEditingPath

        { minX, maxX, minY, maxY } =
            { minX = List.minimum (List.map (Tuple.first >> toFloat) cells) |> Maybe.withDefault 0
            , maxX = List.maximum (List.map (Tuple.first >> toFloat) cells) |> Maybe.withDefault 0
            , minY = List.minimum (List.map (Tuple.second >> toFloat) cells) |> Maybe.withDefault 0
            , maxY = List.maximum (List.map (Tuple.second >> toFloat) cells) |> Maybe.withDefault 0
            }
    in
    { x = 0.5 * (minX + maxX)
    , y = 0.5 * (minY + maxY)
    }



-- QUERY


isOnPath : Cell -> Path -> Bool
isOnPath xy { last, rest } =
    List.member xy (last :: rest)


redFaceIsOnTop : RedFaceDirection -> Bool
redFaceIsOnTop redFaceDirection =
    redFaceDirection == RedFaceDirection Z Positive



-- UPDATE FROM PLAYER


type RollResultForPlayer
    = ViolatesRule Rule
    | RollBack World
    | RollForward World
    | RollAndSolve World


type Rule
    = MustVisitEachCellBeforeReachingFinishCell
    | TopFaceCannotBeRed
    | MustBeInsideBoard
    | CannotCrossPath


type RollResultForLevelEditing
    = CannotRoll_LevelFinishedBecauseTopFaceIsRed
    | CannotRoll_CannotCrossPath
    | RollAndEditLevelPath World


rollForPlayerInput : RollDirection -> World -> RollResultForPlayer
rollForPlayerInput rollDirection world =
    let
        ((Cube targetCell targetRedFaceDirection) as targetCube) =
            Cube.roll rollDirection world.playerCube
    in
    case world.playerPath.rest of
        beforeLast :: rest ->
            if beforeLast == targetCell then
                -- roll back
                RollBack
                    { world
                        | playerCube = targetCube
                        , playerPath = Path beforeLast rest
                    }

            else if not (isOnPath targetCell world.levelEditingPath) then
                ViolatesRule MustBeInsideBoard

            else if isOnPath targetCell world.playerPath then
                ViolatesRule CannotCrossPath

            else
                let
                    newWorld =
                        { world
                            | playerCube = targetCube
                            , playerPath = Path targetCell (world.playerPath.last :: beforeLast :: rest)
                        }
                in
                if targetCell == world.levelEditingPath.last then
                    if Path.length newWorld.playerPath == Path.length newWorld.levelEditingPath && redFaceIsOnTop targetRedFaceDirection then
                        RollAndSolve newWorld

                    else
                        ViolatesRule MustVisitEachCellBeforeReachingFinishCell

                else if redFaceIsOnTop targetRedFaceDirection then
                    ViolatesRule TopFaceCannotBeRed

                else
                    RollForward newWorld

        [] ->
            if not (isOnPath targetCell world.levelEditingPath) then
                ViolatesRule MustBeInsideBoard

            else
                RollForward
                    { world
                        | playerCube = targetCube
                        , playerPath = Path targetCell [ world.playerPath.last ]
                    }


rollForLevelEditing : RollDirection -> World -> RollResultForLevelEditing
rollForLevelEditing rollDirection world =
    let
        (Cube _ lastRedFaceDirection) =
            world.levelEditingCube

        ((Cube targetCell _) as targetCube) =
            Cube.roll rollDirection world.levelEditingCube
    in
    case world.levelEditingPath.rest of
        beforeLast :: rest ->
            if beforeLast == targetCell then
                -- roll back
                RollAndEditLevelPath
                    { world
                        | levelEditingCube = targetCube
                        , levelEditingPath = Path beforeLast rest
                    }

            else if redFaceIsOnTop lastRedFaceDirection then
                CannotRoll_LevelFinishedBecauseTopFaceIsRed

            else if isOnPath targetCell world.levelEditingPath then
                CannotRoll_CannotCrossPath

            else
                -- roll forward
                RollAndEditLevelPath
                    { world
                        | levelEditingCube = targetCube
                        , levelEditingPath = Path targetCell (world.levelEditingPath.last :: beforeLast :: rest)
                    }

        [] ->
            -- roll forward
            RollAndEditLevelPath
                { world
                    | levelEditingCube = targetCube
                    , levelEditingPath = Path targetCell [ world.levelEditingPath.last ]
                }


playerPathDisconnectsBoard : World -> Bool
playerPathDisconnectsBoard world =
    Cell.isDisconnected
        (Set.diff
            (Set.fromList (Path.cells world.levelEditingPath))
            (Set.fromList (Path.cells world.playerPath))
        )


calculateSolutions : World -> List Path
calculateSolutions world =
    let
        go i finished new =
            if i <= 1 then
                finished ++ new

            else
                go
                    (i - 1)
                    (finished ++ new)
                    (new
                        |> List.concatMap
                            (\world_ ->
                                if playerPathDisconnectsBoard world_ then
                                    -- optimization! We prune the search tree here
                                    []

                                else
                                    [ Up, Down, Left, Right ]
                                        |> List.filterMap
                                            (\rollDirection ->
                                                case rollForPlayerInput rollDirection world_ of
                                                    ViolatesRule _ ->
                                                        Nothing

                                                    RollBack _ ->
                                                        Nothing

                                                    RollForward w ->
                                                        Just w

                                                    RollAndSolve w ->
                                                        Just w
                                            )
                            )
                    )
    in
    go (Path.length world.levelEditingPath) [] [ reset world ]
        |> List.map .playerPath
        |> List.filter (\p -> Path.length p == Path.length world.levelEditingPath)
