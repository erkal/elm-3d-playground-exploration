module Main exposing (main)

import Camera exposing (Camera, orthographic, perspectiveWithOrbit)
import Color exposing (Color, black, blue, darkGreen, green, orange, red, rgb255, white, yellow)
import Editor exposing (Editor, EditorState(..))
import Geometry exposing (Point, Vector)
import Html exposing (Html, div, p, pre, span, textarea)
import Html.Attributes exposing (checked, class, cols, for, id, name, rows, style, type_, value)
import Html.Events
import Illuminance
import Json.Decode
import LevelSelector as LS exposing (Levels)
import Light
import LuminousFlux
import Playground exposing (Computer, boolConfig, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getBool, getColor, getFloat)
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
        , boolConfig "orthographic" True
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
        ]
    , configBlock "Color"
        True
        [ colorConfig "floor color" white
        ]
    ]


init : Computer -> Model
init computer =
    { levels = LS.singleton World.init
    , editor = Editor.init
    , camera = camera computer { x = 0, y = 0, z = 0 }
    , mouseOverXY = Point2d 0 0
    }


camera : Computer -> Point -> Camera
camera computer focalPoint =
    if getBool "orthographic" computer then
        orthographic
            { focalPoint = focalPoint
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , viewportHeight = getFloat "camera distance" computer
            }

    else
        perspectiveWithOrbit
            { focalPoint = focalPoint
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , distance = getFloat "camera distance" computer
            }



-- UPDATE


update : Computer -> Model -> Model
update computer_ model =
    let
        computer =
            if getBool "fix time steps" computer_ then
                { computer_ | dt = 0.016 }

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
            (LS.current model.levels).ball
    in
    { model
        | camera =
            camera computer (Point ball.circle.center.x ball.circle.center.y 0)
    }


tickWorld : Computer -> Model -> Model
tickWorld computer model =
    let
        newWorld =
            LS.current model.levels |> World.Physics.Tick.tick computer
    in
    { model | levels = model.levels |> LS.mapCurrent (always newWorld) }



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
        ((LS.current model.levels).polygons |> List.map drawPolygon)


drawBall : Computer -> Model -> Shape
drawBall computer model =
    let
        ball =
            (LS.current model.levels).ball

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
                (LS.current model.levels).ball
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
                , levels = model.levels |> LS.mapCurrent (World.addPolygon points)
            }

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
            { model | levels = model.levels |> LS.add World.init }

        PressedRemoveLevelButton ->
            { model | levels = model.levels |> LS.removeCurrent }

        PressedMoveLevelOneUpButton ->
            { model | levels = model.levels |> LS.moveLevelOneUp }

        ClickedExportLevelsButton ->
            { model | editor = model.editor |> Editor.exportLevels model.levels }

        ClickedImportLevelsButton ->
            { model
                | levels =
                    model.editor.jsonLevelsToImport
                        |> Json.Decode.decodeString (LS.decoder World.Decode.decoder)
                        |> Result.withDefault model.levels
            }

        EditedTextAreaForImportingLevels string ->
            { model
                | editor = model.editor |> Editor.setTextAreaForImportingLevels string
            }


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div
        [ class "w-[300px] overflow-y-scroll text-xs bg-black20"
        , style "height" (String.fromFloat (computer.screen.height - 140) ++ "px")
        ]
        [ div [ class "m-4" ]
            [ makeCheckBox ClickedEditorOnOffButton model.editor.isOn "Editor" ]
        , editorContent computer model
        ]


editorContent : Computer -> Model -> Html EditorMsg
editorContent computer model =
    if model.editor.isOn then
        div
            []
            [ div [ class "p-4" ]
                [ viewPolygonEditor computer model ]
            , div [ class "p-4 border-[0.5px] border-white20" ]
                [ levelSelection model ]
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


makeButton : msg -> String -> Html msg
makeButton msg string =
    Html.button
        [ class "m-1 p-2 rounded bg-black40 hover:bg-black80"
        , Html.Events.onClick msg
        ]
        [ Html.text string ]


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


viewPolygonEditor : Computer -> Model -> Html EditorMsg
viewPolygonEditor computer model =
    div []
        [ div [ class "h-40" ]
            [ div [ class "text-lg" ] [ Html.text "Polygon editor" ]
            , case model.editor.state of
                DrawingPolygon points ->
                    div [ class "p-2" ]
                        [ div [] [ Html.text "Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. " ]
                        , div [] [ Html.text "After you are finished drawing, click the button below." ]
                        , makeButton (ClickedButtonFinishDrawingPolygon points) "Finish drawing polygon"
                        ]

                _ ->
                    makeButton ClickedButtonStartDrawingPolygon "Start drawing a polygon"
            ]
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
