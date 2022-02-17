module Path exposing (..)

import Cell exposing (Cell)
import Set
import Wall exposing (Wall(..), WallDirection(..))


type alias Path =
    ( Cell, List Cell )


type alias PathSegment =
    ( Cell, Cell )


length : Path -> Int
length ( _, rest ) =
    1 + List.length rest


lastCell : Path -> Cell
lastCell =
    Tuple.first


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
