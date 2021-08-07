module Playground.InputConfiguration exposing (..)


type alias InputConfiguration =
    List ( String, InputSettings )


type alias InputSettings =
    { description : String
    , positiveButton : String
    , negativeButton : String
    , gravity : Float
    , dead : Float
    , sensitivity : Float
    , snap : Bool
    }
