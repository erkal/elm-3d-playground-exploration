module Level.Encode exposing (encode)

import Geometry
import Graph exposing (Graph_PreEncoded, VertexData, VertexId)
import Json.Encode exposing (Value)
import Level exposing (BaseGraph, Level, Level_PreEncoded)


encode : Level -> Value
encode =
    Level.toPreEncoded >> encodePrepared



-- THE CODE BELOW IS GENERATED BY INTELLIJ ELM PLUGIN


encodePrepared : Level_PreEncoded -> Value
encodePrepared levelToEncode =
    Json.Encode.object <|
        [ ( "baseGraph", Json.Encode.list (\( a, b ) -> Json.Encode.list identity [ Json.Encode.string a, encodeGraphVertexData b ]) levelToEncode.baseGraph )
        , ( "playerGraph", Json.Encode.list (\( a, b ) -> Json.Encode.list identity [ Json.Encode.string a, encodeGraphVertexData2 b ]) levelToEncode.playerGraph )
        ]



-- TODO: double-check generated code


encodeGeometryPoint : Geometry.Point -> Value
encodeGeometryPoint point =
    Json.Encode.object <|
        [ ( "x", Json.Encode.float point.x )
        , ( "y", Json.Encode.float point.y )
        , ( "z", Json.Encode.float point.z )
        ]



-- TODO: double-check generated code


encodeGraphVertexData : VertexData () -> Value
encodeGraphVertexData vertexData =
    Json.Encode.object <|
        [ ( "position", encodeGeometryPoint vertexData.position )
        , ( "outNeighbours", Json.Encode.set Json.Encode.int vertexData.outNeighbours )
        , ( "data", (\_ -> Json.Encode.null) vertexData.data )
        ]



-- TODO: double-check generated code


encodeRecord1 : { mappedToBaseVertex : VertexId } -> Value
encodeRecord1 record =
    Json.Encode.object <|
        [ ( "mappedToBaseVertex", Json.Encode.int record.mappedToBaseVertex )
        ]



-- TODO: double-check generated code


encodeGraphVertexData2 : VertexData { mappedToBaseVertex : VertexId } -> Value
encodeGraphVertexData2 vertexData =
    Json.Encode.object <|
        [ ( "position", encodeGeometryPoint vertexData.position )
        , ( "outNeighbours", Json.Encode.set Json.Encode.int vertexData.outNeighbours )
        , ( "data", encodeRecord1 vertexData.data )
        ]
