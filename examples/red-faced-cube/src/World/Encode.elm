module World.Encode exposing (..)

import Cell exposing (Cell)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection, Sign(..))
import Json.Encode as Encode exposing (Value)
import Path exposing (Path, PathSegment)
import World exposing (World)


encode : World -> Value
encode a =
    Encode.object
        [ ( "cube", encodeCube a.cube )
        , ( "playerPath", encodePath a.playerPath )
        , ( "solutionPath", encodePath a.solutionPath )
        ]


encodeAxis : Axis -> Value
encodeAxis a =
    Encode.string <|
        case a of
            X ->
                "X"

            Y ->
                "Y"

            Z ->
                "Z"


encodeCell : Cell -> Value
encodeCell ( a1, a2 ) =
    Encode.object
        [ ( "A1", Encode.int a1 )
        , ( "A2", Encode.int a2 )
        ]


encodeCube : Cube -> Value
encodeCube (Cube a1 a2) =
    Encode.object
        [ ( "A1", encodeCell a1 )
        , ( "A2", encodeRedFaceDirection a2 )
        ]


encodePath : Path -> Value
encodePath ( a1, a2 ) =
    Encode.object
        [ ( "A1", encodeCell a1 )
        , ( "A2", Encode.list encodeCell a2 )
        ]


encodePathSegment : PathSegment -> Value
encodePathSegment ( a1, a2 ) =
    Encode.object
        [ ( "A1", encodeCell a1 )
        , ( "A2", encodeCell a2 )
        ]


encodeRedFaceDirection : RedFaceDirection -> Value
encodeRedFaceDirection (Cube.RedFaceDirection a1 a2) =
    Encode.object
        [ ( "A1", encodeAxis a1 )
        , ( "A2", encodeSign a2 )
        ]


encodeSign : Sign -> Value
encodeSign a =
    Encode.string <|
        case a of
            Positive ->
                "Positive"

            Negative ->
                "Negative"
