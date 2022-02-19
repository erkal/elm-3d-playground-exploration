module World exposing (..)

import Cell exposing (Cell, RollDirection)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Path exposing (Path)


type alias World =
    { cube : Cube
    , playerPath : Path
    , solutionPath : Path
    }


empty : World
empty =
    World
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        ( ( -4, 3 ), [] )
        ( ( -4, 3 ), [] )


levelFromBook : World
levelFromBook =
    World
        (Cube ( -4, 3 ) (RedFaceDirection Z Positive))
        ( ( -4, 3 ), [] )
        ( ( 3, 3 ), [ ( 2, 3 ), ( 1, 3 ), ( 0, 3 ), ( 0, 2 ), ( 1, 2 ), ( 1, 1 ), ( 2, 1 ), ( 2, 2 ), ( 3, 2 ), ( 3, 1 ), ( 3, 0 ), ( 3, -1 ), ( 3, -2 ), ( 3, -3 ), ( 3, -4 ), ( 2, -4 ), ( 2, -3 ), ( 1, -3 ), ( 1, -4 ), ( 0, -4 ), ( 0, -3 ), ( 0, -2 ), ( 1, -2 ), ( 2, -2 ), ( 2, -1 ), ( 2, 0 ), ( 1, 0 ), ( 1, -1 ), ( 0, -1 ), ( 0, 0 ), ( 0, 1 ), ( -1, 1 ), ( -1, 0 ), ( -1, -1 ), ( -2, -1 ), ( -2, 0 ), ( -3, 0 ), ( -3, -1 ), ( -3, -2 ), ( -2, -2 ), ( -1, -2 ), ( -1, -3 ), ( -1, -4 ), ( -2, -4 ), ( -2, -3 ), ( -3, -3 ), ( -3, -4 ), ( -4, -4 ), ( -4, -3 ), ( -4, -2 ), ( -4, -1 ), ( -4, 0 ), ( -4, 1 ), ( -4, 2 ), ( -3, 2 ), ( -3, 1 ), ( -2, 1 ), ( -2, 2 ), ( -1, 2 ), ( -1, 3 ), ( -2, 3 ), ( -3, 3 ), ( -4, 3 ) ] )


reset : World -> World
reset world =
    let
        start =
            Path.firstCell world.solutionPath
    in
    { world
        | cube = Cube start (RedFaceDirection Z Positive)
        , playerPath = ( start, [] )
    }



-- QUERY


isOnPath : Cell -> Path -> Bool
isOnPath xy ( last, rest ) =
    List.member xy (last :: rest)


redFaceIsOnTop : RedFaceDirection -> Bool
redFaceIsOnTop redFaceDirection =
    redFaceDirection == RedFaceDirection Z Positive



-- UPDATE FROM PLAYER


type RollResult
    = CannotRoll Rule
    | Roll World
    | RollAndSolve World


type Rule
    = MustVisitEachCellBeforeReachingNorthEastCorner
    | TopFaceCannotBeRed
    | MustBeInsideBoardBorders
    | CannotCrossPath


roll : RollDirection -> World -> RollResult
roll rollDirection world =
    let
        ((Cube newCell newRedFaceDirection) as newCube) =
            Cube.roll rollDirection world.cube
    in
    case world.playerPath of
        ( last, beforeLast :: rest ) ->
            if beforeLast == newCell then
                Roll
                    { world
                        | cube = newCube
                        , playerPath = ( beforeLast, rest )
                    }

            else if not (isOnPath newCell world.solutionPath) then
                CannotRoll MustBeInsideBoardBorders

            else if isOnPath newCell world.playerPath then
                CannotRoll CannotCrossPath

            else
                let
                    newWorld =
                        { world
                            | cube = newCube
                            , playerPath = ( newCell, last :: beforeLast :: rest )
                        }
                in
                if newCell == Path.lastCell world.solutionPath then
                    if Path.length newWorld.playerPath == 64 && redFaceIsOnTop newRedFaceDirection then
                        RollAndSolve newWorld

                    else
                        CannotRoll MustVisitEachCellBeforeReachingNorthEastCorner

                else if redFaceIsOnTop newRedFaceDirection then
                    CannotRoll TopFaceCannotBeRed

                else
                    Roll newWorld

        ( last, [] ) ->
            if not (isOnPath newCell world.solutionPath) then
                CannotRoll MustBeInsideBoardBorders

            else
                Roll
                    { world
                        | cube = newCube
                        , playerPath = ( newCell, [ last ] )
                    }



-- UPDATE FROM EDITOR


extensibleTo : Cell -> Path -> Bool
extensibleTo cell path =
    Cell.areNeighbours cell (Path.lastCell path)
        && not (Path.contains cell path)


maybeExtendASolutionPathTo : Cell -> World -> World
maybeExtendASolutionPathTo cell world =
    if extensibleTo cell world.solutionPath then
        { world | solutionPath = world.solutionPath |> Path.extendTo cell }

    else
        world


maybeShortenASolutionPathTo : Cell -> World -> World
maybeShortenASolutionPathTo cell ({ solutionPath } as level) =
    { level | solutionPath = level.solutionPath |> Path.shortenTo cell }
