module TheSomaCube.Palette exposing (..)

import Array exposing (Array)
import Color exposing (Color, gray, hsl, hsla)
import Playground.Playground as Playground exposing (Computer, getFloat)


type alias Palette =
    Array Color



-- CREATE


palette1 : Computer -> Palette
palette1 computer =
    let
        n =
            8

        col i =
            hsl (toFloat i / n)
                (getFloat "saturation" computer)
                (getFloat "lightning" computer)
    in
    List.range 0 n
        |> List.map col
        |> Array.fromList



-- QUERY


get : Int -> Palette -> Color
get index palette =
    palette
        |> Array.get (modBy (Array.length palette) index)
        |> Maybe.withDefault gray
