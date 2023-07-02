module RedFacedCube.Cube exposing (..)

import RedFacedCube.Cell exposing (Cell, RollDirection(..), neighbourTo)


type Cube
    = Cube Cell RedFaceDirection


type RedFaceDirection
    = RedFaceDirection Axis Sign


type Sign
    = Positive
    | Negative


type Axis
    = X
    | Y
    | Z


getCell : Cube -> Cell
getCell (Cube cell _) =
    cell


getRedFaceDirection : Cube -> RedFaceDirection
getRedFaceDirection (Cube _ redFaceDirection) =
    redFaceDirection


roll : RollDirection -> Cube -> Cube
roll rollDirection (Cube cell redFaceDirection) =
    Cube
        (cell |> neighbourTo rollDirection)
        (redFaceDirection |> updateRedFaceDirection rollDirection)


updateRedFaceDirection : RollDirection -> RedFaceDirection -> RedFaceDirection
updateRedFaceDirection rollDirection =
    case rollDirection of
        Up ->
            rot_X_90 >> rot_X_90 >> rot_X_90

        Down ->
            rot_X_90

        Left ->
            rot_Y_90 >> rot_Y_90 >> rot_Y_90

        Right ->
            rot_Y_90


revert : Sign -> Sign
revert sign =
    case sign of
        Positive ->
            Negative

        Negative ->
            Positive


rot_X_90 : RedFaceDirection -> RedFaceDirection
rot_X_90 (RedFaceDirection axis sign) =
    case axis of
        X ->
            RedFaceDirection axis sign

        Y ->
            RedFaceDirection Z sign

        Z ->
            RedFaceDirection Y (revert sign)


rot_Y_90 : RedFaceDirection -> RedFaceDirection
rot_Y_90 (RedFaceDirection axis sign) =
    case axis of
        X ->
            RedFaceDirection Z (revert sign)

        Y ->
            RedFaceDirection axis sign

        Z ->
            RedFaceDirection X sign
