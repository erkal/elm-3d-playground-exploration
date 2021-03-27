module Configurations.Encode exposing (PreEncoded, encode)

import Json.Encode exposing (Value)
import Playground3d.Configurations exposing (Configurations)


type alias PreEncoded =
    List ( String, Int )


preEncode : Configurations -> PreEncoded
preEncode { floats } =
    floats
        |> List.map
            (\( name, ( min, value, max ) ) ->
                ( name
                , round (127 * (value - min) / (max - min))
                )
            )


encode : Configurations -> String
encode =
    preEncode
        >> encodePreEncoded
        >> Json.Encode.encode 0



-- THE CODE BELOW IS GENERATED!


encodePreEncoded : List ( String, Int ) -> Value
encodePreEncoded list =
    Json.Encode.list (\( a, b ) -> Json.Encode.list identity [ Json.Encode.string a, Json.Encode.int b ]) list
