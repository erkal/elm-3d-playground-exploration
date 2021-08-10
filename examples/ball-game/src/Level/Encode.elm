module Level.Encode exposing (encode)

import Geometry
import Json.Encode exposing (Value)
import Level exposing (Level, PolygonData(..))


encode : Level -> Value
encode level =
    Json.Encode.object <|
        [ ( "ball", encodeBall level.ball )
        , ( "polygons", Json.Encode.list encodePolygonBody level.polygons )
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



-- TODO: double-check generated code


encodePolygonData : Level.PolygonData -> Value
encodePolygonData polygonData =
    case polygonData of
        TypeA ->
            Json.Encode.string "TypeA"

        TypeB ->
            Json.Encode.string "TypeB"



-- TODO: double-check generated code


encodeLevelPointXZ : Level.PointXZ -> Value
encodeLevelPointXZ pointXZ =
    Json.Encode.object <|
        [ ( "x", Json.Encode.float pointXZ.x )
        , ( "z", Json.Encode.float pointXZ.z )
        ]



-- TODO: double-check generated code


encodePolygon : Level.Polygon -> Value
encodePolygon polygon =
    Json.Encode.object <|
        [ ( "coordinateCenter", encodeLevelPointXZ polygon.coordinateCenter )
        , ( "verticesInLocalCoordinates", Json.Encode.list encodeLevelPointXZ polygon.verticesInLocalCoordinates )
        ]



-- TODO: double-check generated code


encodePolygonBody : Level.PolygonBody -> Value
encodePolygonBody polygonBody =
    Json.Encode.object <|
        [ ( "data", encodePolygonData polygonBody.data )
        , ( "polygon", encodePolygon polygonBody.polygon )
        , ( "angularVelocity", Json.Encode.float polygonBody.angularVelocity )
        ]
