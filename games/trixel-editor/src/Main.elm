module Main exposing (main)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import Color exposing (Color, black, blue, gray, lightBlue, purple, red, white, yellow)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateZ, sphere, spin, triangle, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Geometry exposing (Point)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Temperature
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
        , ( "camera y", ( -40, -5, 0 ) )
        , ( "camera z", ( 1, 10, 40 ) )
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
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 1 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 1 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = degrees -90
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 100
                }

        fourthLight =
            Light.soft
                { azimuth = degrees 0
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 20
                , intensityBelow = Illuminance.lux 10
                }
    in
    Scene.custom
        { screen = computer.screen
        , camera = camera computer
        , lights =
            Scene3d.fourLights
                firstLight
                secondLight
                thirdLight
                fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = lightBlue
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
    block gray ( 7, 7, 1 )
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


drawFace : Face -> Shape
drawFace face =
    let
        { x, y } =
            face
                |> Face.lowerRight
                |> Vertex.worldCoordinates

        drawLeftFace : Shape
        drawLeftFace =
            triangle white
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
            (List.range -3 3)
            (List.range -3 3)
            |> List.map vertex
            |> List.map (drawVertex black 0.1)
        )
