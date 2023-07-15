module BallGame.World.Physics.Collision.BallToPolygons exposing (collide)

import BallGame.World as World exposing (PolygonBody, World)
import BallGame.World.Physics.Collision.Primitives.CircleToPolygon as CircleToPolygon
import BallGame.World.Physics.Collision.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d, Vector2d, componentIn, length, scaleBy, subtract)
import Playground.Playground as Playground exposing (Computer)


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
            world.ball.velocity |> scaleBy computer.dt

        collideToPolygon polygonBody =
            polygonBody.polygon
                |> CircleToPolygon.collide world.ball.circle circleTranslation
                |> Maybe.map (enhance polygonBody)

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
                | collisionPointsHistory =
                    collisionResult.collisionPoint
                        :: world.collisionPointsHistory
                        |> List.take 15
                , ballBouncedInLastTickToPolygonWithId =
                    Just collisionResult.polygonBody.id
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
    in
    { world | ball = { ball | velocity = newVelocity } }
