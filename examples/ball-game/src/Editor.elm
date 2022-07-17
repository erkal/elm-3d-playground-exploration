module Editor exposing (..)

import Json.Encode
import LevelSelector exposing (Levels)
import World exposing (World)
import World.Encode
import World.Physics.Collision.Primitives.Geometry2d exposing (Point2d, distance)


type alias Editor =
    { jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


init : Editor
init =
    { jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }
