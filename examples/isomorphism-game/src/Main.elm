module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (blue, green, lightBlue, red, rgb255, white, yellow)
import Editor exposing (Editor)
import GeometryHelpers exposing (Point, lerp)
import Graph exposing (Graph, VertexData, VertexId)
import HardcodedLevels exposing (hardcodedLevels)
import Html exposing (Html, div, input, p, pre, span, textarea)
import Html.Attributes exposing (checked, class, cols, for, id, name, rows, style, type_, value)
import Html.Events
import Illuminance
import Json.Decode
import Level exposing (BaseGraph, Level, PlayerGraph)
import Level.Decode
import LevelSelector as LS exposing (Levels)
import Light
import LuminousFlux
import Playground exposing (Computer, boolConfig, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getBool, getColor, getFloat)
import Scene as Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material exposing (matte)
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
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 40 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Light"
        True
        [ floatConfig "sunlight azimuth" ( -pi, pi ) -0.5
        , floatConfig "sunlight elevation" ( -pi, pi ) -2.7
        , floatConfig "azimuth for third light" ( -pi, pi ) 1
        , floatConfig "elevation for third light" ( -pi, pi ) -2
        , floatConfig "azimuth for fourth light" ( -pi, pi ) 1
        , floatConfig "elevation for fourth light" ( -pi, pi ) -2
        ]
    , configBlock "Pointer"
        True
        [ boolConfig "pointer view on/off" True
        , colorConfig "pointer color" yellow
        , floatConfig "pointer reach" ( 0.5, 2 ) 1
        ]
    , configBlock "Base"
        True
        [ colorConfig "game background" (rgb255 44 100 200)
        , colorConfig "base" (rgb255 176 69 76)
        , floatConfig "base height" ( 0.01, 5 ) 0.4
        , floatConfig "base vertex radius" ( 0.2, 2 ) 0.5
        , floatConfig "base edge width" ( 0.2, 1.5 ) 1
        ]
    , configBlock "Player CodeGraph"
        True
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
                        let
                            target =
                                Graph.getPosition vertexData.data.mappedToBaseVertex baseGraph
                                    |> lerp 0.3
                                        -- this lerp is not applied on every tick but just once!
                                        (Graph.getPosition
                                            (Graph.getData dragged playerGraph
                                                |> Maybe.map .mappedToBaseVertex
                                                |> Maybe.withDefault 0
                                            )
                                            baseGraph
                                        )
                        in
                        { vertexData
                            | position =
                                vertexData.position
                                    |> lerp 0.1
                                        (target
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
    if computer.keyboard.shift && not computer.keyboard.alt && computer.pointer.isDown then
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
    if not computer.pointer.isDown then
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
    if computer.pointer.isDown && computer.keyboard.alt then
        case model.editorState of
            EditorIdle ->
                let
                    positionOfNearestVertex : Point
                    positionOfNearestVertex =
                        case nearestBaseVertex computer model of
                            Nothing ->
                                Point 0 0 0

                            Just vertexId ->
                                Graph.getPosition vertexId (LS.current model.levels).baseGraph
                                    |> Debug.log "yeey"
                in
                if
                    distanceXY positionOfNearestVertex model.pointerXY
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
    if computer.pointer.isDown && not computer.keyboard.shift then
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
    if computer.pointer.isDown && not computer.keyboard.shift then
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
    if not computer.pointer.isDown then
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
    if not computer.pointer.isDown then
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
                |> Camera.mouseOverXY (camera computer) computer.screen
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
    block (matte (getColor "game background" computer)) ( 100, 100, 1 )
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
            block (matte (getColor "base" computer)) ( length, 0.3, 0.3 )
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
        cylinder (matte color) radius 0.02
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
    sphere (matte color) (getFloat "player vertex radius" computer)
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
drawPlayerEdge computer { sourcePosition, targetPosition } =
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
        (matte (getColor "player" computer))
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
        (matte (getColor "base" computer))
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
    block (matte (getColor "base" computer))
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


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div
        [ class "fixed w-[300px] h-full top-0 right-0"
        , class "bg-black20"
        , class "border-[0.5px] border-white20"
        , class "overflow-y-scroll"
        , class "text-xs text-white60"
        ]
        [ div [ class "m-4" ]
            [ makeCheckBox ClickedEditorOnOffButton model.editor.isOn "Editor" ]
        , editorContent computer model
        ]


levelSelection : Model -> Html EditorMsg
levelSelection model =
    div []
        [ div [ class "text-lg" ] [ Html.text "Level Selection" ]
        , p []
            [ makeButton PressedPreviousLevelButton "<"
            , span [ style "margin" "10px" ]
                [ Html.text <|
                    String.concat
                        [ String.fromInt (LS.currentIndex model.levels)
                        , " / "
                        , String.fromInt (LS.size model.levels)
                        ]
                ]
            , makeButton PressedNextLevelButton ">"
            ]
        , makeButton PressedAddLevelButton "Add level"
        , makeButton PressedRemoveLevelButton "Remove current level"
        , makeButton PressedMoveLevelOneUpButton "Move level one up"
        ]


makeButton : msg -> String -> Html msg
makeButton msg string =
    Html.button
        [ class "m-1 p-2 rounded bg-black40 hover:bg-black80"
        , Html.Events.onClick msg
        ]
        [ Html.text string ]


editorContent : Computer -> Model -> Html EditorMsg
editorContent computer model =
    if model.editor.isOn then
        div
            []
            [ div [ class "p-4" ]
                [ explanationsForEditor computer model ]
            , div [ class "p-4 border-[0.5px] border-white20" ]
                [ levelSelection model ]
            , div [ class "p-4 border-[0.5px] border-white20" ]
                [ makeButton PressedResetPlayerGraphButton "Reset player graph" ]
            , div [ class "p-4 border-[0.5px] border-white20" ]
                [ levelExporting computer model ]
            , div [ class "p-4 border-[0.5px] border-white20" ]
                [ levelImporting computer model ]
            ]

    else
        div [] []


makeCheckBox : (Bool -> msg) -> Bool -> String -> Html msg
makeCheckBox msg isChecked string_ =
    div []
        [ Html.input
            [ class "align-bottom"
            , type_ "checkbox"
            , id string_
            , name string_
            , Html.Events.onCheck msg
            , checked isChecked
            ]
            []
        , Html.label [ class "pl-2 font-bold", for string_ ] [ Html.text string_ ]
        ]


explanationsForEditor : Computer -> Model -> Html EditorMsg
explanationsForEditor computer model =
    div []
        [ div [ class "py-4 text-lg" ] [ Html.text "Editing level" ]
        , div [ class "text-xs" ] [ Html.text "- Hold shift + alt & Press mouse to add vertex" ]
        , div [ class "text-xs" ] [ Html.text "- To move vertices drag them with mouse" ]
        , div [ class "text-xs" ] [ Html.text "- Hold shift and drag with mouse to draw an edge" ]
        ]


levelExporting : Computer -> Model -> Html EditorMsg
levelExporting computer model =
    div []
        [ makeButton ClickedExportLevelsButton "Export Levels"
        , textAreaForExportedLevels model
        ]


textAreaForExportedLevels : Model -> Html EditorMsg
textAreaForExportedLevels model =
    pre
        [ class "w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"
        ]
        [ Html.text model.editor.jsonExportedLevels ]


levelImporting : Computer -> Model -> Html EditorMsg
levelImporting computer model =
    div
        []
        [ makeButton ClickedImportLevelsButton "Import Levels"
        , textAreaForLevelsToImport model
        ]


textAreaForLevelsToImport : Model -> Html EditorMsg
textAreaForLevelsToImport model =
    textarea
        [ class "w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"
        , rows 150
        , cols 10
        , Html.Events.onInput EditedTextAreaForImportingLevels
        , value model.editor.jsonLevelsToImport
        ]
        [ Html.text "todo" ]
