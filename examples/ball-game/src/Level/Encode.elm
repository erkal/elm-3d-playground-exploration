module Level.Encode exposing (encode)

import Geometry
import Json.Encode exposing (Value)
import Level exposing (Level)


encode : Level -> Value
encode level =
    Json.Encode.object <|
        [ ( "ball", encodeBall level.ball )
        ]



-- TODO: double-check generated code


encodePoint : Geometry.Point -> Value
encodePoint point =
    Json.Encode.object <|
        [ ( "x", Json.Encode.float point.x )
        , ( "y", Json.Encode.float point.y )
        , ( "z", Json.Encode.float point.z )
        ]



-- TODO: double-check generated code


encodeBall : Level.Ball -> Value
encodeBall ball =
    Json.Encode.object <|
        [ ( "position", encodePoint ball.position )
        , ( "speed", (\( a, b, c ) -> Json.Encode.list identity [ Json.Encode.float a, Json.Encode.float b, Json.Encode.float c ]) ball.speed )
        , ( "directionFromXAxis", Json.Encode.float ball.directionFromXAxis )
        , ( "rotationSpeed", Json.Encode.float ball.rotationSpeed )
        , ( "rotation", Json.Encode.float ball.rotation )
        ]
