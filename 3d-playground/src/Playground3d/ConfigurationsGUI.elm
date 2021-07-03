module Playground3d.ConfigurationsGUI exposing (..)

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Playground3d.Colors as Colors
import Playground3d.Configurations exposing (Configurations, Msg)



-- VIEW
{-
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
-}


view : Configurations -> Element Msg
view configurations =
    text "CONF"


labelAttr : Int -> List (Attribute msg)
labelAttr labelWidth =
    [ centerY
    , width (px labelWidth)
    , Font.alignRight
    ]


sliderInput :
    { labelText : String
    , labelWidth : Int
    , totalWidth : Int
    , value : Float
    , min : Float
    , max : Float
    , step : Float
    , onChange : Float -> Msg
    }
    -> Element Msg
sliderInput { labelText, labelWidth, totalWidth, value, min, max, step, onChange } =
    el [ width (px totalWidth) ] <|
        Input.slider
            [ spacing 8
            , behindContent
                (el
                    [ width fill
                    , height (px 2)
                    , centerY
                    , Background.color Colors.inputBackground
                    , Border.rounded 2
                    ]
                    none
                )
            ]
            { onChange = onChange
            , label = Input.labelLeft (labelAttr labelWidth) (text labelText)
            , min = min
            , max = max
            , step = Just step
            , value = value
            , thumb =
                Input.thumb
                    [ width (px 4)
                    , height (px 10)
                    , Border.rounded 2
                    , Border.width 0
                    , Border.color Colors.sliderThumb
                    , Background.color Colors.icon
                    ]
            }
