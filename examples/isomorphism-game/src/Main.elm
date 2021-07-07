module Main exposing (main)

import Color exposing (blue, green, hsl, orange, red, rgb, rgb255)
import Graph exposing (Graph, Point, VertexData, VertexId)
import Html exposing (Html, button, div, h2, hr, p, span, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Level exposing (Level)
import LevelSelector as LS exposing (Levels)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurationsAndEditor, getColor, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurationsAndEditor view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { levels : Levels Level
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
    { levels = LS.singleton Level.exampleLevel
    , pointer = Point 0 0
    , editorState = Idle
    }



-- UPDATE


mapCurrentBaseGraph : (Graph -> Graph) -> Model -> Model
mapCurrentBaseGraph up model =
    { model
        | levels = LS.mapCurrent (Level.mapBaseGraph up) model.levels
    }


update : Computer -> Model -> Model
update computer model =
    model
        |> updatePointerPosition computer
        |> handlePointerInput computer


distance : Point -> Point -> Float
distance p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2)


baseVertexAtPointer : Computer -> Model -> Maybe ( VertexId, VertexData )
baseVertexAtPointer computer model =
    model.levels
        |> LS.current
        |> .baseGraph
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
        case ( model.editorState, baseVertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingEdge { sourceId = vertexId } }

            _ ->
                model

    else
        model


insertEdge : Computer -> Model -> Model
insertEdge computer model =
    if not computer.mouse.down then
        case ( model.editorState, baseVertexAtPointer computer model ) of
            ( DraggingEdge { sourceId }, Just ( targetId, _ ) ) ->
                model
                    |> mapCurrentBaseGraph (Graph.insertEdge sourceId targetId)

            _ ->
                model

    else
        model


insertVertex : Computer -> Model -> Model
insertVertex computer model =
    case
        ( model.editorState
        , computer.mouse.down
        , baseVertexAtPointer computer model
        )
    of
        ( Idle, True, Nothing ) ->
            model
                |> mapCurrentBaseGraph (Graph.insertVertex model.pointer)

        _ ->
            model


startDraggingVertex : Computer -> Model -> Model
startDraggingVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case ( model.editorState, baseVertexAtPointer computer model ) of
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
            model |> mapCurrentBaseGraph (Graph.moveVertex vertexId model.pointer)

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
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawBaseGraph computer model
        , drawDraggedEdge computer model
        , drawFloor computer
        , axes
        , drawPointer computer model
        ]


drawFloor : Computer -> Shape
drawFloor computer =
    block (getColor "floor" computer) ( 8, 8, 1 )
        |> moveZ -0.5


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
            drawBaseEdge computer
                ( Graph.getPosition sourceId (LS.current model.levels).baseGraph
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


drawBaseGraph : Computer -> Model -> Shape
drawBaseGraph computer model =
    group
        [ drawVerticesOfBaseGraph computer model
        , drawEdgesOfBaseGraph computer model
        ]


drawVerticesOfBaseGraph : Computer -> Model -> Shape
drawVerticesOfBaseGraph computer model =
    group
        (Graph.allVertices (LS.current model.levels).baseGraph
            |> List.map (drawBaseVertex computer)
        )


drawBaseVertex : Computer -> ( VertexId, VertexData ) -> Shape
drawBaseVertex computer ( _, { position } ) =
    sphere (getColor "vertex" computer) (getFloat "vertex radius" computer)
        |> rotateX (degrees 90)
        |> scale (wave 1 1.1 1 computer.time)
        |> moveX position.x
        |> moveY position.y


drawEdgesOfBaseGraph : Computer -> Model -> Shape
drawEdgesOfBaseGraph computer model =
    group
        (model.levels
            |> LS.current
            |> .baseGraph
            |> Graph.allEdges
            |> List.map (drawBaseEdge computer)
        )


drawBaseEdge : Computer -> ( Point, Point ) -> Shape
drawBaseEdge computer ( start_, end ) =
    let
        ( length, rotation ) =
            toPolar ( end.x - start_.x, end.y - start_.y )
    in
    block (getColor "edge" computer) ( length, 0.3, 0.3 )
        |> moveX (length / 2)
        |> rotateZ rotation
        |> moveX start_.x
        |> moveY start_.y



-- EDITOR


type EditorMsg
    = PressedPreviousLevelButton
    | PressedNextLevelButton
    | PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelOneUoButton


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        PressedPreviousLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LS.goToPrevious
                        |> Maybe.withDefault model.levels
            }

        PressedNextLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LS.goToNext
                        |> Maybe.withDefault model.levels
            }

        PressedAddLevelButton ->
            { model | levels = model.levels |> LS.add Level.empty }

        PressedRemoveLevelButton ->
            { model | levels = model.levels |> LS.removeCurrent }

        PressedMoveLevelOneUoButton ->
            { model | levels = model.levels |> LS.moveLevelOneUp }


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div
        [ style "position" "absolute"
        , style "height" "100%"
        , style "width" "400px"
        , style "right" "0px"
        , style "margin" "40px"
        , style "font-size" "16px"
        , style "color" "white"
        , style "overflow" "scroll"
        ]
        [ viewDebugger computer model
        , h2 [] [ text "Editing the selected level" ]
        , div [] [ text "Press mouse to add vertex" ]
        , div [] [ text "To move vertices drag them with mouse" ]
        , div [] [ text "Hold shift and drag with mouse to draw an edge" ]
        , viewLevelSelection computer model
        ]


viewDebugger : Computer -> Model -> Html EditorMsg
viewDebugger computer model =
    text
        (Debug.toString model.editorState)


viewLevelSelection : Computer -> Model -> Html EditorMsg
viewLevelSelection computer model =
    div []
        [ h2 [] [ text "Level Selection" ]
        , p []
            [ button [ onClick PressedPreviousLevelButton ] [ text "<" ]
            , span [ style "margin" "10px" ]
                [ text <|
                    String.concat
                        [ String.fromInt (LS.currentIndex model.levels)
                        , " / "
                        , String.fromInt (LS.size model.levels)
                        ]
                ]
            , button [ onClick PressedNextLevelButton ] [ text ">" ]
            ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedAddLevelButton ] [ text "Add level" ] ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedRemoveLevelButton ] [ text "Remove current level" ] ]
        , div [ style "margin-top" "10px" ] [ button [ onClick PressedMoveLevelOneUoButton ] [ text "Move level one up" ] ]
        ]
