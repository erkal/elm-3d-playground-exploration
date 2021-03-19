module TrixelGrid.Vertex exposing
    ( Vertex
    , toWorldCoordinates
    , vertex
    )

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/


type Vertex
    = Vertex ( Int, Int )


vertex : ( Int, Int ) -> Vertex
vertex =
    Vertex


toWorldCoordinates : Vertex -> { x : Float, y : Float }
toWorldCoordinates (Vertex ( u, v )) =
    { x = cos (degrees 30) * toFloat u
    , y = sin (degrees 30) * toFloat u + toFloat v
    }
