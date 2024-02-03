module Tools.HtmlHelpers.HtmlHelpers exposing (..)

import Html exposing (Attribute, Html, div, text)
import Html.Attributes exposing (class, style)
import Html.Events exposing (on, preventDefaultOn, stopPropagationOn)
import Json.Decode as Decode exposing (Decoder)
import Tools.Geometry.Geometry exposing (Point2d)


hiddenIf : Bool -> Attribute msg
hiddenIf condition =
    if condition then
        style "display" "none"

    else
        class ""


showIf : Bool -> Attribute msg
showIf condition =
    hiddenIf (not condition)


classIf : Bool -> String -> Attribute msg
classIf condition className =
    if condition then
        class className

    else
        class ""


styleIf : Bool -> String -> String -> Attribute msg
styleIf condition styleName style_ =
    if condition then
        style styleName style_

    else
        style "" ""


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



--


type alias BoundingClientRect =
    { x : Float
    , y : Float
    , width : Float
    , height : Float
    , top : Float
    , right : Float
    , bottom : Float
    , left : Float
    }


includedInBoundingClientRect : BoundingClientRect -> Point2d -> Bool
includedInBoundingClientRect rect point =
    List.all identity
        [ rect.left < point.x
        , rect.right > point.x
        , rect.top < point.y
        , rect.bottom > point.y
        ]


boundingClientRectsIntersect : BoundingClientRect -> BoundingClientRect -> Bool
boundingClientRectsIntersect rect1 rect2 =
    List.all identity
        [ rect1.left < rect2.right
        , rect1.right > rect2.left
        , rect1.top < rect2.bottom
        , rect1.bottom > rect2.top
        ]


boundingClientRectDecoder : Decoder BoundingClientRect
boundingClientRectDecoder =
    Decode.map8 BoundingClientRect
        (Decode.field "x" Decode.float)
        (Decode.field "y" Decode.float)
        (Decode.field "width" Decode.float)
        (Decode.field "height" Decode.float)
        (Decode.field "top" Decode.float)
        (Decode.field "right" Decode.float)
        (Decode.field "bottom" Decode.float)
        (Decode.field "left" Decode.float)
