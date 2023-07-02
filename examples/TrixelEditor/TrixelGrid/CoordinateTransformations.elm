module TrixelEditor.TrixelGrid.CoordinateTransformations exposing
    ( fromCanvasCoordinates
    , toCanvasCoordinates
    )

{-| -}


{-| This is the matrix {{cos 30,0},{sin 30,1}}
-}
toCanvasCoordinates : { u : Float, v : Float } -> { x : Float, y : Float }
toCanvasCoordinates { u, v } =
    { x = sqrt 3 / 2 * u
    , y = 1 / 2 * u + v
    }


{-| wolframalpha inverted the matrix {{cos 30,0},{sin 30,1}}
-}
fromCanvasCoordinates : { x : Float, y : Float } -> { u : Float, v : Float }
fromCanvasCoordinates { x, y } =
    { u = 2 / sqrt 3 * x
    , v = -1 / sqrt 3 * x + y
    }
