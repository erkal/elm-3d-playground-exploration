module RedFacedCube.Editor exposing (..)

import RedFacedCube.Path exposing (Path)


type alias Editor =
    { isOn : Bool
    , state : EditorState
    , mouseOveredSolution : Maybe Path
    }


init : Editor
init =
    { isOn = False
    , state = Idle
    , mouseOveredSolution = Nothing
    }


toggle : Editor -> Editor
toggle editor =
    { editor
        | isOn = not editor.isOn
        , state = Idle
    }


type EditorState
    = Idle
    | CreatingLevel
