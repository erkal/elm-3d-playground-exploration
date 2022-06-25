module Playground.Tape exposing
    ( Msg
    , Tape
    , currentComputer
    , currentGameModel
    , init
    , tick
    , update
    , updateConfigurations
    , updateCurrentGameModelWithEditorMsg
    , view
    )

import Color exposing (Color, lightGray, red)
import Html exposing (Html, button, div, input, text)
import Html.Attributes as HA exposing (class, id, name, type_)
import Html.Events exposing (onClick)
import Playground.Computer as Computer exposing (Computer, Inputs)
import Playground.Configurations as Configurations
import Playground.Icons as Icons
import Round


type Tape gameModel
    = Tape
        State
        { pastReversed : List ( Computer, gameModel )
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


updateConfigurations : Configurations.Msg -> Tape gameModel -> Tape gameModel
updateConfigurations configurationsMsg (Tape state pastCurrentFuture) =
    Tape state
        { pastCurrentFuture
            | current =
                pastCurrentFuture.current
                    |> Tuple.mapFirst (Computer.updateConfigurations configurationsMsg)
        }


tick : (Computer -> gameModel -> gameModel) -> Inputs -> Tape gameModel -> Tape gameModel
tick updateGameModel inputs ((Tape state pastCurrentFuture) as tape) =
    case state of
        Paused ->
            tape

        Playing { tapeClock } ->
            Tape (Playing { tapeClock = tapeClock + inputs.dt }) pastCurrentFuture
                |> (if tapeClock + inputs.dt > (currentComputer tape).clock then
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
                    -- Here, we trick the computer.clock.
                    -- It ticks only when recording (This is subject to change)
                    { inputs | clock = lastComputer.clock + inputs.dt }
                        |> Computer.assignConfigurations lastComputer.configurations

                newGameModel =
                    lastGameModel |> updateGameModel newComputer
            in
            Tape
                Recording
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
    Tape Recording pastCurrentFuture


startPlaying : Tape gameModel -> Tape gameModel
startPlaying ((Tape _ pastCurrentFuture) as tape) =
    Tape
        (Playing { tapeClock = (currentComputer tape).clock })
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


view : Tape gameModel -> Html Msg
view tape =
    div []
        [ Html.text "HELLO! I AM TAPE"
        , viewSlider tape
        , viewTapeButtons tape
        , viewFpsMeter tape
        , viewClock tape
        ]


viewSlider : Tape gameModel -> Html Msg
viewSlider tape =
    div []
        [ input
            [ type_ "range"
            , HA.min (String.fromInt 0)
            , HA.max (String.fromInt (totalSize tape - 1))
            , HA.value (String.fromInt (lengthOfPast tape))
            , HA.step (String.fromInt 1)
            , Html.Events.onInput (String.toFloat >> Maybe.withDefault 42 >> round >> SliderMovedTo)
            ]
            []
        ]


viewTapeButtons : Tape gameModel -> Html Msg
viewTapeButtons (Tape state { pastReversed, current, future }) =
    div
        []
        [ case state of
            Recording ->
                recButton PressedPauseButton red

            Paused ->
                recButton PressedRecordButton lightGray

            Playing _ ->
                div [] []
        , case state of
            Recording ->
                div [] []

            Paused ->
                if List.isEmpty future then
                    div [] []

                else
                    tapeButtonWithIcon Icons.icons.play PressedPlayButton

            _ ->
                tapeButtonWithIcon Icons.icons.pause PressedPauseButton
        ]


recButton : Msg -> Color -> Html Msg
recButton msg color =
    button [ onClick msg ]
        [ text "REC" ]


tapeButtonWithIcon : String -> msg -> Html msg
tapeButtonWithIcon iconD msg =
    button [ onClick msg ]
        [ Icons.draw iconD ]


fpsMeter : Tape gameModel -> Maybe Int
fpsMeter ((Tape state { pastReversed }) as tape) =
    pastReversed
        |> List.drop 59
        |> List.head
        |> Maybe.map (Tuple.first >> .clock)
        |> Maybe.map (\t -> round (60 / ((currentComputer tape).clock - t)))


viewFpsMeter : Tape gameModel -> Html Msg
viewFpsMeter tape =
    div [] <|
        case fpsMeter tape of
            Nothing ->
                [ text "... Fps" ]

            Just fps ->
                [ text (String.fromInt fps ++ " Fps") ]


viewClock : Tape gameModel -> Html Msg
viewClock ((Tape state _) as tape) =
    let
        conditionalStyling =
            case state of
                Recording ->
                    "text-white"

                _ ->
                    "text-black"
    in
    div
        [ class conditionalStyling ]
        [ text
            ((currentComputer tape).clock |> Round.round 3)
        ]


totalSize : Tape gameModel -> Int
totalSize (Tape _ { pastReversed, current, future }) =
    List.length pastReversed + 1 + List.length future


lengthOfPast : Tape gameModel -> Int
lengthOfPast (Tape _ { pastReversed }) =
    List.length pastReversed
