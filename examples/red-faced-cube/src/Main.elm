module Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Cell exposing (Cell, RollDirection(..))
import Color exposing (darkRed, hsl, lightRed, red, rgb255, white)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Ease
import Editor exposing (Editor)
import Element exposing (Element, alignBottom, alignRight, alignTop, column, el, fill, height, htmlAttribute, padding, paddingXY, px, row, scrollbarY, spacing, textColumn, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input exposing (button, checkbox)
import Geometry exposing (Point, Vector)
import HardcodedLevels exposing (hardcodedLevels)
import Html exposing (Html, br, div, h2, p, span, text)
import Html.Attributes exposing (style)
import Illuminance
import Json.Decode
import LevelSelector exposing (Levels)
import Light
import LuminousFlux
import Path exposing (Path)
import Playground exposing (..)
import Playground.Animation exposing (wave)
import Playground.Colors as Colors
import Scene as Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material exposing (matte)
import Swipe exposing (Swipe)
import Temperature
import Wall exposing (Wall(..), WallDirection(..))
import World exposing (RollResult(..), Rule(..), World)
import World.Decode



{-
   Eight Rolling Cubes Puzzle from John Harris.
   As in the following book of Martin Gardner:
   "Time Travel and Other Mathematical Bewilderments" (page 118)
-}


main =
    gameWithConfigurationsAndEditor view
        update
        initialConfigurations
        init
        viewEditor
        updateFromEditor


type alias Model =
    { state : State
    , levels : Levels World
    , editor : Editor
    , cellUnderPointer : Cell
    , swipe : Swipe
    }


type State
    = NoAnimation
    | AnimatingRoll
        { startedAt : Float
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        , willBeSolved : Bool
        , newWorld : World
        }
    | AnimatingMistake
        { startedAt : Float
        , violatedRule : Rule
        , startPosition : ( Int, Int )
        , rollDirection : RollDirection
        }
    | CongratulationsAnimation { startedAt : Float }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 20
        , floatConfig "camera azimuth" ( -pi, pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) -0.15
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "cubes side length" ( 0.5, 1 ) 0.95
        , floatConfig "duration of step animation" ( 0.1, 1 ) 0.23
        , floatConfig "duration of mistake animation" ( 0.1, 1 ) 0.5
        , floatConfig "height of following lights" ( 0.1, 8 ) 5
        ]
    , configBlock "Colors and light"
        True
        [ floatConfig "lumens of following lights" ( 40000, 120000 ) 100000
        , colorConfig "background color" (rgb255 223 224 226)
        , colorConfig "color 1" (rgb255 244 88 67)
        , colorConfig "color 2" (rgb255 255 200 40)
        , colorConfig "path color" (rgb255 244 88 67)
        , colorConfig "board color" (rgb255 165 166 169)
        , colorConfig "wall color" (rgb255 38 48 64)
        ]
    ]


init : Computer -> Model
init computer =
    { state = NoAnimation
    , levels =
        --hardcodedLevels
        LevelSelector.singleton World.levelFromBook
    , editor = Editor.init
    , cellUnderPointer = ( 0, 0 )
    , swipe = Swipe.init
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    let
        (Cube startCell _) =
            (LevelSelector.current model.levels).playerCube

        handleUserInput =
            case inputToRollDirection computer model of
                Nothing ->
                    identity

                Just rollDirection ->
                    if model.editor.isOn then
                        identity

                    else
                        attemptRollForPlayer rollDirection startCell computer
    in
    model
        |> updateSwipe computer
        |> updateCellUnderPointer computer
        |> handleUserInput
        |> stopAnimation computer


inputToRollDirection : Computer -> Model -> Maybe RollDirection
inputToRollDirection computer model =
    case
        ( swipeInputToRollDirection model.swipe
        , keyboardInputToRollDirection computer.keyboard
        )
    of
        ( Just r1, _ ) ->
            Just r1

        ( _, Just r2 ) ->
            Just r2

        _ ->
            Nothing


updateCellUnderPointer : Computer -> Model -> Model
updateCellUnderPointer computer model =
    { model
        | cellUnderPointer =
            Camera.mouseOverXY (camera computer) computer.screen computer.pointer
                |> Maybe.map (\{ x, y } -> ( round x, round y ))
                |> Maybe.withDefault model.cellUnderPointer
    }


updateSwipe : Computer -> Model -> Model
updateSwipe computer model =
    { model | swipe = Swipe.update computer { threshold = 20 } model.swipe }


keyboardInputToRollDirection : Keyboard -> Maybe RollDirection
keyboardInputToRollDirection keyboard =
    case [ keyboard.up, keyboard.down, keyboard.left, keyboard.right ] of
        [ True, False, False, False ] ->
            Just Up

        [ False, True, False, False ] ->
            Just Down

        [ False, False, True, False ] ->
            Just Left

        [ False, False, False, True ] ->
            Just Right

        _ ->
            Nothing


swipeInputToRollDirection : Swipe -> Maybe RollDirection
swipeInputToRollDirection swipe =
    if Swipe.swipedUp swipe then
        Just Up

    else if Swipe.swipedDown swipe then
        Just Down

    else if Swipe.swipedLeft swipe then
        Just Left

    else if Swipe.swipedRight swipe then
        Just Right

    else
        Nothing


attemptRollForPlayer : RollDirection -> Cell -> Computer -> Model -> Model
attemptRollForPlayer rollDirection startCell computer model =
    case LevelSelector.current model.levels |> World.rollForPlayerInput rollDirection of
        ViolatesRule CannotCrossPath ->
            model

        ViolatesRule MustBeInsideBoard ->
            model

        ViolatesRule TopFaceCannotBeRed ->
            model
                |> startMistakeAnimation computer TopFaceCannotBeRed startCell rollDirection

        ViolatesRule MustVisitEachCellBeforeReachingFinishCell ->
            model
                |> startMistakeAnimation computer MustVisitEachCellBeforeReachingFinishCell startCell rollDirection

        Roll newWorld ->
            model
                |> startRollAnimation computer startCell rollDirection False newWorld

        RollAndSolve newWorld ->
            model
                |> startRollAnimation computer startCell rollDirection True newWorld


stopAnimation : Computer -> Model -> Model
stopAnimation computer model =
    case model.state of
        AnimatingRoll { startedAt, newWorld, willBeSolved } ->
            if computer.time - startedAt > getFloat "duration of step animation" computer then
                { model
                    | state =
                        if willBeSolved then
                            CongratulationsAnimation { startedAt = computer.time }

                        else
                            NoAnimation
                    , levels = model.levels |> LevelSelector.setCurrent newWorld
                }

            else
                model

        AnimatingMistake { startedAt } ->
            if computer.time - startedAt > getFloat "duration of mistake animation" computer then
                { model | state = NoAnimation }

            else
                model

        _ ->
            model


startMistakeAnimation : Computer -> Rule -> ( Int, Int ) -> RollDirection -> Model -> Model
startMistakeAnimation computer violatedRule startPosition rollDirection model =
    case model.state of
        NoAnimation ->
            { model
                | state =
                    AnimatingMistake
                        { startedAt = computer.time
                        , violatedRule = violatedRule
                        , startPosition = startPosition
                        , rollDirection = rollDirection
                        }
            }

        _ ->
            model


startRollAnimation : Computer -> ( Int, Int ) -> RollDirection -> Bool -> World -> Model -> Model
startRollAnimation computer startPosition rollDirection willBeSolved newWorld model =
    case model.state of
        NoAnimation ->
            { model
                | state =
                    AnimatingRoll
                        { startedAt = computer.time
                        , startPosition = startPosition
                        , rollDirection = rollDirection
                        , willBeSolved = willBeSolved
                        , newWorld = newWorld
                        }
            }

        _ ->
            model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div
        []
        [ explanationText computer model
        , viewShapes computer model
        ]


explanationText : Computer -> Model -> Html Never
explanationText ({ time } as computer) model =
    div
        [ style "position" "fixed"
        , style "width" "100%"
        , style "text-align" "center"
        , style "font-size" "14px"
        ]
        [ h2
            []
            [ text "The Red-Faced Cube" ]
        , p
            [ style "font-weight" "bold" ]
            [ text "A puzzle from Martin Gardner's book Mathematical Carnival (1975)" ]
        , p
            []
            [ span
                (case model.state of
                    AnimatingMistake { startedAt, violatedRule } ->
                        case violatedRule of
                            MustVisitEachCellBeforeReachingFinishCell ->
                                [ style "background-color" "red" ]

                            _ ->
                                []

                    _ ->
                        []
                )
                [ text " Visit each cell exactly once." ]
            , br [] []
            , span [] [ text "End with the cube red side up in the top-right corner." ]
            , br [] []
            , span
                (case model.state of
                    AnimatingMistake { startedAt, violatedRule } ->
                        case violatedRule of
                            TopFaceCannotBeRed ->
                                [ style "background-color" "red" ]

                            _ ->
                                []

                    _ ->
                        []
                )
                [ text "At no time during the tour, however,"
                , br [] []
                , text "is the cube allowed to rest with the red side up."
                ]
            , br [] []
            , span [] [ text "You can roll the cube via swiping or pressing arrow keys." ]
            ]
        ]


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = -0.5, y = 0.7, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


viewShapes : Computer -> Model -> Html Never
viewShapes computer model =
    let
        (Cube ( x, y ) _) =
            (LevelSelector.current model.levels).playerCube

        ( cubeX, cubeY ) =
            -- This is only for the camera follow rolling cube smoothly
            case model.state of
                AnimatingRoll { startedAt, rollDirection } ->
                    let
                        duration =
                            getFloat "duration of step animation" computer

                        passedDurationRatio =
                            (computer.time - startedAt) / duration

                        ( cameraShiftX, cameraShiftY ) =
                            case rollDirection of
                                Up ->
                                    ( 0, passedDurationRatio )

                                Down ->
                                    ( 0, -passedDurationRatio )

                                Left ->
                                    ( -passedDurationRatio, 0 )

                                Right ->
                                    ( passedDurationRatio, 0 )
                    in
                    ( toFloat x + cameraShiftX
                    , toFloat y + cameraShiftY
                    )

                _ ->
                    ( toFloat x
                    , toFloat y
                    )

        firstLight =
            Light.point
                { position = { x = cubeX + 0.5, y = cubeY + 0.5, z = getFloat "height of following lights" computer }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens (getFloat "lumens of following lights" computer)
                }

        secondLight =
            Light.point
                { position = { x = cubeX - 0.5, y = cubeY - 0.5, z = getFloat "height of following lights" computer }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens (getFloat "lumens of following lights" computer)
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 100
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 120
                , intensityBelow = Illuminance.lux 40
                }
    in
    Scene.custom
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
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
        , backgroundColor = getColor "background color" computer
        }
        (if model.editor.isOn then
            [ drawBoard computer model
            , drawCube computer model
            , drawWalls computer model
            , drawPath computer model
            , drawPointer computer model
            ]

         else
            [ drawBoard computer model
            , drawCube computer model
            , drawWalls computer model
            , drawPath computer model
            ]
        )


drawBoard : Computer -> Model -> Shape
drawBoard computer model =
    let
        drawCellOnPath ( x, y ) =
            cube (matte (getColor "board color" computer)) 1
                |> moveZ -0.495
                |> moveX (toFloat x)
                |> moveY (toFloat y)
    in
    group
        ((LevelSelector.current model.levels).levelPath
            |> Path.cells
            |> List.map drawCellOnPath
        )


drawPointer : Computer -> Model -> Shape
drawPointer computer model =
    let
        ( x, y ) =
            model.cellUnderPointer

        color =
            if computer.pointer.down then
                lightRed

            else
                darkRed
    in
    sphere (matte color) 0.2
        |> moveX (toFloat x)
        |> moveY (toFloat y)


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


drawWall : Computer -> Wall -> Shape
drawWall computer (Wall ( x, y ) wallDirection) =
    let
        wallWidth =
            1 - getFloat "cubes side length" computer

        southWall =
            block (matte (getColor "wall color" computer))
                ( 1 + wallWidth, wallWidth, wallWidth )
                |> moveY -0.5

        eastWall =
            southWall |> rotateZ (degrees 90)
    in
    (case wallDirection of
        S ->
            southWall

        E ->
            eastWall
    )
        |> moveX (toFloat x)
        |> moveY (toFloat y)


drawWalls : Computer -> Model -> Shape
drawWalls computer model =
    let
        removeWallsOnSolutionPathIfEditorIsOn =
            if model.editor.isOn then
                List.filter (\wall -> not (Path.crosses wall (LevelSelector.current model.levels).levelPath))

            else
                identity
    in
    group
        ((LevelSelector.current model.levels).levelPath
            |> Path.wallsWithDuplicates
            |> List.filter (\wall -> not (Path.crosses wall (LevelSelector.current model.levels).playerPath))
            |> removeWallsOnSolutionPathIfEditorIsOn
            |> List.map (drawWall computer)
        )


drawPath : Computer -> Model -> Shape
drawPath computer model =
    let
        color i =
            case model.state of
                CongratulationsAnimation { startedAt } ->
                    hsl (wave 0 1 6 (computer.time + 0.03 * toFloat i))
                        1
                        0.8

                _ ->
                    white

        animateHeight i =
            case model.state of
                CongratulationsAnimation { startedAt } ->
                    scale 0.9
                        >> moveZ (wave 0.1 0.7 6 (computer.time + 0.3 * toFloat i))

                _ ->
                    identity

        drawCellOnPath i ( x, y ) =
            cube (matte (color i)) 1
                |> animateHeight i
                |> moveZ -0.49
                |> moveX (toFloat x)
                |> moveY (toFloat y)
    in
    group
        ((LevelSelector.current model.levels).playerPath
            |> Path.cells
            |> List.indexedMap drawCellOnPath
        )


drawCube : Computer -> Model -> Shape
drawCube computer model =
    let
        (Cube ( x, y ) redFaceDirection) =
            (LevelSelector.current model.levels).playerCube

        s =
            getFloat "cubes side length" computer

        color1 =
            getColor "color 1" computer

        color2 =
            getColor "color 2" computer

        redHalf =
            block (matte color1) ( s, s, s / 2 ) |> moveZ (s / 4)

        yellowHalf =
            --block color2 ( s, s, excitedSideLength / 2 ) |> moveZ -(excitedSideLength / 4)
            block (matte color2) ( s, s, s / 2 ) |> moveZ -(s / 4)

        positionWithRedFaceDirection =
            case redFaceDirection of
                RedFaceDirection Z Positive ->
                    identity

                RedFaceDirection Z Negative ->
                    rotateX (degrees 180)

                RedFaceDirection Y Positive ->
                    rotateX -(degrees 90)

                RedFaceDirection Y Negative ->
                    rotateX (degrees 90)

                RedFaceDirection X Positive ->
                    rotateY (degrees 90)

                RedFaceDirection X Negative ->
                    rotateY -(degrees 90)
    in
    group
        [ redHalf
        , yellowHalf
        ]
        |> positionWithRedFaceDirection
        |> rollingAnimation computer model ( x, y )
        |> moveZ (s / 2)
        |> moveX (toFloat x)
        |> moveY (toFloat y)


rollingAnimation : Computer -> Model -> ( Int, Int ) -> (Shape -> Shape)
rollingAnimation computer model pos =
    case model.state of
        AnimatingRoll { startedAt, startPosition, rollDirection, newWorld } ->
            if startPosition == pos then
                let
                    duration =
                        getFloat "duration of step animation" computer

                    passedDurationRatio =
                        (computer.time - startedAt) / duration

                    easedDurationRatio =
                        Ease.inQuad
                            passedDurationRatio

                    rotationDegree =
                        (easedDurationRatio * degrees 90)
                            |> min (degrees 90)

                    rollAxis =
                        case rollDirection of
                            Up ->
                                ( { x = 0.5, y = 0.5, z = -0.5 }, ( -1, 0, 0 ) )

                            Down ->
                                ( { x = -0.5, y = -0.5, z = -0.5 }, ( 1, 0, 0 ) )

                            Left ->
                                ( { x = -0.5, y = 0.5, z = -0.5 }, ( 0, -1, 0 ) )

                            Right ->
                                ( { x = 0.5, y = -0.5, z = -0.5 }, ( 0, 1, 0 ) )
                in
                rotateAround rollAxis rotationDegree

            else
                identity

        AnimatingMistake { startedAt, startPosition, rollDirection } ->
            if startPosition == pos then
                let
                    duration =
                        getFloat "duration of mistake animation" computer

                    passedDurationRatio =
                        (computer.time - startedAt) / duration

                    easedDurationRatio =
                        sin
                            (pi * passedDurationRatio)

                    rotationDegree =
                        (easedDurationRatio * degrees 45)
                            |> clamp (degrees 0) (degrees 45)

                    rollAxis =
                        case rollDirection of
                            Up ->
                                ( { x = 0.5, y = 0.5, z = -0.5 }, ( -1, 0, 0 ) )

                            Down ->
                                ( { x = -0.5, y = -0.5, z = -0.5 }, ( 1, 0, 0 ) )

                            Left ->
                                ( { x = -0.5, y = 0.5, z = -0.5 }, ( 0, -1, 0 ) )

                            Right ->
                                ( { x = 0.5, y = -0.5, z = -0.5 }, ( 0, 1, 0 ) )
                in
                rotateAround rollAxis rotationDegree

            else
                identity

        _ ->
            identity



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
                | editor =
                    model.editor |> Editor.toggle bool
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
            { model | levels = model.levels |> LevelSelector.add World.empty }

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
                        |> Json.Decode.decodeString (LevelSelector.decoder World.Decode.decodeWorld)
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
        (Element.text str)


editorContent : Computer -> Model -> List (Element EditorMsg)
editorContent computer model =
    if model.editor.isOn then
        [ viewInstructions computer model
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
        , label = Input.labelLeft [] (Element.text "Editor")
        }


viewDebugger : Computer -> Model -> Element EditorMsg
viewDebugger computer model =
    textColumn [ alignBottom ]
        [ header "Debugger"

        --, paragraph [] [ text <| "Editor state: " ++ Debug.toString model.editorState ]
        --, paragraph [] [ text <| "Game state: " ++ Debug.toString model.gameState ]
        ]


viewInstructions : Computer -> Model -> Element EditorMsg
viewInstructions computer model =
    column []
        [ header "Editing a level"
        , Element.text "Drag the last point on path to extend or shorten it."
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
            Element.text <|
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
        , label = Element.text buttonText
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
        (Element.text model.editor.jsonExportedLevels)


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
