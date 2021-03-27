module Configurations.Decode exposing (decode)

import Configurations.Encode exposing (PreEncoded)
import Json.Decode exposing (Decoder)
import Playground3d.Configurations exposing (Configurations, getFloatMaximum, getFloatMinimum)


decode : Configurations -> String -> Maybe Configurations
decode hardCodedConfigurations string =
    string
        |> Json.Decode.decodeString preEncodedDecoder
        |> Result.toMaybe
        |> Maybe.map (fromPreEncoded hardCodedConfigurations)


fromPreEncoded : Configurations -> PreEncoded -> Configurations
fromPreEncoded hardCodedConfigurations list =
    { floats =
        list
            |> List.map
                (\( name, stepIndex ) ->
                    let
                        minimum =
                            getFloatMinimum name hardCodedConfigurations

                        maximum =
                            getFloatMaximum name hardCodedConfigurations
                    in
                    ( name
                    , ( minimum
                      , minimum + toFloat stepIndex * (maximum - minimum) / 127
                      , maximum
                      )
                    )
                )
    }



-- THE CODE BELOW IS GENERATED!


preEncodedDecoder : Decoder PreEncoded
preEncodedDecoder =
    Json.Decode.list (Json.Decode.map2 Tuple.pair (Json.Decode.index 0 Json.Decode.string) (Json.Decode.index 1 Json.Decode.int))
