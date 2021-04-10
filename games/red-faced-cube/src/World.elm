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
    = CannotRoll RestrictionRule
    | Roll World


type RestrictionRule
    = TopFaceCannotBeRed
    | MustBeInsideBoardBorders
    | CannotCrossPath


isSolved : World -> Bool
isSolved world =
    let
        (Cube cell redFaceDirection) =
            world.cube
    in
    (Path.length world.path == 64)
        && (cell == ( 3, 3 ))
        && (redFaceDirection == RedFaceDirection Z Positive)


rollCubeTo : RollDirection -> World -> RollResult
rollCubeTo rollDirection world =
    let
        ((Cube newPos newRedFaceDirection) as newCube) =
            Cube.roll rollDirection world.cube
    in
    case world.path of
        ( last, beforeLast :: rest ) ->
            if beforeLast == newPos then
                Roll (World newCube ( beforeLast, rest ))

            else if not (isOnBoard newPos) then
                CannotRoll MustBeInsideBoardBorders

            else if isOnPath newPos world.path then
                CannotRoll CannotCrossPath

            else if
                redFaceIsOnTop newRedFaceDirection
                    && not (isSolved (World newCube ( newPos, last :: beforeLast :: rest )))
            then
                CannotRoll TopFaceCannotBeRed

            else
                Roll (World newCube ( newPos, last :: beforeLast :: rest ))

        ( last, [] ) ->
            if not (isOnBoard newPos) then
                CannotRoll MustBeInsideBoardBorders

            else
                Roll (World newCube ( newPos, [ last ] ))
