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
import Element.Events exposing (onClick)
import Element.Font as Font
import Element.Input as Input
import Playground3d.Colors as Colors
import Playground3d.Computer as Computer exposing (Computer)
import Playground3d.Icons as Icons
import Round
import Svg exposing (Svg, line)
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
        , paddingXY 14 0
        , spacing 14
        , centerY
        ]
        [ tapeButtons tape
        , slider tape
        , clock tape
        ]


clock : Tape gameModel -> Element Msg
clock tape =
    el
        [ width (px 64)
        , Font.size 16
        , Font.alignRight
        , Font.color Colors.lightText
        , Font.family [ Font.monospace ]
        ]
        (text
            ((currentComputer tape).time |> Round.round 3)
        )


tapeButtons : Tape gameModel -> Element Msg
tapeButtons (Tape state { past, current, future }) =
    row
        []
        [ el [ width (px 28) ] <|
            case state of
                Recording ->
                    tapeButtonWithIcon Icons.icons.record PressedPauseButton Colors.red

                Paused ->
                    tapeButtonWithIcon Icons.icons.record PressedRecordButton Colors.gray

                Playing _ ->
                    none
        , el [ width (px 28) ] <|
            case state of
                Recording ->
                    Input.button []
                        { onPress = Just PressedPauseButton
                        , label =
                            el
                                [ padding 3
                                , Font.color Colors.red
                                , Font.size 10
                                , Font.bold
                                , Border.color Colors.red
                                , Border.width 1
                                , Border.rounded 4
                                ]
                                (text "REC")
                        }

                Paused ->
                    if List.isEmpty future then
                        none

                    else
                        tapeButtonWithIcon Icons.icons.play PressedPlayButton Colors.gray

                _ ->
                    tapeButtonWithIcon Icons.icons.pause PressedPauseButton Colors.gray
        ]


slider : Tape gameModel -> Element Msg
slider tape =
    el
        [ width fill
        , centerY
        ]
    <|
        Input.slider
            [ behindContent
                (el
                    [ width fill
                    , height (px 4)
                    , centerY
                    , Background.color Colors.inputBackground
                    , clipY
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
                    [ width (px 12)
                    , height (px 12)
                    , Border.rounded 6
                    , Background.color Colors.red
                    ]
            }


timeSeparators : Tape gameModel -> Element Msg
timeSeparators ((Tape _ { past, current, future }) as tape) =
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

        interval =
            1

        n =
            floor (totalDuration / interval)

        separator i =
            let
                x =
                    toFloat i * interval / totalDuration
            in
            line
                [ SA.x1 (String.fromFloat x)
                , SA.x2 (String.fromFloat x)
                , SA.y1 "0"
                , SA.y2 "0.02"
                , SA.strokeWidth "0.001"
                , SA.stroke "darkGray"
                ]
                []

        value =
            lengthOfPast tape

        max =
            totalSize tape - 1

        redRectangle =
            Svg.rect
                [ SA.width (String.fromFloat (toFloat value / toFloat max))
                , SA.height "0.2"
                , SA.fill "rgb(255, 60, 0)"
                ]
                []
    in
    el [ width fill ] <|
        html <|
            Svg.svg
                [ SA.viewBox "0 0 1 1"
                ]
                (redRectangle
                    :: (List.range 1 n |> List.map separator)
                )


tapeButtonWithIcon : String -> msg -> Color -> Element msg
tapeButtonWithIcon iconD msg color =
    Input.button []
        { onPress = Just msg
        , label = html (Icons.draw 20 color iconD)
        }


totalSize : Tape gameModel -> Int
totalSize (Tape _ { past, current, future }) =
    List.length past + 1 + List.length future


lengthOfPast : Tape gameModel -> Int
lengthOfPast (Tape _ { past }) =
    List.length past
