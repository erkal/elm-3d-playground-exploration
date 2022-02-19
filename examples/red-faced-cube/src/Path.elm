module Path exposing (..)

import Cell exposing (Cell)
import Wall exposing (Wall(..), WallDirection(..))


type alias Path =
    ( Cell, List Cell )


type alias PathSegment =
    ( Cell, Cell )


length : Path -> Int
length ( _, rest ) =
    1 + List.length rest


firstCell : Path -> Cell
firstCell ( last, rest ) =
    rest
        |> List.reverse
        |> List.head
        |> Maybe.withDefault last


lastCell : Path -> Cell
lastCell =
    Tuple.first


contains : Cell -> Path -> Bool
contains cell path =
    List.member cell (cells path)


cells : Path -> List Cell
cells ( last, rest ) =
    last :: rest


pathSegments : Path -> List PathSegment
pathSegments ( last, rest ) =
    List.map2 Tuple.pair (last :: rest) rest


crosses : Wall -> Path -> Bool
crosses (Wall cell wallDirection) path =
    let
        crossesSegment ( ( sx, sy ) as start, ( ex, ey ) as end ) =
            case wallDirection of
                S ->
                    (cell == start && ey == sy - 1)
                        || (cell == end && ey == sy + 1)

                E ->
                    (cell == start && ex == sx + 1)
                        || (cell == end && ex == sx - 1)
    in
    pathSegments path |> List.any crossesSegment


wallsWithDuplicates : Path -> List Wall
wallsWithDuplicates path =
    path
        |> cells
        |> List.concatMap Wall.wallsAround


extendTo : Cell -> Path -> Path
extendTo cell ( last, rest ) =
    ( cell, last :: rest )


shortenTo : Cell -> Path -> Path
shortenTo cell (( last, rest ) as path) =
    case rest of
        secondLast :: rest_ ->
            if cell == secondLast then
                ( secondLast, rest_ )

            else
                path

        _ ->
            path
