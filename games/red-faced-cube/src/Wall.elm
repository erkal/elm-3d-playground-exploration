module Wall exposing (..)

import Cell exposing (Cell)


type Wall
    = Wall Cell WallDirection


type WallDirection
    = S
    | W
