module RedFacedCube.Wall exposing (..)

import RedFacedCube.Cell as Cell exposing (Cell, RollDirection(..))


type Wall
    = Wall Cell WallDirection


type WallDirection
    = S
    | E


wallsAround : Cell -> List Wall
wallsAround cell =
    [ Wall cell S
    , Wall cell E
    , Wall (Cell.neighbourTo Up cell) S
    , Wall (Cell.neighbourTo Left cell) E
    ]
