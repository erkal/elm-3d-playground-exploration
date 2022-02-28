module Editor exposing (..)

import Json.Encode
import LevelSelector exposing (Levels)
import Path exposing (Path)
import World exposing (World)
import World.Encode


type alias Editor =
    { isOn : Bool
    , state : EditorState
    , mouseOveredSolution : Maybe Path
    , jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


init : Editor
init =
    { isOn = False
    , state = Idle
    , mouseOveredSolution = Nothing
    , jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }


toggle : Bool -> Editor -> Editor
toggle bool editor =
    { editor
        | isOn = bool
        , state = Idle
    }


type EditorState
    = Idle
    | CreatingLevel


setTextAreaForImportingLevels : String -> Editor -> Editor
setTextAreaForImportingLevels string editor =
    { editor
        | jsonLevelsToImport = string
    }


exportLevels : Levels World -> Editor -> Editor
exportLevels levels editor =
    { editor
        | jsonExportedLevels =
            Json.Encode.encode 2 (LevelSelector.encode (World.reset >> World.Encode.encodeWorld) levels)
    }
