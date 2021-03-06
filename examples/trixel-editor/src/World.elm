module World exposing (..)

import Color exposing (Color)
import ColorPalette exposing (Palette(..))
import Dict.Any exposing (AnyDict)
import Playground exposing (Computer)
import TrixelGrid.Face as Face exposing (Face)


type alias World =
    { trixels : AnyDict ( ( Int, Int ), Int ) Face ColorIndex
    , palette : Palette
    , backgroundColorIndex : ColorIndex
    }


type alias ColorIndex =
    Int


empty : World
empty =
    { trixels = Dict.Any.empty Face.toComparable
    , palette = Magma
    , backgroundColorIndex = 150
    }


setBackgroundColorIndex : ColorIndex -> World -> World
setBackgroundColorIndex colorIndex world =
    { world | backgroundColorIndex = colorIndex }


setPalette : Palette -> World -> World
setPalette palette world =
    { world | palette = palette }


insert : Face -> Int -> World -> World
insert triangle colorIndex world =
    { world | trixels = world.trixels |> Dict.Any.insert triangle colorIndex }


remove : Face -> World -> World
remove triangle world =
    { world | trixels = world.trixels |> Dict.Any.remove triangle }
