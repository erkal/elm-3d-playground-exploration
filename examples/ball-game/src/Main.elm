module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (Color, black, blue, darkGray, gray, green, hsl, lightBlue, lightGray, orange, red, rgb255, white, yellow)
import Editor exposing (Editor)
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
import Level exposing (Level)
import Level.Decode
import LevelSelector as LS exposing (Levels)
import LuminousFlux
import Playground exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor, getColor, getFloat, toX, toY)
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
    { camera : Camera
    , editor : Editor
    , levels : Levels Level
    }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.6
        ]
    , configBlock "Physics Parameters"
        True
        [ floatConfig "gas force" ( 6, 20 ) 36
        , floatConfig "friction" ( 0, 1 ) 0.5
        , floatConfig "direction change speed" ( 1, 5 ) 3
        , floatConfig "jump speed" ( 1, 2 ) 8
        ]
    , configBlock "Color"
        True
        [ colorConfig "floor color" white
        ]
    ]


init : Computer -> Model
init computer =
    { editor = Editor.init
    , levels = LS.singleton Level.empty
    , camera =
        perspectiveWithOrbit
            { focalPoint = { x = 0, y = 0, z = 0 }
            , azimuth = getFloat "camera azimuth" computer
            , elevation = getFloat "camera elevation" computer
            , distance = getFloat "camera distance" computer
            }
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    let
        ball =
            (LS.current model.levels).ball
    in
    { model
        | camera =
            perspectiveWithOrbit
                { focalPoint = Point ball.position.x 0 ball.position.z
                , azimuth = getFloat "camera azimuth" computer
                , elevation = getFloat "camera elevation" computer
                , distance = getFloat "camera distance" computer
                }
        , levels =
            model.levels
                |> LS.mapCurrent (Level.tick computer)
    }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    viewGame computer model


viewGame : Computer -> Model -> Html Never
viewGame computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 1 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 1 }
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
        , lights =
            Scene3d.fourLights
                firstLight
                secondLight
                thirdLight
                fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = rgb255 46 46 46
        }
        [ drawAxes
        , drawFloor computer
        , drawPlayer computer model
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
        [ block (getColor "floor color" computer) ( 50, 1, 50 ) |> moveY -0.5
        , cylinder blue 2 2 |> moveZ 5
        , cylinder blue 3 2 |> moveX 10
        , cylinder blue 1 2 |> moveX 6 |> moveZ 8
        , cylinder blue 1 2 |> moveX -6 |> moveZ -8
        , cylinder blue 2 2 |> moveX -16 |> moveZ 12
        , cylinder blue 3 2 |> moveX -16 |> moveZ 6
        ]


drawPlayer : Computer -> Model -> Shape
drawPlayer computer model =
    let
        ball =
            (LS.current model.levels).ball

        playerBall =
            group
                [ group
                    [ sphere red 0.5 |> moveX -0.02
                    , sphere yellow 0.5 |> moveX 0.02
                    ]
                    |> rotateZ -ball.rotation
                , cylinder black 0.1 0.8
                    |> rotateZ (degrees 90)
                    |> moveX 0.4
                    |> moveZ 0.6
                , cylinder black 0.1 0.8
                    |> rotateZ (degrees 90)
                    |> moveX 0.4
                    |> moveZ -0.6
                , cylinder darkGray 0.2 1.4
                    |> rotateX (degrees 90)
                ]
                |> rotateY ball.directionFromXAxis

        ( vx, _, vz ) =
            ball.speed

        ( speedLength, speedRot ) =
            toPolar ( vx, vz )

        speedVector =
            cylinder red 0.2 (2 * speedLength)
                |> moveY speedLength
                |> rotateZ -(degrees 90)
                |> rotateY -speedRot
                |> moveY 0.6
    in
    group
        [ playerBall

        -- , speedVector
        ]
        |> moveY 0.5
        |> moveX ball.position.x
        |> moveY ball.position.y
        |> moveZ ball.position.z



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
