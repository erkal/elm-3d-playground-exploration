module Main exposing (main)

import Color exposing (blue, white)
import Html exposing (Html, br, div, h2, p, span, text)
import Html.Attributes exposing (style)
import Palette
import Piece exposing (Piece)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateY, rotateZ, scale)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    configurations
        [ ( "camera distance", ( 3, 25, 60 ) )
        , ( "camera azimuth", ( 0, 0.4, 2 * pi ) )
        , ( "camera elevation", ( -pi / 2, 0.5, pi / 2 ) )
        , ( "sunlight azimuth", ( 0, 5.5, 2 * pi ) )
        , ( "sunlight elevation", ( -pi / 2, -1, pi / 2 ) )
        , ( "saturation", ( 0, 0.6, 1 ) )
        , ( "lightning", ( 0, 0.8, 1 ) )
        , ( "cube scale", ( 0.1, 0.95, 1 ) )
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


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
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
        , p
            [ style "margin" "10px", style "text-align" "center", style "font-weight" "bold" ]
            [ text "..." ]
        , p
            [ style "margin" "10px 20px 10px 20px" ]
            [ span [] [ text "1-7 to chose the piece" ]
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
        , drawBigCube computer model
        ]


examplePieces : List Piece
examplePieces =
    [ Piece 1 ( -3, 4, 0 ) ( 0, 0, 0 )
    , Piece 2 ( 0, 4, 0 ) ( 0, 0, 0 )
    , Piece 3 ( 3, 4, 0 ) ( 0, 0, 0 )
    , Piece 4 ( -2, 0, 0 ) ( 0, 0, 0 )
    , Piece 5 ( 2, 0, 0 ) ( 0, 0, 0 )
    , Piece 6 ( -2, -3, 0 ) ( 0, 0, 0 )
    , Piece 7 ( 2, -3, 0 ) ( 0, 0, 0 )
    ]


drawBigCube : Computer -> Model -> Shape
drawBigCube computer model =
    group []


drawPieces : Computer -> Model -> Shape
drawPieces computer model =
    group
        (examplePieces
            |> List.map (drawPiece computer)
        )


drawPiece : Computer -> Piece -> Shape
drawPiece computer piece =
    let
        drawCube ( x, y, z ) =
            cube (Palette.get piece.pieceType (Palette.palette1 computer)) 1
                |> scale (getFloat "cube scale" computer)
                |> moveX (toFloat x)
                |> moveY (toFloat y)
                |> moveZ (toFloat z)

        ( posX, posY, posZ ) =
            piece.position

        ( rotX, rotY, rotZ ) =
            piece.rotation_in_90
    in
    group
        (Piece.cubesInLocalCoordinates piece
            |> List.map drawCube
        )
        |> rotateY (toFloat rotY * degrees 90)
        |> rotateY (toFloat rotY * degrees 90)
        |> rotateZ (toFloat rotZ * degrees 90)
        |> moveX (toFloat posX)
        |> moveY (toFloat posY)
        |> moveZ (toFloat posZ)
