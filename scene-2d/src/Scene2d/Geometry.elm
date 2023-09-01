module Scene2d.Geometry exposing (..)


type alias Geometry =
    { x : Float
    , y : Float
    , z : Float
    , xScale : Float
    , yScale : Float
    , rotation : Float
    }


defaultGeometry : Geometry
defaultGeometry =
    { x = 0
    , y = 0
    , z = 0
    , xScale = 1
    , yScale = 1
    , rotation = 0
    }


move : ( Float, Float, Float ) -> Geometry -> Geometry
move ( dx, dy, dz ) geometry =
    { geometry
        | x = geometry.x + dx
        , y = geometry.y + dy
        , z = geometry.z + dz
    }


scaleX : Float -> Geometry -> Geometry
scaleX k geometry =
    { geometry | xScale = geometry.xScale * k }


scaleY : Float -> Geometry -> Geometry
scaleY k geometry =
    { geometry | yScale = geometry.yScale * k }


scaleAroundOrigin : Float -> Float -> Geometry -> Geometry
scaleAroundOrigin xScale yScale geometry =
    { geometry
        | x = xScale * geometry.x
        , y = yScale * geometry.y
    }
        |> scaleX xScale
        |> scaleY yScale


rotateAroundItsCenter : Float -> Geometry -> Geometry
rotateAroundItsCenter angle geometry =
    { geometry | rotation = geometry.rotation + angle }


rotateAroundOrigin : Float -> Geometry -> Geometry
rotateAroundOrigin angle geometry =
    geometry
        |> rotatePoint angle
        |> rotateAroundItsCenter angle


rotatePoint : Float -> { a | x : Float, y : Float } -> { a | x : Float, y : Float }
rotatePoint angle p =
    { p
        | x = p.x * cos angle - p.y * sin angle
        , y = p.x * sin angle + p.y * cos angle
    }
