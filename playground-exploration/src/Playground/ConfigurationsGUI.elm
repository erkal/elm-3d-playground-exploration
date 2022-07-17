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
    div [ class "text-xs text-white60" ]
        (List.map viewBlock configurations)


viewBlock : Block -> Html Msg
viewBlock block =
    div [ class "p-4 border-y-[0.5px] border-white20" ]
        [ div [ class "text-lg pb-2" ] [ Html.text block.name ]
        , div [ class "pl-2 pr-2" ] (block.configs |> Dict.map viewConfig |> Dict.values)
        ]


viewConfig : String -> Config -> Html Msg
viewConfig key config =
    case config of
        BoolConfig value ->
            div [ class "h-12 py-4" ]
                [ Html.label
                    [ class "block"
                    , for key
                    ]
                    [ Html.input
                        [ class "relative bottom-[1px] align-middle mr-2"
                        , type_ "checkbox"
                        , id key
                        , name key
                        , Html.Events.onCheck (SetBool key)
                        , checked value
                        ]
                        []
                    , Html.text key
                    ]
                ]

        FloatConfig ( min, max ) value ->
            sliderInput
                { labelText = key
                , value = value
                , min = min
                , max = max
                , step = 0.01 * (max - min)
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
                [ div [ class "inline-block" ] [ text labelText ]
                , div [ class "inline-block float-right" ] [ text (String.fromFloat value) ]
                ]
            ]
        , input
            [ type_ "range"
            , style "width" "100%"
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
