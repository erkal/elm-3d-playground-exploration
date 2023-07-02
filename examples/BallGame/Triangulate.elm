module BallGame.Triangulate exposing (..)

import BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (Point2d)
import Length
import Point2d
import Polygon2d
import TriangularMesh


triangulate : List Point2d -> List ( Point2d, Point2d, Point2d )
triangulate vertices =
    vertices
        |> List.map (\p -> Point2d.meters p.x p.y)
        |> Polygon2d.singleLoop
        |> Polygon2d.triangulate
        |> TriangularMesh.faceVertices
        |> List.map
            (\( a, b, c ) ->
                ( Point2d.toRecord Length.inMeters a
                , Point2d.toRecord Length.inMeters b
                , Point2d.toRecord Length.inMeters c
                )
            )
