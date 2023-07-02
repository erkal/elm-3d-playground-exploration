module RedFacedCube.Cell exposing (..)

import Set exposing (Set)


type alias Cell =
    ( Int, Int )


type RollDirection
    = Up
    | Down
    | Left
    | Right


neighboursIn : Set Cell -> Cell -> List Cell
neighboursIn allCells cell =
    [ Up, Down, Left, Right ]
        |> List.map (\rollDirection -> neighbourTo rollDirection cell)
        |> List.filter (\n -> Set.member n allCells)


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


connectedComponentOf : Cell -> Set Cell -> Set Cell
connectedComponentOf startCell allCells =
    let
        go finished discovered =
            case discovered of
                [] ->
                    finished

                next :: rest ->
                    let
                        discoveredAsNeighbourOfNext =
                            next
                                |> neighboursIn allCells
                                |> List.filter
                                    (\n ->
                                        not (List.member n discovered || Set.member n finished)
                                    )
                    in
                    go (Set.insert next finished) (rest ++ discoveredAsNeighbourOfNext)
    in
    go Set.empty [ startCell ]


isDisconnected : Set Cell -> Bool
isDisconnected cells =
    let
        n =
            Set.size cells
    in
    cells
        |> Set.toList
        |> List.head
        |> Maybe.map (\cell -> Set.size (connectedComponentOf cell cells) < n)
        |> Maybe.withDefault False
