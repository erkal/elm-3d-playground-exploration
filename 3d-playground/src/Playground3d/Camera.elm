module Playground3d.Camera exposing
    ( Camera
    , mouseOverXY
    , mouseOverYZ
    , mouseOverZX
    , orthographic
    , perspective
    )

import Angle
import Axis3d
import Camera3d exposing (Camera3d)
import Direction3d
import Length exposing (Length, Meters, inMeters)
import Pixels
import Plane3d exposing (Plane3d)
import Playground3d exposing (Computer, Mouse, Screen)
import Playground3d.Geometry exposing (Point)
import Point2d
import Point3d exposing (Point3d)
import Rectangle2d
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
        , verticalFieldOfView = Angle.degrees 40
        }


orthographic :
    { focalPoint : Point
    , eyePoint : Point
    , viewportHeight : Float
    }
    -> Camera
orthographic properties =
    Camera3d.orthographic
        { viewpoint =
            Viewpoint3d.lookAt
                { focalPoint = Point3d.fromMeters properties.focalPoint
                , eyePoint = Point3d.fromMeters properties.eyePoint
                , upDirection = Direction3d.positiveZ
                }
        , viewportHeight = Length.meters properties.viewportHeight
        }


{-| get the intersection point of the mouse-ray and a triangle
-}
mouseOverXY : Camera -> Computer -> Maybe Point
mouseOverXY camera computer =
    mouseOverPlane camera computer Plane3d.xy


{-| get the intersection point of the mouse-ray and a triangle
-}
mouseOverYZ : Camera -> Computer -> Maybe Point
mouseOverYZ camera computer =
    mouseOverPlane camera computer Plane3d.yz


{-| get the intersection point of the mouse-ray and a triangle
-}
mouseOverZX : Camera -> Computer -> Maybe Point
mouseOverZX camera computer =
    mouseOverPlane camera computer Plane3d.zx


{-| get the intersection point of the mouse-ray with a plane
-}
mouseOverPlane : Camera -> Computer -> Plane3d Meters () -> Maybe Point
mouseOverPlane camera { screen, mouse } plane =
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
                (Pixels.float mouse.x)
                (Pixels.float mouse.y)

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
