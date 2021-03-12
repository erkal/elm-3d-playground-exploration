module Playground3d.Geometry exposing (Point, Vector, translateBy)


type alias Point =
    { x : Float
    , y : Float
    , z : Float
    }


type alias Vector =
    ( Float, Float, Float )


translateBy : Vector -> Point -> Point
translateBy ( dx, dy, dz ) p =
    { x = p.x + dx
    , y = p.y + dy
    , z = p.z + dz
    }
