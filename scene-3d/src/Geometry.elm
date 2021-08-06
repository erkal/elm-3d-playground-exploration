module Geometry exposing
    ( Point
    , Vector
    , addVector
    , scaleBy
    , translateBy
    )


type alias Point =
    { x : Float
    , y : Float
    , z : Float
    }


type alias Vector =
    ( Float, Float, Float )


addVector : Vector -> Vector -> Vector
addVector ( x1, y1, z1 ) ( x2, y2, z2 ) =
    ( x1 + x2
    , y1 + y2
    , z1 + z2
    )


scaleBy : Float -> Vector -> Vector
scaleBy k ( dx, dy, dz ) =
    ( k * dx
    , k * dy
    , k * dz
    )


translateBy : Vector -> Point -> Point
translateBy ( dx, dy, dz ) p =
    { x = p.x + dx
    , y = p.y + dy
    , z = p.z + dz
    }
