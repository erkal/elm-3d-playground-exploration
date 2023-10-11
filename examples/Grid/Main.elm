module Grid.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (hsl, rgb255)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)
import Tools.Geometry.Geometry exposing (Point2d, distance)


main : Playground () Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = \_ -> ()
        , update = \_ _ -> identity
        , view = view
        , hasTape = True
        }


initialConfigurations =
    [ configBlock "Camera"
        True
        [ intConfig "n" ( 1, 100 ) 8
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) -0.5
        ]
    , configBlock "Color"
        True
        [ colorConfig "cube color" (hsl 0 0.36 0.5)
        ]
    , configBlock "Time"
        True
        [ floatConfig "period" ( 0.1, 20 ) 10
        ]
    ]


camera : Computer -> Camera
camera computer =
    let
        n =
            computer |> getInt "n" |> toFloat
    in
    perspectiveWithOrbit
        { focalPoint = { x = n / 2, y = n / 2, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = n * 1.1
        }


view : Computer -> () -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = Color.charcoal
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ squares computer
        ]


squares : Computer -> Shape
squares computer =
    let
        n =
            getInt "n" computer
    in
    group
        (cartesianProduct (List.range 1 n) (List.range 1 n)
            |> List.map (makeSquare computer)
        )


makeSquare : Computer -> ( Int, Int ) -> Shape
makeSquare computer ( i, j ) =
    let
        x =
            toFloat j

        y =
            toFloat i

        pointer =
            computer.pointer
                |> Camera.mouseOverXY (camera computer) computer.screen
                |> Maybe.withDefault { x = 0, y = 0, z = 0 }

        distanceFromMouse =
            distance
                (Point2d x y)
                (Point2d pointer.x pointer.y)

        z =
            (-0.3 * (distanceFromMouse ^ 2) + 1)
                |> max 0
    in
    block (matte (hsl 0.5 0.36 0.5)) ( 1, 1, 1 )
        |> rotateX (2 * z)
        |> rotateY (2 * z)
        |> rotateZ (2 * z)
        |> moveX x
        |> moveY y
        |> moveZ z


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row
