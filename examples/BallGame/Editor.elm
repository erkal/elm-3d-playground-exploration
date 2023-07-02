module BallGame.Editor exposing (..)

import BallGame.BallGame.LevelSelector exposing (Levels)
import BallGame.BallGame.World exposing (World)
import BallGame.BallGame.World.Encode
import BallGame.BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (Point2d, distance)
import Json.Encode


type alias Editor =
    { jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


init : Editor
init =
    { jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }
