module JohnHarrisEightRollingCubes.Cube exposing (..)


type Cube
    = Cube ( Int, Int ) RedFaceDirection


type RedFaceDirection
    = RedFaceDirection Axis Sign


type Sign
    = Positive
    | Negative


type Axis
    = X
    | Y
    | Z


type RollDirection
    = Up
    | Down
    | Left
    | Right


roll : RollDirection -> Cube -> Cube
roll rollDirection (Cube position redFaceDirection) =
    Cube
        (position |> updatePosition rollDirection)
        (redFaceDirection |> updateRedFaceDirection rollDirection)


updatePosition : RollDirection -> ( Int, Int ) -> ( Int, Int )
updatePosition rollDirection ( x, y ) =
    case rollDirection of
        Up ->
            ( x, y + 1 )

        Down ->
            ( x, y - 1 )

        Left ->
            ( x - 1, y )

        Right ->
            ( x + 1, y )


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
