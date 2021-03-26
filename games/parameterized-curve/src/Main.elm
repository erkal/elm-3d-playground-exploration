module Main exposing (main)

import Color exposing (hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateY, spin, wave, zigzag)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "saturation", ( 0, 0.8, 1 ) )
        , ( "lightness", ( 0, 0.8, 1 ) )
        , ( "period", ( 1, 6, 10 ) )
        , ( "cube dim x", ( 0, 1, 2 ) )
        , ( "cube dim y", ( 0, 1, 2 ) )
        , ( "cube dim z", ( 0, 1, 2 ) )
        , ( "tune helix", ( 0, 3, 5 ) )
        , ( "number of cubes", ( 20, 100, 200 ) )
        , ( "camera y", ( 2, 3, 10 ) )
        , ( "camera z", ( 8, 12, 30 ) )
        ]


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 3, z = 0 }
                , eyePoint =
                    { x = 0
                    , y = getFloat "camera y" computer
                    , z = getFloat "camera z" computer
                    }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ block white ( 20, 1, 20 ) |> moveY -2
        , curve computer
        ]


parameterization : Computer -> Float -> Point
parameterization computer t =
    { x = 6 * t * sin (6 * (t * getFloat "tune helix" computer))
    , y = (6 + wave 0 1 (getFloat "period" computer) computer.time) * t
    , z = 6 * t * cos (6 * (t * getFloat "tune helix" computer))
    }


curve : Computer -> Shape
curve computer =
    let
        n =
            floor (getFloat "number of cubes" computer)
    in
    group
        (List.range 1 n
            |> List.map (\i -> stepBlock computer (toFloat i / toFloat n))
        )
        |> rotateY (spin 1000 computer.time)


stepBlock : Computer -> Float -> Shape
stepBlock computer t =
    let
        color =
            hsl
                (t * pi + wave -pi pi 10 computer.time)
                (getFloat "saturation" computer)
                (getFloat "lightness" computer)

        { x, y, z } =
            parameterization computer t
    in
    block color
        ( t * getFloat "cube dim x" computer
        , getFloat "cube dim y" computer
        , t * getFloat "cube dim z" computer
        )
        |> moveX x
        |> moveY y
        |> moveZ z
