module Physics.Collision.Bounce exposing (..)

import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d, Vector2d, componentIn, dotProduct, scaleBy, subtract)
import Physics.World as World exposing (PolygonBody, World)


bounce : { a | polygonBody : PolygonBody, collisionPoint : Point2d, normalAtCollisionPoint : Vector2d } -> World -> World
bounce collisionResult world =
    let
        componentInNormal =
            world.ball.velocity
                |> componentIn collisionResult.normalAtCollisionPoint

        componentInParallel =
            world.ball.velocity
                |> subtract componentInNormal

        newVelocity =
            componentInNormal
                |> scaleBy -1
                |> scaleBy collisionResult.polygonBody.bounciness
                |> Geometry2d.add componentInParallel
    in
    if dotProduct componentInNormal newVelocity < 0 then
        world

    else
        world
            |> World.setBallVelocity newVelocity
