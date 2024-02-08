module UndoRedo.UndoList exposing
    ( UndoList
    , new
    , newSafe
    , newSafeConcise
    , redo
    , undo
    )


type alias UndoList state =
    { past : {- this is reversed: the head is the most recent element -} List state
    , present : state
    , future : List state
    }


new : state -> UndoList state -> UndoList state
new state { past, present } =
    { past = present :: past
    , present = state
    , future = []
    }


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


undo : UndoList state -> UndoList state
undo ({ past, present, future } as undoList) =
    case past of
        [] ->
            undoList

        x :: xs ->
            { past = xs
            , present = x
            , future = present :: future
            }


redo : UndoList state -> UndoList state
redo ({ past, present, future } as undoList) =
    case future of
        [] ->
            undoList

        x :: xs ->
            { past = present :: past
            , present = x
            , future = xs
            }
