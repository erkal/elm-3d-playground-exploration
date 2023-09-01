module Tools.Geometry.Geometry exposing (..)


type alias Point2d =
    { x : Float, y : Float }


type alias Vector2d =
    ( Float, Float )


type alias BoundingBox =
    { minX : Float
    , maxX : Float
    , minY : Float
    , maxY : Float
    }


scaleAbout : Point2d -> Float -> Point2d -> Point2d
scaleAbout centerPoint scale point =
    vectorFrom centerPoint point
        |> scaleBy scale
        |> (\vec -> translateBy vec centerPoint)


translateBy : Vector2d -> Point2d -> Point2d
translateBy ( dx, dy ) { x, y } =
    { x = x + dx
    , y = y + dy
    }


{-| The angle of the vector from the first point to the second point.
The angle is measured in radians, clockwise from the positive x-axis.
-}
angleOf : Point2d -> Point2d -> Float
angleOf p q =
    atan2 (q.y - p.y) (q.x - p.x)


add : Vector2d -> Vector2d -> Vector2d
add ( x1, y1 ) ( x2, y2 ) =
    ( x1 + x2, y1 + y2 )


scaleBy : Float -> Vector2d -> Vector2d
scaleBy k ( x, y ) =
    ( k * x, k * y )


vectorFrom : Point2d -> Point2d -> Vector2d
vectorFrom p q =
    ( q.x - p.x
    , q.y - p.y
    )


distance : Point2d -> Point2d -> Float
distance p q =
    length
        ( p.x - q.x
        , p.y - q.y
        )


length : Vector2d -> Float
length v =
    sqrt (dotProduct v v)


dotProduct : Vector2d -> Vector2d -> Float
dotProduct ( x1, y1 ) ( x2, y2 ) =
    x1 * x2 + y1 * y2


boundingBoxFrom : Point2d -> Point2d -> BoundingBox
boundingBoxFrom firstPoint secondPoint =
    let
        ( x1, y1 ) =
            ( firstPoint.x, firstPoint.y )

        ( x2, y2 ) =
            ( secondPoint.x, secondPoint.y )
    in
    { minX = min x1 x2
    , maxX = max x1 x2
    , minY = min y1 y2
    , maxY = max y1 y2
    }


intersects : BoundingBox -> BoundingBox -> Bool
intersects other boundingBox =
    (boundingBox.minX <= other.maxX)
        && (boundingBox.maxX >= other.minX)
        && (boundingBox.minY <= other.maxY)
        && (boundingBox.maxY >= other.minY)
