module Level.Decode exposing (decoder)

import Geometry
import Json.Decode exposing (Decoder, Error, Value)
import Json.Decode.Pipeline exposing (required)
import Level exposing (Level)


decoder : Decoder Level
decoder =
    Json.Decode.succeed Level
        |> required "ball" ballDecoder



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
