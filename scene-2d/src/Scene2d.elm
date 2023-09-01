module Scene2d exposing
    ( toHtml
    , Drawable
    , circle, arc, image, line, ngon, path, polyline, rectangle, lineTo, words
    , group
    , moveTo, moveX, moveXY, moveY, moveZ
    , rotate, rotateAround, scale, scaleAround, scaleX, scaleY
    , bezierCurveTo
    )

{-|


# Rendering to Html

@docs toHtml


# Drawables

@docs Drawable
@docs circle, arc, image, line, ngon, path, polyline, rectangle, lineTo, words


# Grouping

@docs group


# Transformations

@docs moveTo, moveX, moveXY, moveY, moveZ
@docs rotate, rotateAround, scale, scaleAround, scaleX, scaleY

-}

import Canvas exposing (Renderable)
import Canvas.Settings exposing (stroke)
import Canvas.Settings.Advanced exposing (transform, translate)
import Canvas.Settings.Line exposing (LineCap(..), LineJoin(..))
import Canvas.Settings.Text exposing (TextAlign(..), TextBaseLine(..), align, baseLine, font)
import Canvas.Texture as Texture exposing (Texture)
import Color exposing (Color)
import Html exposing (Html)
import Scene2d.Camera as Camera exposing (Camera)
import Scene2d.Geometry as Geometry exposing (Geometry, defaultGeometry)


type Drawable
    = Drawable Geometry BareDrawable


type BareDrawable
    = Group (List Drawable)
    | Rectangle Float Float Color
    | Circle Float Color
    | Image Float Float Texture
    | Words
        { size : Int
        , text : String
        }
    | Arc
        { stroke : Maybe Color
        , radius : Float
        , startAngle : Float
        , endAngle : Float
        , clockwise : Bool
        , lineWidth : Float
        , fillColor : Maybe Color
        }
    | Path
        { stroke : Maybe Color
        , fillColor : Maybe Color
        , lineWidth : Float
        }
        (List PathExtension)


type alias Point =
    { x : Float, y : Float }


type PathExtension
    = MoveTo Point
    | LineTo Point
    | ArcTo
        { start : Point
        , end : Point
        , radius : Float
        }
    | BezierCurveTo
        { control1 : Point
        , control2 : Point
        , end : Point
        }



-- CREATE


group : List Drawable -> Drawable
group elements =
    Drawable defaultGeometry (Group elements)


rectangle : Float -> Float -> Color -> Drawable
rectangle w h color =
    Drawable defaultGeometry (Rectangle w h color)


circle : Float -> Color -> Drawable
circle radius color =
    Drawable defaultGeometry (Circle radius color)


words : Int -> String -> Drawable
words size text =
    Drawable defaultGeometry (Words { size = size, text = text })


image : Float -> Maybe Texture -> Drawable
image width maybeTexture =
    case maybeTexture of
        Just texture ->
            let
                dims =
                    Texture.dimensions texture

                aspectRatio =
                    dims.width / dims.height
            in
            Drawable defaultGeometry (Image width (width / aspectRatio) texture)

        Nothing ->
            Drawable defaultGeometry (Group [])


arc :
    { radius : Float
    , startAngle : Float
    , endAngle : Float
    , clockwise : Bool
    , stroke : Maybe Color
    , lineWidth : Float
    , fillColor : Maybe Color
    }
    -> Drawable
arc parameters =
    Drawable defaultGeometry (Arc parameters)


bezierCurveTo :
    { control1 : Point
    , control2 : Point
    , end : Point
    }
    -> PathExtension
bezierCurveTo =
    BezierCurveTo


lineTo : Point -> PathExtension
lineTo =
    LineTo


moveTo : Point -> PathExtension
moveTo =
    MoveTo


path :
    { stroke : Maybe Color
    , lineWidth : Float
    , fillColor : Maybe Color
    }
    -> List PathExtension
    -> Drawable
path parameters pathExtensions =
    Drawable defaultGeometry (Path parameters pathExtensions)


line :
    { stroke : Maybe Color
    , lineWidth : Float
    , fillColor : Maybe Color
    }
    -> Point
    -> Point
    -> Drawable
line props p q =
    path
        props
        [ lineTo { x = q.x - p.x, y = q.y - p.y } ]
        |> moveX p.x
        |> moveY p.y


ngon : Float -> Int -> Color -> Drawable
ngon radius n color =
    let
        startPoint =
            { x = 0, y = radius }

        restPoints =
            List.range 0 n
                |> List.map (\i -> Geometry.rotatePoint (toFloat i * 2 * pi / toFloat n) startPoint)
    in
    path { stroke = Nothing, fillColor = Just color, lineWidth = 0.3 }
        (moveTo startPoint :: List.map lineTo restPoints)


polyline :
    { stroke : Maybe Color
    , lineWidth : Float
    , fillColor : Maybe Color
    }
    -> List Point
    -> Drawable
polyline props verticesInCounterClockwiseOrder =
    case verticesInCounterClockwiseOrder of
        [] ->
            group []

        startPoint :: restPoints ->
            path props (moveTo startPoint :: List.map lineTo restPoints)



-- MODIFY


mapGeometry : (Geometry -> Geometry) -> Drawable -> Drawable
mapGeometry up (Drawable geometry bareDrawable) =
    Drawable (up geometry) bareDrawable


move : ( Float, Float, Float ) -> Drawable -> Drawable
move vec =
    mapGeometry (Geometry.move vec)


moveXY : ( Float, Float ) -> Drawable -> Drawable
moveXY ( x, y ) =
    moveX x >> moveY y


moveX : Float -> Drawable -> Drawable
moveX x =
    move ( x, 0, 0 )


moveY : Float -> Drawable -> Drawable
moveY y =
    move ( 0, y, 0 )


moveZ : Float -> Drawable -> Drawable
moveZ z =
    move ( 0, 0, z )


scale : Float -> Drawable -> Drawable
scale k =
    scaleX k >> scaleY k


scaleX : Float -> Drawable -> Drawable
scaleX k =
    mapGeometry (Geometry.scaleX k)


scaleY : Float -> Drawable -> Drawable
scaleY k =
    mapGeometry (Geometry.scaleY k)


scaleAroundOrigin : Float -> Float -> Drawable -> Drawable
scaleAroundOrigin xScale yScale =
    mapGeometry (Geometry.scaleAroundOrigin xScale yScale)


scaleAround : ( Float, Float ) -> Float -> Drawable -> Drawable
scaleAround ( cx, cy ) k =
    move ( -cx, -cy, 0 ) >> scaleAroundOrigin k k >> move ( cx, cy, 0 )


rotate : Float -> Drawable -> Drawable
rotate angle =
    mapGeometry (Geometry.rotateAroundItsCenter angle)


rotateAroundOrigin : Float -> Drawable -> Drawable
rotateAroundOrigin angle =
    mapGeometry (Geometry.rotateAroundOrigin angle)


rotateAround : ( Float, Float ) -> Float -> Drawable -> Drawable
rotateAround ( cx, cy ) angle =
    move ( -cx, -cy, 0 ) >> rotateAroundOrigin angle >> move ( cx, cy, 0 )



-- RENDER


toHtml :
    { sceneWidthInPixels : Int
    , camera : Camera
    }
    -> List Drawable
    -> Html msg
toHtml { sceneWidthInPixels, camera } drawables =
    let
        width =
            toFloat sceneWidthInPixels

        height =
            width / Camera.getViewportAspectRatio camera

        clearRect =
            Canvas.clear ( 0, 0 ) (width + 1) (height + 1)

        renderables =
            List.concatMap (render width height camera) drawables
    in
    Canvas.toHtml ( sceneWidthInPixels, round height )
        []
        (clearRect :: renderables)


isBehindTheCamera : Camera -> Drawable -> Bool
isBehindTheCamera camera (Drawable geometry _) =
    geometry.z > Camera.getZ camera


render : Float -> Float -> Camera -> Drawable -> List Renderable
render gameWidthInPixels gameHeightInPixels camera (Drawable geometry bareDrawable) =
    let
        rotationAndScale { rotation, xScale, yScale } =
            [ Canvas.Settings.Advanced.rotate (rotation |> Camera.reverseIfYIsUp camera)
            , Canvas.Settings.Advanced.scale xScale yScale
            ]

        cameraPerspective { x, y, z } =
            let
                cameraBoundingBoxAtZ =
                    Camera.getBoundingBoxAtZ z camera

                cameraWidthAtZ =
                    cameraBoundingBoxAtZ.right - cameraBoundingBoxAtZ.left

                scaleFactor =
                    gameWidthInPixels / cameraWidthAtZ

                ( xTranslate, yTranslate ) =
                    -- TODO: Maybe use reverseIfYIsUp here?
                    ( scaleFactor * (x - cameraBoundingBoxAtZ.left)
                    , scaleFactor * (y - cameraBoundingBoxAtZ.top)
                    )
            in
            [ translate xTranslate (yTranslate |> Camera.reverseIfYIsUp camera)
            , Canvas.Settings.Advanced.scale scaleFactor scaleFactor
            ]

        geometryTransform geometry__ =
            cameraPerspective geometry__ ++ rotationAndScale geometry__

        helper (Drawable geometry_ bareDrawable_) =
            case bareDrawable_ of
                Group elements ->
                    elements
                        |> List.map
                            (\drawable ->
                                drawable
                                    |> scaleAroundOrigin geometry_.xScale geometry_.yScale
                                    |> rotateAroundOrigin geometry_.rotation
                                    |> move ( geometry_.x, geometry_.y, geometry_.z )
                                    |> helper
                            )
                        |> List.concat

                Rectangle width height color ->
                    [ Canvas.shapes
                        [ transform (geometryTransform geometry_)
                        , Canvas.Settings.fill color
                        ]
                        [ Canvas.rect ( -width / 2, -height / 2 ) width height ]
                    ]

                Circle radius color ->
                    [ Canvas.shapes
                        [ transform (geometryTransform geometry_)
                        , Canvas.Settings.fill color
                        ]
                        [ Canvas.circle ( 0, 0 ) radius ]
                    ]

                Words parameters ->
                    [ Canvas.text
                        [ transform (geometryTransform geometry_)
                        , align Center
                        , baseLine Middle
                        , font { size = parameters.size, family = "futura-pt-condensed" }
                        ]
                        ( 0, 0 )
                        parameters.text
                    ]

                Arc parameters ->
                    let
                        maybeStroke =
                            case parameters.stroke of
                                Nothing ->
                                    []

                                Just color ->
                                    [ stroke color ]

                        maybeFillColor =
                            case parameters.fillColor of
                                Nothing ->
                                    []

                                Just color ->
                                    [ Canvas.Settings.fill color ]
                    in
                    [ Canvas.shapes
                        (transform (geometryTransform geometry_)
                            :: maybeFillColor
                            ++ maybeStroke
                            ++ [ Canvas.Settings.Line.lineWidth parameters.lineWidth
                               , Canvas.Settings.Line.lineCap RoundCap
                               , Canvas.Settings.Line.lineJoin RoundJoin
                               ]
                        )
                        [ Canvas.arc ( 0, 0 )
                            parameters.radius
                            { startAngle = parameters.startAngle
                            , endAngle = parameters.endAngle
                            , clockwise = parameters.clockwise
                            }
                        ]
                    ]

                Path parameters extensions ->
                    let
                        toLineSegment extension =
                            case extension of
                                LineTo { x, y } ->
                                    Canvas.lineTo ( x, y |> Camera.reverseIfYIsUp camera )

                                MoveTo { x, y } ->
                                    Canvas.moveTo ( x, y |> Camera.reverseIfYIsUp camera )

                                ArcTo { start, end, radius } ->
                                    Canvas.arcTo
                                        ( start.x, start.y |> Camera.reverseIfYIsUp camera )
                                        ( end.x, end.y |> Camera.reverseIfYIsUp camera )
                                        radius

                                BezierCurveTo { control1, control2, end } ->
                                    Canvas.bezierCurveTo
                                        ( control1.x, control1.y |> Camera.reverseIfYIsUp camera )
                                        ( control2.x, control2.y |> Camera.reverseIfYIsUp camera )
                                        ( end.x, end.y |> Camera.reverseIfYIsUp camera )

                        maybeStroke =
                            case parameters.stroke of
                                Nothing ->
                                    []

                                Just color ->
                                    [ stroke color ]

                        maybeFillColor =
                            case parameters.fillColor of
                                Nothing ->
                                    []

                                Just color ->
                                    [ Canvas.Settings.fill color ]
                    in
                    [ Canvas.shapes
                        (transform (geometryTransform geometry_)
                            :: maybeFillColor
                            ++ maybeStroke
                            ++ [ Canvas.Settings.Line.lineWidth parameters.lineWidth
                               , Canvas.Settings.Line.lineCap RoundCap
                               , Canvas.Settings.Line.lineJoin RoundJoin
                               ]
                        )
                        [ Canvas.path ( 0, 0 ) (List.map toLineSegment extensions)
                        ]
                    ]

                Image width height texture ->
                    let
                        textureWidth =
                            (Texture.dimensions texture).width

                        textureHeight =
                            (Texture.dimensions texture).height

                        scaleFactorForTexture =
                            width / textureWidth
                    in
                    [ Canvas.texture
                        [ transform (geometryTransform geometry_)
                        , transform [ Canvas.Settings.Advanced.scale scaleFactorForTexture scaleFactorForTexture ]
                        ]
                        ( -textureWidth / 2, -textureHeight / 2 )
                        texture
                    ]
    in
    if isBehindTheCamera camera (Drawable geometry bareDrawable) then
        []

    else
        helper (Drawable geometry bareDrawable)
