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
import Element.Input as Input
import Html.Attributes as HA
import Playground3d.Colors as Colors
import Playground3d.Computer as Computer exposing (Computer)
import Svg exposing (Svg, line, path, svg)
import Svg.Attributes as SA


type Tape gameModel
    = Tape
        State
        { past : List ( Computer, gameModel )
        , current : ( Computer, gameModel )
        , future : List ( Computer, gameModel )
        }


type State
    = Recording
    | Paused
    | Playing { tapeClock : Float }



-- INIT


init : Computer -> (Computer -> gameModel) -> Tape gameModel
init initialComputer initGameModel =
    Tape
        Recording
        { past = []
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
tick upDateGameModel deltaTimeInSeconds ((Tape state pastCurrentFuture) as tape) =
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

        Recording ->
            let
                ( lastComputer, lastGameModel ) =
                    pastCurrentFuture.current

                newComputer =
                    lastComputer |> Computer.tick deltaTimeInSeconds

                newGameModel =
                    lastGameModel |> upDateGameModel newComputer
            in
            Tape
                state
                { past = pastCurrentFuture.past ++ [ pastCurrentFuture.current ]
                , current = ( newComputer, newGameModel )
                , future = []
                }



-- UPDATES FOR USER INTERACTION WITH RECORD-PLAYER


type Msg
    = SliderMovedTo Int
    | PressedFastBackwardButton
    | PressedGoToPreviousButton
    | PressedPauseButton
    | PressedRecordButton
    | PressedPlayButton
    | PressedGoToNextButton
    | PressedFastForwardButton


update : Msg -> Tape gameModel -> Tape gameModel
update msg tape =
    case msg of
        PressedFastBackwardButton ->
            tape
                |> goToFirst

        PressedGoToPreviousButton ->
            tape
                |> goToPrevious
                |> Maybe.withDefault tape

        PressedPauseButton ->
            tape
                |> pause

        PressedRecordButton ->
            tape
                |> startRecording

        PressedPlayButton ->
            tape
                |> startPlaying

        PressedGoToNextButton ->
            tape
                |> goToNext
                |> Maybe.withDefault tape

        PressedFastForwardButton ->
            tape
                |> goToLast

        SliderMovedTo tickIndex ->
            tape
                |> goTo tickIndex


pause : Tape gameModel -> Tape gameModel
pause (Tape _ pastCurrentFuture) =
    Tape Paused pastCurrentFuture


startRecording : Tape gameModel -> Tape gameModel
startRecording (Tape _ pastCurrentFuture) =
    Tape Recording pastCurrentFuture


startPlaying : Tape gameModel -> Tape gameModel
startPlaying ((Tape _ pastCurrentFuture) as tape) =
    Tape
        (Playing { tapeClock = (currentComputer tape).time })
        pastCurrentFuture


goToFirst : Tape gameModel -> Tape gameModel
goToFirst ((Tape _ { past, current, future }) as tape) =
    case past of
        first :: rest ->
            Tape Paused
                { past = []
                , current = first
                , future = rest ++ [ current ] ++ future
                }

        [] ->
            tape


goToLast : Tape gameModel -> Tape gameModel
goToLast ((Tape _ { past, current, future }) as tape) =
    case List.reverse future of
        last :: restReversed ->
            Tape Paused
                { past = past ++ [ current ] ++ List.reverse restReversed
                , current = last
                , future = []
                }

        [] ->
            tape


goToNext : Tape gameModel -> Maybe (Tape gameModel)
goToNext (Tape state { past, current, future }) =
    case future of
        next :: rest ->
            Just
                (Tape state
                    { past = past ++ [ current ]
                    , current = next
                    , future = rest
                    }
                )

        [] ->
            Nothing


goToPrevious : Tape gameModel -> Maybe (Tape gameModel)
goToPrevious (Tape _ { past, current, future }) =
    case List.reverse past of
        previous :: restReversed ->
            Just
                (Tape Paused
                    { past = List.reverse restReversed
                    , current = previous
                    , future = current :: future
                    }
                )

        [] ->
            Nothing


goTo : Int -> Tape gameModel -> Tape gameModel
goTo tickIndex ((Tape _ { past, current, future }) as tape) =
    let
        allLoaded =
            past ++ [ current ] ++ future

        l =
            List.take tickIndex allLoaded

        r =
            List.drop tickIndex allLoaded
    in
    case r of
        head :: tail ->
            Tape Paused
                { past = l
                , current = head
                , future = tail
                }

        [] ->
            case List.reverse l of
                lastOfl :: rest ->
                    Tape Paused
                        { past = List.reverse rest
                        , current = lastOfl
                        , future = []
                        }

                [] ->
                    tape



-- VIEW


view : Tape gameModel -> Element Msg
view tape =
    row
        [ width fill
        , padding 14
        , spacing 14
        ]
        [ tapeButtons tape
        , slider tape
        ]


tapeButtons : Tape gameModel -> Element Msg
tapeButtons (Tape state { past, current, future }) =
    row []
        [ tapeButton PressedFastBackwardButton "⏮️"
        , tapeButton PressedGoToPreviousButton "◀️"
        , case state of
            Paused ->
                tapeButton PressedPlayButton "▶️"

            _ ->
                tapeButton PressedPauseButton "⏸️"
        , case state of
            Recording ->
                tapeButton PressedPauseButton "⏹"

            _ ->
                tapeButton PressedRecordButton "⏺️"
        , tapeButton PressedGoToNextButton "⏯️"
        , tapeButton PressedFastForwardButton "⏭️"
        ]


slider : Tape gameModel -> Element Msg
slider tape =
    el
        [ width fill
        , centerY
        ]
    <|
        Input.slider
            [ spacing 8
            , behindContent
                (el
                    [ width fill
                    , height (px 28)
                    , centerY
                    , Background.color Colors.inputBackground
                    , Border.rounded 4
                    ]
                    (timeSeparators tape)
                )
            ]
            { onChange = round >> SliderMovedTo
            , label = Input.labelHidden ""
            , min = 0
            , max = toFloat (totalSize tape) - 1
            , step = Just 1
            , value = toFloat (lengthOfPast tape)
            , thumb =
                Input.thumb
                    [ width (px 28)
                    , height (px 28)
                    , Border.rounded 4
                    , Border.width 0
                    , Border.color Colors.sliderThumb
                    , Background.color Colors.icon
                    ]
            }


timeSeparators : Tape gameModel -> Element Msg
timeSeparators (Tape _ { past, current, future }) =
    let
        start =
            past
                |> List.head
                |> Maybe.withDefault current
                |> Tuple.first
                |> .time

        end =
            future
                |> List.reverse
                |> List.head
                |> Maybe.withDefault current
                |> Tuple.first
                |> .time

        totalDuration =
            end - start

        intervall =
            1

        n =
            floor (totalDuration / intervall)

        separator i =
            let
                x =
                    toFloat i * intervall / totalDuration
            in
            line
                [ SA.x1 (String.fromFloat x)
                , SA.x2 (String.fromFloat x)
                , SA.y1 "0"
                , SA.y2 "0.005"
                , SA.strokeWidth "0.001"
                , SA.stroke "gray"
                ]
                []
    in
    el [ width fill, height fill ] <|
        html <|
            Svg.svg
                [ SA.viewBox "0 0 1 1"
                ]
                (List.range 1 n |> List.map separator)


tapeButton : Msg -> String -> Element Msg
tapeButton msg icon_ =
    Input.button [] { onPress = Just msg, label = text icon_ }


totalSize : Tape gameModel -> Int
totalSize (Tape _ { past, current, future }) =
    List.length past + 1 + List.length future


lengthOfPast : Tape gameModel -> Int
lengthOfPast (Tape _ { past }) =
    List.length past
