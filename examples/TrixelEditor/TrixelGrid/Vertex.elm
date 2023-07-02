module TrixelEditor.TrixelGrid.Vertex exposing (..)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import TrixelEditor.TrixelGrid.CoordinateTransformations exposing (toCanvasCoordinates)


type Vertex
    = Vertex ( Int, Int )


vertex : ( Int, Int ) -> Vertex
vertex =
    Vertex


canvasCoordinates : Vertex -> { x : Float, y : Float }
canvasCoordinates (Vertex ( u, v )) =
    toCanvasCoordinates
        { u = toFloat u
        , v = toFloat v
        }
