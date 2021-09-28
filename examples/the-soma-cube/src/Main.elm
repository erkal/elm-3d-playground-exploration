module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, hsl, white)
import Html exposing (Html, div, h2, p, text)
import Html.Attributes exposing (style)
import Palette
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getFloat)
import Playground.Animation exposing (wave)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)
import World exposing (Piece, World)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { world : World }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0.6
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.4
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "cube scale" ( 0.1, 1 ) 0.95
        , floatConfig "edge width" ( 0.001, 0.5 ) 0.1
        ]
    , configBlock "Colors and light"
        True
        [ floatConfig "sunlight azimuth" ( 0, 2 * pi ) 5.5
        , floatConfig "sunlight elevation" ( -pi / 2, pi / 2 ) -1
        , floatConfig "saturation" ( 0, 1 ) 0.6
        , floatConfig "lightning" ( 0, 1 ) 0.8
        , colorConfig "edge color" black
        ]
    ]


init : Computer -> Model
init computer =
    { world = World.initialWorld }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0.5, y = 1, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


view : Computer -> Model -> Html Never
view computer model =
    div
        []
        [ div
            [ style "position" "absolute"
            , style "width" "100%"
            ]
            [ explanationText computer model ]
        , viewShapes computer model
        ]


explanationText : Computer -> Model -> Html Never
explanationText ({ time } as computer) model =
    div
        [ style "min-width" "320px"
        , style "max-width" "500px"
        , style "margin" "0 auto"
        ]
        [ h2
            [ style "margin" "10px"
            , style "text-align" "center"
            ]
            [ text "The Soma Cube" ]

        --, p
        --    [ style "margin" "10px", style "text-align" "center", style "font-weight" "bold" ]
        --    [ text "..." ]
        , p
            [ style "margin" "10px 20px 10px 20px" ]
            [ div [] [ text "Space Key to chose the next piece" ]
            , div [] [ text "Arrow keys to rotate the cube" ]
            , div [] [ text "WASDQE to move the cube" ]
            , div [] [ text "Shift + Arrow Keys to rotate the camera" ]
            ]
        ]


viewShapes : Computer -> Model -> Html Never
viewShapes computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = white
        , sunlightAzimuth = getFloat "sunlight azimuth" computer
        , sunlightElevation = getFloat "sunlight elevation" computer
        }
        [ drawPieces computer model
        , drawBigCube computer
        ]


drawBigCube : Computer -> Shape
drawBigCube computer =
    let
        edgeWidth =
            getFloat "edge width" computer

        color =
            --getColor "edge color" computer
            hsl
                (wave 0 1 7 computer.time)
                (getFloat "saturation" computer)
                (getFloat "lightning" computer)

        edge =
            block (matte color) ( edgeWidth, 3 + edgeWidth, edgeWidth )

        edgesParallelToYAxis =
            group
                [ edge |> moveZ 1.5 |> moveX 1.5
                , edge |> moveZ 1.5 |> moveX 1.5 |> rotateY (degrees 90)
                , edge |> moveZ 1.5 |> moveX 1.5 |> rotateY (degrees 180)
                , edge |> moveZ 1.5 |> moveX 1.5 |> rotateY (degrees 270)
                ]
    in
    group
        [ edgesParallelToYAxis
        , edgesParallelToYAxis |> rotateX (degrees 90)
        , edgesParallelToYAxis |> rotateZ (degrees 90)
        ]


drawPieces : Computer -> Model -> Shape
drawPieces computer model =
    let
        drawPieceWithColor pieceIndex =
            drawPiece computer
                (Palette.get pieceIndex (Palette.palette1 computer))
    in
    group
        (model.world.pieces |> List.indexedMap drawPieceWithColor)


drawPiece : Computer -> Color -> Piece -> Shape
drawPiece computer color piece =
    let
        ( posX, posY, posZ ) =
            piece.position

        ( rotX, rotY, rotZ ) =
            piece.rotation_in_90
    in
    group
        (piece.cubesInLocalCoordinates |> List.map (drawCube computer color))
        |> rotateX (toFloat rotX * degrees 90)
        |> rotateY (toFloat rotY * degrees 90)
        |> rotateZ (toFloat rotZ * degrees 90)
        |> moveX (toFloat posX)
        |> moveY (toFloat posY)
        |> moveZ (toFloat posZ)


drawCube : Computer -> Color -> ( Int, Int, Int ) -> Shape
drawCube computer color ( x, y, z ) =
    cube (matte color) 1
        |> scale (getFloat "cube scale" computer)
        |> moveX (toFloat x)
        |> moveY (toFloat y)
        |> moveZ (toFloat z)
