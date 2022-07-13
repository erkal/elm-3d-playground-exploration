module Main exposing (main)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Json.Decode
import Json.Encode
import LevelSelector exposing (LevelSelector)
import Playground exposing (Computer, gameWithConfigurationsAndEditor)


main =
    gameWithConfigurationsAndEditor view update [] init viewEditor updateFromEditor


type alias Model =
    LevelSelector Level


type alias Level =
    String



-- INIT


init : Computer -> Model
init computer =
    LevelSelector.init
        Json.Encode.string
        Json.Decode.string
        { name = "level 1", level = "I am level 1" }
        [ { name = "level 2", level = "I am level 2" }
        , { name = "level 3", level = "I am level 3" }
        , { name = "level 4", level = "I am level 4" }
        ]



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ class "absolute left-[400px]" ]
        [ div [] [ text (LevelSelector.current model) ]
        ]


type EditorMsg
    = FromLevelEditor LevelSelector.Msg


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        FromLevelEditor levelEditorMsg ->
            model |> LevelSelector.update levelEditorMsg


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div [ class "fixed right-0 p-4" ]
        [ Html.map FromLevelEditor
            (LevelSelector.view model)
        ]
