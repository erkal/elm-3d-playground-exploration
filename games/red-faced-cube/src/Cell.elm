module Cell exposing (..)


type alias Cell =
    ( Int, Int )


type RollDirection
    = Up
    | Down
    | Left
    | Right


neighbourTo : RollDirection -> Cell -> Cell
neighbourTo rollDirection ( x, y ) =
    case rollDirection of
        Up ->
            ( x, y + 1 )

        Down ->
            ( x, y - 1 )

        Left ->
            ( x - 1, y )

        Right ->
            ( x + 1, y )
