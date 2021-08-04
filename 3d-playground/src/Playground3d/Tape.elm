module Playground3d.Tape exposing
    ( Msg
    , Tape
    , currentComputer
    , currentGameModel
    , init
    , tick
    , update
    , updateCurrentComputer
    , updateCurrentGameModelWithEditorMsg
    , view
    )

import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Playground3d.Colors as Colors
import Playground3d.Computer as Computer exposing (Computer)
import Playground3d.Icons as Icons
import Round


type Tape gameModel
    = Tape
        State
        { pastReversed : List ( Computer, gameModel )
        , current : ( Computer, gameModel )
        , future : List ( Computer, gameModel )
        }


type State
    = Recording RecordStepType
    | Paused
    | Playing { tapeClock : Float }


type RecordStepType
    = WithResetComputer
    | Usual



-- INIT


init : Computer -> (Computer -> gameModel) -> Tape gameModel
init initialComputer initGameModel =
    Tape
        (Recording Usual)
        { pastReversed = []
        , current = ( initialComputer, initGameModel initialComputer )
        , future = []
        }



-- GET (ONLY USED FOR VIEW)


currentComputer : Tape gameModel -> Computer
currentComputer (Tape _ { current }) =
    Tuple.first current


currentGameModel : Tape gameModel -> gameModel
currentGameModel (Tape _ { current }) =
    Tuple.second current



-- UPDATE


updateCurrentGameModelWithEditorMsg :
    (Computer -> levelEditorMsg -> gameModel -> gameModel)
    -> levelEditorMsg
    -> Tape gameModel
    -> Tape gameModel
updateCurrentGameModelWithEditorMsg updateFromEditor levelEditorMsg (Tape state ({ current } as pastCurrentFuture)) =
    Tape state
        { pastCurrentFuture
            | current =
                current
                    |> Tuple.mapSecond (updateFromEditor (Tuple.first current) levelEditorMsg)
        }


updateCurrentComputer : Computer.Msg -> Tape gameModel -> Tape gameModel
updateCurrentComputer computerMsg (Tape state pastCurrentFuture) =
    Tape state
        { pastCurrentFuture
            | current =
                pastCurrentFuture.current
                    |> Tuple.mapFirst (Computer.update computerMsg)
        }


tick : (Computer -> gameModel -> gameModel) -> Float -> Tape gameModel -> Tape gameModel
tick updateGameModel deltaTimeInSeconds ((Tape state pastCurrentFuture) as tape) =
    case state of
        Paused ->
            tape

        Playing { tapeClock } ->
            Tape (Playing { tapeClock = tapeClock + deltaTimeInSeconds }) pastCurrentFuture
                |> (if tapeClock + deltaTimeInSeconds > (currentComputer tape).time then
                        goToNext
                            >> Maybe.withDefault (Tape Paused pastCurrentFuture)

                    else
                        identity
                   )

        Recording recordStepType ->
            let
                ( lastComputer, lastGameModel ) =
                    pastCurrentFuture.current

                newComputer =
                    lastComputer
                        |> Computer.tickTime deltaTimeInSeconds
                        |> (case recordStepType of
                                WithResetComputer ->
                                    Computer.resetInput

                                Usual ->
                                    identity
                           )

                newGameModel =
                    lastGameModel |> updateGameModel newComputer
            in
            Tape
                (Recording Usual)
                { pastReversed = pastCurrentFuture.current :: pastCurrentFuture.pastReversed
                , current = ( newComputer, newGameModel )
                , future = []
                }



-- UPDATES FOR USER INTERACTION WITH RECORD-PLAYER


type Msg
    = SliderMovedTo Int
    | PressedPauseButton
    | PressedRecordButton
    | PressedPlayButton


update : Msg -> Tape gameModel -> Tape gameModel
update msg tape =
    case msg of
        PressedPauseButton ->
            tape
                |> pause

        PressedRecordButton ->
            tape
                |> startRecording

        PressedPlayButton ->
            tape
                |> startPlaying

        SliderMovedTo tickIndex ->
            tape
                |> jumpTo tickIndex


pause : Tape gameModel -> Tape gameModel
pause (Tape _ pastCurrentFuture) =
    Tape Paused pastCurrentFuture


startRecording : Tape gameModel -> Tape gameModel
startRecording (Tape _ pastCurrentFuture) =
    Tape (Recording WithResetComputer) pastCurrentFuture


startPlaying : Tape gameModel -> Tape gameModel
startPlaying ((Tape _ pastCurrentFuture) as tape) =
    Tape
        (Playing { tapeClock = (currentComputer tape).time })
        pastCurrentFuture


goToNext : Tape gameModel -> Maybe (Tape gameModel)
goToNext (Tape state { pastReversed, current, future }) =
    case future of
        next :: rest ->
            Just
                (Tape state
                    { pastReversed = current :: pastReversed
                    , current = next
                    , future = rest
                    }
                )

        [] ->
            Nothing


jumpTo : Int -> Tape gameModel -> Tape gameModel
jumpTo tickIndex ((Tape _ { pastReversed, current, future }) as tape) =
    let
        allLoaded =
            List.reverse pastReversed ++ [ current ] ++ future

        l =
            List.take tickIndex allLoaded

        r =
            List.drop tickIndex allLoaded
    in
    case r of
        head :: tail ->
            Tape Paused
                { pastReversed = List.reverse l
                , current = head
                , future = tail
                }

        [] ->
            case List.reverse l of
                lastOfl :: rest ->
                    Tape Paused
                        { pastReversed = rest
                        , current = lastOfl
                        , future = []
                        }

                [] ->
                    tape



-- VIEW


view : Tape gameModel -> Element Msg
view tape =
    column [ width fill ]
        [ slider tape
        , row
            [ width fill
            , spacing 14
            , paddingXY 0 6
            , centerY
            ]
            [ viewTapeButtons tape
            , viewFpsMeter tape
            , viewClock tape
            ]
        ]


fpsMeter : Tape gameModel -> Maybe Int
fpsMeter ((Tape state { pastReversed }) as tape) =
    pastReversed
        |> List.drop 59
        |> List.head
        |> Maybe.map (Tuple.first >> .time)
        |> Maybe.map (\t -> round (60 / ((currentComputer tape).time - t)))


viewFpsMeter : Tape gameModel -> Element Msg
viewFpsMeter tape =
    case fpsMeter tape of
        Nothing ->
            none

        Just fps ->
            el
                [ Font.size 14
                , Font.color Colors.lightText
                , Font.family [ Font.monospace ]
                ]
                (text (String.fromInt fps ++ " FPS"))


viewClock : Tape gameModel -> Element Msg
viewClock ((Tape state _) as tape) =
    let
        conditionalStyling =
            case state of
                Recording _ ->
                    [ Font.color Colors.red
                    ]

                _ ->
                    [ Font.color Colors.lightGray
                    ]
    in
    el
        (conditionalStyling
            ++ [ Font.size 14
               , alignRight
               , Font.alignRight
               , Font.family [ Font.monospace ]
               ]
        )
        (text
            ((currentComputer tape).time |> Round.round 3)
        )


viewTapeButtons : Tape gameModel -> Element Msg
viewTapeButtons (Tape state { pastReversed, current, future }) =
    row
        []
        [ el [ width (px 40) ] <|
            case state of
                Recording _ ->
                    recButton PressedPauseButton Colors.red

                Paused ->
                    recButton PressedRecordButton Colors.lightGray

                Playing _ ->
                    none
        , el [ width (px 28) ] <|
            case state of
                Recording _ ->
                    none

                Paused ->
                    if List.isEmpty future then
                        none

                    else
                        tapeButtonWithIcon Icons.icons.play PressedPlayButton Colors.lightGray

                _ ->
                    tapeButtonWithIcon Icons.icons.pause PressedPauseButton Colors.lightGray
        ]


recButton : Msg -> Color -> Element Msg
recButton msg color =
    Input.button []
        { onPress = Just msg
        , label =
            el
                [ width (px 36)
                , padding 3
                , Font.color color
                , Font.center
                , Font.size 12
                , Font.bold
                , Border.color color
                , Border.width 1
                , Border.rounded 4
                ]
                (text "REC")
        }


slider : Tape gameModel -> Element Msg
slider tape =
    let
        ( value, max ) =
            ( lengthOfPast tape
            , totalSize tape - 1
            )
    in
    el
        [ width fill
        , centerY
        ]
    <|
        Input.slider
            [ behindContent
                (row
                    [ width fill
                    , height (px 4)
                    , centerY
                    , Background.color Colors.inputBackground
                    , Border.rounded 2
                    ]
                    [ el
                        [ width (fillPortion value)
                        , height fill
                        , Background.color Colors.red
                        , Border.rounded 2
                        ]
                        none
                    , el
                        [ width (fillPortion (max - value))
                        ]
                        none
                    ]
                )
            ]
            { onChange = round >> SliderMovedTo
            , label = Input.labelHidden ""
            , min = 0
            , max = toFloat max
            , step = Just 1
            , value = toFloat value
            , thumb =
                Input.thumb
                    [ width (px 12)
                    , height (px 12)
                    , Border.rounded 6
                    , Background.color Colors.red
                    ]
            }


tapeButtonWithIcon : String -> msg -> Color -> Element msg
tapeButtonWithIcon iconD msg color =
    Input.button []
        { onPress = Just msg
        , label = html (Icons.draw 20 color iconD)
        }


totalSize : Tape gameModel -> Int
totalSize (Tape _ { pastReversed, current, future }) =
    List.length pastReversed + 1 + List.length future


lengthOfPast : Tape gameModel -> Int
lengthOfPast (Tape _ { pastReversed }) =
    List.length pastReversed
