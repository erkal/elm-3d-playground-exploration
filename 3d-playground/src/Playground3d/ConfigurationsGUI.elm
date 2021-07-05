module Playground3d.ConfigurationsGUI exposing (..)

import Color exposing (black)
import Color.Convert exposing (colorToHex, hexToColor)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Html
import Html.Attributes as HA
import Html.Events as HE
import Playground3d.Colors as Colors
import Playground3d.Configurations exposing (..)


view : Configurations -> Element Msg
view configurations =
    column
        [ width fill
        , height fill
        , spacing 12
        , Font.color Colors.lightText
        , Font.size 12
        , Font.regular
        , scrollbarY
        ]
        (List.map viewConfig configurations)


viewConfig : Config -> Element Msg
viewConfig config =
    case config of
        Float key ( min, max ) value ->
            sliderInput
                { labelText = key
                , value = value
                , min = min
                , max = max
                , step = 0.001 * (max - min)
                , onChange = SetFloat key
                }

        Color key value ->
            el [ width fill ] <|
                html <|
                    Html.div []
                        [ Html.div [ HA.style "margin-bottom" "6px" ] [ Html.label [ HA.for key ] [ Html.text key ] ]
                        , Html.input
                            [ HA.type_ "color"
                            , HA.style "width" "100%"
                            , HA.style "height" "26px"
                            , HA.style "padding" "0px"
                            , HA.id key
                            , HA.name key
                            , HE.onInput
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


sliderInput :
    { labelText : String
    , value : Float
    , min : Float
    , max : Float
    , step : Float
    , onChange : Float -> Msg
    }
    -> Element Msg
sliderInput { labelText, value, min, max, step, onChange } =
    el [ width fill ] <|
        Input.slider
            [ spacing 2
            , behindContent
                (el
                    [ width fill
                    , height (px 16)
                    , centerY
                    , Background.color Colors.inputBackground
                    , Border.rounded 4
                    ]
                    none
                )
            ]
            { onChange = onChange
            , label =
                Input.labelAbove []
                    (row [ width fill ]
                        [ el [ Font.alignLeft ] (text labelText)
                        , el
                            [ width fill
                            , Font.alignRight
                            , Font.family [ Font.monospace ]
                            ]
                            (text (String.fromFloat value))
                        ]
                    )
            , min = min
            , max = max
            , step = Just step
            , value = value
            , thumb =
                Input.thumb
                    [ width (px 12)
                    , height (px 12)
                    , Border.rounded 4
                    , Border.width 0
                    , Border.color Colors.sliderThumb
                    , Background.color Colors.icon
                    ]
            }
