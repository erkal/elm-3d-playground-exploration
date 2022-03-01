module LevelSelector exposing
    ( Levels
    , add
    , current
    , currentIndex
    , decoder
    , encode
    , fromFirstAndRest
    , fromHardCoded
    , goToNext
    , goToPrevious
    , map
    , mapCurrent
    , moveLevelOneUp
    , removeCurrent
    , save
    , setCurrent
    , singleton
    , size
    )

import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)


type Levels level
    = L
        { before : List level
        , current : level
        , after : List level
        }


fromHardCoded :
    { before : List level
    , current : level
    , after : List level
    }
    -> Levels level
fromHardCoded =
    L


encode : (level -> Value) -> Levels level -> Value
encode encodeLevel (L p) =
    JE.object
        [ ( "before", JE.list encodeLevel p.before )
        , ( "current", encodeLevel p.current )
        , ( "after", JE.list encodeLevel p.after )
        ]


decoder : Decoder level -> Decoder (Levels level)
decoder levelDecoder =
    let
        makeLevels a b c =
            L
                { before = a
                , current = b
                , after = c
                }
    in
    JD.map3 makeLevels
        (JD.field "before" (JD.list levelDecoder))
        (JD.field "current" levelDecoder)
        (JD.field "after" (JD.list levelDecoder))



-- GETTERS


current : Levels level -> level
current (L p) =
    p.current


before : Levels level -> List level
before (L p) =
    p.before


singleton : level -> Levels level
singleton level1 =
    L
        { before = []
        , current = level1
        , after = []
        }


fromFirstAndRest : level -> List level -> Levels level
fromFirstAndRest firstLevel restLevels =
    L
        { before = []
        , current = firstLevel
        , after = restLevels
        }


currentIndex : Levels level -> Int
currentIndex levels =
    List.length (before levels) + 1


size : Levels level -> Int
size (L p) =
    1
        + List.length p.before
        + List.length p.after



-- SETTERS and MAPPERS


setCurrent : level -> Levels level -> Levels level
setCurrent level (L p) =
    L { p | current = level }


mapCurrent : (level -> level) -> Levels level -> Levels level
mapCurrent up (L p) =
    L { p | current = up p.current }


map : (level -> level) -> Levels level -> Levels level
map up (L p) =
    L
        { before = List.map up p.before
        , current = up p.current
        , after = List.map up p.after
        }



-- OPERATIONS


goToNext : Levels level -> Maybe (Levels level)
goToNext (L p) =
    case p.after of
        nextLevel :: rest ->
            Just
                (L
                    { before = p.current :: p.before
                    , current = nextLevel
                    , after = rest
                    }
                )

        [] ->
            Nothing


goToPrevious : Levels level -> Maybe (Levels level)
goToPrevious (L p) =
    case p.before of
        previousLevel :: rest ->
            Just
                (L
                    { before = rest
                    , current = previousLevel
                    , after = p.current :: p.after
                    }
                )

        [] ->
            Nothing


save : level -> Levels level -> Levels level
save level =
    setCurrent level


add : level -> Levels level -> Levels level
add level (L p) =
    L
        { p
            | before = p.current :: p.before
            , current = level
        }


moveLevelOneUp : Levels level -> Levels level
moveLevelOneUp (L p) =
    case p.after of
        next :: rest ->
            L
                { p
                    | before = next :: p.before
                    , after = rest
                }

        [] ->
            L
                { p
                    | before = []
                    , after = List.reverse p.before
                }


removeCurrent : Levels level -> Levels level
removeCurrent (L p) =
    case p.before of
        x :: xs ->
            L
                { p
                    | before = xs
                    , current = x
                }

        [] ->
            case p.after of
                x :: xs ->
                    L
                        { p
                            | current = x
                            , after = xs
                        }

                [] ->
                    L p
