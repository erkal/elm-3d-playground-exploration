module TrixelGrid.Face exposing (Face)

-- The coordinate system is as described in the following article
-- http://www-cs-students.stanford.edu/~amitp/game-programming/grids/


type Face
    = Face Int Int LR


type LR
    = L
    | R
