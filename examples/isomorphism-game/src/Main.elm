module Main exposing (main)

import Color exposing (blue, green, orange, red, rgb255)
import Element exposing (Element, alignBottom, alignRight, alignTop, column, el, fill, height, layout, none, padding, paddingXY, paragraph, px, row, spacing, text, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Graph exposing (Graph, Point, VertexData, VertexId)
import Html exposing (Html)
import Level exposing (Level)
import LevelSelector as LS exposing (Levels)
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurationsAndEditor, getColor, getFloat)
import Playground3d.Animation exposing (..)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Colors as Colors
import Playground3d.Scene as Scene exposing (..)


main =
    gameWithConfigurationsAndEditor view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { editorIsOn : Bool
    , levels : Levels Level
    , pointer : Point
    , editorState : EditorState
    }


type EditorState
    = Idle
    | DraggingBaseVertex { vertexId : VertexId }
    | DraggingPlayerVertex { vertexId : VertexId }
    | DraggingEdge { sourceId : VertexId }



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 40 ) 20
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) -0.5
    , floatConfig "base vertex radius" ( 0.2, 0.5 ) 0.4
    , colorConfig "base vertex" (rgb255 59 232 203)
    , colorConfig "base edge" (rgb255 59 232 203)
    , floatConfig "player vertex radius" ( 0.1, 0.4 ) 0.3
    , colorConfig "player vertex" (rgb255 212 99 144)
    , colorConfig "player edge" (rgb255 212 99 144)
    , floatConfig "player edge width" ( 0.05, 0.3 ) 0.15
    , colorConfig "game background" (rgb255 35 118 139)
    , floatConfig "period" ( 0.1, 5 ) 1
    ]


init : Computer -> Model
init computer =
    { editorIsOn = True
    , levels = LS.singleton Level.exampleLevel
    , pointer = Point 0 0
    , editorState = Idle
    }



-- UPDATE


mapCurrentBaseGraph : (Graph -> Graph) -> Model -> Model
mapCurrentBaseGraph up model =
    { model
        | levels = LS.mapCurrent (Level.mapBaseGraph up) model.levels
    }


mapCurrentPlayerGraph : (Graph -> Graph) -> Model -> Model
mapCurrentPlayerGraph up model =
    { model
        | levels = LS.mapCurrent (Level.mapPlayerGraph up) model.levels
    }


update : Computer -> Model -> Model
update computer model =
    model
        |> updatePointerPosition computer
        |> (if model.editorIsOn then
                handleInputForEditor computer

            else
                handlePlayerInput computer
           )


distance : Point -> Point -> Float
distance p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2)


playerVertexAtPointer : Computer -> Model -> Maybe ( VertexId, VertexData )
playerVertexAtPointer computer model =
    model.levels
        |> LS.current
        |> .playerGraph
        |> Graph.allVertices
        |> List.filter
            (\( _, { position } ) ->
                distance position model.pointer < getFloat "base vertex radius" computer
            )
        |> List.head


baseVertexAtPointer : Computer -> Model -> Maybe ( VertexId, VertexData )
baseVertexAtPointer computer model =
    model.levels
        |> LS.current
        |> .baseGraph
        |> Graph.allVertices
        |> List.filter
            (\( _, { position } ) ->
                distance position model.pointer < getFloat "base vertex radius" computer
            )
        |> List.head


handlePlayerInput : Computer -> Model -> Model
handlePlayerInput computer model =
    model
        |> startDraggingPlayerVertex computer
        |> dragPlayerVertex computer
        |> endDragging computer


handleInputForEditor : Computer -> Model -> Model
handleInputForEditor computer model =
    model
        |> insertVertex computer
        |> startDraggingBaseVertex computer
        |> dragBaseVertex computer
        |> startDraggingBaseEdge computer
        |> insertBaseEdge computer
        |> endDragging computer


startDraggingBaseEdge : Computer -> Model -> Model
startDraggingBaseEdge computer model =
    if computer.keyboard.shift && computer.mouse.down then
        case ( model.editorState, baseVertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingEdge { sourceId = vertexId } }

            _ ->
                model

    else
        model


insertBaseEdge : Computer -> Model -> Model
insertBaseEdge computer model =
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


startDraggingPlayerVertex : Computer -> Model -> Model
startDraggingPlayerVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case ( model.editorState, playerVertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingPlayerVertex { vertexId = vertexId } }

            _ ->
                model

    else
        model


startDraggingBaseVertex : Computer -> Model -> Model
startDraggingBaseVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case ( model.editorState, baseVertexAtPointer computer model ) of
            ( Idle, Just ( vertexId, _ ) ) ->
                { model | editorState = DraggingBaseVertex { vertexId = vertexId } }

            _ ->
                model

    else
        model


dragBaseVertex : Computer -> Model -> Model
dragBaseVertex computer model =
    case model.editorState of
        DraggingBaseVertex { vertexId } ->
            model |> mapCurrentBaseGraph (Graph.moveVertex vertexId model.pointer)

        _ ->
            model


dragPlayerVertex : Computer -> Model -> Model
dragPlayerVertex computer model =
    case model.editorState of
        DraggingPlayerVertex { vertexId } ->
            model |> mapCurrentPlayerGraph (Graph.moveVertex vertexId model.pointer)

        _ ->
            model


endDragging : Computer -> Model -> Model
endDragging computer model =
    if not computer.mouse.down then
        { model | editorState = Idle }

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
        , backgroundColor =
            if model.editorIsOn then
                rgb255 46 46 46

            else
                getColor "game background" computer
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ drawBaseGraph computer model
        , drawPlayerGraph computer model
        , drawDraggedEdge computer model
        , axes
        , drawPointer computer model
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
            drawBaseEdge computer
                ( Graph.getPosition sourceId (LS.current model.levels).baseGraph
                , model.pointer
                )

        _ ->
            group []


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    cylinder orange 0.1 1
        |> moveY 0.5
        |> rotateX (degrees 90)
        |> moveX model.pointer.x
        |> moveY model.pointer.y



-- DRAWING PLAYER GRAPH


drawPlayerGraph : Computer -> Model -> Shape
drawPlayerGraph computer model =
    group
        [ drawVerticesOfPlayerGraph computer model
        , drawEdgesOfPlayerGraph computer model
        ]


drawVerticesOfPlayerGraph : Computer -> Model -> Shape
drawVerticesOfPlayerGraph computer model =
    group
        (Graph.allVertices (LS.current model.levels).playerGraph
            |> List.map (drawPlayerVertex computer)
        )


drawPlayerVertex : Computer -> ( VertexId, VertexData ) -> Shape
drawPlayerVertex computer ( _, { position } ) =
    sphere (getColor "player vertex" computer) (getFloat "player vertex radius" computer)
        |> rotateX (degrees 90)
        |> scale (wave 1 1.1 1 computer.time)
        |> moveX position.x
        |> moveY position.y


drawEdgesOfPlayerGraph : Computer -> Model -> Shape
drawEdgesOfPlayerGraph computer model =
    group
        (model.levels
            |> LS.current
            |> .playerGraph
            |> Graph.allEdges
            |> List.map (drawPlayerEdge computer)
        )


drawPlayerEdge : Computer -> ( Point, Point ) -> Shape
drawPlayerEdge computer ( start_, end ) =
    let
        ( length, rotation ) =
            toPolar ( end.x - start_.x, end.y - start_.y )

        width =
            getFloat "player edge width" computer
    in
    block
        (getColor "player edge" computer)
        ( length, wave width (1.1 * width) 1 computer.time, 0.4 )
        |> moveX (length / 2)
        |> rotateZ rotation
        |> moveX start_.x
        |> moveY start_.y



-- DRAWING BASE GRAPH


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
    cylinder (getColor "base vertex" computer) (getFloat "base vertex radius" computer) 0.3
        |> rotateX (degrees 90)
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
    block (getColor "base edge" computer) ( length, 0.3, 0.3 )
        |> moveX (length / 2)
        |> rotateZ rotation
        |> moveX start_.x
        |> moveY start_.y



-- EDITOR


type EditorMsg
    = ClickedEditorOnOffButton Bool
    | PressedPreviousLevelButton
    | PressedNextLevelButton
    | PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelOneUoButton


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        ClickedEditorOnOffButton bool ->
            { model | editorIsOn = bool }

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
    layout
        [ padding 10 ]
        (column
            [ alignTop
            , alignRight
            , padding 20
            , spacing 20
            , width (px 600)
            , height fill
            , Font.color Colors.lightText
            , Font.size 13
            ]
            [ editorOnOffButton computer model
            , editorContent computer model
            ]
        )


editorContent : Computer -> Model -> Element EditorMsg
editorContent computer model =
    if model.editorIsOn then
        column
            [ width fill
            , height fill
            , spacing 20
            ]
            [ explanations computer model
            , viewLevelSelection computer model
            , viewDebugger computer model
            ]

    else
        none


header : String -> Element EditorMsg
header str =
    el [ width fill, paddingXY 0 10, Font.heavy, Font.size 16 ]
        (text str)


editorOnOffButton : Computer -> Model -> Element EditorMsg
editorOnOffButton computer model =
    checkbox []
        { onChange = ClickedEditorOnOffButton
        , icon = Input.defaultCheckbox
        , checked = model.editorIsOn
        , label = Input.labelLeft [] (text "Editor")
        }


explanations : Computer -> Model -> Element EditorMsg
explanations computer model =
    textColumn []
        [ header "Editing the selected level"
        , paragraph [] [ text "- Press mouse to add vertex" ]
        , paragraph [] [ text "- To move vertices drag them with mouse" ]
        , paragraph [] [ text "- Hold shift and drag with mouse to draw an edge" ]
        ]


viewDebugger : Computer -> Model -> Element EditorMsg
viewDebugger computer model =
    textColumn [ alignBottom ]
        [ header "Debugger"
        , text <|
            "Editor state: "
                ++ Debug.toString model.editorState
        ]


viewLevelSelection : Computer -> Model -> Element EditorMsg
viewLevelSelection computer model =
    column []
        [ header "Level Selection"
        , row [ spacing 10 ]
            [ makeButton "<" PressedPreviousLevelButton
            , el [ Font.size 22, Font.heavy, Font.color Colors.white ] <|
                text <|
                    String.concat
                        [ String.fromInt (LS.currentIndex model.levels)
                        , " / "
                        , String.fromInt (LS.size model.levels)
                        ]
            , makeButton ">" PressedNextLevelButton
            , makeButton "Add level" PressedAddLevelButton
            , makeButton "Remove current level" PressedRemoveLevelButton
            , makeButton "Move level one up" PressedMoveLevelOneUoButton
            ]
        ]


makeButton : String -> EditorMsg -> Element EditorMsg
makeButton buttonText editorMsg =
    button
        [ Font.color Colors.black
        , paddingXY 10 6
        , Background.color Colors.lightGray
        , Border.rounded 8
        ]
        { onPress = Just editorMsg
        , label = text buttonText
        }
