module TrixelEditor.TrixelGrid.Face exposing (..)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/


type Face
    = Face LR Int Int


type LR
    = L
    | R



-- CREATE


at : { u : Float, v : Float } -> Face
at { u, v } =
    let
        frac f =
            f - toFloat (floor f)
    in
    if frac u + frac v < 1 then
        Face L (floor u) (floor v)

    else
        Face R (floor u) (floor v)



-- QUERY


center : Face -> { u : Float, v : Float }
center (Face lr u v) =
    case lr of
        L ->
            { u = toFloat u + 1 / 3
            , v = toFloat v + 1 / 3
            }

        R ->
            { u = toFloat u + 2 / 3
            , v = toFloat v + 2 / 3
            }



-- CONVERT


{-| to be used by Dict.Any
-}
toComparable : Face -> ( ( Int, Int ), Int )
toComparable (Face lr u v) =
    ( ( u, v )
    , case lr of
        L ->
            0

        R ->
            1
    )
