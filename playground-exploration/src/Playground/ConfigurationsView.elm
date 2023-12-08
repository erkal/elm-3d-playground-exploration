module Playground.ConfigurationsView exposing (..)

import Color exposing (black)
import Color.Convert exposing (colorToHex, hexToColor)
import Html exposing (Html, div, input, label, text)
import Html.Attributes as HA exposing (checked, class, for, id, name, style, type_)
import Html.Events exposing (onCheck)
import Html.Events.Extra exposing (onChange)
import Playground.Configurations exposing (..)
import Tools.SelectList.SelectList as SelectList


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
        [ div [ class "text-2xl font-bold" ] [ text block.name ]
        , div
            [ class "text-sm"
            , class "flex flex-col gap-4"
            ]
            (block.configs |> List.map viewConfig)
        ]


viewConfig : ( String, Config ) -> Html Msg
viewConfig ( name, config ) =
    case config of
        BoolConfig value ->
            div [ class "h-12 py-4" ]
                [ label
                    [ class "block"
                    , for name
                    ]
                    [ Html.input
                        [ class "relative bottom-[1px] align-middle mr-2 cursor-pointer"
                        , type_ "checkbox"
                        , id name
                        , HA.name name
                        , onCheck (SetBool name)
                        , checked value
                        ]
                        []
                    , text name
                    ]
                ]

        FloatConfig ( min, max ) value ->
            viewSliderInput
                { name = name
                , value = value
                , min = min
                , max = max
                , step = 0.01 * (max - min)
                , onChange = SetFloat name
                }

        IntConfig ( min, max ) value ->
            viewSliderInput
                { name = name
                , value = toFloat value
                , min = toFloat min
                , max = toFloat max
                , step = 1
                , onChange = round >> SetInt name
                }

        ColorConfig value ->
            div []
                [ div [ class "mb-2" ]
                    [ label
                        [ for name ]
                        [ text name ]
                    ]
                , Html.input
                    [ type_ "color"
                    , class "w-full h-8 p-0 cursor-pointer"
                    , id name
                    , HA.name name
                    , Html.Events.onInput
                        (\newValue ->
                            SetColor name
                                (newValue
                                    |> hexToColor
                                    |> Result.withDefault black
                                )
                        )
                    , HA.value (colorToHex value)
                    ]
                    []
                ]

        OptionsConfig value ->
            let
                optionWith : String -> Html Msg
                optionWith optionStr =
                    Html.option
                        [ HA.value optionStr ]
                        [ text optionStr ]
            in
            div []
                [ div [ class "mb-2" ]
                    [ label
                        [ for name ]
                        [ text name ]
                    ]
                , Html.select
                    [ class "w-fit px-2 py-1 font-bold rounded-full bg-white text-black"
                    , id name
                    , HA.name name
                    , onChange (SetOption name)
                    , HA.value (value |> SelectList.getCurrent)
                    ]
                    (value |> SelectList.toList |> List.map optionWith)
                ]


viewSliderInput : { name : String, value : Float, min : Float, max : Float, step : Float, onChange : Float -> Msg } -> Html Msg
viewSliderInput { name, value, min, max, step, onChange } =
    div [ class "flex flex-col gap-2" ]
        [ label
            [ for name ]
            [ div [ class "relative w-full" ]
                [ div [ class "inline-block" ] [ text name ]
                , div [ class "inline-block float-right" ] [ text (String.fromFloat value) ]
                ]
            ]
        , input
            [ type_ "range"
            , style "width" "100%"
            , id name
            , HA.name name
            , HA.min (String.fromFloat min)
            , HA.max (String.fromFloat max)
            , HA.value (String.fromFloat value)
            , HA.step (String.fromFloat step)
            , Html.Events.onInput (String.toFloat >> Maybe.withDefault 42 >> onChange)
            ]
            []
        ]
