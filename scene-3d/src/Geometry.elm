module Geometry exposing
    ( Point
    , Vector
    , addVector
    , dotProduct
    , length
    , scaleBy
    , toSphericalCoordinates
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


toSphericalCoordinates : Vector -> { radius : Float, azimuth : Float, inclination : Float }
toSphericalCoordinates ( x, y, z ) =
    let
        r =
            length ( x, y, z )
    in
    { radius = r
    , azimuth = atan2 y x
    , inclination = acos (z / r)
    }


length : Vector -> Float
length ( x, y, z ) =
    sqrt (x ^ 2 + y ^ 2 + z ^ 2)


dotProduct : Vector -> Vector -> Float
dotProduct ( x1, y1, z1 ) ( x2, y2, z2 ) =
    x1 * x2 + y1 * y2 + z1 * z2


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
