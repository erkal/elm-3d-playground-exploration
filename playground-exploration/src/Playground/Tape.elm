module Playground.Tape exposing
    ( Message(..)
    , Msg
    , Tape
    , currentAppModel
    , currentComputer
    , getCurrentFrameIndex
    , getFps
    , init
    , initNoTape
    , isNoTape
    , isRecording
    , updateConfigurations
    , updateOnAppMsg
    , updateOnTapeMsg
    , updateOnTick
    , view
    )

import Html exposing (Html, button, div, input, text)
import Html.Attributes as HA exposing (class, disabled, type_)
import Html.Events exposing (onClick)
import Playground.Computer as Computer exposing (Computer, Inputs)
import Playground.Configurations as Configurations
import Playground.Icons as Icons
import Tools.SelectList.SelectList as SelectList exposing (SelectList)


type Tape appModel
    = Tape State (SelectList ( Computer, appModel ))


type State
    = NoTape
    | Recording
    | Paused
    | Playing { tapeClock : Float }



--  INIT


initNoTape : Computer -> (Computer -> appModel) -> Tape appModel
initNoTape initialComputer initAppModel =
    Tape NoTape
        (SelectList.singleton ( initialComputer, initAppModel initialComputer ))


init : Computer -> (Computer -> appModel) -> Tape appModel
init initialComputer initAppModel =
    Tape Recording
        (SelectList.singleton ( initialComputer, initAppModel initialComputer ))



-- QUERY


currentComputer : Tape appModel -> Computer
currentComputer (Tape _ timeline) =
    timeline
        |> SelectList.getCurrent
        |> Tuple.first


currentAppModel : Tape appModel -> appModel
currentAppModel (Tape _ timeline) =
    timeline
        |> SelectList.getCurrent
        |> Tuple.second


isRecording : Tape appModel -> Bool
isRecording (Tape state _) =
    state == Recording


isNoTape : Tape appModel -> Bool
isNoTape (Tape state _) =
    state == NoTape


getCurrentFrameIndex : Tape appModel -> Int
getCurrentFrameIndex (Tape _ timeline) =
    SelectList.getCurrentIndex timeline


getFps : Tape appModel -> Maybe Int
getFps ((Tape state timeline) as tape) =
    timeline
        |> SelectList.getBeforeReversed
        |> List.drop 59
        |> List.head
        |> Maybe.map (Tuple.first >> .clock)
        |> Maybe.map (\t -> round (60 / ((currentComputer tape).clock - t)))


getTotalSize : Tape appModel -> Int
getTotalSize (Tape _ timeline) =
    SelectList.size timeline



-- UPDATE


type Message appMsg
    = Tick
    | Message appMsg


updateConfigurations : Configurations.Msg -> Tape appModel -> Tape appModel
updateConfigurations configurationsMsg (Tape state timeLine) =
    Tape state
        (timeLine |> SelectList.mapCurrent (Tuple.mapFirst (Computer.updateConfigurations configurationsMsg)))


updateOnTick : (Computer -> Message appMsg -> appModel -> appModel) -> Inputs -> Tape appModel -> Tape appModel
updateOnTick updateApp inputs ((Tape state timeLine) as tape) =
    case state of
        Paused ->
            if inputs.pointer.down then
                tape |> startRecording

            else
                tape

        Playing { tapeClock } ->
            Tape (Playing { tapeClock = tapeClock + inputs.dt }) timeLine
                |> (if tapeClock + inputs.dt > (currentComputer tape).clock then
                        goToNext >> Maybe.withDefault (Tape Paused timeLine)

                    else
                        identity
                   )

        Recording ->
            let
                ( lastComputer, lastAppModel ) =
                    SelectList.getCurrent timeLine

                newComputer =
                    lastComputer |> Computer.tick inputs
            in
            Tape Recording
                (timeLine
                    |> SelectList.add ( newComputer, lastAppModel |> updateApp newComputer Tick )
                    |> SelectList.removeAfter
                )

        NoTape ->
            let
                ( lastComputer, lastAppModel ) =
                    SelectList.getCurrent timeLine

                newComputer =
                    lastComputer |> Computer.tick inputs
            in
            Tape NoTape
                (timeLine
                    |> SelectList.setCurrent ( newComputer, lastAppModel |> updateApp newComputer Tick )
                )


updateOnAppMsg : (Computer -> Message appMsg -> appModel -> appModel) -> appMsg -> Tape appModel -> Tape appModel
updateOnAppMsg updateApp appMsg (Tape state timeLine) =
    Tape state
        (timeLine
            |> SelectList.mapCurrent
                (\( computer, appModel ) ->
                    ( computer
                    , appModel |> updateApp computer (Message appMsg)
                    )
                )
        )



-- Update on Tape Control Messages


type Msg
    = SliderMovedTo Int
    | PressedPauseButton
    | PressedRecordButton
    | PressedPlayButton


updateOnTapeMsg : Msg -> Tape appModel -> Tape appModel
updateOnTapeMsg msg tape =
    case msg of
        PressedPauseButton ->
            tape |> pause

        PressedRecordButton ->
            tape |> startRecording

        PressedPlayButton ->
            tape |> startPlaying

        SliderMovedTo tickIndex ->
            tape |> goTo tickIndex


pause : Tape appModel -> Tape appModel
pause (Tape _ timeLine) =
    Tape Paused
        timeLine


startRecording : Tape appModel -> Tape appModel
startRecording (Tape _ timeLine) =
    Tape Recording
        timeLine


startPlaying : Tape appModel -> Tape appModel
startPlaying ((Tape _ timeLine) as tape) =
    Tape (Playing { tapeClock = (currentComputer tape).clock })
        timeLine


goToNext : Tape appModel -> Maybe (Tape appModel)
goToNext (Tape state timeline) =
    if SelectList.isAtEnd timeline then
        Nothing

    else
        Just
            (Tape state
                (SelectList.goToNext timeline)
            )


goTo : Int -> Tape appModel -> Tape appModel
goTo tickIndex ((Tape _ timeline) as tape) =
    Tape Paused
        (timeline |> SelectList.goTo tickIndex)



-- VIEW


view : Tape appModel -> Html Msg
view ((Tape state _) as tape) =
    div
        [ class "w-full h-full px-4 border-[0.5px] border-white/20 bg-black/20"
        , class "flex flex-row items-center gap-4"
        , case state of
            NoTape ->
                class "hidden"

            _ ->
                class ""
        ]
        [ viewTapeButtons tape
        , viewSlider tape
        ]


viewSlider : Tape appModel -> Html Msg
viewSlider tape =
    input
        [ type_ "range"
        , HA.min (String.fromInt 0)
        , HA.max (String.fromInt (getTotalSize tape - 1))
        , HA.value (String.fromInt (getCurrentFrameIndex tape))
        , HA.step (String.fromInt 1)
        , Html.Events.onInput (String.toFloat >> Maybe.withDefault 42 >> round >> SliderMovedTo)
        ]
        []


viewTapeButtons : Tape appModel -> Html Msg
viewTapeButtons (Tape state timeline) =
    div
        [ class "flex flex-row gap-1" ]
        [ case state of
            NoTape ->
                text ""

            Recording ->
                recButton False PressedPauseButton "text-red-500 font-bold"

            Paused ->
                recButton False PressedRecordButton "text-white/60 hover:text-white/80 font-bold"

            Playing _ ->
                recButton True PressedRecordButton "text-white/60 hover:text-white/80 font-bold"
        , case state of
            NoTape ->
                text ""

            Recording ->
                tapeButtonWithIcon (SelectList.isAtEnd timeline) Icons.icons.play PressedPlayButton

            Paused ->
                tapeButtonWithIcon (SelectList.isAtEnd timeline) Icons.icons.play PressedPlayButton

            Playing _ ->
                tapeButtonWithIcon False Icons.icons.pause PressedPauseButton
        ]


recButton : Bool -> Msg -> String -> Html Msg
recButton isDisabled msg conditionalStyle =
    button
        [ class "p-2 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60"
        , class conditionalStyle
        , disabled isDisabled
        , onClick msg
        ]
        [ text "REC" ]


tapeButtonWithIcon : Bool -> Html msg -> msg -> Html msg
tapeButtonWithIcon isDisabled iconD msg =
    button
        [ class "p-2 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60"
        , disabled isDisabled
        , onClick msg
        ]
        [ div [ class "w-6 h-6 text-white/60 hover:text-white/80" ] [ iconD ] ]
