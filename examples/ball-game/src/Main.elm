module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, blue, green, orange, red, rgb255, white, yellow)
import Element exposing (Element, alignBottom, alignRight, alignTop, centerX, column, el, fill, height, htmlAttribute, none, padding, paddingXY, paragraph, px, row, scrollbarY, spacing, text, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Geometry exposing (Point, Vector)
import Html exposing (Html)
import Html.Attributes exposing (style)
import Illuminance
import Json.Decode
import Json.Encode
import LevelSelector as LS exposing (Levels)
import LuminousFlux
import Physics.Primitives.Geometry2d exposing (Point2d, Vector2d)
import Physics.Tick as WorldUpdate
import Physics.World as World exposing (World)
import Physics.World.Decode
import Physics.World.Encode
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getColor, getFloat)
import Playground.Colors as Colors
import Playground.Light as Light
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Temperature


main =
    gameWithConfigurationsAndEditor
        view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { levels : Levels World
    , camera : Camera
    , mouseOverXY : Point2d

    -- editor:
    , editorIsOn : Bool
    , editorState : EditorState
    , jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


type EditorState
    = Idle



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Physics Parameters"
        True
        [ floatConfig "gas force" ( 20, 60 ) 40
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
    { levels = LS.singleton World.init
    , camera =
        perspectiveWithOrbit
            { focalPoint = { x = 0, y = 0, z = 0 }
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , distance = getFloat "camera distance" computer
            }
    , mouseOverXY = Point2d 0 0

    --
    , editorIsOn = False
    , editorState = Idle
    , jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateMouseOverXY computer
        |> tickWorld computer
        |> moveCamera computer


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
            LS.current model.levels |> WorldUpdate.tick computer
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
    in
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
        [ drawAxes
        , drawFloor computer
        , drawBall computer model
        , drawMouseOverXY computer model
        ]


drawAxes : Shape
drawAxes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawFloor : Computer -> Shape
drawFloor computer =
    group
        [ block (getColor "floor color" computer) ( 50, 50, 1 ) |> moveZ -0.51
        ]


drawMouseOverXY : Computer -> Model -> Shape
drawMouseOverXY computer model =
    sphere orange 0.5
        |> moveX model.mouseOverXY.x
        |> moveY model.mouseOverXY.y


drawBall : Computer -> Model -> Shape
drawBall computer model =
    let
        ball =
            (LS.current model.levels).ball

        playerBall =
            group
                [ group
                    [ sphere red 0.5 |> moveX -0.02
                    , sphere yellow 0.5 |> moveX 0.02
                    ]
                    |> rotateY ball.rotation
                , cylinder black 0.2 1.4
                ]
                |> rotateZ ball.directionFromXAxis

        ( vx, vy ) =
            ball.velocity

        ( speedLength, speedRot ) =
            toPolar ( vx, vy )

        speedVector =
            cylinder red 0.2 (0.2 * speedLength)
                |> moveY (0.1 * speedLength)
                |> rotateZ -(degrees 90)
                |> rotateZ speedRot
                |> moveZ 0.6
    in
    group
        [ playerBall

        --, speedVector
        ]
        |> moveZ 0.5
        |> moveX ball.circle.center.x
        |> moveY ball.circle.center.y



--  EDITOR


type EditorMsg
    = ClickedEditorOnOffButton Bool
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
                | editorIsOn = bool
                , editorState = Idle
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
            { model
                | jsonExportedLevels =
                    Json.Encode.encode 2 (LS.encode Physics.World.Encode.encode model.levels)
            }

        ClickedImportLevelsButton ->
            { model
                | levels =
                    model.jsonLevelsToImport
                        |> Json.Decode.decodeString (LS.decoder Physics.World.Decode.decoder)
                        |> Result.withDefault model.levels
            }

        EditedTextAreaForImportingLevels string ->
            { model
                | jsonLevelsToImport = string
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
    if model.editorIsOn then
        column
            [ width fill
            , height fill
            , spacing 20
            ]
            [ explanationsForEditor computer model
            , viewLevelEditor computer model
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
        [ header "Editing current level"
        , paragraph [] [ text "hold shift key and click in counterclockwise order to draw a polygon" ]
        , paragraph [] [ text "press the `d` key to remove mouse-overed polygon" ]
        , paragraph [] [ text "press the `t` key to change the type of mouse-overed polygon" ]
        ]


viewDebugger : Computer -> Model -> Element EditorMsg
viewDebugger computer model =
    textColumn [ alignBottom ]
        [ header "Debugger"

        --, paragraph [] [ text <| "Editor state: " ++ Debug.toString model.editorState ]
        --, paragraph [] [ text <| "Game state: " ++ Debug.toString model.gameState ]
        ]


viewLevelEditor : Computer -> Model -> Element EditorMsg
viewLevelEditor computer model =
    column [ spacing 10 ]
        [ levelManipulationButtons computer model
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
        (text model.jsonExportedLevels)


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
        , text = model.jsonLevelsToImport
        , placeholder = Nothing
        , label = Input.labelHidden "Imported Levels"
        }
