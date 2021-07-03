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


cells : Path -> List Cell
cells ( last, rest ) =
    last :: rest


segments : Path -> List PathSegment
segments ( last, rest ) =
    List.map2 Tuple.pair (last :: rest) rest


crosses : Wall -> Path -> Bool
crosses (Wall (( x, y ) as cell) wallDirection) path =
    let
        crossesSegment ( ( sx, sy ) as start, ( ex, ey ) as end ) =
            case wallDirection of
                S ->
                    (cell == start && ey == sy - 1)
                        || (cell == end && ey == sy + 1)

                W ->
                    (cell == start && ex == sx + 1)
                        || (cell == end && ex == sx - 1)
    in
    segments path |> List.any crossesSegment
