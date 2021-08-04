module Playground.Scene exposing
    ( Shape, block, cube, cylinder, group, line, sphere, triangle
    , move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround
    , custom, sunny
    )

{-|


# Shapes

@docs Shape, block, cube, cylinder, group, line, sphere, triangle


# Moving Shapes

@docs move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround


# Scenes

@docs custom, sunny

-}

import Angle exposing (Angle)
import Axis3d exposing (Axis3d)
import Block3d exposing (Block3d)
import Color exposing (Color)
import Cylinder3d exposing (Cylinder3d)
import Direction3d exposing (Direction3d)
import Html exposing (Html)
import Length exposing (Length, Meters)
import LineSegment3d exposing (LineSegment3d)
import ModifiedFromScene3d.Scenes
import Pixels
import Playground.Camera exposing (Camera)
import Playground.Computer as Computer
import Playground.Geometry exposing (Point)
import Point3d exposing (Point3d)
import Scene3d exposing (Antialiasing, Exposure, Lights, ToneMapping)
import Scene3d.Light exposing (Chromaticity, Light)
import Scene3d.Material as Material exposing (Material)
import Sphere3d exposing (Sphere3d)
import Triangle3d exposing (Triangle3d)
import Vector3d


sunny :
    { devicePixelRatio : Float
    , screen : Computer.Screen
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
        , entities = toEntities shapes
        , shadows = True
        , upDirection = Direction3d.z
        , sunlightDirection =
            Direction3d.xyZ
                (Angle.radians arguments.sunlightAzimuth)
                (Angle.radians arguments.sunlightElevation)
        }


custom :
    { devicePixelRatio : Float
    , screen : Computer.Screen
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
        , entities = toEntities shapes
        }



-- CONVERSION OF SHAPES TO ENTITIES


toEntities : List Shape -> List (Scene3d.Entity ())
toEntities drawables =
    drawables
        |> List.concatMap drawableToEntities


drawableToEntities : Shape -> List (Scene3d.Entity ())
drawableToEntities shape =
    case shape of
        Block color block3d ->
            [ Scene3d.blockWithShadow (material color) block3d ]

        Triangle color triangle3d ->
            [ Scene3d.facetWithShadow (material color) triangle3d ]

        Sphere color sphere3d ->
            [ Scene3d.sphereWithShadow (material color) sphere3d ]

        Cylinder color cylinder3d ->
            [ Scene3d.cylinderWithShadow (material color) cylinder3d ]

        Line color lineSegment3d ->
            [ Scene3d.lineSegment (Material.color color) lineSegment3d ]

        Group drawables ->
            drawables
                |> List.concatMap drawableToEntities



-- SHAPES


type Shape
    = Block Color (Block3d Meters ())
    | Triangle Color (Triangle3d Meters ())
    | Cylinder Color (Cylinder3d Meters ())
    | Sphere Color (Sphere3d Meters ())
    | Line Color (LineSegment3d Meters ())
    | Group (List Shape)


material color =
    Material.matte color


type alias Vector =
    ( Float, Float, Float )


block : Color -> Vector -> Shape
block color ( xDim, yDim, zDim ) =
    let
        ( hXDim, hYDim, hZDim ) =
            ( xDim / 2
            , yDim / 2
            , zDim / 2
            )
    in
    Block color
        (Block3d.from
            (Point3d.meters -hXDim -hYDim -hZDim)
            (Point3d.meters hXDim hYDim hZDim)
        )


triangle : Color -> ( Point, Point, Point ) -> Shape
triangle color ( p, q, r ) =
    Triangle color
        (Triangle3d.from
            (Point3d.meters p.x p.y p.z)
            (Point3d.meters q.x q.y q.z)
            (Point3d.meters r.x r.y r.z)
        )


cube : Color -> Float -> Shape
cube color width =
    let
        hw =
            width / 2
    in
    Block color
        (Block3d.from
            (Point3d.meters -hw -hw -hw)
            (Point3d.meters hw hw hw)
        )


cylinder : Color -> Float -> Float -> Shape
cylinder color radius length =
    Cylinder color
        (Cylinder3d.centeredOn Point3d.origin
            Direction3d.positiveY
            { radius = Length.meters radius
            , length = Length.meters length
            }
        )


sphere : Color -> Float -> Shape
sphere color radius =
    Sphere color
        (Sphere3d.withRadius (Length.meters radius) Point3d.origin)


line : Color -> Vector -> Shape
line color vector =
    Line color
        (LineSegment3d.fromPointAndVector Point3d.origin
            (Vector3d.fromTuple Length.meters vector)
        )


group : List Shape -> Shape
group drawables =
    Group drawables



-- MODIFY


rotate : Axis3d Meters () -> Angle -> Shape -> Shape
rotate axis angle shape =
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.rotateAround axis angle)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.rotateAround axis angle)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.rotateAround axis angle)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.rotateAround axis angle)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.rotateAround axis angle)

        Group drawables ->
            Group
                (List.map (rotate axis angle) drawables)


rotateAround : ( Point, Vector ) -> Float -> Shape -> Shape
rotateAround ( axisOrigin, ( dx, dy, dz ) ) angle =
    rotate
        (Axis3d.through (Point3d.fromMeters axisOrigin)
            (Direction3d.unsafe { x = dx, y = dy, z = dz })
        )
        (Angle.radians angle)


rotateX : Float -> Shape -> Shape
rotateX angle shape =
    rotate Axis3d.x (Angle.radians angle) shape


rotateY : Float -> Shape -> Shape
rotateY angle shape =
    rotate Axis3d.y (Angle.radians angle) shape


rotateZ : Float -> Shape -> Shape
rotateZ angle shape =
    rotate Axis3d.z (Angle.radians angle) shape


scaleAround : Point -> Float -> Shape -> Shape
scaleAround { x, y, z } factor =
    move ( -x, -y, -z ) >> scale factor >> move ( x, y, z )


scale : Float -> Shape -> Shape
scale factor shape =
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.scaleAbout Point3d.origin factor)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.scaleAbout Point3d.origin factor)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.scaleAbout Point3d.origin factor)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.scaleAbout Point3d.origin factor)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.scaleAbout Point3d.origin factor)

        Group drawables ->
            Group
                (List.map (scale factor) drawables)


move : Vector -> Shape -> Shape
move ( x, y, z ) shape =
    let
        translation =
            Vector3d.meters x y z
    in
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.translateBy translation)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.translateBy translation)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.translateBy translation)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.translateBy translation)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.translateBy translation)

        Group drawables ->
            Group
                (List.map (move ( x, y, z )) drawables)


moveX : Float -> Shape -> Shape
moveX x =
    move ( x, 0, 0 )


moveY : Float -> Shape -> Shape
moveY y =
    move ( 0, y, 0 )


moveZ : Float -> Shape -> Shape
moveZ z =
    move ( 0, 0, z )
