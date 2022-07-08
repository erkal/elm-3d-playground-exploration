module Camera exposing
    ( Camera
    , mouseOverXY
    , mouseOverXYAtZ
    , mouseOverYZ
    , mouseOverYZAtX
    , mouseOverZX
    , mouseOverZXAtY
    , orthographic
    , perspective
    , perspectiveWithOrbit
    )

import Angle
import Axis3d
import Camera3d exposing (Camera3d)
import Direction3d
import Geometry exposing (Point, Vector)
import Length exposing (Length, Meters, inMeters)
import Pixels
import Plane3d exposing (Plane3d)
import Point2d
import Point3d exposing (Point3d)
import Rectangle2d
import SketchPlane3d
import Vector3d
import Viewpoint3d


type alias Camera =
    Camera3d Meters ()


perspective :
    { focalPoint : Point
    , eyePoint : Point
    , upDirection : Point
    }
    -> Camera
perspective { focalPoint, eyePoint, upDirection } =
    Camera3d.perspective
        { viewpoint =
            Viewpoint3d.lookAt
                { focalPoint = Point3d.fromMeters focalPoint
                , eyePoint = Point3d.fromMeters eyePoint
                , upDirection = Direction3d.from Point3d.origin (Point3d.fromMeters upDirection) |> Maybe.withDefault Direction3d.positiveY
                }
        , verticalFieldOfView =
            -- so that if the z-coordinate of the camera is the same as screen width, we see the XY plane in screen pixel coordinates!
            Angle.radians (2 * atan 0.5)
        }


perspectiveWithOrbit :
    { focalPoint : Point
    , azimuth : Float
    , elevation : Float
    , distance : Float
    }
    -> Camera
perspectiveWithOrbit { focalPoint, azimuth, elevation, distance } =
    Camera3d.perspective
        { viewpoint =
            Viewpoint3d.orbit
                { focalPoint = Point3d.fromMeters focalPoint
                , groundPlane = SketchPlane3d.zx
                , azimuth = Angle.radians azimuth
                , elevation = Angle.radians elevation
                , distance = Length.meters distance
                }
        , verticalFieldOfView =
            -- so that if the z-coordinate of the camera is the same as screen width, we see the XY plane in screen pixel coordinates!
            Angle.radians (2 * atan 0.5)
        }


orthographic :
    { focalPoint : Point
    , azimuth : Float
    , elevation : Float
    , viewportHeight : Float
    }
    -> Camera
orthographic { focalPoint, azimuth, elevation, viewportHeight } =
    Camera3d.orthographic
        { viewpoint =
            Viewpoint3d.orbit
                { focalPoint = Point3d.fromMeters focalPoint
                , groundPlane = SketchPlane3d.zx
                , azimuth = Angle.radians azimuth
                , elevation = Angle.radians elevation
                , distance = Length.meters 1000
                }
        , viewportHeight = Length.meters viewportHeight
        }


mouseOverXY : Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverXY =
    mouseOverXYAtZ 0


mouseOverXYAtZ : Float -> Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverXYAtZ z camera screen mouse =
    mouseOverPlane camera
        screen
        mouse
        (Plane3d.xy
            |> Plane3d.translateBy
                (Vector3d.xyz
                    (Length.meters 0)
                    (Length.meters 0)
                    (Length.meters z)
                )
        )


mouseOverYZ : Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverYZ =
    mouseOverYZAtX 0


mouseOverYZAtX : Float -> Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverYZAtX x camera screen mouse =
    mouseOverPlane camera
        screen
        mouse
        (Plane3d.yz
            |> Plane3d.translateBy
                (Vector3d.xyz
                    (Length.meters x)
                    (Length.meters 0)
                    (Length.meters 0)
                )
        )


mouseOverZX : Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverZX =
    mouseOverZXAtY 0


mouseOverZXAtY : Float -> Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Maybe Point
mouseOverZXAtY y camera screen mouse =
    mouseOverPlane camera
        screen
        mouse
        (Plane3d.zx
            |> Plane3d.translateBy
                (Vector3d.xyz
                    (Length.meters 0)
                    (Length.meters y)
                    (Length.meters 0)
                )
        )


mouseOverPlane : Camera -> { screen | width : Float, height : Float } -> { a | x : Float, y : Float } -> Plane3d Meters () -> Maybe Point
mouseOverPlane camera screen { x, y } plane =
    let
        screenRect =
            Rectangle2d.withDimensions
                ( Pixels.float screen.width
                , Pixels.float screen.height
                )
                (Angle.degrees 0)
                (Point2d.pixels 0 0)

        mousePosition =
            Point2d.xy
                (Pixels.float x)
                (Pixels.float y)

        toPoint p =
            Point
                (Point3d.xCoordinate p |> inMeters)
                (Point3d.yCoordinate p |> inMeters)
                (Point3d.zCoordinate p |> inMeters)
    in
    mousePosition
        |> Camera3d.ray camera screenRect
        |> Axis3d.intersectionWithPlane plane
        |> Maybe.map toPoint
