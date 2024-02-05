module IsomorphismGame.GeometryHelpers exposing (..)


type alias Point =
    { x : Float
    , y : Float
    , z : Float
    }


distanceXY : Point -> Point -> Float
distanceXY p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2)


lerp : Float -> Point -> Point -> Point
lerp rate target current =
    let
        lerpFloat get =
            get current + rate * (get target - get current)
    in
    { x = lerpFloat .x
    , y = lerpFloat .y
    , z = lerpFloat .z
    }
