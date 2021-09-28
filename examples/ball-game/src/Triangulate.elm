module Triangulate exposing (..)

import Length
import Physics.Primitives.Geometry2d exposing (Point2d)
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
