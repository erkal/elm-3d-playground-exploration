module Tools.SelectList.SelectList exposing
    ( SelectList
    , add
    , create
    , duplicateCurrent
    , getBeforeReversed
    , getCurrent
    , getCurrentIndex
    , goTo
    , goToEnd
    , goToNext
    , goToPrevious
    , goToStart
    , init
    , insertAt
    , isAtEnd
    , isAtStart
    , map
    , mapAt
    , mapCurrent
    , moveCurrentToIndex
    , moveElementDown
    , moveElementUp
    , removeAfter
    , removeBefore
    , removeCurrent
    , setCurrent
    , singleton
    , size
    , toList
    )

{-|

    `SelectList` is a data structure that allows you to store and browse a list of elements, in which always one element is selected.

-}


type SelectList a
    = SelectList
        { beforeReversed : List a
        , current : a
        , after : List a
        }


init : ( a, List a ) -> SelectList a
init ( first, rest ) =
    SelectList
        { beforeReversed = []
        , current = first
        , after = rest
        }


singleton : a -> SelectList a
singleton el =
    init ( el, [] )


create : ( List a, a, List a ) -> SelectList a
create ( before, current, after ) =
    SelectList
        { beforeReversed = before |> List.reverse
        , current = current
        , after = after
        }



-- QUERY


getCurrent : SelectList a -> a
getCurrent (SelectList p) =
    p.current


getBeforeReversed : SelectList a -> List a
getBeforeReversed (SelectList p) =
    p.beforeReversed


getCurrentIndex : SelectList a -> Int
getCurrentIndex (SelectList p) =
    List.length p.beforeReversed


toList : SelectList a -> List a
toList (SelectList p) =
    List.reverse p.beforeReversed ++ (p.current :: p.after)


size : SelectList a -> Int
size (SelectList p) =
    1 + List.length p.beforeReversed + List.length p.after


isAtStart : SelectList a -> Bool
isAtStart (SelectList p) =
    List.isEmpty p.beforeReversed


isAtEnd : SelectList a -> Bool
isAtEnd (SelectList p) =
    List.isEmpty p.after



-- UPDATE


mapCurrent : (a -> a) -> SelectList a -> SelectList a
mapCurrent up (SelectList p) =
    SelectList { p | current = up p.current }


setCurrent : a -> SelectList a -> SelectList a
setCurrent newCurrent (SelectList p) =
    SelectList { p | current = newCurrent }


map : (a -> b) -> SelectList a -> SelectList b
map up (SelectList p) =
    SelectList
        { beforeReversed = p.beforeReversed |> List.map up
        , current = p.current |> up
        , after = p.after |> List.map up
        }


mapAt : Int -> (a -> a) -> SelectList a -> SelectList a
mapAt index up selectList =
    selectList
        |> goTo index
        |> mapCurrent up
        |> goTo (getCurrentIndex selectList)


insertAt : Int -> a -> SelectList a -> SelectList a
insertAt targetIndex element =
    goTo (targetIndex - 1)
        >> add element


moveCurrentToIndex : Int -> SelectList a -> SelectList a
moveCurrentToIndex targetIndex (SelectList p) =
    let
        correctedTargetIndex =
            if targetIndex > List.length p.beforeReversed then
                targetIndex - 1

            else
                targetIndex
    in
    SelectList p
        |> removeCurrent
        |> insertAt correctedTargetIndex p.current


goToStart : SelectList a -> SelectList a
goToStart selectList =
    selectList |> goTo 0


goToEnd : SelectList a -> SelectList a
goToEnd selectList =
    selectList |> goTo (size selectList - 1)


goTo : Int -> SelectList a -> SelectList a
goTo i (SelectList p) =
    let
        l =
            toList (SelectList p)

        i_ =
            i |> modBy (List.length l)
    in
    case List.drop i_ l of
        head :: tail ->
            SelectList
                { beforeReversed = List.reverse (List.take i_ l)
                , current = head
                , after = tail
                }

        [] ->
            SelectList p


goToNext : SelectList a -> SelectList a
goToNext (SelectList p) =
    case p.after of
        nextLevel :: rest ->
            SelectList
                { beforeReversed = p.current :: p.beforeReversed
                , current = nextLevel
                , after = rest
                }

        [] ->
            SelectList p


goToPrevious : SelectList a -> SelectList a
goToPrevious (SelectList p) =
    case p.beforeReversed of
        previousLevel :: rest ->
            SelectList
                { beforeReversed = rest
                , current = previousLevel
                , after = p.current :: p.after
                }

        [] ->
            SelectList p


add : a -> SelectList a -> SelectList a
add a (SelectList p) =
    SelectList
        { p
            | beforeReversed = p.current :: p.beforeReversed
            , current = a
        }


removeAfter : SelectList a -> SelectList a
removeAfter (SelectList p) =
    SelectList
        { p | after = [] }


removeBefore : SelectList a -> SelectList a
removeBefore (SelectList p) =
    SelectList
        { p | beforeReversed = [] }


duplicateCurrent : SelectList a -> SelectList a
duplicateCurrent selectList =
    selectList
        |> add (getCurrent selectList)


removeCurrent : SelectList a -> SelectList a
removeCurrent (SelectList p) =
    case p.beforeReversed of
        x :: xs ->
            SelectList
                { p
                    | beforeReversed = xs
                    , current = x
                }

        [] ->
            case p.after of
                x :: xs ->
                    SelectList
                        { p
                            | current = x
                            , after = xs
                        }

                [] ->
                    SelectList p


moveElementDown : SelectList a -> SelectList a
moveElementDown (SelectList p) =
    case p.after of
        next :: rest ->
            SelectList
                { p
                    | beforeReversed = next :: p.beforeReversed
                    , after = rest
                }

        [] ->
            SelectList
                { p
                    | beforeReversed = []
                    , after = List.reverse p.beforeReversed
                }


moveElementUp : SelectList a -> SelectList a
moveElementUp (SelectList p) =
    case p.beforeReversed of
        next :: rest ->
            SelectList
                { p
                    | beforeReversed = rest
                    , after = next :: p.after
                }

        [] ->
            SelectList
                { p
                    | beforeReversed = List.reverse p.after
                    , after = []
                }
