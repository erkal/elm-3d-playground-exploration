module Editor exposing (..)

import Json.Encode
import LevelSelector exposing (Levels)
import World exposing (World)
import World.Encode
import World.Physics.Collision.Primitives.Geometry2d exposing (Point2d, distance)


type alias Editor =
    { isOn : Bool
    , state : EditorState
    , jsonExportedLevels : String
    , jsonLevelsToImport : String
    }


init : Editor
init =
    { isOn = True
    , state = Idle
    , jsonExportedLevels = ""
    , jsonLevelsToImport = ""
    }


toggle : Editor -> Editor
toggle editor =
    { editor
        | isOn = not editor.isOn
        , state = Idle
    }


type EditorState
    = Idle
    | DrawingPolygon (List Point2d)


startDrawingPolygon : Editor -> Editor
startDrawingPolygon editor =
    { editor
        | state = DrawingPolygon []
    }


addVertexToDrawnPolygon : Point2d -> Editor -> Editor
addVertexToDrawnPolygon mouse editor =
    case editor.state of
        Idle ->
            editor

        DrawingPolygon l ->
            let
                newPoint =
                    Point2d mouse.x mouse.y
            in
            { editor
                | state =
                    DrawingPolygon
                        (case List.reverse l of
                            [] ->
                                [ newPoint ]

                            last :: _ ->
                                if distance last newPoint > 2 then
                                    l ++ [ newPoint ]

                                else
                                    l
                        )
            }


finishDrawingPolygon : Editor -> Editor
finishDrawingPolygon editor =
    { editor
        | state = Idle
    }


setTextAreaForImportingLevels : String -> Editor -> Editor
setTextAreaForImportingLevels string editor =
    { editor
        | jsonLevelsToImport = string
    }


exportLevels : Levels World -> Editor -> Editor
exportLevels levels editor =
    { editor
        | jsonExportedLevels =
            Json.Encode.encode 2 (LevelSelector.encode (World.reset >> World.Encode.encode) levels)
    }
