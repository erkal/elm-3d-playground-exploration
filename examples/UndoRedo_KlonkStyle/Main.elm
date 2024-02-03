module UndoRedo_KlonkStyle.Main exposing (main)

import Html exposing (Html, a, div, text, textarea)
import Html.Attributes exposing (checked, class, cols, href, rows, type_, value)
import Html.Events exposing (onCheck, onClick)
import Playground.Icons as Icon
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import UndoRedo_KlonkStyle.UndoList as UndoList exposing (UndoList)


main : Playground Model Msg
main =
    Playground.simpleApplication
        { initialConfigurations = []
        , init = init
        , update = update
        , view = view
        , hasTape = False
        }


type alias Model =
    { klonkModeIsOn : Bool
    , undoList : UndoList String
    }


init : Computer -> Model
init computer =
    { klonkModeIsOn = True
    , undoList = UndoList [ "asd", "as", "a" ] "asdf" [ "asdfg", "asdfgh" ]
    }


type Msg
    = PressedUndoButton
    | PressedRedoButton
    | CheckboxForKlonkModeChanged Bool
    | EditedTextArea String


update : Computer -> Message Msg -> Model -> Model
update computer message model =
    case message of
        Tick ->
            if pressedKeyboardShortcutForUndo computer then
                { model | undoList = model.undoList |> UndoList.undo }

            else if pressedKeyboardShortcutForRedo computer then
                { model | undoList = model.undoList |> UndoList.redo }

            else
                model

        Message (EditedTextArea str) ->
            { model
                | undoList =
                    let
                        modifier =
                            if model.klonkModeIsOn then
                                UndoList.newSafe

                            else
                                UndoList.new
                    in
                    model.undoList |> modifier str
            }

        Message PressedUndoButton ->
            { model | undoList = model.undoList |> UndoList.undo }

        Message PressedRedoButton ->
            { model | undoList = model.undoList |> UndoList.redo }

        Message (CheckboxForKlonkModeChanged isChecked) ->
            { model | klonkModeIsOn = isChecked }


pressedKeyboardShortcutForUndo : Computer -> Bool
pressedKeyboardShortcutForUndo computer =
    List.all identity
        [ computer.keyboard.control
        , not computer.keyboard.shift
        , List.member "KeyZ" computer.keyboard.downs
        ]


pressedKeyboardShortcutForRedo : Computer -> Bool
pressedKeyboardShortcutForRedo computer =
    List.all identity
        [ computer.keyboard.control
        , computer.keyboard.shift
        , List.member "KeyZ" computer.keyboard.downs
        ]



-- VIEW


view : Computer -> Model -> Html Msg
view computer model =
    div
        [ class "absolute w-full h-full z-10"
        , class "bg-gradient-to-br from-blue-400 via-lightBlue-500 to-cyan-700"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-5xl p-12 sm:px-12 text-lg text-white"
            , class "flex flex-col gap-8"
            ]
            [ a
                [ class "hover:text-black underline"
                , href "https://github.com/zaboople/klonk/blob/404dc90559840684ad16c9ba22f9464622e675d3/TheGURQ.md"
                ]
                [ text "Resolving the Great Undo-Redo Quandary" ]
            , viewButtons computer model
            , checkboxForKlonk computer model
            , viewTextArea computer model
            , viewUndoList computer model
            ]
        ]


button : Msg -> String -> Html Msg -> Html Msg
button msg title icon =
    div
        [ class "w-12 h-12"
        , class "rounded shadow-lg"
        , class "font-bold text-2xl"
        , class "cursor-pointer"
        , class "flex items-center justify-center"
        , class "bg-white text-blue-400"
        , class "hover:bg-blue-400 hover:text-white"
        , class "transition-all"
        , onClick msg
        ]
        [ icon ]


viewButtons : Computer -> Model -> Html Msg
viewButtons computer model =
    div
        [ class "flex flex-col justify-center gap-8" ]
        [ div [ class "flex gap-2" ]
            [ button PressedUndoButton "Undo" Icon.icons.undo
            , button PressedRedoButton "Redo" Icon.icons.redo
            ]
        ]


viewTextArea : Computer -> Model -> Html Msg
viewTextArea computer model =
    textarea
        [ class "w-full h-28 p-2 overflow-y-scroll text-white/60 bg-black/40"
        , class "font-mono"
        , rows 150
        , cols 10
        , Html.Events.onInput EditedTextArea
        , value model.undoList.present
        ]
        [ Html.text "todo" ]


checkboxForKlonk : Computer -> Model -> Html Msg
checkboxForKlonk computer model =
    div [ class "flex items-center flex-row gap-2 mr-4" ]
        [ text "Klonk mode:"
        , Html.input
            [ class "h-8 w-8 cursor-pointer"
            , type_ "checkbox"
            , onCheck CheckboxForKlonkModeChanged
            , checked model.klonkModeIsOn
            ]
            []
        ]


viewUndoList : Computer -> Model -> Html Msg
viewUndoList computer model =
    div [ class "flex flex-col gap-0" ]
        [ div [ class "flex flex-col" ] (model.undoList.pastReversed |> List.reverse |> List.map viewUndoItem)
        , div [ class "flex flex-col ring-4 ring-black z-10" ] [ model.undoList.present |> viewUndoItem ]
        , div [ class "flex flex-col" ] (model.undoList.future |> List.map viewUndoItem)
        ]


viewUndoItem : String -> Html Msg
viewUndoItem str =
    div
        [ class "h-8 p-1 bg-white text-blue-400"
        , class "font-mono"
        ]
        [ text str ]
