module World exposing (..)

import Cell exposing (Cell, RollDirection)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Path exposing (Path)


type alias World =
    { playerCube : Cube
    , playerPath : Path
    , levelEditingCube : Cube
    , levelEditingPath : Path
    }


empty : World
empty =
    World
        (Cube ( 0, 0 ) (RedFaceDirection Z Positive))
        (Path ( 0, 0 ) [])
        (Cube ( 0, 0 ) (RedFaceDirection Z Positive))
        (Path ( 0, 0 ) [])


levelFromBook : World
levelFromBook =
    World
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        (Path ( -4, 3 ) [])
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        (Path ( 3, 3 ) [ ( 2, 3 ), ( 1, 3 ), ( 0, 3 ), ( 0, 2 ), ( 1, 2 ), ( 1, 1 ), ( 2, 1 ), ( 2, 2 ), ( 3, 2 ), ( 3, 1 ), ( 3, 0 ), ( 3, -1 ), ( 3, -2 ), ( 3, -3 ), ( 3, -4 ), ( 2, -4 ), ( 2, -3 ), ( 1, -3 ), ( 1, -4 ), ( 0, -4 ), ( 0, -3 ), ( 0, -2 ), ( 1, -2 ), ( 2, -2 ), ( 2, -1 ), ( 2, 0 ), ( 1, 0 ), ( 1, -1 ), ( 0, -1 ), ( 0, 0 ), ( 0, 1 ), ( -1, 1 ), ( -1, 0 ), ( -1, -1 ), ( -2, -1 ), ( -2, 0 ), ( -3, 0 ), ( -3, -1 ), ( -3, -2 ), ( -2, -2 ), ( -1, -2 ), ( -1, -3 ), ( -1, -4 ), ( -2, -4 ), ( -2, -3 ), ( -3, -3 ), ( -3, -4 ), ( -4, -4 ), ( -4, -3 ), ( -4, -2 ), ( -4, -1 ), ( -4, 0 ), ( -4, 1 ), ( -4, 2 ), ( -3, 2 ), ( -3, 1 ), ( -2, 1 ), ( -2, 2 ), ( -1, 2 ), ( -1, 3 ), ( -2, 3 ), ( -3, 3 ), ( -4, 3 ) ])


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
    | Roll World
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
                Roll
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
                    if Path.length newWorld.playerPath == 64 && redFaceIsOnTop targetRedFaceDirection then
                        RollAndSolve newWorld

                    else
                        ViolatesRule MustVisitEachCellBeforeReachingFinishCell

                else if redFaceIsOnTop targetRedFaceDirection then
                    ViolatesRule TopFaceCannotBeRed

                else
                    Roll newWorld

        [] ->
            if not (isOnPath targetCell world.levelEditingPath) then
                ViolatesRule MustBeInsideBoard

            else
                Roll
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
