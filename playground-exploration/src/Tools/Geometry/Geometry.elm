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


{-| given an angle alpha in range (-pi, pi) this calculates the vector from center of the rectangle and intersection of rectangle point with the line from center that has the angle alpha with the x-axis
-}
vectorFromCenterToRectanglePointAtAngle : Float -> { width : Float, height : Float } -> ( Float, Float )
vectorFromCenterToRectanglePointAtAngle alpha { width, height } =
    -- TODO: This is incomplete and takes only the height into account. It should also take the width into account.
    let
        intersectsHorizontalEdge =
            abs alpha > abs (atan2 height width) && abs alpha < pi - abs (atan2 height width)
    in
    if intersectsHorizontalEdge then
        let
            dy =
                if alpha > 0 then
                    height / 2

                else
                    -height / 2

            dx =
                dy / tan alpha
        in
        ( dx, dy )

    else
        -- intersects vertical edge
        let
            dx =
                if abs alpha < pi / 2 then
                    width / 2

                else
                    -width / 2

            dy =
                dx * tan alpha
        in
        ( dx, dy )


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
