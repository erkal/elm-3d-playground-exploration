module UndoRedo.Main exposing (main)

import Html exposing (Html, div, text, textarea)
import Html.Attributes exposing (class, value)
import Html.Events exposing (onClick)
import Markdown
import Playground.Icons as Icons
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
    , undoListSafeConcise : UndoList String
    , lastSelectedInteractive : InteractiveID
    }


init : Computer -> Model
init computer =
    { undoListUsual = UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
    , undoListSafe = UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
    , undoListSafeConcise = UndoList [ "ABC", "AB", "A" ] "ABCD" [ "ABCDE", "ABCDEF" ]
    , lastSelectedInteractive = UndoRedoUsual
    }



-- UPDATE


type InteractiveID
    = UndoRedoUsual
    | UndoRedoSafe
    | UndoRedoSafeConcise


type Msg
    = SelectedInteractive InteractiveID
    | PressedUndoButton InteractiveID
    | PressedRedoButton InteractiveID
    | EditedTextArea InteractiveID String


update : Computer -> Message Msg -> Model -> Model
update computer message model =
    case message of
        Tick ->
            model
                |> handleKeyboardShortcutsForUndoRedo computer

        Message msg ->
            model
                |> handleSelectingInteractive msg
                |> handleEditingTextArea msg
                |> handleUndoRedoButtons msg


handleKeyboardShortcutsForUndoRedo : Computer -> Model -> Model
handleKeyboardShortcutsForUndoRedo computer model =
    if pressedKeyboardShortcutForUndo computer then
        case model.lastSelectedInteractive of
            UndoRedoUsual ->
                { model | undoListUsual = model.undoListUsual |> UndoList.undo }

            UndoRedoSafe ->
                { model | undoListSafe = model.undoListSafe |> UndoList.undo }

            UndoRedoSafeConcise ->
                { model | undoListSafeConcise = model.undoListSafeConcise |> UndoList.undo }

    else if pressedKeyboardShortcutForRedo computer then
        case model.lastSelectedInteractive of
            UndoRedoUsual ->
                { model | undoListUsual = model.undoListUsual |> UndoList.redo }

            UndoRedoSafe ->
                { model | undoListSafe = model.undoListSafe |> UndoList.redo }

            UndoRedoSafeConcise ->
                { model | undoListSafeConcise = model.undoListSafeConcise |> UndoList.redo }

    else
        model


handleSelectingInteractive : Msg -> Model -> Model
handleSelectingInteractive msg model =
    case msg of
        SelectedInteractive interactiveID ->
            { model | lastSelectedInteractive = interactiveID }

        _ ->
            model


handleEditingTextArea : Msg -> Model -> Model
handleEditingTextArea msg model =
    case msg of
        EditedTextArea interactiveID str ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.new str }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.newSafe str }

                UndoRedoSafeConcise ->
                    { model | undoListSafeConcise = model.undoListSafeConcise |> UndoList.newSafeConcise str }

        _ ->
            model


handleUndoRedoButtons : Msg -> Model -> Model
handleUndoRedoButtons msg model =
    case msg of
        PressedUndoButton interactiveID ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.undo }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.undo }

                UndoRedoSafeConcise ->
                    { model | undoListSafeConcise = model.undoListSafeConcise |> UndoList.undo }

        PressedRedoButton interactiveID ->
            case interactiveID of
                UndoRedoUsual ->
                    { model | undoListUsual = model.undoListUsual |> UndoList.redo }

                UndoRedoSafe ->
                    { model | undoListSafe = model.undoListSafe |> UndoList.redo }

                UndoRedoSafeConcise ->
                    { model | undoListSafeConcise = model.undoListSafeConcise |> UndoList.redo }

        _ ->
            model


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
        , class "bg-[#303030]"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-5xl p-12 sm:px-12"
            , class "flex flex-col gap-0"
            ]
            [ div
                [ class "flex justify-end items-center mb-2 border-b border-gray-200 pb-4" ]
                [ homeButton
                , twitterLink
                , githubLink
                ]
            , markdownBlock """
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
{ past = [ "ABC", "AB", "A" ]
, present = "ABCD"
, future = [ "ABCDE", "ABCDEF" ]
}
```
Note that the list for the `past` is reversed for efficiency purposes. This represents a scenario where the user has typed "ABCDEF" and performed 'undo' twice.

As you click the undo and redo buttons below and edit text in the text area, you will notice that the `UndoList` data structure is rendered as rows; starting with past states, followed by the present state (highlighted by a thick border), and ending with future states.
"""
            , viewUndoListInteractive computer model UndoRedoUsual
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

The concept behind this alternative is astonishingly straightforward. If you make edits following a series of 'undo' actions, the future - that is, your 'redo' options - are effectively added to your past. Additionally, your previous 'undo' actions also become part of your past.

This ensures that **no action is ever truly lost**; everything becomes part of a recoverable history. This allows for more flexibility and less stress.

Below is an interactive demonstration showing how it works.
"""
            , viewUndoListInteractive computer model UndoRedoSafe
            , markdownBlock """
Remarkably, this method is quite simple to implement in Elm. It only requires a minor adjustment to the standard undo/redo implementation. The sole modification we made was **substituting the `new` function with the following `newSafe` function**.

```elm
newSafe : state -> UndoList state -> UndoList state
newSafe state { past, present, future } =
    case List.reverse future of
        [] ->
            { past = present :: past
            , present = state
            , future = []
            }

        head :: tail ->
            { past = present :: List.reverse tail ++ head :: tail ++ present :: past
            , present = state
            , future = []
            }
```

### Making It More Concise

Note that each time we edit following an 'undo' action, the `UndoList` expands by the length of the future list. This might not be ideal because it could lead to *exponential growth*, as [discussed here](https://github.com/zaboople/klonk/blob/404dc90559840684ad16c9ba22f9464622e675d3/TheGURQ.md#memory-space-usage).

To prevent this from happening, you can **collapse consecutive undos** into a single step:
"""
            , viewUndoListInteractive computer model UndoRedoSafeConcise
            , markdownBlock """
Here is the function that accomplishes this:
```elm
newSafeConcise : state -> UndoList state -> UndoList state
newSafeConcise state { past, present, future } =
    case future of
        [] ->
            { past = present :: past
            , present = state
            , future = []
            }

        _ ->
            { past = present :: List.reverse future ++ present :: past
            , present = state
            , future = []
            }
```

In conclusion, integrating undo/redo functionality into your Elm applications is surprisingly simple. But that's not all - if you already have undo/redo implemented, enhancing it to be safe is as straightforward as adding a few lines of code.
"""
            ]
        ]


header : InteractiveID -> String
header interactiveID =
    case interactiveID of
        UndoRedoUsual ->
            "#### The **usual** undo/redo"

        UndoRedoSafe ->
            "#### The **safe** undo/redo"

        UndoRedoSafeConcise ->
            "#### The **concise** safe undo/redo"


bgColorForInteractive : InteractiveID -> String
bgColorForInteractive interactiveID =
    case interactiveID of
        UndoRedoUsual ->
            "bg-pink-400/40"

        UndoRedoSafe ->
            "bg-green-400/40"

        UndoRedoSafeConcise ->
            "bg-blue-400/40"


viewUndoListInteractive : Computer -> Model -> InteractiveID -> Html Msg
viewUndoListInteractive computer model interactiveID =
    div
        [ class "flex flex-col gap-8"
        , class "my-8 p-8 rounded-lg"
        , class (bgColorForInteractive interactiveID)
        , class "shadow-lg"
        ]
        [ markdownBlock (header interactiveID)
        , div [ class "p-2 flex flex-col sm:flex-row gap-8" ]
            [ div [ class "p-2 flex flex-col items-center gap-8" ]
                [ viewButtons computer model interactiveID
                , viewTextArea computer model interactiveID
                ]
            , viewUndoList computer model interactiveID
            ]
        ]


markdownBlock : String -> Html msg
markdownBlock =
    Markdown.toHtml
        [ class "prose prose-gruvbox lg:prose-xl max-w-none"
        , class "select-text"
        ]


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
        [ button (PressedUndoButton interactiveID) "Undo" Icons.icons.undo
        , button (PressedRedoButton interactiveID) "Redo" Icons.icons.redo
        ]


viewTextArea : Computer -> Model -> InteractiveID -> Html Msg
viewTextArea computer model interactiveID =
    textarea
        [ class "w-full p-4 rounded-lg overflow-y-scroll"
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

                UndoRedoSafeConcise ->
                    model.undoListSafeConcise.present
            )
        ]
        []


viewUndoList : Computer -> Model -> InteractiveID -> Html Msg
viewUndoList computer model interactiveID =
    let
        undoList =
            case interactiveID of
                UndoRedoUsual ->
                    model.undoListUsual

                UndoRedoSafe ->
                    model.undoListSafe

                UndoRedoSafeConcise ->
                    model.undoListSafeConcise
    in
    div [ class "flex-1 flex flex-col" ]
        [ div [ class "flex flex-col" ] (undoList.past |> List.reverse |> List.map viewUndoItem)
        , div [ class "flex flex-col rounded-lg ring-4 ring-white z-10" ] [ undoList.present |> viewUndoItem ]
        , div [ class "flex flex-col" ] (undoList.future |> List.map viewUndoItem)
        ]


viewUndoItem : String -> Html Msg
viewUndoItem str =
    div
        [ class "px-2 py-1 my-px rounded-lg"
        , class "bg-black/90 text-white/90"
        , class "font-mono"
        ]
        [ text str ]
