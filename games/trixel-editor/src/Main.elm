module Main exposing (main)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import Color exposing (Color, black, blue, purple, red, white, yellow)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateZ, sphere, spin, triangle, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point)
import Playground3d.Scene as Scene
import TrixelGrid.Face as Face exposing (Face, leftFace, rightFace)
import TrixelGrid.Vertex as Vertex exposing (Vertex, vertex)


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    { faces : List Face
    , mouseOveredUV : { u : Float, v : Float }
    }



-- INIT


initialConfigurations =
    configurations
        [ ( "camera x", ( -40, 0, 40 ) )
        , ( "camera y", ( -40, 0, 0 ) )
        , ( "camera z", ( 1, 13, 40 ) )
        ]


initialModel : Model
initialModel =
    { faces =
        [ leftFace 0 0
        , rightFace 0 0
        , rightFace 1 1
        , rightFace -1 -1
        ]
    , mouseOveredUV =
        { u = 0, v = 0 }
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateMouseOverXY computer


updateMouseOverXY : Computer -> Model -> Model
updateMouseOverXY computer model =
    case Playground3d.Camera.mouseOverXY (camera computer) computer of
        Nothing ->
            model

        Just p ->
            { model | mouseOveredUV = Vertex.fromWorldCoordinates { x = p.x, y = p.y } }



-- VIEW


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = getFloat "camera x" computer
            , y = getFloat "camera y" computer
            , z = getFloat "camera z" computer
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera = camera computer
        , backgroundColor = white
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ group
            [ floorBlock computer
            , drawVertices
            , drawFaces computer model
            , drawMouseOveredFace computer model
            ]
            |> rotateZ (wave -0.1 0.1 5 computer.time)
        ]


floorBlock : Computer -> Shape
floorBlock computer =
    block purple ( 7, 7, 1 )
        |> moveZ -0.7


drawMouseOveredFace : Computer -> Model -> Shape
drawMouseOveredFace computer model =
    let
        { u, v } =
            model.mouseOveredUV

        frac f =
            f - toFloat (floor f)

        newFace =
            if frac u + frac v < 1 then
                Face.leftFace (floor u) (floor v)

            else
                Face.rightFace (floor u) (floor v)
    in
    drawFace newFace


drawLeftFace : Shape
drawLeftFace =
    triangle blue
        ( { x = 0, y = 0, z = 0 }
        , { x = cos (degrees 30), y = sin (degrees 30), z = 0 }
        , { x = 0, y = 1, z = 0 }
        )


drawRightFace : Shape
drawRightFace =
    drawLeftFace
        |> rotateZ (degrees 180)
        |> moveX (cos (degrees 30))
        |> moveY (1 + sin (degrees 30))


drawFace : Face -> Shape
drawFace face =
    let
        { x, y } =
            face
                |> Face.lowerRight
                |> Vertex.worldCoordinates
    in
    (if Face.isLeft face then
        drawLeftFace

     else
        drawRightFace
    )
        |> moveX x
        |> moveY y


drawFaces : Computer -> Model -> Shape
drawFaces computer model =
    group
        (model.faces |> List.map drawFace)


drawVertex : Color -> Float -> Vertex -> Shape
drawVertex color radius v =
    let
        { x, y } =
            Vertex.worldCoordinates v
    in
    cube color radius
        |> moveX x
        |> moveY y


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
    in
    group
        (cartesianProduct
            (List.range -1 1)
            (List.range -2 2)
            |> List.map vertex
            |> List.map (drawVertex black 0.1)
        )
