module Main exposing (main)

import Color exposing (black, blue, darkGray, darkGreen, gray, green, lightBlue, lightGray, orange, red, rgb255, white)
import Element exposing (Element, alignBottom, alignRight, alignTop, column, el, fill, height, layout, none, padding, paddingXY, paragraph, px, row, spacing, text, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Geometry exposing (Point, lerp, middlePoint)
import Graph exposing (Graph, VertexData, VertexId)
import Html exposing (Html)
import Illuminance
import Level exposing (BaseGraph, Level, PlayerGraph)
import LevelSelector as LS exposing (Levels)
import LuminousFlux
import Playground3d exposing (Computer, colorConfig, floatConfig, gameWithConfigurationsAndEditor, getColor, getFloat)
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
    { editorIsOn : Bool
    , levels : Levels Level
    , pointer : Point
    , gameState : GameState
    , editorState : EditorState
    }


type GameState
    = Idle
    | DraggingPlayerVertex VertexId


type EditorState
    = EditorIdle
    | DraggingBaseVertex { vertexId : VertexId }
    | DraggingBaseEdge { sourceId : VertexId }



-- INIT


initialConfigurations =
    [ floatConfig "camera distance" ( 3, 40 ) 20
    , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
    , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) -0.45
    , floatConfig "sunlight azimuth" ( -pi, pi ) -0.5
    , floatConfig "sunlight elevation" ( -pi, pi ) -2.7
    , floatConfig "azimuth for third light" ( -pi, pi ) 1
    , floatConfig "elevation for third light" ( -pi, pi ) -2
    , floatConfig "azimuth for fourth light" ( -pi, pi ) 1
    , floatConfig "elevation for fourth light" ( -pi, pi ) -2
    , colorConfig "game background" (rgb255 44 100 200)
    , colorConfig "pointer player" red
    , colorConfig "pointer base" darkGreen
    , floatConfig "pointer reach for player" ( 0.5, 2 ) 0.7
    , floatConfig "pointer reach for base" ( 0.5, 2 ) 1
    , colorConfig "base" white
    , floatConfig "base height" ( 0.01, 5 ) 1
    , floatConfig "base vertex radius" ( 0.2, 2 ) 0.8
    , floatConfig "base edge width" ( 0.2, 1.5 ) 1
    , colorConfig "player" (rgb255 165 85 85)
    , floatConfig "player vertex radius" ( 0.1, 0.6 ) 0.5
    , floatConfig "player edge width" ( 0.05, 0.6 ) 0.5
    ]


init : Computer -> Model
init computer =
    { editorIsOn = False
    , levels = LS.singleton Level.exampleLevel
    , pointer = Point 0 0 0
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
            if model.editorIsOn then
                handleInputForEditor computer

            else
                handlePlayerInput computer
    in
    model
        |> updatePointerPosition computer
        |> mapCurrentPlayerGraph Graph.tickAnimation
        |> mapCurrentBaseGraph Graph.tickAnimation
        |> handleInput


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


nearestBaseVertexAtReach : Computer -> Model -> Maybe VertexId
nearestBaseVertexAtReach computer model =
    Graph.nearestVertexAtReach
        (getFloat "pointer reach for base" computer)
        model.pointer
        (LS.current model.levels).baseGraph


nearestPlayerVertexAtReach : Computer -> Model -> Maybe VertexId
nearestPlayerVertexAtReach computer model =
    Graph.nearestVertexAtReach
        (getFloat "pointer reach for player" computer)
        model.pointer
        (LS.current model.levels).playerGraph


secondNearestPlayerVertexAtReach : Computer -> Model -> Maybe VertexId
secondNearestPlayerVertexAtReach computer model =
    Graph.secondNearestVertexAtReach
        (getFloat "pointer reach for player" computer)
        model.pointer
        (LS.current model.levels).playerGraph


startDraggingBaseEdge : Computer -> Model -> Model
startDraggingBaseEdge computer model =
    if computer.keyboard.shift && not computer.keyboard.space && computer.mouse.down then
        case
            ( model.editorState
            , nearestBaseVertexAtReach computer model
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
    if not computer.mouse.down then
        case ( model.editorState, nearestBaseVertexAtReach computer model ) of
            ( DraggingBaseEdge { sourceId }, Just targetId ) ->
                model
                    |> mapCurrentBaseGraph (Graph.insertEdge sourceId targetId)

            ( DraggingBaseEdge { sourceId }, Nothing ) ->
                model
                    |> mapCurrentBaseGraph
                        (Graph.insertEdgeAndVertex () sourceId model.pointer)

            _ ->
                model

    else
        model


insertVertex : Computer -> Model -> Model
insertVertex computer model =
    if computer.mouse.down && computer.keyboard.space then
        case ( model.editorState, nearestBaseVertexAtReach computer model ) of
            ( EditorIdle, Nothing ) ->
                model
                    |> mapCurrentBaseGraph (Graph.insertVertex () model.pointer)

            _ ->
                model

    else
        model


startDraggingPlayerVertex : Computer -> Model -> Model
startDraggingPlayerVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case ( model.gameState, nearestPlayerVertexAtReach computer model ) of
            ( Idle, Just vertexId ) ->
                { model | gameState = DraggingPlayerVertex vertexId }

            _ ->
                model

    else
        model



-- QUERY


startDraggingBaseVertex : Computer -> Model -> Model
startDraggingBaseVertex computer model =
    if computer.mouse.down && not computer.keyboard.shift then
        case
            ( model.editorState
            , nearestBaseVertexAtReach computer model
            )
        of
            ( EditorIdle, Just vertexId ) ->
                { model | editorState = DraggingBaseVertex { vertexId = vertexId } }

            _ ->
                model

    else
        model


dragBaseVertex : Computer -> Model -> Model
dragBaseVertex computer model =
    case model.editorState of
        DraggingBaseVertex { vertexId } ->
            model |> mapCurrentBaseGraph (Graph.setAnimationTarget vertexId model.pointer)

        _ ->
            model


dragPlayerVertex : Computer -> Model -> Model
dragPlayerVertex computer model =
    case model.gameState of
        DraggingPlayerVertex vertexId ->
            model
                |> mapCurrentPlayerGraph
                    (Graph.setAnimationTarget vertexId model.pointer)

        _ ->
            model


endDragging : Computer -> Model -> Model
endDragging computer model =
    if not computer.mouse.down then
        { model
            | gameState = Idle
            , editorState = EditorIdle
        }

    else
        model


updatePointerPosition : Computer -> Model -> Model
updatePointerPosition computer model =
    { model
        | pointer =
            model.pointer
                |> lerp 0.5
                    (computer.mouse
                        |> Playground3d.Camera.mouseOverXY (camera computer) computer.screen
                        |> Maybe.withDefault model.pointer
                    )
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
                { position = { x = -2, y = 4, z = 2 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 2 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
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
        { screen = computer.screen
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
        , floor computer
        , drawPointer computer model
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
                        ( model.pointer.x - sourcePosition.x
                        , model.pointer.y - sourcePosition.y
                        )
            in
            block (getColor "base" computer) ( length, 0.3, 0.3 )
                |> moveX (length / 2)
                |> rotateZ rotation
                |> moveX sourcePosition.x
                |> moveY sourcePosition.y

        _ ->
            group []


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    let
        ( color, zShift, radius ) =
            if model.editorIsOn then
                ( getColor "pointer base" computer
                , -(getFloat "base height" computer) + 0.01
                , getFloat "pointer reach for base" computer
                )

            else
                ( getColor "pointer player" computer
                , 0
                , getFloat "pointer reach for player" computer
                )
    in
    cylinder color radius 0.02
        |> rotateX (degrees 90)
        |> moveZ zShift
        |> moveX model.pointer.x
        |> moveY model.pointer.y
        |> moveZ model.pointer.z



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
            |> List.map (drawPlayerVertex computer model.gameState)
        )


drawPlayerVertex : Computer -> GameState -> ( VertexId, { vertexData | position : Point } ) -> Shape
drawPlayerVertex computer gameState ( vertexId, { position } ) =
    sphere (getColor "player" computer) (getFloat "player vertex radius" computer)
        --|> scale (wave 1 1.1 1 computer.time)
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


viewEditor : Computer -> Model -> Element EditorMsg
viewEditor computer model =
    column
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


editorContent : Computer -> Model -> Element EditorMsg
editorContent computer model =
    if model.editorIsOn then
        column
            [ width fill
            , height fill
            , spacing 20
            ]
            [ explanationsForEditor computer model
            , viewLevelSelection computer model
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
