module Main exposing (main)

import Color exposing (black, blue, darkGray, darkGreen, gray, green, lightBlue, lightGray, orange, red, rgb255, white, yellow)
import Dict
import Editor exposing (Editor)
import Element exposing (Element, alignBottom, alignRight, alignTop, centerX, column, el, fill, height, htmlAttribute, none, padding, paddingXY, paragraph, px, row, scrollbarY, spacing, text, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Geometry exposing (Point, lerp)
import Graph exposing (Graph, VertexData, VertexId)
import HardcodedLevels exposing (hardcodedLevels)
import Html exposing (Html)
import Html.Attributes exposing (style)
import Illuminance
import Json.Decode
import Level exposing (BaseGraph, Level, PlayerGraph)
import Level.Decode
import LevelSelector as LS exposing (Levels)
import LuminousFlux
import Playground3d exposing (Computer, boolConfig, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getBool, getColor, getFloat)
import Playground3d.Camera exposing (Camera, perspectiveWithOrbit)
import Playground3d.Colors as Colors
import Playground3d.Light as Light
import Playground3d.Scene as Scene exposing (..)
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurationsAndEditor view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { editor : Editor
    , levels : Levels Level
    , pointerXY : Point
    , gameState : GameState
    , editorState : EditorState
    }


type GameState
    = Idle
    | DraggingPlayerVertex
        { dragged : VertexId
        , maybeTargetIdOnBaseGraph : Maybe VertexId
        }


type EditorState
    = EditorIdle
    | DraggingBaseVertex { vertexId : VertexId }
    | DraggingBaseEdge { sourceId : VertexId }



-- INIT


initialConfigurations =
    [ configBlock "Camera" True <|
        [ floatConfig "camera distance" ( 3, 40 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Light" True <|
        [ floatConfig "sunlight azimuth" ( -pi, pi ) -0.5
        , floatConfig "sunlight elevation" ( -pi, pi ) -2.7
        , floatConfig "azimuth for third light" ( -pi, pi ) 1
        , floatConfig "elevation for third light" ( -pi, pi ) -2
        , floatConfig "azimuth for fourth light" ( -pi, pi ) 1
        , floatConfig "elevation for fourth light" ( -pi, pi ) -2
        ]
    , configBlock "Pointer" True <|
        [ boolConfig "pointer view on/off" True
        , colorConfig "pointer color" yellow
        , floatConfig "pointer reach" ( 0.5, 2 ) 1
        ]
    , configBlock "Base" True <|
        [ colorConfig "game background" (rgb255 44 100 200)
        , colorConfig "base" (rgb255 176 69 76)
        , floatConfig "base height" ( 0.01, 5 ) 0.4
        , floatConfig "base vertex radius" ( 0.2, 2 ) 0.5
        , floatConfig "base edge width" ( 0.2, 1.5 ) 1
        ]
    , configBlock "Player Graph" True <|
        [ colorConfig "player" white
        , floatConfig "player vertex radius" ( 0.1, 0.6 ) 0.35
        , floatConfig "player edge width" ( 0.05, 0.6 ) 0.25
        ]
    ]


init : Computer -> Model
init computer =
    { editor = Editor.init
    , levels = hardcodedLevels
    , pointerXY = Point 0 0 0
    , gameState = Idle
    , editorState = EditorIdle
    }



-- UPDATE


mapCurrentBaseGraph : (BaseGraph -> BaseGraph) -> Model -> Model
mapCurrentBaseGraph up model =
    { model
        | levels = LS.mapCurrent (Level.mapBaseGraph up) model.levels
    }


mapCurrentPlayerGraph : (PlayerGraph -> PlayerGraph) -> Model -> Model
mapCurrentPlayerGraph up model =
    { model
        | levels = LS.mapCurrent (Level.mapPlayerGraph up) model.levels
    }


update : Computer -> Model -> Model
update computer model =
    let
        handleInput =
            if model.editor.isOn then
                handleInputForEditor computer

            else
                handlePlayerInput computer
    in
    model
        |> updatePointerPosition computer
        |> updateDragTarget computer
        |> tickPlayerVertices computer
        |> tickBaseVertices computer
        |> handleInput


updateDragTarget : Computer -> Model -> Model
updateDragTarget computer model =
    case model.gameState of
        DraggingPlayerVertex dragData ->
            { model
                | gameState =
                    DraggingPlayerVertex
                        { dragData | maybeTargetIdOnBaseGraph = nearestBaseVertex computer model }
            }

        _ ->
            model


tickPlayerVertices : Computer -> Model -> Model
tickPlayerVertices computer model =
    let
        baseGraph =
            (LS.current model.levels).baseGraph

        playerGraph =
            (LS.current model.levels).playerGraph

        lerpToBaseVertex vertexId vertexData =
            case model.gameState of
                DraggingPlayerVertex { dragged, maybeTargetIdOnBaseGraph } ->
                    if vertexId == dragged then
                        { vertexData
                            | position =
                                model.pointerXY
                                    |> (\p -> Point p.x p.y p.z)
                        }

                    else if Just vertexData.data.mappedToBaseVertex == maybeTargetIdOnBaseGraph then
                        { vertexData
                            | position =
                                vertexData.position
                                    |> lerp 0.1
                                        (Graph.getPosition
                                            (Graph.getData dragged playerGraph
                                                |> Maybe.map .mappedToBaseVertex
                                                |> Maybe.withDefault 0
                                            )
                                            baseGraph
                                            |> (\p -> Point p.x p.y (p.z + 1))
                                        )
                        }

                    else
                        { vertexData
                            | position =
                                vertexData.position
                                    |> lerp 0.1
                                        (Graph.getPosition vertexData.data.mappedToBaseVertex
                                            baseGraph
                                        )
                        }

                _ ->
                    { vertexData
                        | position =
                            vertexData.position
                                |> lerp 0.1
                                    (Graph.getPosition vertexData.data.mappedToBaseVertex
                                        baseGraph
                                    )
                    }
    in
    model
        |> mapCurrentPlayerGraph (Graph.mapVertices lerpToBaseVertex)


handlePlayerInput : Computer -> Model -> Model
handlePlayerInput computer model =
    model
        |> startDraggingPlayerVertex computer
        |> endDraggingPlayerVertex computer


handleInputForEditor : Computer -> Model -> Model
handleInputForEditor computer model =
    model
        |> insertVertex computer
        |> startDraggingBaseVertex computer
        |> startDraggingBaseEdge computer
        |> insertBaseEdge computer
        |> endDraggingBaseVertex computer


nearestBaseVertex : Computer -> Model -> Maybe VertexId
nearestBaseVertex computer model =
    Graph.nearestVertex model.pointerXY (LS.current model.levels).baseGraph


playerVertexOnTheNearestBaseVertex : Computer -> Model -> Maybe VertexId
playerVertexOnTheNearestBaseVertex computer model =
    let
        v =
            nearestBaseVertex computer model
    in
    Graph.vertices (LS.current model.levels).playerGraph
        |> List.filter (\( _, { data } ) -> Just data.mappedToBaseVertex == v)
        |> List.head
        |> Maybe.map Tuple.first


startDraggingBaseEdge : Computer -> Model -> Model
startDraggingBaseEdge computer model =
    if computer.keyboard.shift && not computer.keyboard.space && computer.pointer.down then
        case
            ( model.editorState
            , nearestBaseVertex computer model
            )
        of
            ( EditorIdle, Just vertexId ) ->
                { model | editorState = DraggingBaseEdge { sourceId = vertexId } }

            _ ->
                model

    else
        model


insertBaseEdge : Computer -> Model -> Model
insertBaseEdge computer model =
    if not computer.pointer.down then
        case ( model.editorState, nearestBaseVertex computer model ) of
            ( DraggingBaseEdge { sourceId }, Just targetId ) ->
                if
                    distanceXY (Graph.getPosition targetId (LS.current model.levels).baseGraph) model.pointerXY
                        < getFloat "pointer reach" computer
                then
                    model
                        |> mapCurrentBaseGraph (Graph.insertEdge sourceId targetId)

                else
                    model
                        |> mapCurrentBaseGraph
                            (Graph.insertEdgeAndVertex () sourceId model.pointerXY)

            _ ->
                model

    else
        model


insertVertex : Computer -> Model -> Model
insertVertex computer model =
    if computer.pointer.down && computer.keyboard.space then
        case ( model.editorState, nearestBaseVertex computer model ) of
            ( EditorIdle, Just vertexId ) ->
                if
                    distanceXY (Graph.getPosition vertexId (LS.current model.levels).baseGraph) model.pointerXY
                        > getFloat "pointer reach" computer
                then
                    model
                        |> mapCurrentBaseGraph (Graph.insertVertex () model.pointerXY)

                else
                    model

            _ ->
                model

    else
        model


distanceXY : Point -> Point -> Float
distanceXY p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2)


startDraggingPlayerVertex : Computer -> Model -> Model
startDraggingPlayerVertex computer model =
    if (not (Dict.isEmpty computer.touches) || computer.pointer.down) && not computer.keyboard.shift then
        case ( model.gameState, playerVertexOnTheNearestBaseVertex computer model ) of
            ( Idle, Just vertexId ) ->
                if
                    distanceXY (Graph.getPosition vertexId (LS.current model.levels).playerGraph) model.pointerXY
                        < getFloat "pointer reach" computer
                then
                    { model
                        | gameState =
                            DraggingPlayerVertex
                                { dragged = vertexId
                                , maybeTargetIdOnBaseGraph = Nothing
                                }
                    }

                else
                    model

            _ ->
                model

    else
        model



-- QUERY


startDraggingBaseVertex : Computer -> Model -> Model
startDraggingBaseVertex computer model =
    if computer.pointer.down && not computer.keyboard.shift then
        case
            ( model.editorState
            , nearestBaseVertex computer model
            )
        of
            ( EditorIdle, Just vertexId ) ->
                if
                    distanceXY (Graph.getPosition vertexId (LS.current model.levels).baseGraph) model.pointerXY
                        < getFloat "pointer reach" computer
                then
                    { model | editorState = DraggingBaseVertex { vertexId = vertexId } }

                else
                    model

            _ ->
                model

    else
        model


tickBaseVertices : Computer -> Model -> Model
tickBaseVertices computer model =
    case model.editorState of
        DraggingBaseVertex { vertexId } ->
            let
                moveToPointerPosition vertexData =
                    { vertexData | position = model.pointerXY }
            in
            model
                |> mapCurrentBaseGraph (Graph.mapVertex vertexId moveToPointerPosition)

        _ ->
            model


endDraggingPlayerVertex : Computer -> Model -> Model
endDraggingPlayerVertex computer model =
    if Dict.isEmpty computer.touches && not computer.pointer.down then
        case model.gameState of
            DraggingPlayerVertex dragData ->
                case dragData.maybeTargetIdOnBaseGraph of
                    Just targetIdOnBaseGraph ->
                        let
                            setMappedVertexTo vertexId data =
                                { data | mappedToBaseVertex = vertexId }

                            newTargetIdOnBaseGraph vertexId vertexData =
                                if vertexId == dragData.dragged then
                                    { vertexData
                                        | data =
                                            vertexData.data
                                                |> setMappedVertexTo targetIdOnBaseGraph
                                    }

                                else if vertexData.data.mappedToBaseVertex == targetIdOnBaseGraph then
                                    { vertexData
                                        | data =
                                            vertexData.data
                                                |> setMappedVertexTo
                                                    (Graph.getData dragData.dragged (LS.current model.levels).playerGraph
                                                        |> Maybe.map .mappedToBaseVertex
                                                        |> Maybe.withDefault 0
                                                    )
                                    }

                                else
                                    vertexData
                        in
                        { model
                            | gameState = Idle
                        }
                            |> mapCurrentPlayerGraph (Graph.mapVertices newTargetIdOnBaseGraph)

                    Nothing ->
                        { model
                            | gameState = Idle
                        }

            _ ->
                model

    else
        model


endDraggingBaseVertex : Computer -> Model -> Model
endDraggingBaseVertex computer model =
    if not computer.pointer.down then
        { model
            | editorState = EditorIdle
        }

    else
        model


updatePointerPosition : Computer -> Model -> Model
updatePointerPosition computer model =
    { model
        | pointerXY =
            computer.pointer
                |> Playground3d.Camera.mouseOverXY (camera computer) computer.screen
                |> Maybe.withDefault model.pointerXY
    }



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
    --Scene.sunny
    --    { devicePixelRatio = computer.devicePixelRatio
    --    , screen = computer.screen
    --    , camera = camera computer
    --    , backgroundColor = white
    --    , sunlightAzimuth = getFloat "sunlight azimuth" computer
    --    , sunlightElevation = getFloat "sunlight elevation" computer
    --    }
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 4 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 12000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 4 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 12000
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 120
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 20
                , intensityBelow = Illuminance.lux 10
                }
    in
    Scene.custom
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , lights = Scene3d.fourLights firstLight secondLight thirdLight fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = lightBlue
        }
        [ drawBaseGraph computer model
        , drawPlayerGraph computer model
        , drawDraggedBaseEdge computer model

        --, axes
        --, sphere red 0.1
        , floor computer
        , drawPointerReach computer model
        ]


floor : Computer -> Shape
floor computer =
    block (getColor "game background" computer) ( 100, 100, 1 )
        |> moveZ -0.5
        |> moveZ -(getFloat "base height" computer)


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawDraggedBaseEdge : Computer -> Model -> Shape
drawDraggedBaseEdge computer model =
    case model.editorState of
        DraggingBaseEdge { sourceId } ->
            let
                sourcePosition =
                    Graph.getPosition sourceId (LS.current model.levels).baseGraph

                ( length, rotation ) =
                    toPolar
                        ( model.pointerXY.x - sourcePosition.x
                        , model.pointerXY.y - sourcePosition.y
                        )
            in
            block (getColor "base" computer) ( length, 0.3, 0.3 )
                |> moveX (length / 2)
                |> rotateZ rotation
                |> moveX sourcePosition.x
                |> moveY sourcePosition.y

        _ ->
            group []


drawPointerReach : Computer -> Model -> Shape
drawPointerReach computer model =
    let
        ( color, zShift, radius ) =
            ( getColor "pointer color" computer
            , -(getFloat "base height" computer) + 0.01
            , getFloat "pointer reach" computer
            )
    in
    if getBool "pointer view on/off" computer then
        cylinder color radius 0.02
            |> rotateX (degrees 90)
            |> moveZ zShift
            |> moveX model.pointerXY.x
            |> moveY model.pointerXY.y
            |> moveZ model.pointerXY.z

    else
        group []



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
        (Graph.vertices (LS.current model.levels).playerGraph
            |> List.map (drawPlayerVertex computer model)
        )


drawPlayerVertex : Computer -> Model -> ( VertexId, { vertexData | position : Point } ) -> Shape
drawPlayerVertex computer model ( vertexId, { position } ) =
    let
        color =
            if playerVertexOnTheNearestBaseVertex computer model == Just vertexId then
                yellow

            else
                getColor "player" computer
    in
    sphere color (getFloat "player vertex radius" computer)
        |> moveX position.x
        |> moveY position.y
        |> moveZ position.z


drawEdgesOfPlayerGraph : Computer -> Model -> Shape
drawEdgesOfPlayerGraph computer model =
    group
        (model.levels
            |> LS.current
            |> .playerGraph
            |> Graph.edges
            |> List.map (drawPlayerEdge computer)
        )


drawPlayerEdge :
    Computer
    ->
        { sourcePosition : Point
        , targetPosition : Point
        , sourceId : VertexId
        , targetId : VertexId
        }
    -> Shape
drawPlayerEdge computer { sourcePosition, targetPosition, sourceId, targetId } =
    let
        ( x, y, z ) =
            ( targetPosition.x - sourcePosition.x
            , targetPosition.y - sourcePosition.y
            , targetPosition.z - sourcePosition.z
            )

        { radius, azimuth, inclination } =
            toSphericalCoordinates ( x, y, z )

        width =
            getFloat "player edge width" computer
    in
    cylinder
        (getColor "player" computer)
        (0.5 * width)
        radius
        |> rotateZ (degrees 90)
        --block
        --    (getColor "player" computer)
        --    ( radius, width, width )
        |> moveX (radius / 2)
        |> rotateY (inclination - degrees 90)
        |> rotateZ azimuth
        |> moveX sourcePosition.x
        |> moveY sourcePosition.y
        |> moveZ sourcePosition.z


toSphericalCoordinates ( x, y, z ) =
    let
        r =
            sqrt (x ^ 2 + y ^ 2 + z ^ 2)
    in
    { radius = r
    , azimuth = atan2 y x
    , inclination = acos (z / r)
    }



-- DRAWING BASE GRAPH


drawBaseGraph : Computer -> Model -> Shape
drawBaseGraph computer model =
    group
        [ drawVerticesOfBaseGraph computer model
        , drawEdgesOfBaseGraph computer model
        ]
        |> moveZ -0.2


drawVerticesOfBaseGraph : Computer -> Model -> Shape
drawVerticesOfBaseGraph computer model =
    group
        (Graph.vertices (LS.current model.levels).baseGraph
            |> List.map (drawBaseVertex computer)
        )


drawBaseVertex : Computer -> ( VertexId, { vertexData | position : Point } ) -> Shape
drawBaseVertex computer ( _, { position } ) =
    cylinder
        (getColor "base" computer)
        (getFloat "base vertex radius" computer)
        (getFloat "base height" computer)
        |> rotateX (degrees 90)
        |> moveZ -(getFloat "base height" computer / 2)
        |> moveX position.x
        |> moveY position.y
        |> moveZ position.z


drawEdgesOfBaseGraph : Computer -> Model -> Shape
drawEdgesOfBaseGraph computer model =
    group
        (model.levels
            |> LS.current
            |> .baseGraph
            |> Graph.edges
            |> List.map (drawBaseEdge computer)
        )


drawBaseEdge :
    Computer
    ->
        { sourcePosition : Point
        , targetPosition : Point
        , sourceId : VertexId
        , targetId : VertexId
        }
    -> Shape
drawBaseEdge computer { sourcePosition, targetPosition, sourceId, targetId } =
    let
        ( length, rotation ) =
            toPolar
                ( targetPosition.x - sourcePosition.x
                , targetPosition.y - sourcePosition.y
                )

        baseHeight =
            getFloat "base height" computer
    in
    block (getColor "base" computer)
        ( length
        , getFloat "base edge width" computer
        , baseHeight
        )
        |> moveZ -(baseHeight / 2)
        |> moveX (length / 2)
        |> rotateZ rotation
        |> moveX sourcePosition.x
        |> moveY sourcePosition.y



-- EDITOR


type EditorMsg
    = ClickedEditorOnOffButton Bool
    | PressedPreviousLevelButton
    | PressedNextLevelButton
    | PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelOneUpButton
    | PressedResetPlayerGraphButton
    | ClickedExportLevelsButton
    | ClickedImportLevelsButton
    | EditedTextAreaForImportingLevels String


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        ClickedEditorOnOffButton bool ->
            { model | editor = model.editor |> Editor.onOff bool }

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

        PressedMoveLevelOneUpButton ->
            { model | levels = model.levels |> LS.moveLevelOneUp }

        PressedResetPlayerGraphButton ->
            { model | levels = model.levels |> LS.mapCurrent Level.resetPlayerGraph }

        ClickedExportLevelsButton ->
            { model
                | editor =
                    model.editor
                        |> Editor.exportLevels
                            (model.levels
                             --|> Debug.log ""
                            )
            }

        ClickedImportLevelsButton ->
            { model
                | levels =
                    model.editor.jsonLevelsToImport
                        |> Json.Decode.decodeString (LS.decoder Level.Decode.decoder)
                        |> Result.withDefault model.levels
            }

        EditedTextAreaForImportingLevels string ->
            { model
                | editor = model.editor |> Editor.setTextAreaForImportingLevels string
            }


viewEditor : Computer -> Model -> Element EditorMsg
viewEditor computer model =
    column
        [ width fill
        , height fill
        ]
        [ column
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
            , viewDebugger computer model
            ]
        , row
            [ alignBottom
            , centerX
            , Font.size 30
            , Font.bold
            , padding 20
            ]
            [ levelSelectionButtons computer model ]
        ]


editorContent : Computer -> Model -> Element EditorMsg
editorContent computer model =
    if model.editor.isOn then
        column
            [ width fill
            , height fill
            , spacing 20
            ]
            [ explanationsForEditor computer model
            , viewLevelsEditor computer model
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
        , checked = model.editor.isOn
        , label = Input.labelLeft [] (text "Editor")
        }


explanationsForEditor : Computer -> Model -> Element EditorMsg
explanationsForEditor computer model =
    textColumn []
        [ header "Editing the selected level"
        , paragraph [] [ text "- Hold shift + space & Press mouse to add vertex" ]
        , paragraph [] [ text "- To move vertices drag them with mouse" ]
        , paragraph [] [ text "- Hold shift and drag with mouse to draw an edge" ]
        ]


viewDebugger : Computer -> Model -> Element EditorMsg
viewDebugger computer model =
    textColumn [ alignBottom ]
        [ header "Debugger"

        --, paragraph [] [ text <| "Editor state: " ++ Debug.toString model.editorState ]
        --, paragraph [] [ text <| "Game state: " ++ Debug.toString model.gameState ]
        ]


viewLevelsEditor : Computer -> Model -> Element EditorMsg
viewLevelsEditor computer model =
    column [ spacing 10 ]
        [ levelManipulationButtons computer model
        , makeButton "Reset player graph" PressedResetPlayerGraphButton
        , levelExporting computer model
        , levelImporting computer model
        ]


levelManipulationButtons : Computer -> Model -> Element EditorMsg
levelManipulationButtons computer model =
    row [ spacing 10 ]
        [ makeButton "Add level" PressedAddLevelButton
        , makeButton "Remove current level" PressedRemoveLevelButton
        , makeButton "Move level one up" PressedMoveLevelOneUpButton
        ]


levelSelectionButtons : Computer -> Model -> Element EditorMsg
levelSelectionButtons computer model =
    row [ spacing 10 ]
        [ makeButton "<" PressedPreviousLevelButton
        , el [ Font.size 22, Font.heavy, Font.color Colors.white ] <|
            text <|
                String.concat
                    [ String.fromInt (LS.currentIndex model.levels)
                    , " / "
                    , String.fromInt (LS.size model.levels)
                    ]
        , makeButton ">" PressedNextLevelButton
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


levelExporting : Computer -> Model -> Element EditorMsg
levelExporting computer model =
    column
        [ spacing 10
        , width fill
        ]
        [ makeButton "Export Levels" ClickedExportLevelsButton
        , textAreaForExportedLevels model
        ]


textAreaForExportedLevels : Model -> Element EditorMsg
textAreaForExportedLevels model =
    el
        [ width fill
        , height (px 100)
        , padding 10
        , Background.color Colors.black
        , Font.family [ Font.monospace ]
        , scrollbarY
        , htmlAttribute (style "user-select" "text")
        , Border.rounded 10
        ]
        (text model.editor.jsonExportedLevels)


levelImporting : Computer -> Model -> Element EditorMsg
levelImporting computer model =
    column
        [ spacing 10
        , width fill
        ]
        [ makeButton "Import Levels" ClickedImportLevelsButton
        , textAreaForLevelsToImport model
        ]


textAreaForLevelsToImport : Model -> Element EditorMsg
textAreaForLevelsToImport model =
    Input.text
        [ width fill
        , height (px 100)
        , padding 10
        , Background.color Colors.black
        , Font.family [ Font.monospace ]
        , scrollbarY
        , htmlAttribute (style "user-select" "text")
        , Border.rounded 10
        ]
        { onChange = EditedTextAreaForImportingLevels
        , text = model.editor.jsonLevelsToImport
        , placeholder = Nothing
        , label = Input.labelHidden "Imported Levels"
        }
