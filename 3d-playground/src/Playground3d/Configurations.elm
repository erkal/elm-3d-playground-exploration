module Playground3d.Configurations exposing (..)

import Html exposing (Html, br, button, div, h1, h3, hr, input, label, p, span, text, textarea)
import Html.Attributes exposing (for, id, name, readonly, step, style, type_, value, width)
import Html.Events as Events exposing (onClick, onInput)
import Json.Decode exposing (Decoder)
import Json.Encode exposing (Value)
import Round exposing (roundNum)


type alias Configurations =
    { floats : List ( String, ( Float, Float, Float ) )
    , jsonExportedConfigurations : String
    , jsonConfigurationsToImport : String
    }



-- INIT


init : List ( String, ( Float, Float, Float ) ) -> Configurations
init floats =
    { floats = floats
    , jsonExportedConfigurations = ""
    , jsonConfigurationsToImport = ""
    }


empty : Configurations
empty =
    init []


getFloat : String -> Configurations -> Float
getFloat key { floats } =
    floats
        |> List.filterMap
            (\( k, ( _, value, _ ) ) ->
                if k == key then
                    Just value

                else
                    Nothing
            )
        |> List.head
        |> Maybe.withDefault 0



-- UPDATE


type Msg
    = SetFloat String Float
    | ClickedImportButton
    | EditedTextAreaForImport String
    | ClickedExportButton


roundFloatValue : Float -> Float -> Float -> Float
roundFloatValue min max value =
    let
        scale =
            logBase 10 (abs (max - min))

        n =
            if scale < 0 then
                3

            else if scale < 1 then
                2

            else if scale < 2 then
                1

            else
                0
    in
    roundNum n value


update : Msg -> Configurations -> Configurations
update msg configurations =
    case msg of
        ClickedImportButton ->
            configurations.jsonConfigurationsToImport
                |> decode
                |> Maybe.withDefault configurations

        EditedTextAreaForImport string ->
            { configurations | jsonConfigurationsToImport = string }

        ClickedExportButton ->
            { configurations
                | jsonExportedConfigurations =
                    Json.Encode.encode 2 (encode configurations)
            }

        SetFloat key newValue ->
            { configurations
                | floats =
                    configurations.floats
                        |> List.map
                            (\(( k, ( min, _, max ) ) as el) ->
                                if k == key then
                                    ( k
                                    , ( min
                                      , roundFloatValue min max newValue
                                      , max
                                      )
                                    )

                                else
                                    el
                            )
            }



-- VIEW


view : Configurations -> Html Msg
view configurations =
    let
        floatSlider ( key, ( min, currentValue, max ) ) =
            div
                [ style "margin-top" "15px"
                ]
                [ div []
                    [ label
                        [ for key
                        ]
                        [ text key
                        , text ": "
                        , span
                            [ style "font-family" "monospace"
                            , style "font-weight" "bold"
                            ]
                            [ text (String.fromFloat currentValue) ]
                        ]
                    ]
                , input
                    [ type_ "range"
                    , id key
                    , name key
                    , Html.Attributes.min (String.fromFloat min)
                    , Html.Attributes.max (String.fromFloat max)
                    , onInput (\newValue -> SetFloat key (String.toFloat newValue |> Maybe.withDefault 0))
                    , step "any"
                    , style "width" "200px"
                    , value (String.fromFloat currentValue)
                    ]
                    []
                ]
    in
    div
        [ style "margin" "20px"
        , style "position" "fixed"
        ]
        [ div [] (configurations.floats |> List.map floatSlider)
        , hr [] []
        , exporting configurations
        , importing configurations
        ]


exporting configurations =
    div []
        [ h3 [] [ text "Export Configurations" ]
        , p [] [ exportButton ]
        , p [] [ textAreaForExported configurations ]
        ]


importing configurations =
    div []
        [ h3 [] [ text "Import Configurations" ]
        , p [] [ textAreaForImport configurations ]
        , p [] [ importButton ]
        ]


exportButton =
    button
        [ style "cursor" "pointer"
        , onClick ClickedExportButton
        ]
        [ text "Export Configurations as json" ]


importButton =
    button
        [ style "cursor" "pointer"
        , onClick ClickedImportButton
        ]
        [ text "Import Configurations" ]


textAreaForExported configurations =
    div
        []
        [ textarea
            [ readonly True ]
            [ text configurations.jsonExportedConfigurations ]
        ]


textAreaForImport configurations =
    div
        []
        [ textarea
            [ Events.onInput EditedTextAreaForImport ]
            [ text configurations.jsonConfigurationsToImport ]
        ]



-- DECODE


decode : String -> Maybe Configurations
decode string =
    string
        |> Json.Decode.decodeString decoder
        |> Result.toMaybe
        |> Maybe.map init


{-| THIS FUNCTION IS GENERATED
-}
decoder : Decoder (List ( String, ( Float, Float, Float ) ))
decoder =
    Json.Decode.list (Json.Decode.map2 Tuple.pair (Json.Decode.index 0 Json.Decode.string) (Json.Decode.index 1 (Json.Decode.map3 (\a b c -> ( a, b, c )) (Json.Decode.index 0 Json.Decode.float) (Json.Decode.index 1 Json.Decode.float) (Json.Decode.index 2 Json.Decode.float))))



-- ENCODE


encode : Configurations -> Value
encode configurations =
    configurations.floats |> encodeFloats


{-| THIS FUNCTION IS GENERATED
-}
encodeFloats : List ( String, ( Float, Float, Float ) ) -> Value
encodeFloats list =
    Json.Encode.list
        (\( a, b ) ->
            Json.Encode.list identity
                [ Json.Encode.string a
                , (\( a_, b_, c ) ->
                    Json.Encode.list identity [ Json.Encode.float a_, Json.Encode.float b_, Json.Encode.float c ]
                  )
                    b
                ]
        )
        list
