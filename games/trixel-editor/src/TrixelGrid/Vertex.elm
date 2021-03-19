module TrixelGrid.Vertex exposing
    ( Vertex
    , fromGridCoordinates
    , vertex
    )

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/


type Vertex
    = Vertex ( Int, Int )


vertex : ( Int, Int ) -> Vertex
vertex =
    Vertex


fromGridCoordinates : Vertex -> { x : Float, y : Float }
fromGridCoordinates (Vertex ( u, v )) =
    let
        i =
            { x = 0
            , y = 1
            }

        j =
            { x = cos (degrees 30)
            , y = sin (degrees 30)
            }
    in
    { x = i.x * toFloat u + j.x * toFloat v
    , y = i.y * toFloat u + j.y * toFloat v
    }
