module Level.Decode exposing (decoder)

import Geometry
import Json.Decode exposing (Decoder, Error, Value)
import Json.Decode.Pipeline exposing (required)
import Level exposing (Level, PolygonData(..))


decoder : Decoder Level
decoder =
    Json.Decode.succeed Level
        |> required "ball" ballDecoder
        |> required "polygons" (Json.Decode.list polygonBodyDecoder)



-- TODO: double-check generated code


pointDecoder : Decoder Geometry.Point
pointDecoder =
    Json.Decode.succeed Geometry.Point
        |> required "x" Json.Decode.float
        |> required "y" Json.Decode.float
        |> required "z" Json.Decode.float



-- TODO: double-check generated code


ballDecoder : Decoder Level.Ball
ballDecoder =
    Json.Decode.succeed Level.Ball
        |> required "position" pointDecoder
        |> required "speed" (Json.Decode.map3 (\a b c -> ( a, b, c )) (Json.Decode.index 0 Json.Decode.float) (Json.Decode.index 1 Json.Decode.float) (Json.Decode.index 2 Json.Decode.float))
        |> required "directionFromXAxis" Json.Decode.float
        |> required "rotationSpeed" Json.Decode.float
        |> required "rotation" Json.Decode.float



-- TODO: double-check generated code


polygonDataDecoder : Decoder Level.PolygonData
polygonDataDecoder =
    let
        get id =
            case id of
                "TypeA" ->
                    Json.Decode.succeed Level.TypeA

                "TypeB" ->
                    Json.Decode.succeed Level.TypeB

                _ ->
                    Json.Decode.fail ("unknown value for PolygonData: " ++ id)
    in
    Json.Decode.string |> Json.Decode.andThen get



-- TODO: double-check generated code


levelPointXZDecoder : Decoder Level.PointXZ
levelPointXZDecoder =
    Json.Decode.succeed Level.PointXZ
        |> required "x" Json.Decode.float
        |> required "z" Json.Decode.float



-- TODO: double-check generated code


polygonDecoder : Decoder Level.Polygon
polygonDecoder =
    Json.Decode.succeed Level.Polygon
        |> required "coordinateCenter" levelPointXZDecoder
        |> required "verticesInLocalCoordinates" (Json.Decode.list levelPointXZDecoder)



-- TODO: double-check generated code


polygonBodyDecoder : Decoder Level.PolygonBody
polygonBodyDecoder =
    Json.Decode.succeed Level.PolygonBody
        |> required "data" polygonDataDecoder
        |> required "polygon" polygonDecoder
