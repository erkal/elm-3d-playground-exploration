module Main exposing (main)

import Color exposing (black, blue, red, white)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateZ, sphere, spin, triangle)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point)
import Playground3d.Scene as Scene
import TrixelGrid.Face as Face exposing (Face, leftFace, rightFace)
import TrixelGrid.Vertex as Vertex exposing (Vertex, vertex)


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    { faces : List Face
    , mouse : Point
    }



-- INIT


initialConfigurations =
    configurations
        [ ( "test", ( 0, 0.5, 1 ) )
        ]


initialModel : Model
initialModel =
    { faces =
        [ leftFace 0 0
        , rightFace 0 0
        , rightFace 1 1
        , rightFace -1 -1
        ]
    , mouse =
        Point 0 0 0
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateMouse computer


updateMouse : Computer -> Model -> Model
updateMouse computer model =
    case Playground3d.Camera.mouseOverXY camera computer of
        Nothing ->
            model

        Just p ->
            { model | mouse = p }



-- VIEW


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint = { x = 0, y = 0, z = 13 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera = camera
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawVertices
        , drawFaces computer model
        , drawMouse computer model
        ]


drawMouse : Computer -> Model -> Shape
drawMouse computer model =
    sphere black 0.1
        |> moveX model.mouse.x
        |> moveY model.mouse.y
        |> moveZ model.mouse.z


drawFaces : Computer -> Model -> Shape
drawFaces computer model =
    let
        drawLeftFace =
            triangle blue
                ( { x = 0, y = 0, z = 0 }
                , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
                , { x = 0, y = 1, z = 0 }
                )

        drawRightFace =
            drawLeftFace
                |> rotateZ (degrees 180)
                |> moveX (cos (degrees 30))
                |> moveY (1 + sin (degrees 30))

        drawCorrectFace face =
            if Face.isLeft face then
                drawLeftFace

            else
                drawRightFace

        drawFace face =
            let
                { x, y } =
                    face
                        |> Face.lowerRight
                        |> Vertex.toWorldCoordinates
            in
            drawCorrectFace face
                |> moveX x
                |> moveY y
    in
    group
        (model.faces |> List.map drawFace)


drawVertices : Shape
drawVertices =
    let
        cartesianProduct : List a -> List b -> List ( b, a )
        cartesianProduct columns =
            let
                row i =
                    List.map (\j -> ( i, j )) columns
            in
            List.concatMap row

        drawVertex : Vertex -> Shape
        drawVertex v =
            let
                { x, y } =
                    Vertex.toWorldCoordinates v
            in
            cube black 0.05
                |> moveX x
                |> moveY y
    in
    group
        (cartesianProduct
            (List.range -1 1)
            (List.range -2 2)
            |> List.map vertex
            |> List.map drawVertex
        )
