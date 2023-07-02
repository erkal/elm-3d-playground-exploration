module RedFacedCube.Path exposing (..)

import RedFacedCube.Cell as Cell exposing (Cell)
import RedFacedCube.Wall as Wall exposing (Wall(..), WallDirection(..))


type alias Path =
    { last : Cell
    , rest : List Cell
    }


type alias PathSegment =
    ( Cell, Cell )


length : Path -> Int
length { rest } =
    1 + List.length rest


firstCell : Path -> Cell
firstCell { last, rest } =
    rest
        |> List.reverse
        |> List.head
        |> Maybe.withDefault last


contains : Cell -> Path -> Bool
contains cell path =
    List.member cell (cells path)


cells : Path -> List Cell
cells { last, rest } =
    last :: rest


pathSegments : Path -> List PathSegment
pathSegments { last, rest } =
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
