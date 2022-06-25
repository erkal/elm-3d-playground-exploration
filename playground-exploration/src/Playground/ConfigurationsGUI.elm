module Playground.ConfigurationsGUI exposing (..)

import Color exposing (black)
import Color.Convert exposing (colorToHex, hexToColor)
import Dict
import Html exposing (Html, div, input, label)
import Html.Attributes as HA exposing (class, for, id, name, type_)
import Html.Events
import Playground.Configurations exposing (..)


view : Configurations -> Html Msg
view configurations =
    div [ class "text-xs" ]
        (List.map viewBlock configurations)


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
            div [] []

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
                [ Html.div [ HA.style "margin-bottom" "6px" ] [ Html.label [ HA.for key ] [ Html.text key ] ]
                , Html.input
                    [ HA.type_ "color"
                    , HA.style "width" "100%"
                    , HA.style "height" "26px"
                    , HA.style "padding" "0px"
                    , HA.id key
                    , HA.name key
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
            [ div [ class "w-full" ] [ Html.text labelText ] ]
        , input
            [ type_ "range"
            , id labelText
            , name labelText
            , HA.min (String.fromFloat min)
            , HA.max (String.fromFloat max)
            , HA.value (String.fromFloat value)
            , HA.step (String.fromFloat step)
            , Html.Events.onInput (String.toFloat >> Maybe.withDefault 0 >> onChange)
            ]
            []
        ]



--
--
--
--viewOld : Configurations -> Element Msg
--viewOld =
--    lazy viewConfigurationsOLD
--
--
--viewConfigurationsOLD : Configurations -> Element Msg
--viewConfigurationsOLD configurations =
--    column
--        [ width fill
--        , height fill
--        , Font.color Colors.lightText
--        , Font.size 12
--        , Font.regular
--        , scrollbarY
--        ]
--        (List.map viewBlockOLD configurations)
--
--
--viewBlockOLD : Block -> Element Msg
--viewBlockOLD block =
--    column
--        [ width fill
--        , spacing 8
--        , paddingXY 0 14
--        , Border.widthEach { bottom = 1, left = 0, right = 0, top = 0 }
--        , Border.color Colors.menuBorder
--        ]
--        [ el [ Font.size 16, Font.bold, Font.color Colors.white ] (text block.name)
--        , column
--            [ width fill
--            , spacing 6
--            ]
--            (block.configs |> Dict.map viewConfigOLD |> Dict.values)
--        ]
--
--
--viewConfigOLD : String -> Config -> Element Msg
--viewConfigOLD key config =
--    case config of
--        BoolConfig value ->
--            checkbox []
--                { onChange = SetBool key
--                , icon = Input.defaultCheckbox
--                , checked = value
--                , label = Input.labelRight [] (text key)
--                }
--
--        FloatConfig ( min, max ) value ->
--            html
--                (sliderInput
--                    { labelText = key
--                    , value = value
--                    , min = min
--                    , max = max
--                    , step = 0.001 * (max - min)
--                    , onChange = SetFloat key
--                    }
--                )
--
--        IntConfig ( min, max ) value ->
--            html
--                (sliderInput
--                    { labelText = key
--                    , value = toFloat value
--                    , min = toFloat min
--                    , max = toFloat max
--                    , step = 1
--                    , onChange = round >> SetInt key
--                    }
--                )
--
--        ColorConfig value ->
--            el [ width fill ] <|
--                html <|
--                    Html.div []
--                        [ Html.div [ HA.style "margin-bottom" "6px" ] [ Html.label [ HA.for key ] [ Html.text key ] ]
--                        , Html.input
--                            [ HA.type_ "color"
--                            , HA.style "width" "100%"
--                            , HA.style "height" "26px"
--                            , HA.style "padding" "0px"
--                            , HA.id key
--                            , HA.name key
--                            , HE.onInput
--                                (\newValue ->
--                                    SetColor key
--                                        (newValue
--                                            |> hexToColor
--                                            |> Result.withDefault black
--                                        )
--                                )
--                            , HA.value (colorToHex value)
--                            ]
--                            []
--                        ]
--
--
--sliderInputOLD :
--    { labelText : String
--    , value : Float
--    , min : Float
--    , max : Float
--    , step : Float
--    , onChange : Float -> Msg
--    }
--    -> Element Msg
--sliderInputOLD { labelText, value, min, max, step, onChange } =
--    el [ width fill ] <|
--        Input.slider
--            [ spacing 2
--            , behindContent
--                (el
--                    [ width fill
--                    , height (px 16)
--                    , centerY
--                    , Background.color Colors.inputBackground
--                    , Border.rounded 4
--                    ]
--                    none
--                )
--            ]
--            { onChange = onChange
--            , label =
--                Input.labelAbove []
--                    (row [ width fill ]
--                        [ el [ Font.alignLeft ] (text labelText)
--                        , el
--                            [ width fill
--                            , Font.alignRight
--                            , Font.family [ Font.monospace ]
--                            ]
--                            (text (String.fromFloat value))
--                        ]
--                    )
--            , min = min
--            , max = max
--            , step = Just step
--            , value = value
--            , thumb =
--                Input.thumb
--                    [ width (px 12)
--                    , height (px 12)
--                    , Border.rounded 4
--                    , Border.width 0
--                    , Border.color Colors.sliderThumb
--                    , Background.color Colors.icon
--                    ]
--            }
