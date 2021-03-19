module TrixelGrid.Face exposing
    ( Face
    , isLeft
    , leftFace
    , lowerRight
    , rightFace
    )

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/

import TrixelGrid.Vertex as Vertex exposing (vertex)


type Face
    = Face LR Int Int


type LR
    = L
    | R


leftFace =
    Face L


rightFace =
    Face R


isLeft : Face -> Bool
isLeft (Face lr _ _) =
    lr == L


lowerRight : Face -> Vertex.Vertex
lowerRight (Face _ u v) =
    vertex ( u, v )
