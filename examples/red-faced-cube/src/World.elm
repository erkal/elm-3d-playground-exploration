module World exposing (..)

import Cell exposing (Cell, RollDirection)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Path exposing (Path)


type alias World =
    { cube : Cube
    , path : Path
    }


init : { start : Cell } -> World
init { start } =
    World
        (Cube start (RedFaceDirection Z Positive))
        ( start, [] )


finish : Cell
finish =
    ( 3, 3 )



-- QUERY


isOnBoard : Cell -> Bool
isOnBoard ( x, y ) =
    x >= -4 && x <= 3 && y >= -4 && y <= 3


isOnPath : Cell -> Path -> Bool
isOnPath xy ( last, rest ) =
    List.member xy (last :: rest)


redFaceIsOnTop : RedFaceDirection -> Bool
redFaceIsOnTop redFaceDirection =
    redFaceDirection == RedFaceDirection Z Positive



-- ACTION


type RollResult
    = CannotRoll Rule
    | Roll World
    | RollAndSolve World


type Rule
    = MustVisitEachCellBeforeReachingNorthEastCorner
    | TopFaceCannotBeRed
    | MustBeInsideBoardBorders
    | CannotCrossPath


rollCubeTo : RollDirection -> World -> RollResult
rollCubeTo rollDirection world =
    let
        ((Cube newCell newRedFaceDirection) as newCube) =
            Cube.roll rollDirection world.cube
    in
    case world.path of
        ( last, beforeLast :: rest ) ->
            if beforeLast == newCell then
                Roll (World newCube ( beforeLast, rest ))

            else if not (isOnBoard newCell) then
                CannotRoll MustBeInsideBoardBorders

            else if isOnPath newCell world.path then
                CannotRoll CannotCrossPath

            else
                let
                    newWorld =
                        World newCube ( newCell, last :: beforeLast :: rest )
                in
                if newCell == finish then
                    if Path.length newWorld.path == 64 && redFaceIsOnTop newRedFaceDirection then
                        RollAndSolve newWorld

                    else
                        CannotRoll MustVisitEachCellBeforeReachingNorthEastCorner

                else if redFaceIsOnTop newRedFaceDirection then
                    CannotRoll TopFaceCannotBeRed

                else
                    Roll newWorld

        ( last, [] ) ->
            if not (isOnBoard newCell) then
                CannotRoll MustBeInsideBoardBorders

            else
                Roll (World newCube ( newCell, [ last ] ))
