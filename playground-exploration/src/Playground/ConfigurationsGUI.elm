module Playground.ConfigurationsGUI exposing (..)

import Color exposing (black)
import Color.Convert exposing (colorToHex, hexToColor)
import Dict
import Html exposing (Html, div, input, label, span, text)
import Html.Attributes as HA exposing (checked, class, for, id, name, style, type_)
import Html.Events
import Playground.Configurations exposing (..)


view : Configurations -> Html Msg
view configurations =
    div [ class "h-full overflow-y-auto" ]
        [ div
            [ class "p-4" ]
            (List.map viewBlock configurations)
        ]


viewBlock : Block -> Html Msg
viewBlock block =
    div []
        [ div [] [ Html.text block.name ]
        , div [] (block.configs |> Dict.map viewConfig |> Dict.values)
        ]


viewConfig : String -> Config -> Html Msg
viewConfig key config =
    case config of
        BoolConfig value ->
            div []
                [ div [ class "mb-2" ] [ Html.label [ for key ] [ Html.text key ] ]
                , Html.input
                    [ type_ "checkbox"
                    , id key
                    , name key
                    , Html.Events.onCheck (SetBool key)
                    , checked value
                    ]
                    []
                ]

        FloatConfig ( min, max ) value ->
            sliderInput
                { labelText = key
                , value = value
                , min = min
                , max = max
                , step = 0.001 * (max - min)
                , onChange = SetFloat key
                }

        IntConfig ( min, max ) value ->
            sliderInput
                { labelText = key
                , value = toFloat value
                , min = toFloat min
                , max = toFloat max
                , step = 1
                , onChange = round >> SetInt key
                }

        ColorConfig value ->
            div []
                [ div [ style "margin-bottom" "6px" ] [ Html.label [ for key ] [ Html.text key ] ]
                , Html.input
                    [ type_ "color"
                    , style "width" "100%"
                    , style "height" "26px"
                    , style "padding" "0px"
                    , id key
                    , name key
                    , Html.Events.onInput
                        (\newValue ->
                            SetColor key
                                (newValue
                                    |> hexToColor
                                    |> Result.withDefault black
                                )
                        )
                    , HA.value (colorToHex value)
                    ]
                    []
                ]


sliderInput : { labelText : String, value : Float, min : Float, max : Float, step : Float, onChange : Float -> Msg } -> Html Msg
sliderInput { labelText, value, min, max, step, onChange } =
    div []
        [ label
            [ for labelText ]
            [ div [ class "relative w-full" ]
                [ div [ class "" ] [ text labelText ]
                , div [ class "absolute" ] [ text (String.fromFloat value) ]
                ]
            ]
        , input
            [ type_ "range"
            , id labelText
            , name labelText
            , HA.min (String.fromFloat min)
            , HA.max (String.fromFloat max)
            , HA.value (String.fromFloat value)
            , HA.step (String.fromFloat step)
            , Html.Events.onInput (String.toFloat >> Maybe.withDefault 42 >> onChange)
            ]
            []
        ]
