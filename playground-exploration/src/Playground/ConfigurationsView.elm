module Playground.ConfigurationsView exposing (..)

import Color exposing (black)
import Color.Convert exposing (colorToHex, hexToColor)
import Html exposing (Html, div, input, label, text)
import Html.Attributes as HA exposing (checked, class, for, id, name, style, type_)
import Html.Events
import Playground.Configurations exposing (..)


viewConfigurations : Configurations -> Html Msg
viewConfigurations configurations =
    div
        [ class "p-6 text-gray-300"
        , class "flex flex-col gap-12"
        , class "pointer-events-auto"
        ]
        (List.map viewBlock configurations)


viewBlock : Block -> Html Msg
viewBlock block =
    div [ class "flex flex-col gap-4" ]
        [ div [ class "text-2xl font-bold" ] [ Html.text block.name ]
        , div
            [ class "text-sm"
            , class "flex flex-col gap-4"
            ]
            (block.configs |> List.map viewConfig)
        ]


viewConfig : ( String, Config ) -> Html Msg
viewConfig ( key, config ) =
    case config of
        BoolConfig value ->
            div [ class "h-12 py-4" ]
                [ Html.label
                    [ class "block cursor-pointer"
                    , for key
                    ]
                    [ Html.input
                        [ class "relative bottom-[1px] align-middle mr-2 cursor-pointer"
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
            viewSliderInput
                { labelText = key
                , value = value
                , min = min
                , max = max
                , step = 0.01 * (max - min)
                , onChange = SetFloat key
                }

        IntConfig ( min, max ) value ->
            viewSliderInput
                { labelText = key
                , value = toFloat value
                , min = toFloat min
                , max = toFloat max
                , step = 1
                , onChange = round >> SetInt key
                }

        ColorConfig value ->
            div []
                [ div [ class "mb-2" ]
                    [ Html.label
                        [ for key, class "cursor-pointer" ]
                        [ Html.text key ]
                    ]
                , Html.input
                    [ type_ "color"
                    , class "w-full h-8 p-0 cursor-pointer"
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


viewSliderInput : { labelText : String, value : Float, min : Float, max : Float, step : Float, onChange : Float -> Msg } -> Html Msg
viewSliderInput { labelText, value, min, max, step, onChange } =
    div [ class "flex flex-col gap-2" ]
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
