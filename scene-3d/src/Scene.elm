module Scene exposing
    ( Shape, block, cube, cylinder, group, line, sphere, triangle, square
    , move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround
    , custom, sunny, unlit
    )

{-|


# Shapes

@docs Shape, block, cube, cylinder, group, line, sphere, triangle, square


# Moving Shapes

@docs move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround


# Scenes

@docs custom, sunny, unlit

-}

import Angle exposing (Angle)
import Axis3d exposing (Axis3d)
import Block3d exposing (Block3d)
import Camera exposing (Camera)
import Color exposing (Color)
import Cylinder3d exposing (Cylinder3d)
import Direction3d exposing (Direction3d)
import Geometry exposing (Point)
import Html exposing (Html)
import Length exposing (Length, Meters)
import LineSegment3d exposing (LineSegment3d)
import ModifiedFromScene3d.Scenes
import Pixels
import Point3d exposing (Point3d)
import Scene3d exposing (Antialiasing, Exposure, Lights, ToneMapping)
import Scene3d.Light exposing (Chromaticity, Light)
import Scene3d.Material as Material exposing (Material, uniform)
import Sphere3d exposing (Sphere3d)
import Triangle3d exposing (Triangle3d)
import Vector3d


sunny :
    { devicePixelRatio : Float
    , screen : { screen | width : Float, height : Float }
    , camera : Camera
    , sunlightAzimuth : Float
    , sunlightElevation : Float
    , backgroundColor : Color
    }
    -> List Shape
    -> Html Never
sunny arguments shapes =
    ModifiedFromScene3d.Scenes.sunnyWithDevicePixelRatio
        { devicePixelRatio = arguments.devicePixelRatio
        , camera = arguments.camera
        , clipDepth = Length.centimeters 0.5
        , dimensions =
            ( Pixels.int (round arguments.screen.width)
            , Pixels.int (round arguments.screen.height)
            )
        , background = Scene3d.backgroundColor arguments.backgroundColor
        , entities = shapes
        , shadows = True
        , upDirection = Direction3d.z
        , sunlightDirection =
            Direction3d.xyZ
                (Angle.radians arguments.sunlightAzimuth)
                (Angle.radians arguments.sunlightElevation)
        }


unlit :
    { devicePixelRatio : Float
    , screen : { screen | width : Float, height : Float }
    , camera : Camera
    , clipDepth : Float
    , background : Color
    }
    -> List Shape
    -> Html Never
unlit arguments shapes =
    ModifiedFromScene3d.Scenes.unlitWithDevicePixelRatio
        { devicePixelRatio = arguments.devicePixelRatio
        , dimensions =
            ( Pixels.int (round arguments.screen.width)
            , Pixels.int (round arguments.screen.height)
            )
        , camera = arguments.camera
        , clipDepth = Length.meters arguments.clipDepth
        , background = Scene3d.backgroundColor arguments.background
        , entities = shapes
        }


custom :
    { devicePixelRatio : Float
    , screen : { screen | width : Float, height : Float }
    , camera : Camera
    , lights : Lights ()
    , clipDepth : Float
    , exposure : Exposure
    , toneMapping : ToneMapping
    , whiteBalance : Chromaticity
    , antialiasing : Antialiasing
    , backgroundColor : Color
    }
    -> List Shape
    -> Html Never
custom arguments shapes =
    ModifiedFromScene3d.Scenes.customWithDevicePixelRatio
        { devicePixelRatio = arguments.devicePixelRatio
        , lights = arguments.lights
        , camera = arguments.camera
        , clipDepth = Length.meters arguments.clipDepth
        , exposure = arguments.exposure
        , toneMapping = arguments.toneMapping
        , whiteBalance = arguments.whiteBalance
        , antialiasing = arguments.antialiasing
        , dimensions =
            ( Pixels.int (round arguments.screen.width)
            , Pixels.int (round arguments.screen.height)
            )
        , background = Scene3d.backgroundColor arguments.backgroundColor
        , entities = shapes
        }



-- SHAPES


type alias Material_ =
    Material () { normals : () }


type alias Shape =
    Scene3d.Entity ()


type alias Vector =
    ( Float, Float, Float )


block : Material_ -> Vector -> Shape
block material_ ( xDim, yDim, zDim ) =
    let
        ( hXDim, hYDim, hZDim ) =
            ( xDim / 2
            , yDim / 2
            , zDim / 2
            )
    in
    Scene3d.blockWithShadow material_
        (Block3d.from
            (Point3d.meters -hXDim -hYDim -hZDim)
            (Point3d.meters hXDim hYDim hZDim)
        )


triangle : Material_ -> ( Point, Point, Point ) -> Shape
triangle material_ ( p, q, r ) =
    Scene3d.facetWithShadow material_
        (Triangle3d.from
            (Point3d.meters p.x p.y p.z)
            (Point3d.meters q.x q.y q.z)
            (Point3d.meters r.x r.y r.z)
        )


square : Material_ -> Float -> Shape
square material_ sideLength =
    let
        h =
            sideLength / 2

        upperLeftTriangle =
            triangle material_ ( Point -h -h 0, Point h h 0, Point -h h 0 )
    in
    group
        [ upperLeftTriangle
        , upperLeftTriangle |> rotateZ pi
        ]


cube : Material_ -> Float -> Shape
cube material_ width =
    let
        hw =
            width / 2
    in
    Scene3d.blockWithShadow material_
        (Block3d.from
            (Point3d.meters -hw -hw -hw)
            (Point3d.meters hw hw hw)
        )


cylinder : Material_ -> Float -> Float -> Shape
cylinder material_ radius length =
    Scene3d.cylinderWithShadow material_
        (Cylinder3d.centeredOn Point3d.origin
            Direction3d.positiveY
            { radius = Length.meters radius
            , length = Length.meters length
            }
        )


sphere : Material_ -> Float -> Shape
sphere material_ radius =
    Scene3d.sphereWithShadow (uniform material_)
        (Sphere3d.withRadius (Length.meters radius) Point3d.origin)


line : Color -> Vector -> Shape
line color vector =
    Scene3d.lineSegment (Material.color color)
        (LineSegment3d.fromPointAndVector Point3d.origin
            (Vector3d.fromTuple Length.meters vector)
        )


group : List Shape -> Shape
group =
    Scene3d.group



-- MODIFY


rotateAround : ( Point, Vector ) -> Float -> Shape -> Shape
rotateAround ( axisOrigin, ( dx, dy, dz ) ) angle =
    Scene3d.rotateAround
        (Axis3d.through (Point3d.fromMeters axisOrigin)
            (Direction3d.unsafe { x = dx, y = dy, z = dz })
        )
        (Angle.radians angle)


rotateX : Float -> Shape -> Shape
rotateX angle shape =
    Scene3d.rotateAround Axis3d.x (Angle.radians angle) shape


rotateY : Float -> Shape -> Shape
rotateY angle shape =
    Scene3d.rotateAround Axis3d.y (Angle.radians angle) shape


rotateZ : Float -> Shape -> Shape
rotateZ angle shape =
    Scene3d.rotateAround Axis3d.z (Angle.radians angle) shape


scaleAround : Point -> Float -> Shape -> Shape
scaleAround { x, y, z } factor =
    move ( -x, -y, -z ) >> scale factor >> move ( x, y, z )


scale : Float -> Shape -> Shape
scale =
    Scene3d.scaleAbout Point3d.origin


move : Vector -> Shape -> Shape
move ( x, y, z ) =
    Scene3d.translateBy (Vector3d.meters x y z)


moveX : Float -> Shape -> Shape
moveX x =
    move ( x, 0, 0 )


moveY : Float -> Shape -> Shape
moveY y =
    move ( 0, y, 0 )


moveZ : Float -> Shape -> Shape
moveZ z =
    move ( 0, 0, z )
