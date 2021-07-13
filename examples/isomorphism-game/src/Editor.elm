module Editor exposing (..)

import Json.Encode
import Level exposing (Level)
import Level.Encode
import LevelSelector exposing (Levels)


type alias Editor =
    { isOn : Bool
    , jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


init : Editor
init =
    { isOn = False
    , jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }



-- UPDATE


onOff : Bool -> Editor -> Editor
onOff bool editor =
    { editor | isOn = bool }


exportLevels : Levels Level -> Editor -> Editor
exportLevels levels editor =
    { editor
        | jsonExportedLevels =
            Json.Encode.encode 2 (LevelSelector.encode Level.Encode.encode levels)
    }
