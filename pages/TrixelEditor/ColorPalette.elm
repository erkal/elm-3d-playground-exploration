module TrixelEditor.ColorPalette exposing
    ( Palette(..)
    , colors
    , fromString
    , get
    , toString
    )

import Chroma.Colors.Inferno
import Chroma.Colors.Magma
import Chroma.Colors.Parula
import Chroma.Colors.Plasma
import Chroma.Colors.Viridis
import Color exposing (Color)
import List.Nonempty as Nonempty exposing (Nonempty)


type Palette
    = Inferno
    | Magma
    | Parula
    | Plasma
    | Viridis


toString : Palette -> String
toString palette =
    case palette of
        Inferno ->
            "Inferno"

        Magma ->
            "Magma"

        Parula ->
            "Parula"

        Plasma ->
            "Plasma"

        Viridis ->
            "Viridis"


fromString : String -> Palette
fromString string =
    case string of
        "Inferno" ->
            Inferno

        "Magma" ->
            Magma

        "Parula" ->
            Parula

        "Plasma" ->
            Plasma

        "Viridis" ->
            Viridis

        _ ->
            Inferno


get : Int -> Palette -> Color
get i palette =
    Nonempty.get i (colors palette)


colors : Palette -> Nonempty Color
colors palette =
    case palette of
        Inferno ->
            Chroma.Colors.Inferno.inferno

        Magma ->
            Chroma.Colors.Magma.magma

        Parula ->
            Chroma.Colors.Parula.parula

        Plasma ->
            Chroma.Colors.Plasma.plasma

        Viridis ->
            Chroma.Colors.Viridis.viridis
