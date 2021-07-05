module Main exposing (main)

import Color exposing (hsl, rgb, rgb255)
import Graph exposing (Graph, VertexData, VertexId)
import Html exposing (Html)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurations, getColor, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { graph : Graph
    }



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 40 ) 20
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
    , colorConfig "cube" (rgb255 59 232 203)
    , colorConfig "floor" (rgb255 35 118 139)
    , floatConfig "period" ( 0.1, 5 ) 1
    ]


init : Computer -> Model
init computer =
    { graph = Graph.exampleGraph
    }



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
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawFloor computer
        , drawVertices computer model
        ]


drawFloor : Computer -> Shape
drawFloor computer =
    block (getColor "floor" computer) ( 10, 1, 10 )
        |> moveY -0.5


drawVertices : Computer -> Model -> Shape
drawVertices computer model =
    group
        (Graph.allVertices model.graph
            |> List.map (drawVertex computer)
        )


drawVertex : Computer -> ( VertexId, VertexData ) -> Shape
drawVertex computer ( _, { position } ) =
    cylinder (getColor "cube" computer) 0.5 0.4
        |> scale (wave 1 1.1 1 computer.time)
        |> moveX position.x
        |> moveZ position.y
