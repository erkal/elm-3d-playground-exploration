module Main exposing (main)

import Color exposing (blue, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateX, rotateZ, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "number of segments", ( 1, 45, 300 ) )
        , ( "path width", ( 0.1, 0.6, 2 ) )
        ]
        []


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
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 2, z = 4 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawPath computer (path1 computer) ]


path1 : Computer -> Path
path1 computer =
    let
        n =
            floor (getFloat "number of segments" computer)
    in
    List.range 0 n
        |> List.map
            (\i ->
                let
                    t =
                        toFloat i / toFloat n
                in
                { x = sin (2 * pi * t)
                , y = cos (2 * pi * t)
                }
            )


type alias Point =
    { x : Float
    , y : Float
    }


type alias Path =
    List Point


type alias PathSegment =
    ( Point, Point )


toSegments : Path -> List PathSegment
toSegments path =
    case path of
        head :: tail ->
            List.map2 Tuple.pair (head :: tail) tail

        [] ->
            []


drawPath : Computer -> Path -> Shape
drawPath computer path =
    group
        (path
            |> toSegments
            |> List.map (drawPathSegment computer)
        )


drawPathSegment : Computer -> PathSegment -> Shape
drawPathSegment computer ( start, end ) =
    let
        ( r, theta ) =
            toPolar
                ( end.x - start.x
                , end.y - start.y
                )

        width =
            getFloat "path width" computer
    in
    block blue ( r, width, width )
        |> rotateX (wave 0 pi 7 computer.time)
        |> moveX (r / 2)
        |> rotateZ theta
        |> moveX start.x
        |> moveY start.y
        |> moveZ 0.5
