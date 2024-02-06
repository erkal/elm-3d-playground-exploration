module UndoRedo.Main exposing (main)

import Html exposing (Html, a, div, text, textarea)
import Html.Attributes exposing (checked, class, cols, href, rows, type_, value)
import Html.Events exposing (onCheck, onClick)
import Markdown
import Playground.Icons as Icon
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import UndoRedo.UndoList as UndoList exposing (UndoList)


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
    { undoListUsual : UndoList String
    , undoListSafe : UndoList String
    , lastSelectedInteractive : InteractiveID
    }


init : Computer -> Model
init computer =
    { undoListUsual = UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
    , undoListSafe = UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
    , lastSelectedInteractive = UndoRedoUsual
    }



-- UPDATE


type InteractiveID
    = UndoRedoUsual
    | UndoRedoSafe


type Msg
    = SelectedInteractive InteractiveID
    | PressedUndoButton InteractiveID
    | PressedRedoButton InteractiveID
    | EditedTextArea InteractiveID String


update : Computer -> Message Msg -> Model -> Model
update computer message model =
    case message of
        Tick ->
            if pressedKeyboardShortcutForUndo computer then
                case model.lastSelectedInteractive of
                    UndoRedoUsual ->
                        { model | undoListUsual = model.undoListUsual |> UndoList.undo }

                    UndoRedoSafe ->
                        { model | undoListSafe = model.undoListSafe |> UndoList.undo }

            else if pressedKeyboardShortcutForRedo computer then
                case model.lastSelectedInteractive of
                    UndoRedoUsual ->
                        { model | undoListUsual = model.undoListUsual |> UndoList.redo }

                    UndoRedoSafe ->
                        { model | undoListSafe = model.undoListSafe |> UndoList.redo }

            else
                model

        Message (SelectedInteractive interactiveID) ->
            { model | lastSelectedInteractive = interactiveID }

        Message (EditedTextArea interactiveID str) ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.new str }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.newSafe str }

        Message (PressedUndoButton interactiveID) ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.undo }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.undo }

        Message (PressedRedoButton interactiveID) ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.redo }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.redo }


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
        [ class "absolute w-full h-full"
        , class "bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-4xl p-12 sm:px-12 text-lg text-white"
            , class "flex flex-col gap-8"
            ]
            [ markdownBlock """
#  Resolving the "Great Undo-Redo Quandary" in Elm

[Source code of this page](https://github.com/erkal/elm-3d-playground-exploration/tree/main/pages/UndoRedo)

This post unfolds in two parts: The initial segment showcases the ease of crafting undo/redo functionality using Elm. If you have **already implemented undo/redo in Elm**, feel free to leap forward to the second part. Here, we confront a prevalent issue linked with undo/redo and offer a straightforward and efficient solution.

## Part 1: Implementing Basic Undo/Redo Functionality in Elm
Implementing undo and redo operations in Elm is surprisingly straightforward, thanks to its purity and persistent data structures. Here's how it's achieved using a simple data structure in [elm-community/undo-redo](https://package.elm-lang.org/packages/elm-community/undo-redo/latest/) package.

```elm
type alias UndoList state =
    { past : List state
    , present : state
    , future : List state
    }
```

As an example, let's consider the following `UndoList String`:
```elm
UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
```
Note that the list for the `past` is reversed for efficiency purposes. This represents a scenario where the user has typed "ABCDEF" and performed 'undo' twice.

As you click the undo and redo buttons below and edit text in the text area, you will notice that on the right side, the `UndoList` data structure is rendered as rows; starting with past states, followed by the present state (highlighted by a thick border), and ending with future states.


"""
            , div
                [ class "flex flex-col gap-8"
                , class "bg-white/10 p-4 rounded-lg"
                ]
                [ div [ class "font-bold" ] [ text "The usual undo/redo" ]
                , div [ class "p-2 flex flex-row gap-8" ]
                    [ viewButtons computer model UndoRedoUsual
                    , viewTextArea computer model UndoRedoUsual
                    , viewUndoListUsual computer model
                    ]
                ]
            , markdownBlock """
Editing within the text area creates a new undo item via the following function:

```elm
new : state -> UndoList state -> UndoList state
new state { past, present } =
    { past = present :: past
    , present = state
    , future = []
    }
```

Note that when entering a new state into UndoList, any existing future states are removed, similar to most applications with undo/redo functionality. This brings us to the second part of this post.

## Part 2: Confronting the Undo/Redo Quandary

In our digital lives, **we frequently encounter a general problem when using undo/redo features in various applications**. This issue arises, for example, when we need to retrieve something that has been previously deleted.

Consider the following scenario: We've deleted some text or an image but soon after realize it's still needed. Now, what do we typically do? **We often resort to performing multiple 'undo' actions until we retrieve the necessary information.** But this method can be nerve-wracking.

Why so? Here's the catch - Any accidental edits during this process could potentially wipe out our 'redo' options. This means if we're not careful, **we stand at risk of losing all redo's**, and this adds an unnecessary layer of stress.

So, the question arises: How do we address this issue? Is there a better way to handle it?

Initially, I believed that *undo trees* were the only viable solution. However, after reading [Resolving the Great Undo-Redo Quandary](https://github.com/zaboople/klonk/blob/404dc90559840684ad16c9ba22f9464622e675d3/TheGURQ.md), I became convinced otherwise. The simpler alternative presented in this resource effectively demonstrates its ease of use and efficiency.

This method ensures no state loss and is easy to implement in Elm.
We use the standard `UndoList` data structure with an additional function:

```elm
newSafe : state -> UndoList state -> UndoList state
newSafe state { past, present, future } =
    if List.isEmpty future then
        -- this case is handled the same way as in `new`
        { past = present :: past
        , present = state
        , future = []
        }

    else
        { past = present :: List.reverse future ++ present :: past
        , present = state
        , future = []
        }
```

Below is an interactive demonstration showing how it works.
"""
            , div
                [ class "flex flex-col gap-8"
                , class "bg-white/10 p-4 rounded-lg"
                ]
                [ div [ class "font-bold" ] [ text "The safe undo/redo" ]
                , div [ class "p-2 flex flex-row gap-8" ]
                    [ viewButtons computer model UndoRedoSafe
                    , viewTextArea computer model UndoRedoSafe
                    , viewUndoListSafe computer model
                    ]
                ]
            , markdownBlock """
Note that contrary to the resource referenced above, we **batch consecutive undos**. This approach simplifies the process and prevents the *exponential growth* [described here](https://github.com/zaboople/klonk/blob/404dc90559840684ad16c9ba22f9464622e675d3/TheGURQ.md#memory-space-usage).

In conclusion, adding undo/redo functionality to your Elm applications is surprisingly straightforward. But that's not all - if you already have undo/redo in place, making it safe is as simple as adding a few lines of code (writing the `newSafe` function described earlier and using it instead of  the function `new`).
"""
            ]
        ]


markdownBlock : String -> Html msg
markdownBlock str =
    Markdown.toHtml
        [ class "prose lg:prose-xl prose-invert"
        , class "select-text"
        ]
        str


button : Msg -> String -> Html Msg -> Html Msg
button msg title icon =
    div
        [ class "w-12 h-12 p-2"
        , class "rounded-full shadow-lg"
        , class "cursor-pointer"
        , class "bg-black/60 text-white/60"
        , class "hover:bg-white/60 hover:text-white"
        , class "transition-all"
        , onClick msg
        ]
        [ icon ]


viewButtons : Computer -> Model -> InteractiveID -> Html Msg
viewButtons computer model interactiveID =
    div [ class "flex-none flex flex-row gap-2" ]
        [ button (PressedUndoButton interactiveID) "Undo" Icon.icons.undo
        , button (PressedRedoButton interactiveID) "Redo" Icon.icons.redo
        ]


viewTextArea : Computer -> Model -> InteractiveID -> Html Msg
viewTextArea computer model interactiveID =
    textarea
        [ class "flex-1 h-28 p-4 rounded-lg overflow-y-scroll"
        , class "text-black bg-white"
        , class "font-mono"
        , Html.Events.onInput (EditedTextArea interactiveID)
        , Html.Events.onFocus (SelectedInteractive interactiveID)
        , value
            (case interactiveID of
                UndoRedoUsual ->
                    model.undoListUsual.present

                UndoRedoSafe ->
                    model.undoListSafe.present
            )
        ]
        [ Html.text "todo" ]


viewUndoListUsual : Computer -> Model -> Html Msg
viewUndoListUsual computer model =
    div [ class "flex-1 flex flex-col" ]
        [ div [ class "flex flex-col" ] (model.undoListUsual.past |> List.reverse |> List.map viewUndoItem)
        , div [ class "flex flex-col rounded-lg ring-8 ring-white z-10" ] [ model.undoListUsual.present |> viewUndoItem ]
        , div [ class "flex flex-col" ] (model.undoListUsual.future |> List.map viewUndoItem)
        ]


viewUndoListSafe : Computer -> Model -> Html Msg
viewUndoListSafe computer model =
    div [ class "flex-1 flex flex-col" ]
        [ div [ class "flex flex-col" ] (model.undoListSafe.past |> List.reverse |> List.map viewUndoItem)
        , div [ class "flex flex-col rounded-lg ring-8 ring-white z-10" ] [ model.undoListSafe.present |> viewUndoItem ]
        , div [ class "flex flex-col" ] (model.undoListSafe.future |> List.map viewUndoItem)
        ]


viewUndoItem : String -> Html Msg
viewUndoItem str =
    div
        [ class "px-2 py-1 my-px rounded-lg"
        , class "bg-black/90 text-white/90"
        , class "font-mono"
        ]
        [ text str ]
