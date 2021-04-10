module Playground3d.Configurations exposing (..)

import Color exposing (Color(..), black, white)
import Color.Convert exposing (colorToHex, hexToColor)
import Html exposing (Html, button, div, h3, hr, input, label, p, span, text, textarea)
import Html.Attributes exposing (for, id, name, readonly, step, style, type_, value)
import Html.Events as Events exposing (onClick, onInput)
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode exposing (Value)
import Round exposing (roundNum)


type alias Configurations =
    { floats : List ( String, ( Float, Float, Float ) )
    , colors : List ( String, Color )
    , exportedJson : String
    , jsonToImport : String
    }



-- CREATE


init :
    List ( String, ( Float, Float, Float ) )
    -> List ( String, Color )
    -> Configurations
init floats colors =
    { floats = floats
    , colors = colors
    , exportedJson = ""
    , jsonToImport = ""
    }


empty : Configurations
empty =
    init [] []



-- ENCODE


encode : Configurations -> String
encode =
    preSerialize >> encodePreserialized >> Encode.encode 0


type alias Preserialized =
    { floats : List ( String, ( Float, Float, Float ) )
    , colors : List ( String, String )
    }


preSerialize : Configurations -> Preserialized
preSerialize configurations =
    { floats = configurations.floats
    , colors = configurations.colors |> List.map (Tuple.mapSecond colorToHex)
    }



-- BELOW IS GENERATED CODE


encodePreserialized : Preserialized -> Value
encodePreserialized a =
    Encode.object
        [ ( "floats", Encode.list encodeTuple_String__Float_Float_Float__ a.floats )
        , ( "colors", Encode.list encodeTuple_String_String_ a.colors )
        ]


encodeTuple_Float_Float_Float_ : ( Float, Float, Float ) -> Value
encodeTuple_Float_Float_Float_ ( a1, a2, a3 ) =
    Encode.object
        [ ( "A1", Encode.float a1 )
        , ( "A2", Encode.float a2 )
        , ( "A3", Encode.float a3 )
        ]


encodeTuple_String_String_ : ( String, String ) -> Value
encodeTuple_String_String_ ( a1, a2 ) =
    Encode.object
        [ ( "A1", Encode.string a1 )
        , ( "A2", Encode.string a2 )
        ]


encodeTuple_String__Float_Float_Float__ : ( String, ( Float, Float, Float ) ) -> Value
encodeTuple_String__Float_Float_Float__ ( a1, a2 ) =
    Encode.object
        [ ( "A1", Encode.string a1 )
        , ( "A2", encodeTuple_Float_Float_Float_ a2 )
        ]



-- DECODE


decode : String -> Configurations
decode =
    Decode.decodeString decodePreserialized
        >> Result.map fromPreSerialized
        >> Result.withDefault empty


fromPreSerialized : Preserialized -> Configurations
fromPreSerialized preserialized =
    { floats = preserialized.floats
    , colors = preserialized.colors |> List.map (Tuple.mapSecond (hexToColor >> Result.withDefault white))
    , exportedJson = ""
    , jsonToImport = ""
    }



-- BELOW IS GENERATED CODE


decodePreserialized : Decoder Preserialized
decodePreserialized =
    Decode.map2
        Preserialized
        (Decode.field "floats" (Decode.list decodeTuple_String__Float_Float_Float__))
        (Decode.field "colors" (Decode.list decodeTuple_String_String_))


decodeTuple_Float_Float_Float_ : Decoder ( Float, Float, Float )
decodeTuple_Float_Float_Float_ =
    Decode.map3
        (\a1 a2 a3 -> ( a1, a2, a3 ))
        (Decode.field "A1" Decode.float)
        (Decode.field "A2" Decode.float)
        (Decode.field "A3" Decode.float)


decodeTuple_String_String_ : Decoder ( String, String )
decodeTuple_String_String_ =
    Decode.map2
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" Decode.string)
        (Decode.field "A2" Decode.string)


decodeTuple_String__Float_Float_Float__ : Decoder ( String, ( Float, Float, Float ) )
decodeTuple_String__Float_Float_Float__ =
    Decode.map2
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" Decode.string)
        (Decode.field "A2" decodeTuple_Float_Float_Float_)



-- QUERY


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


getColor : String -> Configurations -> Color
getColor key { colors } =
    colors
        |> List.filterMap
            (\( k, color ) ->
                if k == key then
                    Just color

                else
                    Nothing
            )
        |> List.head
        |> Maybe.withDefault black



-- UPDATE


type Msg
    = SetFloat String Float
    | SetColor String Color
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
            let
                importedConfigurations =
                    decode configurations.jsonToImport
            in
            { importedConfigurations
                | exportedJson = importedConfigurations.exportedJson
                , jsonToImport = importedConfigurations.jsonToImport
            }

        EditedTextAreaForImport string ->
            { configurations | jsonToImport = string }

        ClickedExportButton ->
            { configurations | exportedJson = encode configurations }

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

        SetColor key newValue ->
            { configurations
                | colors =
                    configurations.colors
                        |> List.map
                            (\(( k, _ ) as el) ->
                                if k == key then
                                    ( k, newValue )

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

        colorPicker ( key, currentValue ) =
            div
                [ style "margin-top" "15px"
                ]
                [ div [] [ label [ for key ] [ text key ] ]
                , input
                    [ type_ "color"
                    , style "width" "200px"
                    , style "height" "30px"
                    , id key
                    , name key
                    , onInput
                        (\newValue ->
                            SetColor key
                                (newValue
                                    |> hexToColor
                                    |> Result.withDefault black
                                )
                        )
                    , value (colorToHex currentValue)
                    ]
                    []
                ]
    in
    div
        [ style "margin-left" "20px"
        , style "height" "100%"
        , style "overflow" "scroll"
        ]
        [ div [] (configurations.floats |> List.map floatSlider)
        , div [] (configurations.colors |> List.map colorPicker)
        , hr [] []
        , exporting configurations
        , importing configurations
        ]


exporting : Configurations -> Html Msg
exporting configurations =
    div []
        [ h3 [] [ text "Export Configurations" ]
        , p [] [ exportButton ]
        , p [] [ textAreaForExported configurations ]
        ]


importing : Configurations -> Html Msg
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


textAreaForExported : Configurations -> Html Msg
textAreaForExported configurations =
    div
        []
        [ textarea
            [ readonly True ]
            [ text configurations.exportedJson ]
        ]


textAreaForImport : Configurations -> Html Msg
textAreaForImport configurations =
    div
        []
        [ textarea
            [ Events.onInput EditedTextAreaForImport ]
            [ text configurations.jsonToImport ]
        ]
