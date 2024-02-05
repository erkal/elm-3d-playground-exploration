module BallGame.World.Physics.Collision.Primitives.CircleToPolygon exposing (CollisionResult, collide)

import BallGame.World.Physics.Collision.Primitives.Geometry2d as Geometry2d exposing (Circle2d, LineSegment2d, Point2d, Vector2d, length, normal, normalize, rotate, setLength, translateBy, vectorFrom, vectorTo)


type alias CollisionResultForPoint =
    { translationToCollisionPoint : Vector2d
    , normalAtCollisionPoint : Vector2d
    }


type alias CollisionResult =
    { translationToCollisionPoint : Vector2d
    , normalAtCollisionPoint : Vector2d
    , collisionPoint : Point2d
    }


withCollisionPoint : Point2d -> CollisionResultForPoint -> CollisionResult
withCollisionPoint collisionPoint c =
    { translationToCollisionPoint = c.translationToCollisionPoint
    , normalAtCollisionPoint = c.normalAtCollisionPoint
    , collisionPoint = collisionPoint
    }



--


{-| -}
pointToCircle : Point2d -> Vector2d -> Circle2d -> Maybe CollisionResultForPoint
pointToCircle point circleTranslation targetCircle =
    let
        translationAsLineSegment =
            ( point
            , point |> translateBy circleTranslation
            )

        maybeFirstIntersectionPoint =
            targetCircle
                |> Geometry2d.maybeFirstIntersectionPoint translationAsLineSegment
    in
    maybeFirstIntersectionPoint
        |> Maybe.map
            (\p ->
                { translationToCollisionPoint = point |> vectorTo p
                , normalAtCollisionPoint = targetCircle.center |> vectorTo p |> normalize
                }
            )


{-| -}
pointToLineSegment : Point2d -> Vector2d -> LineSegment2d -> Maybe CollisionResultForPoint
pointToLineSegment point circleTranslation lineSegment =
    let
        translationAsLineSegment =
            ( point
            , point |> translateBy circleTranslation
            )

        maybeIntersectionPoint =
            lineSegment
                |> Geometry2d.lineSegmentsIntersectAt translationAsLineSegment
    in
    maybeIntersectionPoint
        |> Maybe.map
            (\p ->
                { translationToCollisionPoint = point |> vectorTo p
                , normalAtCollisionPoint = lineSegment |> normal
                }
            )


{-| -}
collide : Circle2d -> Vector2d -> List Point2d -> Maybe CollisionResult
collide circle circleTranslation polygonVertices =
    let
        { shiftedWalls, cornerCircles } =
            Geometry2d.hullAroundPolygon circle.radius polygonVertices

        collisionResultsForCornerCircles =
            cornerCircles
                |> List.filterMap
                    (\cornerCircle ->
                        cornerCircle
                            |> pointToCircle circle.center circleTranslation
                            |> Maybe.map (withCollisionPoint cornerCircle.center)
                    )

        collisionResultsForShiftedWalls =
            shiftedWalls
                |> List.filterMap
                    (\shiftedWall ->
                        shiftedWall
                            |> pointToLineSegment circle.center circleTranslation
                            |> Maybe.map
                                (\collisionResultForPoint ->
                                    collisionResultForPoint
                                        |> withCollisionPoint
                                            (circle.center
                                                |> translateBy collisionResultForPoint.translationToCollisionPoint
                                                |> translateBy (shiftedWall |> vectorFrom |> rotate (degrees 90) |> setLength circle.radius)
                                            )
                                )
                    )
    in
    [ collisionResultsForCornerCircles
    , collisionResultsForShiftedWalls
    ]
        |> List.concat
        |> List.sortBy (.translationToCollisionPoint >> length)
        |> List.head
