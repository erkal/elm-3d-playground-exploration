module Main exposing (main)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Json.Decode
import Json.Encode
import Playground exposing (Computer, gameWithConfigurationsAndEditor)
import Tools.Pages as Pages exposing (Pages)


main =
    gameWithConfigurationsAndEditor view update [] init viewEditor updateFromEditor


type alias Model =
    Pages Level


type alias Level =
    String



-- INIT


init : Computer -> Model
init computer =
    Pages.init
        Json.Encode.string
        Json.Decode.string
        { name = "level 1", page = "I am level 1" }
        [ { name = "level 2", page = "I am level 2" }
        , { name = "level 3", page = "I am level 3" }
        , { name = "level 4", page = "I am level 4" }
        ]



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div [ class "absolute left-[400px]" ]
        [ div [] [ text (Pages.current model) ]
        ]


type EditorMsg
    = FromLevelEditor Pages.Msg


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    case editorMsg of
        FromLevelEditor levelEditorMsg ->
            model |> Pages.update levelEditorMsg


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div [ class "fixed right-0 p-4" ]
        [ Html.map FromLevelEditor
            (Pages.view model)
        ]
