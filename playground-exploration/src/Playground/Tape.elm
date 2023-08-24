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
    , isPaused
    , isPlaying
    , isRecording
    , startRecording
    , updateConfigurations
    , updateOnAppMsg
    , updateOnTapeMsg
    , updateOnTick
    , view
    )

import Html exposing (Attribute, Html, button, div, input, text)
import Html.Attributes as HA exposing (class, disabled, type_)
import Html.Events exposing (onClick)
import Playground.Computer as Computer exposing (Computer, Inputs)
import Playground.Configurations as Configurations
import Playground.Icons as Icons
import Tools.HtmlHelpers.HtmlHelpers exposing (classIf, hiddenIf)
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


isPaused : Tape appModel -> Bool
isPaused (Tape state _) =
    state == Paused


isPlaying : Tape appModel -> Bool
isPlaying (Tape state _) =
    case state of
        Playing _ ->
            True

        _ ->
            False


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


updateOnTick : (Computer -> Message appMsg -> appModel -> ( appModel, Cmd appMsg )) -> Inputs -> Tape appModel -> ( Tape appModel, Cmd appMsg )
updateOnTick updateApp inputs ((Tape state timeLine) as tape) =
    case state of
        Paused ->
            ( tape, Cmd.none )

        Playing { tapeClock } ->
            ( Tape (Playing { tapeClock = tapeClock + inputs.dt }) timeLine
                |> (if tapeClock + inputs.dt > (currentComputer tape).clock then
                        goToNext >> Maybe.withDefault (Tape Paused timeLine)

                    else
                        identity
                   )
            , Cmd.none
            )

        Recording ->
            let
                ( lastComputer, lastAppModel ) =
                    SelectList.getCurrent timeLine

                newComputer =
                    lastComputer |> Computer.tick inputs

                ( newAppModel, cmd ) =
                    lastAppModel |> updateApp newComputer Tick
            in
            ( Tape Recording
                (timeLine
                    |> SelectList.add ( newComputer, newAppModel )
                    |> SelectList.removeAfter
                )
            , cmd
            )

        NoTape ->
            let
                ( lastComputer, lastAppModel ) =
                    SelectList.getCurrent timeLine

                newComputer =
                    lastComputer |> Computer.tick inputs

                ( newAppModel, cmd ) =
                    lastAppModel |> updateApp newComputer Tick
            in
            ( Tape NoTape
                (timeLine
                    |> SelectList.setCurrent ( newComputer, newAppModel )
                )
            , cmd
            )


updateOnAppMsg : (Computer -> Message appMsg -> appModel -> ( appModel, Cmd appMsg )) -> appMsg -> Tape appModel -> ( Tape appModel, Cmd appMsg )
updateOnAppMsg updateApp appMsg (Tape state timeLine) =
    let
        ( computer, appModel ) =
            SelectList.getCurrent timeLine

        ( newAppModel, cmd ) =
            appModel |> updateApp computer (Message appMsg)
    in
    ( Tape state (timeLine |> SelectList.setCurrent ( computer, newAppModel ))
    , cmd
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
    Tape Paused timeLine


startRecording : Tape appModel -> Tape appModel
startRecording (Tape _ timeLine) =
    Tape Recording timeLine


startPlaying : Tape appModel -> Tape appModel
startPlaying ((Tape _ timeLine) as tape) =
    Tape (Playing { tapeClock = (currentComputer tape).clock }) timeLine


goToNext : Tape appModel -> Maybe (Tape appModel)
goToNext (Tape state timeline) =
    if SelectList.isAtEnd timeline then
        Nothing

    else
        Just
            (Tape state (SelectList.goToNext timeline))


goTo : Int -> Tape appModel -> Tape appModel
goTo tickIndex ((Tape _ timeline) as tape) =
    Tape Paused (timeline |> SelectList.goTo tickIndex)



-- VIEW


view : Tape appModel -> Html Msg
view tape =
    div
        [ class "w-full h-full px-2 rounded-tl-lg"
        , class "flex flex-row items-center gap-4"
        , hiddenIf (isNoTape tape)
        ]
        [ div
            [ class "flex flex-row items-center gap-2"
            , hiddenIf (isRecording tape)
            ]
            [ playPauseButton tape
            , viewSlider tape
            ]
        , tapeToggleButton tape
        ]


viewSlider : Tape appModel -> Html Msg
viewSlider tape =
    div
        [ class "w-[220px]"
        , class "flex flex-row items-center"
        ]
        [ input
            [ type_ "range"
            , HA.min (String.fromInt 0)
            , HA.max (String.fromInt (getTotalSize tape - 1))
            , HA.value (String.fromInt (getCurrentFrameIndex tape))
            , HA.step (String.fromInt 1)
            , Html.Events.onInput (String.toFloat >> Maybe.withDefault 42 >> round >> SliderMovedTo)
            ]
            []
        ]


tapeToggleButton : Tape appModel -> Html Msg
tapeToggleButton (Tape state timeline) =
    let
        recButton : Msg -> Html Msg -> Html Msg
        recButton msg icon =
            button
                [ class "w-8 h-8"
                , class "text-white/60 hover:text-white/80"
                , onClick msg
                ]
                [ icon ]
    in
    case state of
        NoTape ->
            text ""

        Recording ->
            recButton PressedPauseButton Icons.icons.tape

        Paused ->
            recButton PressedRecordButton Icons.icons.cross

        Playing _ ->
            recButton PressedRecordButton Icons.icons.cross


playPauseButton : Tape appModel -> Html Msg
playPauseButton (Tape state timeline) =
    let
        tapeButtonWithIcon : Bool -> Html msg -> msg -> Html msg
        tapeButtonWithIcon isDisabled icon msg =
            button
                [ class "p-2 bg-black/60 hover:bg-black/80 active:bg-black disabled:opacity-30 disabled:bg-black/60 rounded-lg"
                , disabled isDisabled
                , onClick msg
                ]
                [ div [ class "w-6 h-6 text-white/60 hover:text-white/80" ] [ icon ] ]
    in
    case state of
        NoTape ->
            text ""

        Recording ->
            text ""

        Paused ->
            tapeButtonWithIcon (SelectList.isAtEnd timeline) Icons.icons.play PressedPlayButton

        Playing _ ->
            tapeButtonWithIcon False Icons.icons.pause PressedPauseButton
