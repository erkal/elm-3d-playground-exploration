module Playground3d.Colors exposing (..)

import Element exposing (Color, rgb, rgb255, rgba255, toRgb)


toString : Color -> String
toString color =
    let
        o =
            toRgb color
    in
    "rgba("
        ++ String.fromInt (round (o.red * 255))
        ++ ("," ++ String.fromInt (round (o.green * 255)))
        ++ ("," ++ String.fromInt (round (o.blue * 255)))
        ++ ("," ++ String.fromFloat o.alpha)
        ++ ")"


linkBlue =
    rgb255 18 133 206


rectAroundSelectedVertices =
    rgb255 40 127 230


svgLine =
    rgb255 83 83 83


yellow =
    rgb255 255 255 2


orange =
    rgb255 242 142 1


red =
    rgb255 255 2 2


mainBackground =
    rgb255 46 46 46


sliderThumb =
    rgb 0.5 0.5 0.5


highlightPink =
    rgb255 255 47 146


lightBlue =
    rgb255 134 204 247


selectBlue =
    rgb255 0 150 255


selectorStroke =
    rgb255 127 127 127


white =
    rgb255 255 255 255


lightGray =
    rgb255 220 220 220


gray =
    rgb255 180 180 180


darkGray =
    rgb255 140 140 140


black =
    rgb255 0 0 0


icon =
    rgb255 195 195 195


menuBackground =
    rgb255 83 83 83


leftStripeIconSelected =
    rgb255 48 48 48


menuBorder =
    rgba255 56 56 56 0.25


menuBorderOnMouseOver =
    rgba255 255 255 255 0.6


selectedItem =
    rgb255 48 48 48


mouseOveredItem =
    rgb255 56 56 56


lightText =
    rgb255 195 195 195


darkText =
    rgb255 23 23 23


leftBarHeader =
    rgb255 66 66 66


rightBarHeader =
    rgb255 66 66 66


inputBackground =
    rgb255 69 69 69


blue =
    rgb255 42 123 154


turquoise =
    rgb255 0 187 173


purple =
    rgb255 61 61 106


editedFileName =
    rgb255 202 118 40
