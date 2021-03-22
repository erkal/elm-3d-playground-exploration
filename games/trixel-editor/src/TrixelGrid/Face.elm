module TrixelGrid.Face exposing
    ( Face
    , at
    , isLeft
    , leftFace
    , lowerRight
    , rightFace
    , toComparable
    )

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import TrixelGrid.Vertex as Vertex exposing (vertex)


type Face
    = Face LR Int Int


type LR
    = L
    | R


at : { u : Float, v : Float } -> Face
at { u, v } =
    let
        frac f =
            f - toFloat (floor f)
    in
    if frac u + frac v < 1 then
        leftFace (floor u) (floor v)

    else
        rightFace (floor u) (floor v)


leftFace =
    Face L


rightFace =
    Face R


isLeft : Face -> Bool
isLeft (Face lr u v) =
    lr == L


lowerRight : Face -> Vertex.Vertex
lowerRight (Face _ u v) =
    vertex ( u, v )


{-| to be used for AnyDict
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
