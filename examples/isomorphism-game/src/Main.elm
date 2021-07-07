module Main exposing (main)

import Color exposing (blue, green, hsl, orange, red, rgb, rgb255)
import Graph exposing (Graph, Point, VertexData, VertexId)
import Html exposing (Html, div, text)
import Html.Attributes exposing (style)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurations, getColor, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    { graph : Graph
    , pointer : Point
    , editorState : EditorState
    }


type EditorState
    = Idle
    | DraggingVertex { vertexId : VertexId }
    | DraggingEdge { sourceId : VertexId }



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 40 ) 20
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) -0.5
    , floatConfig "vertex radius" ( 0.2, 0.5 ) 0.3
    , colorConfig "vertex" (rgb255 59 232 203)
    , colorConfig "edge" (rgb255 59 232 203)
    , colorConfig "floor" (rgb255 35 118 139)
    , floatConfig "period" ( 0.1, 5 ) 1
    ]


init : Computer -> Model
init computer =
    { graph = Graph.exampleGraph
    , pointer = Point 0 0
    , editorState = Idle
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updatePointerPosition computer
        |> handlePointerInput computer


distance : Point -> Point -> Float
distance p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2)


vertexAtPointer : Computer -> Model -> Maybe ( VertexId, VertexData )
vertexAtPointer computer model =
    model.graph
        |> Graph.allVertices
        |> List.filter
            (\( _, { position } ) ->
                distance position model.pointer < getFloat "vertex radius" computer
            )
        |> List.head


handlePointerInput : Computer -> Model -> Model
handlePointerInput computer model =
    model
        |> insertVertex computer
        |> startDraggingVertex computer
        |> dragVertex computer
        |> startDraggingEdge computer
        |> insertEdge computer
        |> endDragging computer


startDraggingEdge : Computer -> Model -> Model
startDraggingEdge computer model =
    if computer.keyboard.shift && computer.mouse.down then
        case ( model.editorState, vertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingEdge { sourceId = vertexId } }

            _ ->
                model

    else
        model


insertEdge : Computer -> Model -> Model
insertEdge computer model =
    if not computer.mouse.down then
        case ( model.editorState, vertexAtPointer computer model ) of
            ( DraggingEdge { sourceId }, Just ( targetId, _ ) ) ->
                { model
                    | graph = model.graph |> Graph.insertEdge sourceId targetId
                }

            _ ->
                model

    else
        model


insertVertex : Computer -> Model -> Model
insertVertex computer model =
    case
        ( model.editorState
        , computer.mouse.down
        , vertexAtPointer computer model
        )
    of
        ( Idle, True, Nothing ) ->
            { model | graph = model.graph |> Graph.insertVertex model.pointer }

        _ ->
            model


startDraggingVertex : Computer -> Model -> Model
startDraggingVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case ( model.editorState, vertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingVertex { vertexId = vertexId } }

            _ ->
                model

    else
        model


dragVertex : Computer -> Model -> Model
dragVertex computer model =
    case model.editorState of
        DraggingVertex { vertexId } ->
            { model
                | graph = model.graph |> Graph.moveVertex vertexId model.pointer
            }

        _ ->
            model


endDragging : Computer -> Model -> Model
endDragging computer model =
    if not computer.mouse.down then
        case model.editorState of
            DraggingVertex _ ->
                { model | editorState = Idle }

            DraggingEdge _ ->
                { model | editorState = Idle }

            _ ->
                model

    else
        model


updatePointerPosition : Computer -> Model -> Model
updatePointerPosition computer model =
    { model
        | pointer =
            computer.mouse
                |> Playground3d.Camera.mouseOverXY (camera computer) computer.screen
                |> Maybe.map (\{ x, y } -> { x = x, y = y })
                |> Maybe.withDefault model.pointer
    }



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = -2, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


view : Computer -> Model -> Html Never
view computer model =
    div []
        [ div [ style "position" "absolute" ] [ viewGame computer model ]
        , div [ style "position" "absolute" ] [ viewDebugger computer model ]
        ]


viewDebugger : Computer -> Model -> Html Never
viewDebugger computer model =
    div
        [ style "margin-left" "400px"
        , style "margin-top" "40px"
        , style "color" "white"
        ]
        [ text <| Debug.toString model.editorState
        ]


viewGame : Computer -> Model -> Html Never
viewGame computer model =
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
        , drawEdges computer model
        , axes
        , drawPointer computer model
        , drawDraggedEdge computer model
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawDraggedEdge : Computer -> Model -> Shape
drawDraggedEdge computer model =
    case model.editorState of
        DraggingEdge { sourceId } ->
            drawEdge computer
                ( Graph.getPosition sourceId model.graph
                , model.pointer
                )

        _ ->
            group []


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    cylinder orange 0.1 2
        |> rotateX (degrees 90)
        |> moveX model.pointer.x
        |> moveY model.pointer.y


drawEdges : Computer -> Model -> Shape
drawEdges computer model =
    group
        (model.graph
            |> Graph.allEdges
            |> List.map (drawEdge computer)
        )


drawEdge : Computer -> ( Point, Point ) -> Shape
drawEdge computer ( start_, end ) =
    let
        ( length, rotation ) =
            toPolar ( end.x - start_.x, end.y - start_.y )
    in
    block (getColor "edge" computer) ( length, 0.3, 0.3 )
        |> moveX (length / 2)
        |> rotateZ rotation
        |> moveX start_.x
        |> moveY start_.y


drawFloor : Computer -> Shape
drawFloor computer =
    block (getColor "floor" computer) ( 8, 8, 1 )
        |> moveZ -0.5


drawVertices : Computer -> Model -> Shape
drawVertices computer model =
    group
        (Graph.allVertices model.graph
            |> List.map (drawVertex computer)
        )


drawVertex : Computer -> ( VertexId, VertexData ) -> Shape
drawVertex computer ( _, { position } ) =
    sphere (getColor "vertex" computer) (getFloat "vertex radius" computer)
        |> rotateX (degrees 90)
        |> scale (wave 1 1.1 1 computer.time)
        |> moveX position.x
        |> moveY position.y
