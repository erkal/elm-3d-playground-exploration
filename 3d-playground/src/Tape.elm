module Tape exposing
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

import Computer exposing (Computer)
import Html exposing (Html, button, div, input, text)
import Html.Attributes as HA exposing (style, type_)
import Html.Events exposing (onClick, onInput)


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


updateCurrentGameModelWithEditorMsg : (Computer -> levelEditorMsg -> gameModel -> gameModel) -> levelEditorMsg -> Tape gameModel -> Tape gameModel
updateCurrentGameModelWithEditorMsg updateFromEditor levelEditorMsg (Tape state ({ current } as pastCurrentFuture)) =
    Tape state
        { pastCurrentFuture | current = current |> Tuple.mapSecond (updateFromEditor (Tuple.first current) levelEditorMsg) }


updateCurrentComputer : Computer.Msg -> Tape gameModel -> Tape gameModel
updateCurrentComputer computerMsg (Tape state pastCurrentFuture) =
    Tape state
        { pastCurrentFuture | current = pastCurrentFuture.current |> Tuple.mapFirst (Computer.update computerMsg) }


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


view : Tape gameModel -> Html Msg
view tape =
    div
        [ style "position" "absolute"
        , style "left" "360px"
        , style "width" "360px"
        ]
        [ tapeButtons tape
        , slider tape
        ]


tapeButtons : Tape gameModel -> Html Msg
tapeButtons (Tape state { past, current, future }) =
    div []
        [ tapeButton PressedFastBackwardButton "FB"
        , tapeButton PressedGoToPreviousButton "SB"
        , case state of
            Paused ->
                tapeButton PressedPlayButton "Play"

            _ ->
                tapeButton PressedPauseButton "Pause"
        , case state of
            Recording ->
                tapeButton PressedPauseButton "sREC"

            _ ->
                tapeButton PressedRecordButton "REC"
        , tapeButton PressedGoToNextButton "SF"
        , tapeButton PressedFastForwardButton "FF"
        ]


slider : Tape gameModel -> Html Msg
slider tape =
    input
        [ style "position" "absolute"
        , type_ "range"
        , style "width" "100%"
        , HA.min "0"
        , HA.max (String.fromInt (totalSize tape - 1))
        , HA.value (String.fromInt (lengthOfPast tape))
        , onInput (String.toInt >> Maybe.withDefault 0 >> SliderMovedTo)
        ]
        []


tapeButton : Msg -> String -> Html Msg
tapeButton msg icon_ =
    button
        [ style "display" "inline-block"
        , style "width" "40px"
        , style "height" "40px"
        , style "margin" "10px"
        , style "font-size" "20px"
        , onClick msg
        ]
        [ text icon_
        ]


totalSize : Tape gameModel -> Int
totalSize (Tape _ { past, current, future }) =
    List.length past + 1 + List.length future


lengthOfPast : Tape gameModel -> Int
lengthOfPast (Tape _ { past }) =
    List.length past
