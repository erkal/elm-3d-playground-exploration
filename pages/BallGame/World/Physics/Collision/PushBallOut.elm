module BallGame.World.Physics.Collision.PushBallOut exposing (..)

import BallGame.World exposing (PolygonBody, World)
import BallGame.World.Physics.Collision.Primitives.Geometry2d as Geometry2d exposing (Circle2d, LineSegment2d, Point2d, Vector2d, translateBy, vectorTo)


{-| This is an extra trick to prevent bugs that happen because floating point precession errors, when the ball is sitting in a narrow angle.
-}
fromWalls : World -> World
fromWalls ({ ball } as world) =
    let
        intersectingWalls : List LineSegment2d
        intersectingWalls =
            world.polygons
                |> List.concatMap (.polygon >> Geometry2d.edgesOfPolygon)
                |> List.filter (\wall -> not (List.isEmpty (Geometry2d.intersectCircleWithLineSegment wall ball.circle)))

        pushOutOfWall : LineSegment2d -> Circle2d -> Circle2d
        pushOutOfWall intersectingWall circle =
            case Geometry2d.maybeClosestPointOnTheLineSegment intersectingWall circle of
                Just p ->
                    { circle
                        | center =
                            circle.center
                                |> translateBy (circle.center |> vectorTo p)
                                |> translateBy (Geometry2d.normal intersectingWall |> Geometry2d.setLength circle.radius)
                    }

                Nothing ->
                    circle

        newBallCircle =
            intersectingWalls
                |> List.foldl pushOutOfWall ball.circle
    in
    { world | ball = { ball | circle = newBallCircle } }
