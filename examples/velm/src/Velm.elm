module Velm exposing (..)

import Dict exposing (Dict)


type alias VelmProgram =
    { shapes : Dict Name Shape
    , numbers : Dict Name Number
    , numberLists : Dict Name NumberList
    , functionsWithShapeOutput : Dict Name { arguments : List Name, output : Shape }
    }


type alias Name =
    String



-- shapes


type Shape
    = Circle Number
    | Rectangle Number Number
    | Group (List Shape)
    | TransformedShape Shape ShapeTransformation


type ShapeTransformation
    = MoveX Number
    | MoveY Number
    | Rotate Number
    | Scale Number



-- numbers


type Number
    = Reference Name
    | Constant Float
    | TransformedNumber Number NumberTransformation


type NumberTransformation
    = Add Number
    | Subtract Number
    | MultiplyBy Number
    | DivideBy Number



-- number lists


type NumberList
    = Reference Name
    | Explicit (List Number)
    | MappedNumberList NumberList NumberTransformation
