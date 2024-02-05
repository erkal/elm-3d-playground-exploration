module UndoRedo.UndoList exposing
    ( UndoList
    , new
    , newSafe
    , redo
    , undo
    )


type alias UndoList state =
    { past : {- this is reversed: the head is the most recent element -} List state
    , present : state
    , future : List state
    }



-- MODIFY


new : state -> UndoList state -> UndoList state
new state { past, present } =
    UndoList (present :: past) state []


{-| This adds a new state without losing the future states.
-}
newSafe : state -> UndoList state -> UndoList state
newSafe state { past, present, future } =
    if List.isEmpty future then
        UndoList (present :: past) state []

    else
        UndoList (present :: List.reverse future ++ present :: past) state []


undo : UndoList state -> UndoList state
undo { past, present, future } =
    case past of
        [] ->
            UndoList past present future

        x :: xs ->
            UndoList xs x (present :: future)


redo : UndoList state -> UndoList state
redo { past, present, future } =
    case future of
        [] ->
            UndoList past present future

        x :: xs ->
            UndoList (present :: past) x xs
