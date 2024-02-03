module UndoRedo_KlonkStyle.UndoList exposing
    ( UndoList
    , new
    , newSafe
    , redo
    , undo
    )


type alias UndoList state =
    { pastReversed : List state
    , present : state
    , future : List state
    }



-- MODIFY


new : state -> UndoList state -> UndoList state
new state { pastReversed, present } =
    UndoList (present :: pastReversed) state []


{-| This adds a new state without losing the future states.
-}
newSafe : state -> UndoList state -> UndoList state
newSafe state { pastReversed, present, future } =
    if List.isEmpty future then
        UndoList (present :: pastReversed) state []

    else
        UndoList (present :: List.reverse future ++ present :: pastReversed) state []


undo : UndoList state -> UndoList state
undo { pastReversed, present, future } =
    case pastReversed of
        [] ->
            UndoList pastReversed present future

        x :: xs ->
            UndoList xs x (present :: future)


redo : UndoList state -> UndoList state
redo { pastReversed, present, future } =
    case future of
        [] ->
            UndoList pastReversed present future

        x :: xs ->
            UndoList (present :: pastReversed) x xs
