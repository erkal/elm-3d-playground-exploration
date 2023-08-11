module Tools.HtmlHelpers.HtmlHelpers exposing (..)

import Browser.Events
import Html exposing (Attribute, Html, div, text)
import Html.Attributes exposing (class)
import Html.Events exposing (on, preventDefaultOn, stopPropagationOn)
import Json.Decode as Decode


onClickWithoutPropagation : msg -> Attribute msg
onClickWithoutPropagation msg =
    stopPropagationOn "click"
        (msg
            |> Decode.succeed
            |> Decode.map (\msg_ -> ( msg_, True ))
        )


onMouseDownWithoutPropagation : msg -> Attribute msg
onMouseDownWithoutPropagation msg =
    stopPropagationOn "mousedown"
        (msg
            |> Decode.succeed
            |> Decode.map (\msg_ -> ( msg_, True ))
        )


onMouseMoveWithoutPropagation : msg -> Attribute msg
onMouseMoveWithoutPropagation msg =
    stopPropagationOn "mousemove"
        (msg
            |> Decode.succeed
            |> Decode.map (\msg_ -> ( msg_, True ))
        )


onMouseOverWithoutPropagation : msg -> Attribute msg
onMouseOverWithoutPropagation msg =
    stopPropagationOn "mouseover"
        (msg
            |> Decode.succeed
            |> Decode.map (\msg_ -> ( msg_, True ))
        )
