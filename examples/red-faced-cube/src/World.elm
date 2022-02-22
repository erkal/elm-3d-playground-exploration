module World exposing (..)

import Cell exposing (Cell, RollDirection)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Path exposing (Path)


type alias World =
    { playerCube : Cube
    , playerPath : Path
    , levelCube : Cube
    , levelPath : Path
    }


empty : World
empty =
    World
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        (Path ( -4, 3 ) [])
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        (Path ( -4, 3 ) [])


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
            Path.firstCell world.levelPath
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


type RollResult
    = ViolatesRule Rule
    | Roll World
    | RollAndSolve World


type Rule
    = MustVisitEachCellBeforeReachingFinishCell
    | TopFaceCannotBeRed
    | MustBeInsideBoard
    | CannotCrossPath


rollForPlayerInput : RollDirection -> World -> RollResult
rollForPlayerInput rollDirection world =
    let
        ((Cube newCell newRedFaceDirection) as newCube) =
            Cube.roll rollDirection world.playerCube
    in
    case world.playerPath.rest of
        beforeLast :: rest ->
            if beforeLast == newCell then
                -- roll back
                Roll
                    { world
                        | playerCube = newCube
                        , playerPath = Path beforeLast rest
                    }

            else if not (isOnPath newCell world.levelPath) then
                ViolatesRule MustBeInsideBoard

            else if isOnPath newCell world.playerPath then
                ViolatesRule CannotCrossPath

            else
                let
                    newWorld =
                        { world
                            | playerCube = newCube
                            , playerPath = Path newCell (world.playerPath.last :: beforeLast :: rest)
                        }
                in
                if newCell == world.levelPath.last then
                    if Path.length newWorld.playerPath == 64 && redFaceIsOnTop newRedFaceDirection then
                        RollAndSolve newWorld

                    else
                        ViolatesRule MustVisitEachCellBeforeReachingFinishCell

                else if redFaceIsOnTop newRedFaceDirection then
                    ViolatesRule TopFaceCannotBeRed

                else
                    Roll newWorld

        [] ->
            if not (isOnPath newCell world.levelPath) then
                ViolatesRule MustBeInsideBoard

            else
                Roll
                    { world
                        | playerCube = newCube
                        , playerPath = Path newCell [ world.playerPath.last ]
                    }
