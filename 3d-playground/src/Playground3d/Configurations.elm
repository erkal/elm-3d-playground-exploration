module Playground3d.Configurations exposing (..)

import Html exposing (Html, br, div, h1, input, label, span, text)
import Html.Attributes exposing (for, id, name, step, style, type_, value, width)
import Html.Events exposing (onInput)
import Round exposing (roundNum)


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


view : Configurations -> Html Msg
view configurations =
    let
        floatSlider ( key, ( min, currentValue, max ) ) =
            div
                [ style "margin-top" "15px"
                , style "font-size" "20px"
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
    in
    div
        [ style "margin" "20px"
        , style "position" "fixed"
        ]
        [ div [] (configurations.floats |> List.map floatSlider)
        , br [] []
        ]
