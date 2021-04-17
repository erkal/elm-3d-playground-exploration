module Piece exposing (..)


type alias Piece =
    { pieceType : Int
    , position : ( Int, Int, Int )
    , rotation_in_90 : ( Int, Int, Int )
    }


type alias Cube =
    ( Int, Int, Int )


cubesInLocalCoordinates : Piece -> List Cube
cubesInLocalCoordinates piece =
    case piece.pieceType of
        1 ->
            [ ( 0, 0, 0 )
            , ( 1, 0, 0 )
            , ( 0, 1, 0 )
            ]

        2 ->
            [ ( 0, 0, 0 )
            , ( 1, 0, 0 )
            , ( 0, 1, 0 )
            , ( 0, 2, 0 )
            ]

        3 ->
            [ ( 0, 0, 0 )
            , ( 1, 1, 0 )
            , ( 0, 1, 0 )
            , ( 0, 2, 0 )
            ]

        4 ->
            [ ( 0, 0, 0 )
            , ( 0, 1, 0 )
            , ( 1, 1, 0 )
            , ( 1, 2, 0 )
            ]

        5 ->
            [ ( 0, 0, 0 )
            , ( 1, 0, 0 )
            , ( 0, 0, 1 )
            , ( 0, 1, 1 )
            ]

        6 ->
            [ ( 0, 0, 0 )
            , ( 1, 0, 0 )
            , ( 0, 0, 1 )
            , ( 1, 1, 0 )
            ]

        7 ->
            [ ( 0, 0, 0 )
            , ( 1, 0, 0 )
            , ( 0, 0, 1 )
            , ( 0, 1, 0 )
            ]

        _ ->
            []
