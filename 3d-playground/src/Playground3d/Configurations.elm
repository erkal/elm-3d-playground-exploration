module Playground3d.Configurations exposing (..)

import Html exposing (Html, br, div, h1, input, label, span, text)
import Html.Attributes exposing (for, id, name, step, style, type_, value, width)
import Html.Events exposing (onInput)


type alias Configurations =
    { floats : List ( String, ( Float, Float, Float ) )
    }


empty : Configurations
empty =
    { floats = []
    }


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


type Msg
    = SetFloat String Float


update : Msg -> Configurations -> Configurations
update msg configurations =
    case msg of
        SetFloat key newValue ->
            { configurations
                | floats =
                    configurations.floats
                        |> List.map
                            (\(( k, ( min, _, max ) ) as el) ->
                                if k == key then
                                    ( k, ( min, newValue, max ) )

                                else
                                    el
                            )
            }


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
                , div
                    [ style "font-family" "monospace" ]
                    [ text (String.fromFloat currentValue) ]
                ]
    in
    div
        [ style "margin" "20px"
        , style "position" "fixed"
        ]
        [ div [] (configurations.floats |> List.map floatSlider)
        , br [] []
        ]
