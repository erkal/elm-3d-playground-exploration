module Playground3d.Configurations exposing (..)

import Color exposing (Color, black)
import Color.Convert exposing (colorToHex, hexToColor)
import Html exposing (Html, button, div, h3, hr, input, label, p, span, text, textarea)
import Html.Attributes exposing (for, id, name, readonly, step, style, type_, value)
import Html.Events as Events exposing (onClick, onInput)
import Json.Decode exposing (Decoder)
import Json.Encode exposing (Value)
import Round exposing (roundNum)


type alias Configurations =
    { floats : List ( String, ( Float, Float, Float ) )
    , colors : List ( String, Color )
    , exportedJson : String
    , jsonToImport : String
    }



-- INIT


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
            { configurations
                | floats =
                    configurations.jsonToImport
                        |> Json.Decode.decodeString floatsDecoder
                        |> Result.withDefault []
            }

        EditedTextAreaForImport string ->
            { configurations | jsonToImport = string }

        ClickedExportButton ->
            { configurations
                | exportedJson =
                    Json.Encode.encode 0
                        (encodeFloats configurations.floats)
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
        [ style "margin" "20px"
        , style "position" "fixed"
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



-- DECODE


{-| THIS FUNCTION IS GENERATED
-}
floatsDecoder : Decoder (List ( String, ( Float, Float, Float ) ))
floatsDecoder =
    Json.Decode.list (Json.Decode.map2 Tuple.pair (Json.Decode.index 0 Json.Decode.string) (Json.Decode.index 1 (Json.Decode.map3 (\a b c -> ( a, b, c )) (Json.Decode.index 0 Json.Decode.float) (Json.Decode.index 1 Json.Decode.float) (Json.Decode.index 2 Json.Decode.float))))


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
