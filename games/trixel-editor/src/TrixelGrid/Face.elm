module TrixelGrid.Face exposing
    ( Face
    , at
    , isLeft
    , isNeighbour
    , leftFace
    , lowerRightVertex
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



-- CREATE


leftFace =
    Face L


rightFace =
    Face R


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



-- QUERY


isLeft : Face -> Bool
isLeft (Face lr _ _) =
    lr == L


lowerRightVertex : Face -> Vertex.Vertex
lowerRightVertex (Face lr u v) =
    vertex ( u, v )


isNeighbour : Face -> Face -> Bool
isNeighbour queriedFace (Face lr u v) =
    List.any ((==) queriedFace) <|
        case lr of
            L ->
                [ Face R u v
                , Face R u (v - 1)
                , Face R (u - 1) v
                ]

            R ->
                [ Face L u (v + 1)
                , Face L (u + 1) v
                , Face L u v
                ]



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
