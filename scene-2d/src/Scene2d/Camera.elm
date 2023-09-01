module Scene2d.Camera exposing
    ( Camera
    , init
    , getViewPoint, getViewportAspectRatio
    , getX, getY, getZ
    , left, bottom, right, top
    , topAtZ, bottomAtZ, leftAtZ, rightAtZ
    , width, height
    , getBoundingBoxAtZ
    , toGameCoordinates
    , setCoordinates, setX, setY, setZ
    , mapX, mapY, mapZ
    , moveX, moveY, moveZ
    , lerp, lerpX, lerpY, lerpZ
    , reverseIfYIsUp, zoomTo
    )

{-| A Camera type that is used for rendering objects with correct position and size.


# Camera

@docs Camera


# Create

@docs init


# Get

@docs getViewPoint, getViewportAspectRatio
@docs getX, getY, getZ
@docs left, bottom, right, top
@docs topAtZ, bottomAtZ, leftAtZ, rightAtZ
@docs width, height
@docs getBoundingBoxAtZ
@docs toGameCoordinates


# Modify

@docs setCoordinates, setX, setY, setZ
@docs mapX, mapY, mapZ
@docs moveX, moveY, moveZ
@docs @zoomTo
@docs lerp, lerpX, lerpY, lerpZ

-}


type Camera
    = Camera
        { viewPoint : { x : Float, y : Float, z : Float }
        , yIsUp : Bool
        , horizontalAngleOfView : Float
        , viewportAspectRatio : Float
        }


{-|

    The only way to create a camera.
    Assume, for example you created a camera by
    ```
    init { aspectRatio = 2, gameWidth = 10 }
    ```
    Then,
    - the aspect ratio of your viewport will be 2 and
    - the full width of the canvas is going to be considered as 10 units.

-}
init : { aspectRatio : Float, gameWidth : Float, yIsUp : Bool } -> Camera
init { aspectRatio, gameWidth, yIsUp } =
    Camera
        { viewPoint = { x = 0, y = 0, z = gameWidth }
        , yIsUp = yIsUp
        , horizontalAngleOfView = 2 * Basics.atan 0.5
        , viewportAspectRatio = aspectRatio
        }



-- GET


{-|

    The argument is canvas coordinates in pixels where

      - the canvas width is considered to be 1
      - the origin is the top left corner and
      - the positive y-axis is directed downwards

-}
toGameCoordinates : Camera -> { x : Float, y : Float } -> { x : Float, y : Float }
toGameCoordinates (Camera camera) { x, y } =
    let
        c =
            camera.viewPoint
    in
    { x = (x - 0.5) * c.z + c.x
    , y = ((y - 0.5) |> reverseIfYIsUp (Camera camera)) * c.z + c.y
    }


getViewPoint : Camera -> { x : Float, y : Float, z : Float }
getViewPoint (Camera camera) =
    camera.viewPoint


getX : Camera -> Float
getX =
    getViewPoint >> .x


getY : Camera -> Float
getY =
    getViewPoint >> .y


getZ : Camera -> Float
getZ =
    getViewPoint >> .z


horizontalAngleOfView : Camera -> Float
horizontalAngleOfView (Camera camera) =
    camera.horizontalAngleOfView


getViewportAspectRatio : Camera -> Float
getViewportAspectRatio (Camera camera) =
    camera.viewportAspectRatio


reverseIfYIsUp : Camera -> Float -> Float
reverseIfYIsUp (Camera camera) v =
    if camera.yIsUp then
        -v

    else
        v


getBoundingBoxAtZ : Float -> Camera -> { left : Float, right : Float, top : Float, bottom : Float }
getBoundingBoxAtZ z camera =
    let
        angle =
            horizontalAngleOfView camera

        halfWidthAtZ =
            (getZ camera - z) * tan (0.5 * angle)

        halfHeightAtZ =
            (getZ camera - z) * tan (0.5 * angle) / getViewportAspectRatio camera
    in
    { left = getX camera - halfWidthAtZ
    , right = getX camera + halfWidthAtZ
    , top = getY camera - (halfHeightAtZ |> reverseIfYIsUp camera)
    , bottom = getY camera + (halfHeightAtZ |> reverseIfYIsUp camera)
    }


topAtZ : Float -> Camera -> Float
topAtZ z camera =
    (getBoundingBoxAtZ z camera).top


top : Camera -> Float
top =
    topAtZ 0


bottomAtZ : Float -> Camera -> Float
bottomAtZ z camera =
    (getBoundingBoxAtZ z camera).bottom


bottom : Camera -> Float
bottom =
    bottomAtZ 0


leftAtZ : Float -> Camera -> Float
leftAtZ z camera =
    (getBoundingBoxAtZ z camera).left


left : Camera -> Float
left =
    leftAtZ 0


rightAtZ : Float -> Camera -> Float
rightAtZ z camera =
    (getBoundingBoxAtZ z camera).right


right : Camera -> Float
right =
    rightAtZ 0


width : Camera -> Float
width camera =
    right camera - left camera


height : Camera -> Float
height camera =
    top camera - bottom camera



-- MODIFY


mapCoordinates up (Camera camera) =
    Camera { camera | viewPoint = up camera.viewPoint }


mapX : (Float -> Float) -> Camera -> Camera
mapX up =
    mapCoordinates (\p -> { p | x = up p.x })


mapY : (Float -> Float) -> Camera -> Camera
mapY up =
    mapCoordinates (\p -> { p | y = up p.y })


mapZ : (Float -> Float) -> Camera -> Camera
mapZ up =
    mapCoordinates (\p -> { p | z = up p.z })


moveX : Float -> Camera -> Camera
moveX d =
    mapX ((+) d)


moveY : Float -> Camera -> Camera
moveY d =
    mapY ((+) d)


moveZ : Float -> Camera -> Camera
moveZ d =
    mapZ ((+) d)


zoomTo :
    { target : { x : Float, y : Float, z : Float }
    , dz : Float
    , minZ : Float
    , maxZ : Float
    }
    -> Camera
    -> Camera
zoomTo { target, dz, minZ, maxZ } camera =
    let
        c =
            getViewPoint camera

        ratio =
            dz / (c.z - target.z)

        ( dx, dy ) =
            ( ratio * (c.x - target.x)
            , ratio * (c.y - target.y)
            )

        zoomed =
            camera
                |> moveX dx
                |> moveY dy
                |> moveZ dz
    in
    if getZ zoomed < minZ || getZ zoomed > maxZ then
        camera

    else
        zoomed



--


setCoordinates : { x : Float, y : Float, z : Float } -> Camera -> Camera
setCoordinates p (Camera camera) =
    Camera { camera | viewPoint = p }


setX : Float -> Camera -> Camera
setX x =
    mapX (always x)


setY : Float -> Camera -> Camera
setY y =
    mapY (always y)


setZ : Float -> Camera -> Camera
setZ z =
    mapZ (always z)



--


lerp : Float -> Float -> Float -> Float
lerp rate target v =
    v + rate * (target - v)


lerpX : Float -> Float -> Camera -> Camera
lerpX rate target =
    mapX (lerp rate target)


lerpY : Float -> Float -> Camera -> Camera
lerpY rate target =
    mapY (lerp rate target)


lerpZ : Float -> Float -> Camera -> Camera
lerpZ rate target =
    mapZ (lerp rate target)
