module SelectList exposing (..)

import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)


type SelectList a
    = SelectList
        { before : List a
        , current : a
        , after : List a
        }


init : a -> List a -> SelectList a
init first rest =
    SelectList
        { before = []
        , current = first
        , after = rest
        }



-- GET


current : SelectList a -> a
current (SelectList p) =
    p.current


currentIndex : SelectList a -> Int
currentIndex (SelectList p) =
    List.length p.before


toList : SelectList a -> List a
toList (SelectList p) =
    List.reverse p.before ++ [ p.current ] ++ p.after


size : SelectList a -> Int
size (SelectList p) =
    1
        + List.length p.before
        + List.length p.after



-- UPDATE


mapCurrent : (a -> a) -> SelectList a -> SelectList a
mapCurrent up (SelectList p) =
    SelectList { p | current = up p.current }


moveElementDown : SelectList a -> SelectList a
moveElementDown (SelectList p) =
    case p.after of
        next :: rest ->
            SelectList
                { p
                    | before = next :: p.before
                    , after = rest
                }

        [] ->
            SelectList
                { p
                    | before = []
                    , after = List.reverse p.before
                }


moveElementUp : SelectList a -> SelectList a
moveElementUp (SelectList p) =
    case p.before of
        next :: rest ->
            SelectList
                { p
                    | before = rest
                    , after = next :: p.after
                }

        [] ->
            SelectList
                { p
                    | before = List.reverse p.after
                    , after = []
                }


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
                { before = List.reverse (List.take i_ l)
                , current = head
                , after = tail
                }

        [] ->
            SelectList p


goToNext : SelectList a -> Maybe (SelectList a)
goToNext (SelectList p) =
    case p.after of
        nextLevel :: rest ->
            Just
                (SelectList
                    { before = p.current :: p.before
                    , current = nextLevel
                    , after = rest
                    }
                )

        [] ->
            Nothing


goToPrevious : SelectList a -> Maybe (SelectList a)
goToPrevious (SelectList p) =
    case p.before of
        previousLevel :: rest ->
            Just
                (SelectList
                    { before = rest
                    , current = previousLevel
                    , after = p.current :: p.after
                    }
                )

        [] ->
            Nothing


add : a -> SelectList a -> SelectList a
add a (SelectList p) =
    SelectList
        { p
            | before = p.current :: p.before
            , current = a
        }


removeCurrent : SelectList a -> SelectList a
removeCurrent (SelectList p) =
    case p.before of
        x :: xs ->
            SelectList
                { p
                    | before = xs
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
