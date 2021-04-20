module Main exposing (main)

import Color exposing (Color, black, hsl, white)
import Html exposing (Html, br, div, h2, p, span, text)
import Html.Attributes exposing (style)
import Palette
import Playground3d exposing (Computer, Shape, block, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, scale, wave)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene
import World exposing (Piece, World)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { world : World }



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 20, 60 ) )
        , ( "camera azimuth", ( 0, 0.6, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.4, pi / 2 ) )
        , ( "sunlight azimuth", ( 0, 5.5, 2 * pi ) )
        , ( "sunlight elevation", ( -pi / 2, -1, pi / 2 ) )
        , ( "saturation", ( 0, 0.6, 1 ) )
        , ( "lightning", ( 0, 0.8, 1 ) )
        , ( "cube scale", ( 0.1, 0.95, 1 ) )
        , ( "edge width", ( 0.001, 0.1, 0.5 ) )
        ]
        [ ( "edge color", black )
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
            [ span [] [ text "Press 1-7 to chose the piece" ]
            , br [] []
            , span [] [ text "Arrow keys to rotate" ]
            , br [] []
            , span [] [ text "WASD to move" ]
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
            block color ( edgeWidth, 3 + edgeWidth, edgeWidth )

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
    cube color 1
        |> scale (getFloat "cube scale" computer)
        |> moveX (toFloat x)
        |> moveY (toFloat y)
        |> moveZ (toFloat z)
