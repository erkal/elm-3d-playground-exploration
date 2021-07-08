module Geometry exposing (..)


type alias Point =
    { x : Float
    , y : Float
    , z : Float
    }


middlePoint : Point -> Point -> Point
middlePoint p q =
    Point
        (0.5 * (p.x + q.x))
        (0.5 * (p.y + q.y))
        (0.5 * (p.z + q.z))


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
