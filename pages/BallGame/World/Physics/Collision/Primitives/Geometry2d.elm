module BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (..)


type alias Point2d =
    { x : Float
    , y : Float
    }


type alias Vector2d =
    ( Float, Float )


type alias Axis2d =
    { start : Point2d
    , direction : Vector2d
    }


type alias Circle2d =
    { center : Point2d
    , radius : Float
    }


type alias LineSegment2d =
    ( Point2d, Point2d )


type alias Polygon2d =
    List Point2d


vectorFrom : LineSegment2d -> Vector2d
vectorFrom ( start, end ) =
    ( end.x - start.x
    , end.y - start.y
    )


vectorTo : Point2d -> Point2d -> Vector2d
vectorTo end start =
    ( end.x - start.x
    , end.y - start.y
    )


translateBy : Vector2d -> { p | x : Float, y : Float } -> { p | x : Float, y : Float }
translateBy ( dx, dy ) p =
    { p
        | x = p.x + dx
        , y = p.y + dy
    }


add : Vector2d -> Vector2d -> Vector2d
add ( x1, y1 ) ( x2, y2 ) =
    ( x1 + x2
    , y1 + y2
    )


subtract : Vector2d -> Vector2d -> Vector2d
subtract ( x1, y1 ) ( x2, y2 ) =
    ( x2 - x1
    , y2 - y1
    )


scaleBy : Float -> Vector2d -> Vector2d
scaleBy k ( x, y ) =
    ( k * x
    , k * y
    )


setLength : Float -> Vector2d -> Vector2d
setLength k vector =
    vector
        |> scaleBy (k / length vector)


normalize : Vector2d -> Vector2d
normalize =
    setLength 1


dotProduct : Vector2d -> Vector2d -> Float
dotProduct ( x1, y1 ) ( x2, y2 ) =
    x1 * x2 + y1 * y2


componentIn : Vector2d -> Vector2d -> Vector2d
componentIn base vec =
    base |> setLength (dotProduct base vec)


crossProduct : Vector2d -> Vector2d -> Float
crossProduct ( vx, vy ) ( wx, wy ) =
    vx * wy - vy * wx


length : Vector2d -> Float
length v =
    sqrt (dotProduct v v)


rotate : Float -> Vector2d -> Vector2d
rotate theta ( x, y ) =
    ( x * cos theta - y * sin theta
    , x * sin theta + y * cos theta
    )


rotatePoint : Point2d -> Float -> Point2d -> Point2d
rotatePoint rotationCenter theta p =
    p
        |> translateBy (rotationCenter |> vectorTo (Point2d 0 0))
        |> rotatePointAroundOrigin theta
        |> translateBy (Point2d 0 0 |> vectorTo rotationCenter)


rotatePointAroundOrigin : Float -> Point2d -> Point2d
rotatePointAroundOrigin theta { x, y } =
    { x = x * cos theta - y * sin theta
    , y = x * sin theta + y * cos theta
    }


distance : Point2d -> Point2d -> Float
distance p q =
    length
        ( p.x - q.x
        , p.y - q.y
        )


normal : LineSegment2d -> Vector2d
normal lineSegment =
    lineSegment
        |> vectorFrom
        |> rotate -(degrees 90)
        |> normalize


shiftLineSegmentToRight : Float -> LineSegment2d -> LineSegment2d
shiftLineSegmentToRight d ( p, q ) =
    let
        translation =
            p
                |> vectorTo q
                |> rotate -(degrees 90)
                |> setLength d
    in
    ( p |> translateBy translation
    , q |> translateBy translation
    )


edgesOfPolyline : List Point2d -> List LineSegment2d
edgesOfPolyline vertices =
    let
        shiftedVertices =
            case vertices of
                head :: tail ->
                    tail

                [] ->
                    []
    in
    List.map2 Tuple.pair vertices shiftedVertices


edgesOfPolygon : List Point2d -> List LineSegment2d
edgesOfPolygon vertices =
    let
        shiftedVertices =
            case vertices of
                head :: tail ->
                    tail ++ [ head ]

                [] ->
                    []
    in
    List.map2 Tuple.pair vertices shiftedVertices


{-| -}
hullAroundPolygon : Float -> List Point2d -> { shiftedWalls : List LineSegment2d, cornerCircles : List Circle2d }
hullAroundPolygon hullRadius polygonVertices =
    { shiftedWalls = edgesOfPolygon polygonVertices |> List.map (shiftLineSegmentToRight hullRadius)
    , cornerCircles = polygonVertices |> List.map (\p -> { center = p, radius = hullRadius })
    }


maybeClosestPointOnTheLineSegment : LineSegment2d -> Circle2d -> Maybe Point2d
maybeClosestPointOnTheLineSegment (( start, _ ) as lineSegment) ({ radius } as circle) =
    let
        c =
            circle.center

        sign =
            if crossProduct (vectorFrom lineSegment) (start |> vectorTo c) < 0 then
                1

            else
                -1
    in
    intersectsAxisAt
        { start = c
        , direction = rotate (sign * degrees 90) (vectorFrom lineSegment)
        }
        lineSegment


maybeClosestPointOnTheAxis : Axis2d -> Circle2d -> Maybe Point2d
maybeClosestPointOnTheAxis axis ({ radius } as circle) =
    let
        c =
            circle.center

        sign =
            if crossProduct axis.direction (axis.start |> vectorTo c) < 0 then
                1

            else
                -1
    in
    axesIntersectAt
        { start = c
        , direction = rotate (sign * degrees 90) axis.direction
        }
        axis


toAxis : LineSegment2d -> Axis2d
toAxis ( start, end ) =
    { start = start
    , direction = vectorFrom ( start, end )
    }


intersectCircleWithLineSegment : LineSegment2d -> Circle2d -> List Point2d
intersectCircleWithLineSegment ( start, end ) circle =
    if distance start circle.center < circle.radius && distance end circle.center >= circle.radius then
        intersectCircleWithDirectedLineSegment ( end, start ) circle

    else
        intersectCircleWithDirectedLineSegment ( start, end ) circle


intersectCircleWithDirectedLineSegment : LineSegment2d -> Circle2d -> List Point2d
intersectCircleWithDirectedLineSegment (( start, end ) as lineSegment) ({ radius } as circle) =
    case maybeClosestPointOnTheAxis (toAxis lineSegment) circle of
        Nothing ->
            []

        Just closestPointOnTheAxis ->
            let
                d =
                    distance circle.center closestPointOnTheAxis
            in
            if d <= radius then
                let
                    shift =
                        sqrt (radius * radius - d * d)

                    firstIntersectionP =
                        closestPointOnTheAxis
                            |> translateBy (vectorFrom lineSegment |> setLength -shift)

                    secondIntersectionP =
                        closestPointOnTheAxis
                            |> translateBy (vectorFrom lineSegment |> setLength shift)

                    liesOnTheSegment p =
                        (dotProduct (start |> vectorTo end) (start |> vectorTo p) >= 0)
                            && (distance start p <= distance start end)
                in
                List.filter liesOnTheSegment
                    (if d == radius then
                        [ firstIntersectionP ]

                     else
                        [ firstIntersectionP, secondIntersectionP ]
                    )

            else
                []


maybeFirstIntersectionPoint : LineSegment2d -> Circle2d -> Maybe Point2d
maybeFirstIntersectionPoint (( start, end ) as lineSegment) ({ radius } as circle) =
    case maybeClosestPointOnTheAxis (toAxis lineSegment) circle of
        Nothing ->
            Nothing

        Just closestPointOnTheAxis ->
            let
                d =
                    distance circle.center closestPointOnTheAxis
            in
            if d <= radius then
                let
                    intersectionP =
                        closestPointOnTheAxis
                            |> translateBy (vectorFrom lineSegment |> setLength -(sqrt (radius * radius - d * d)))

                    liesOnTheSegment =
                        (dotProduct (start |> vectorTo end) (start |> vectorTo intersectionP) >= 0)
                            && (distance start intersectionP <= distance start end)
                in
                if liesOnTheSegment then
                    Just intersectionP

                else
                    Nothing

            else
                Nothing


{-| -}
axesIntersectAt : Axis2d -> Axis2d -> Maybe Point2d
axesIntersectAt axis1 axis2 =
    -- The implementation is explained in http://stackoverflow.com/a/565282/4476242
    let
        ( ( p, r ), ( q, s ) ) =
            ( ( axis1.start, axis1.direction )
            , ( axis2.start, axis2.direction )
            )

        denom =
            crossProduct r s

        nom_t =
            crossProduct (p |> vectorTo q) s

        nom_u =
            crossProduct (p |> vectorTo q) r

        t =
            nom_t / denom

        u =
            nom_u / denom
    in
    if nom_u == 0 && denom == 0 then
        {- collinear -}
        Nothing

    else if denom == 0 then
        {- lines are parallel and non-intersecting -}
        Nothing

    else if 0 <= t && 0 <= u then
        {- intersect in one point -}
        Just (p |> translateBy (scaleBy t r))

    else
        {- not parallel but do not intersect -}
        Nothing


{-| `intersection l k` is

  - `Nothing`, if the line segments `l` and `k` don't intersect or if they are collinear,
  - (`Just`) the intersection point, otherwise.

-}
lineSegmentsIntersectAt : LineSegment2d -> LineSegment2d -> Maybe Point2d
lineSegmentsIntersectAt (( start1, _ ) as l1) (( start2, _ ) as l2) =
    -- The implementation is explained in http://stackoverflow.com/a/565282/4476242
    let
        ( ( p, r ), ( q, s ) ) =
            ( ( start1, vectorFrom l1 )
            , ( start2, vectorFrom l2 )
            )

        denom =
            crossProduct r s

        nom_t =
            crossProduct (p |> vectorTo q) s

        nom_u =
            crossProduct (p |> vectorTo q) r

        t =
            nom_t / denom

        u =
            nom_u / denom
    in
    if nom_u == 0 && denom == 0 then
        {- collinear -}
        Nothing

    else if denom == 0 then
        {- lines are parallel and non-intersecting -}
        Nothing

    else if 0 <= t && t <= 1 && 0 <= u && u <= 1 then
        {- intersect in one point -}
        Just (p |> translateBy (scaleBy t r))

    else
        {- not parallel but do not intersect -}
        Nothing


intersectsAxisAt : Axis2d -> LineSegment2d -> Maybe Point2d
intersectsAxisAt axis (( start, _ ) as l) =
    -- The implementation is explained in http://stackoverflow.com/a/565282/4476242
    let
        ( ( p, r ), ( q, s ) ) =
            ( ( axis.start, axis.direction )
            , ( start, vectorFrom l )
            )

        denom =
            crossProduct r s

        nom_t =
            crossProduct (p |> vectorTo q) s

        nom_u =
            crossProduct (p |> vectorTo q) r

        t =
            nom_t / denom

        u =
            nom_u / denom
    in
    if nom_u == 0 && denom == 0 then
        {- collinear -}
        Nothing

    else if denom == 0 then
        {- lines are parallel and non-intersecting -}
        Nothing

    else if t >= 0 && u >= 0 && u <= 1 then
        {- intersect in one point -}
        Just (p |> translateBy (scaleBy t r))

    else
        {- not parallel but do not intersect -}
        Nothing


{-| <https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm>
-}
pointInPolygon : Point2d -> List Point2d -> Bool
pointInPolygon p polygonVertices =
    let
        ray =
            { start = p
            , direction = ( 1000, 1000 )
            }

        isOdd n =
            modBy 2 n == 1

        numberOfIntersectingEdges =
            edgesOfPolygon polygonVertices
                |> List.filterMap (intersectsAxisAt ray)
                |> List.length
    in
    isOdd numberOfIntersectingEdges
