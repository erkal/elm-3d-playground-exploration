module TrixelGrid.CoordinateTransformations exposing
    ( fromWorldCoordinates
    , toWorldCoordinates
    )

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
