module Physics.Collision.BallToPolygons exposing (collide)

import Physics.Primitives.CircleToPolygon as CircleToPolygon
import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d, Vector2d, componentIn, length, scaleBy, subtract)
import Physics.World exposing (PolygonBody, World, verticesInWorldCoordinates)
import Playground exposing (Computer)


type alias CollisionResult =
    { polygonBody : PolygonBody
    , translationToCollisionPoint : Vector2d
    , collisionPoint : Point2d
    , normalAtCollisionPoint : Vector2d
    }


enhance : PolygonBody -> CircleToPolygon.CollisionResult -> CollisionResult
enhance polygonBody c =
    { polygonBody = polygonBody
    , translationToCollisionPoint = c.translationToCollisionPoint
    , collisionPoint = c.collisionPoint
    , normalAtCollisionPoint = c.normalAtCollisionPoint
    }


collide : Computer -> World -> World
collide computer world =
    let
        circleTranslation =
            world.ball.velocity |> scaleBy computer.deltaTime

        collideToPolygon polygon =
            polygon
                |> verticesInWorldCoordinates
                |> CircleToPolygon.collide world.ball.circle circleTranslation
                |> Maybe.map (enhance polygon)

        maybeCollisionResult =
            world.polygons
                |> List.filterMap collideToPolygon
                |> List.sortBy (.translationToCollisionPoint >> length)
                |> List.head
    in
    case maybeCollisionResult of
        Nothing ->
            world

        Just collisionResult ->
            { world
                | collisionPointsHistoryBallToPolygons =
                    collisionResult.collisionPoint
                        :: world.collisionPointsHistoryBallToPolygons
                        |> List.take 15
                , ballBouncedInLastTickToPolygonWithCenter =
                    -- TODO: This causes problems by DrawnBody's because their center is (0,0). this should be fixed.
                    Just collisionResult.polygonBody.polygon.center
            }
                |> bounce collisionResult


bounce : CollisionResult -> World -> World
bounce collisionResult ({ ball } as world) =
    let
        componentInNormal =
            ball.velocity
                |> componentIn collisionResult.normalAtCollisionPoint

        componentInParallel =
            ball.velocity
                |> subtract componentInNormal

        newVelocity =
            componentInNormal
                |> scaleBy -1
                |> scaleBy collisionResult.polygonBody.bounciness
                |> Geometry2d.add componentInParallel
                |> Debug.log ""
    in
    { world | ball = { ball | velocity = newVelocity } }
