module TrixelGrid.Vertex exposing
    ( Vertex
    , fromWorldCoordinates
    , vertex
    , worldCoordinates
    )

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/


type Vertex
    = Vertex ( Int, Int )


vertex : ( Int, Int ) -> Vertex
vertex =
    Vertex


{-| This is the matrix {{cos 30,0},{sin 30,1}}
-}
toWorldCoordinates : { u : Float, v : Float } -> { x : Float, y : Float }
toWorldCoordinates { u, v } =
    { x = sqrt 3 / 2 * u
    , y = 1 / 2 * u + v
    }


{-| wolframalpha inverted the matrix {{cos 30,0},{sin 30,1}}
-}
fromWorldCoordinates : { x : Float, y : Float } -> { u : Float, v : Float }
fromWorldCoordinates { x, y } =
    { u = 2 / sqrt 3 * x
    , v = -1 / sqrt 3 * x + y
    }


worldCoordinates : Vertex -> { x : Float, y : Float }
worldCoordinates (Vertex ( u, v )) =
    toWorldCoordinates
        { u = toFloat u
        , v = toFloat v
        }
