module TrixelGrid.Vertex exposing (..)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import TrixelGrid.CoordinateTransformations exposing (toWorldCoordinates)


type Vertex
    = Vertex ( Int, Int )


vertex : ( Int, Int ) -> Vertex
vertex =
    Vertex


worldCoordinates : Vertex -> { x : Float, y : Float }
worldCoordinates (Vertex ( u, v )) =
    toWorldCoordinates
        { u = toFloat u
        , v = toFloat v
        }
