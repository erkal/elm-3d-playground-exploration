module TheSomaCube.World exposing (..)


type alias World =
    { pieces : List Piece
    }


type alias Piece =
    { position : ( Int, Int, Int )
    , rotation_in_90 : ( Int, Int, Int )
    , cubesInLocalCoordinates : List UnitCube
    }


type alias UnitCube =
    ( Int, Int, Int )


initialWorld : World
initialWorld =
    { pieces =
        [ Piece ( -3, 3, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 0, 0 ), ( 0, 1, 0 ) ]
        , Piece ( 0, 3, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 0, 0 ), ( 0, 1, 0 ), ( 0, 2, 0 ) ]
        , Piece ( 3, 3, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 1, 0 ), ( 0, 1, 0 ), ( 0, 2, 0 ) ]
        , Piece ( -3, -1, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 0, 1, 0 ), ( 1, 1, 0 ), ( 1, 2, 0 ) ]
        , Piece ( 3, 0, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 0, 0 ), ( 0, 0, 1 ), ( 0, 1, 1 ) ]
        , Piece ( -2, -3, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 0, 0 ), ( 0, 0, 1 ), ( 1, 1, 0 ) ]
        , Piece ( 2, -3, 0 ) ( 0, 0, 0 ) [ ( 0, 0, 0 ), ( 1, 0, 0 ), ( 0, 0, 1 ), ( 0, 1, 0 ) ]
        ]
    }
