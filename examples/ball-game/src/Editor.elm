module Editor exposing (..)

import Json.Encode
import LevelSelector exposing (Levels)
import Physics.Primitives.Geometry2d exposing (Point2d, distance)
import Physics.World as World exposing (World)
import Physics.World.Encode


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


toggle : Bool -> Editor -> Editor
toggle bool editor =
    { editor
        | isOn = bool
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
            Json.Encode.encode 2 (LevelSelector.encode (World.reset >> Physics.World.Encode.encode) levels)
    }
