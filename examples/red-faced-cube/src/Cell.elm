module Cell exposing (..)


type alias Cell =
    ( Int, Int )


type RollDirection
    = Up
    | Down
    | Left
    | Right


areNeighbours : Cell -> Cell -> Bool
areNeighbours cell1 cell2 =
    [ Up, Down, Left, Right ]
        |> List.any (\rollDirection -> cell2 == neighbourTo rollDirection cell1)


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
