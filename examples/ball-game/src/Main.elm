module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, blue, darkGreen, green, orange, red, rgb255, white, yellow)
import Editor exposing (Editor, EditorState(..))
import Element exposing (Element, alignBottom, alignRight, alignTop, column, el, fill, height, htmlAttribute, padding, paddingXY, paragraph, px, row, scrollbarY, spacing, text, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Geometry exposing (Point, Vector)
import Html exposing (Html)
import Html.Attributes exposing (style)
import Illuminance
import Json.Decode
import LevelSelector exposing (Levels)
import LuminousFlux
import Playground exposing (Computer, boolConfig, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getBool, getColor, getFloat)
import Playground.Colors as Colors
import Playground.Light as Light
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material as Material
import Temperature
import Triangulate
import World exposing (World)
import World.Decode
import World.Physics.Collision.Primitives.Geometry2d exposing (Point2d, Vector2d, edgesOfPolygon, edgesOfPolyline)
import World.Physics.Tick


main =
    gameWithConfigurationsAndEditor view update initialConfigurations init viewEditor updateFromEditor


type alias Model =
    { levels : Levels World
    , editor : Editor
    , camera : Camera
    , mouseOverXY : Point2d
    }



-- INIT


initialConfigurations =
    [ configBlock "View Options"
        True
        [ boolConfig "draw speed vector" False
        , boolConfig "draw ball trail" True
        , boolConfig "unlit" True
        ]
    , configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 40
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Physics Parameters"
        True
        [ boolConfig "fix time steps" True
        , floatConfig "gas force" ( 20, 60 ) 40
        , floatConfig "friction" ( 0, 1 ) 0.4
        , floatConfig "direction change speed" ( 1, 5 ) 3
        , floatConfig "jump speed" ( 1, 20 ) 8
        ]
    , configBlock "Color"
        True
        [ colorConfig "floor color" white
        ]
    ]


init : Computer -> Model
init computer =
    { levels = LevelSelector.singleton World.init
    , editor = Editor.init
    , camera =
        perspectiveWithOrbit
            { focalPoint = { x = 0, y = 0, z = 0 }
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , distance = getFloat "camera distance" computer
            }
    , mouseOverXY = Point2d 0 0
    }



-- UPDATE


update : Computer -> Model -> Model
update computer_ model =
    let
        computer =
            if getBool "fix time steps" computer_ then
                { computer_ | deltaTime = 0.016 }

            else
                computer_

        handleEditorInput =
            if model.editor.isOn then
                handleDrawingPolygon computer

            else
                identity
    in
    model
        |> handleEditorInput
        |> updateMouseOverXY computer
        |> tickWorld computer
        |> moveCamera computer


handleDrawingPolygon : Computer -> Model -> Model
handleDrawingPolygon computer model =
    if computer.keyboard.shift then
        { model | editor = model.editor |> Editor.addVertexToDrawnPolygon model.mouseOverXY }

    else
        model


updateMouseOverXY : Computer -> Model -> Model
updateMouseOverXY computer model =
    { model
        | mouseOverXY =
            computer.pointer
                |> Camera.mouseOverXY model.camera computer.screen
                |> Maybe.map (\p -> Point2d p.x p.y)
                |> Maybe.withDefault model.mouseOverXY
    }


moveCamera : Computer -> Model -> Model
moveCamera computer model =
    let
        ball =
            (LevelSelector.current model.levels).ball
    in
    { model
        | camera =
            perspectiveWithOrbit
                { focalPoint = Point ball.circle.center.x ball.circle.center.y 0
                , azimuth = getFloat "camera azimuth" computer
                , elevation = getFloat "camera elevation" computer
                , distance = getFloat "camera distance" computer
                }
    }


tickWorld : Computer -> Model -> Model
tickWorld computer model =
    let
        newWorld =
            LevelSelector.current model.levels |> World.Physics.Tick.tick computer
    in
    { model | levels = model.levels |> LevelSelector.mapCurrent (always newWorld) }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    viewGame computer model


viewGame : Computer -> Model -> Html Never
viewGame computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 3 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 3 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = 0
                , elevation = degrees 90
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 240
                }

        fourthLight =
            Light.soft
                { azimuth = 0
                , elevation = degrees 90
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 30
                , intensityBelow = Illuminance.lux 30
                }

        viewScene =
            if getBool "unlit" computer then
                Scene.unlit
                    { devicePixelRatio = computer.devicePixelRatio
                    , screen = computer.screen
                    , camera = model.camera
                    , clipDepth = 0.1
                    , background = rgb255 46 46 46
                    }

            else
                Scene.custom
                    { devicePixelRatio = computer.devicePixelRatio
                    , screen = computer.screen
                    , camera = model.camera
                    , lights = Scene3d.fourLights firstLight secondLight thirdLight fourthLight
                    , clipDepth = 0.1
                    , exposure = Scene3d.exposureValue 6
                    , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
                    , whiteBalance = Scene3d.Light.fluorescent
                    , antialiasing = Scene3d.multisampling
                    , backgroundColor = rgb255 46 46 46
                    }
    in
    viewScene
        [ drawAxes computer

        --, drawFloor computer
        , drawBall computer model
        , drawBallTrail computer model
        , drawPolygons computer model
        , drawMouseOverXY computer model
        , drawPolygonBeingEdited computer model
        ]


drawAxes : Computer -> Shape
drawAxes computer =
    group
        [ thickLine computer red 0.1 ( Point 0 0 0, Point 10 0 0 ) -- x axis
        , thickLine computer green 0.1 ( Point 0 0 0, Point 0 10 0 ) -- y axis
        , thickLine computer blue 0.1 ( Point 0 0 0, Point 0 0 10 ) -- z axis
        ]


material computer color =
    if getBool "unlit" computer then
        Material.color color

    else
        Material.matte color


drawFloor : Computer -> Shape
drawFloor computer =
    group
        [ block (material computer (getColor "floor color" computer))
            ( 50, 50, 1 )
            |> moveZ -0.51
        ]


drawMouseOverXY : Computer -> Model -> Shape
drawMouseOverXY computer model =
    sphere (material computer red) 0.2
        |> moveX model.mouseOverXY.x
        |> moveY model.mouseOverXY.y


drawPolygonBeingEdited : Computer -> Model -> Shape
drawPolygonBeingEdited computer model =
    case model.editor.state of
        DrawingPolygon points ->
            group
                (points
                    |> edgesOfPolyline
                    |> List.map (thickLine2d computer blue 0.2)
                )

        _ ->
            group []


thickLine2d : Computer -> Color -> Float -> ( Point2d, Point2d ) -> Shape
thickLine2d computer color thickness ( start, end ) =
    thickLine computer color thickness ( Point start.x start.y 0, Point end.x end.y 0 )


thickLine : Computer -> Color -> Float -> ( Point, Point ) -> Shape
thickLine computer color thickness ( start, end ) =
    let
        ( x, y, z ) =
            ( end.x - start.x
            , end.y - start.y
            , end.z - start.z
            )

        { radius, azimuth, inclination } =
            Geometry.toSphericalCoordinates ( x, y, z )
    in
    cylinder (material computer color) (thickness / 2) radius
        |> rotateZ (degrees 90)
        |> moveX (radius / 2)
        |> rotateY (inclination - degrees 90)
        |> rotateZ azimuth
        |> moveX start.x
        |> moveY start.y
        |> moveZ start.z


drawPolygons : Computer -> Model -> Shape
drawPolygons computer model =
    let
        material_ =
            material computer blue

        height =
            2

        to3dPoint { x, y } =
            Point x y height

        drawTop polygonBody =
            group
                (polygonBody.polygon
                    |> Triangulate.triangulate
                    |> List.map (\( a, b, c ) -> triangle material_ ( to3dPoint a, to3dPoint b, to3dPoint c ))
                )

        drawWallForEdge ( start, end ) =
            group
                [ triangle material_
                    ( to3dPoint start
                    , to3dPoint end
                    , to3dPoint start |> Geometry.translateBy ( 0, 0, -height )
                    )
                , triangle material_
                    ( to3dPoint start |> Geometry.translateBy ( 0, 0, -height )
                    , to3dPoint end
                    , to3dPoint end |> Geometry.translateBy ( 0, 0, -height )
                    )
                ]

        drawWalls polygonBody =
            group
                (polygonBody.polygon
                    |> edgesOfPolygon
                    |> List.map drawWallForEdge
                )

        drawPolygon polygonBody =
            group
                [ drawTop polygonBody
                , drawWalls polygonBody
                ]
    in
    group
        ((LevelSelector.current model.levels).polygons |> List.map drawPolygon)


drawBall : Computer -> Model -> Shape
drawBall computer model =
    let
        ball =
            (LevelSelector.current model.levels).ball

        playerBall =
            group
                [ group
                    [ sphere (material computer red) ball.circle.radius |> moveX -0.02
                    , sphere (material computer yellow) ball.circle.radius |> moveX 0.02
                    ]
                    |> rotateY ball.rotation
                , cylinder (material computer black) 0.2 1.1
                ]
                |> rotateZ ball.directionFromXAxis

        ( vx, vy ) =
            ball.velocity

        speedVector =
            if getBool "draw speed vector" computer then
                thickLine2d computer
                    darkGreen
                    0.2
                    ( Point2d 0 0
                    , Point2d (0.3 * vx) (0.3 * vy)
                    )

            else
                group []
    in
    group
        [ playerBall
        , speedVector
        ]
        |> moveZ 0.5
        |> moveX ball.circle.center.x
        |> moveY ball.circle.center.y


miniTriangle : Computer -> Shape
miniTriangle computer =
    triangle (material computer blue)
        ( Point 0 0 0
        , Point 0.1 0 0
        , Point 0 0.1 0
        )


drawBallTrail : Computer -> Model -> Shape
drawBallTrail computer model =
    if getBool "draw ball trail" computer then
        let
            ball =
                (LevelSelector.current model.levels).ball
        in
        group
            (ball.trail
                |> List.map (\p -> miniTriangle computer |> moveX p.x |> moveY p.y)
            )

    else
        group []



--  EDITOR


type EditorMsg
    = ClickedEditorOnOffButton Bool
    | ClickedButtonStartDrawingPolygon
    | ClickedButtonFinishDrawingPolygon (List Point2d)
    | PressedPreviousLevelButton
    | PressedNextLevelButton
    | PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelOneUpButton
    | ClickedExportLevelsButton
    | ClickedImportLevelsButton
    | EditedTextAreaForImportingLevels String


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        ClickedEditorOnOffButton bool ->
            { model
                | editor =
                    model.editor |> Editor.toggle bool
            }

        ClickedButtonStartDrawingPolygon ->
            { model | editor = model.editor |> Editor.startDrawingPolygon }

        ClickedButtonFinishDrawingPolygon points ->
            { model
                | editor = model.editor |> Editor.finishDrawingPolygon
                , levels = model.levels |> LevelSelector.mapCurrent (World.addPolygon points)
            }

        PressedPreviousLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LevelSelector.goToPrevious
                        |> Maybe.withDefault model.levels
            }

        PressedNextLevelButton ->
            { model
                | levels =
                    model.levels
                        |> LevelSelector.goToNext
                        |> Maybe.withDefault model.levels
            }

        PressedAddLevelButton ->
            { model | levels = model.levels |> LevelSelector.add World.init }

        PressedRemoveLevelButton ->
            { model | levels = model.levels |> LevelSelector.removeCurrent }

        PressedMoveLevelOneUpButton ->
            { model | levels = model.levels |> LevelSelector.moveLevelOneUp }

        ClickedExportLevelsButton ->
            { model | editor = model.editor |> Editor.exportLevels model.levels }

        ClickedImportLevelsButton ->
            { model
                | levels =
                    model.editor.jsonLevelsToImport
                        |> Json.Decode.decodeString (LevelSelector.decoder World.Decode.decoder)
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
            , width (px 500)
            , height fill
            , padding 20
            , spacing 20
            , Font.color Colors.lightText
            , Font.size 13
            ]
            (editorOnOffButton computer model
                :: editorContent computer model
            )
        ]


header : String -> Element EditorMsg
header str =
    el
        [ width fill
        , paddingXY 0 10
        , Font.heavy
        , Font.size 20
        ]
        (text str)


editorContent : Computer -> Model -> List (Element EditorMsg)
editorContent computer model =
    if model.editor.isOn then
        [ viewPolygonEditor computer model
        , viewLevelSelector computer model
        , viewImportExportLevels computer model
        , viewDebugger computer model
        ]

    else
        []


editorOnOffButton : Computer -> Model -> Element EditorMsg
editorOnOffButton computer model =
    checkbox []
        { onChange = ClickedEditorOnOffButton
        , icon = Input.defaultCheckbox
        , checked = model.editor.isOn
        , label = Input.labelLeft [] (text "Editor")
        }


viewDebugger : Computer -> Model -> Element EditorMsg
viewDebugger computer model =
    textColumn [ alignBottom ]
        [ header "Debugger"

        --, paragraph [] [ text <| "Editor state: " ++ Debug.toString model.editorState ]
        --, paragraph [] [ text <| "Game state: " ++ Debug.toString model.gameState ]
        ]


viewPolygonEditor : Computer -> Model -> Element EditorMsg
viewPolygonEditor computer model =
    column []
        [ header "Polygon editor"
        , case model.editor.state of
            DrawingPolygon points ->
                column [ spacing 10 ]
                    [ paragraph
                        [ width fill
                        , padding 16
                        , Font.color Colors.red
                        , Font.size 16
                        , Background.color Colors.black
                        ]
                        [ text "Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. "
                        , text "After you are finished drawing, click the button below."
                        ]
                    , makeButton "Finish drawing polygon" (ClickedButtonFinishDrawingPolygon points)
                    ]

            _ ->
                makeButton "Start drawing a polygon" ClickedButtonStartDrawingPolygon
        ]


viewLevelSelector : Computer -> Model -> Element EditorMsg
viewLevelSelector computer model =
    column []
        [ header "Level Selector"
        , row [ spacing 10 ]
            [ levelSelectionButtons computer model
            , makeButton "Add level" PressedAddLevelButton
            , makeButton "Remove level" PressedRemoveLevelButton
            , makeButton "Move level up" PressedMoveLevelOneUpButton
            ]
        ]


levelSelectionButtons : Computer -> Model -> Element EditorMsg
levelSelectionButtons computer model =
    row [ spacing 10 ]
        [ makeButton "<" PressedPreviousLevelButton
        , el [ Font.size 22, Font.heavy, Font.color Colors.white ] <|
            text <|
                String.concat
                    [ String.fromInt (LevelSelector.currentIndex model.levels)
                    , " / "
                    , String.fromInt (LevelSelector.size model.levels)
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


viewImportExportLevels : Computer -> Model -> Element EditorMsg
viewImportExportLevels computer model =
    column [ width fill, spacing 10 ]
        [ header "Import/Export Levels"
        , levelExporting computer model
        , levelImporting computer model
        ]


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
