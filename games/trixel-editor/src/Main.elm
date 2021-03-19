module Main exposing (main)

import Color exposing (black, blue, hsl, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, rotateY, rotateZ, spin, triangle)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene
import TrixelGrid.Face as Face exposing (Face)
import TrixelGrid.Vertex as Vertex exposing (Vertex, vertex)


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "hue", ( 0, 0.5, 1 ) )
        , ( "saturation", ( 0, 0.5, 1 ) )
        , ( "lightness", ( 0, 0.5, 1 ) )
        , ( "rotation", ( 0, 0, 2 * pi ) )
        ]


initialModel : Model
initialModel =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 0, z = 13 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawGridPoints computer model
        , drawFace
            |> rotateZ (spin 1000 computer.time)
        ]


drawFace =
    triangle blue
        ( { x = 0, y = 0, z = 0 }
        , { x = 0, y = 1, z = 0 }
        , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
        )


drawVertex : Vertex -> Shape
drawVertex v =
    let
        { x, y } =
            Vertex.fromGridCoordinates v
    in
    cube black 0.05
        |> moveX x
        |> moveY y


gridPoints : List Vertex
gridPoints =
    cartesianProduct
        (List.range -3 3)
        (List.range -3 3)
        |> List.map vertex


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


drawGridPoints : Computer -> Model -> Shape
drawGridPoints computer model =
    group
        (gridPoints
            |> List.map drawVertex
        )
