module LevelSelector exposing (LevelSelector, Msg, current, init, update, view)

import Html exposing (Html, button, div, input, pre, text, textarea)
import Html.Attributes exposing (autocomplete, class, cols, placeholder, rows, style, title, value)
import Html.Events exposing (onClick, onInput, onMouseDown)
import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)
import Playground.Icons as Icons
import SelectList exposing (SelectList)


type LevelSelector level
    = LevelSelector
        { selectList : SelectList (Item level)

        --
        , encodeLevel : level -> Value
        , levelDecoder : Decoder level
        , jsonExportedLevels : String
        , jsonLevelsToImport : String
        }


type alias Item level =
    { name : String
    , level : level
    }


init : (level -> Value) -> Decoder level -> Item level -> List (Item level) -> LevelSelector level
init encodeLevel levelDecoder first rest =
    LevelSelector
        { selectList = SelectList.init first rest

        --
        , encodeLevel = encodeLevel
        , levelDecoder = levelDecoder
        , jsonExportedLevels = ""
        , jsonLevelsToImport = ""
        }


current : LevelSelector level -> level
current (LevelSelector p) =
    p.selectList |> SelectList.current |> .level



--


type Msg
    = PressedAddLevelButton
    | PressedRemoveLevelButton
    | PressedMoveLevelDownButton
    | PressedMoveLevelUpButton
    | ChangedCurrentLevelsNameTo String
    | MouseDownOnLevelItem Int
      --
    | ClickedExportLevelsButton
    | ClickedImportLevelsButton
    | EditedTextAreaForImportingLevels String


update : Msg -> LevelSelector level -> LevelSelector level
update msg selectListComponent =
    selectListComponent
        |> addNewLevel msg
        |> removeCurrentLevel msg
        |> moveLevelOneDown msg
        |> moveLevelOneUp msg
        |> selectLevel msg
        |> changeLevelName msg
        |> handleImportExport msg


mapSelectList : (SelectList (Item level) -> SelectList (Item level)) -> LevelSelector level -> LevelSelector level
mapSelectList up (LevelSelector p) =
    LevelSelector { p | selectList = up p.selectList }


changeLevelName : Msg -> LevelSelector level -> LevelSelector level
changeLevelName msg (LevelSelector p) =
    case msg of
        ChangedCurrentLevelsNameTo newName ->
            LevelSelector p
                |> mapSelectList
                    (SelectList.mapCurrent (\item -> { item | name = newName }))

        _ ->
            LevelSelector p


handleImportExport : Msg -> LevelSelector level -> LevelSelector level
handleImportExport msg (LevelSelector p) =
    case msg of
        ClickedExportLevelsButton ->
            LevelSelector
                { p
                    | jsonExportedLevels =
                        JE.encode 2
                            (p.selectList
                                |> SelectList.toList
                                |> JE.list
                                    (\item ->
                                        JE.object
                                            [ ( "name", JE.string item.name )
                                            , ( "level", p.encodeLevel item.level )
                                            ]
                                    )
                            )
                }

        ClickedImportLevelsButton ->
            LevelSelector
                { p
                    | selectList =
                        let
                            itemDecoder : Decoder (Item level)
                            itemDecoder =
                                JD.map2
                                    Item
                                    (JD.field "name" JD.string)
                                    (JD.field "level" p.levelDecoder)
                        in
                        p.jsonLevelsToImport
                            |> JD.decodeString
                                (JD.list itemDecoder
                                    |> JD.andThen
                                        (\l ->
                                            case l of
                                                [] ->
                                                    JD.fail "List is empty"

                                                first :: rest ->
                                                    JD.succeed (SelectList.init first rest)
                                        )
                                )
                            |> Result.withDefault p.selectList
                }

        EditedTextAreaForImportingLevels string ->
            LevelSelector { p | jsonLevelsToImport = string }

        _ ->
            LevelSelector p


selectLevel : Msg -> LevelSelector level -> LevelSelector level
selectLevel msg (LevelSelector p) =
    case msg of
        MouseDownOnLevelItem index ->
            LevelSelector p
                |> mapSelectList (SelectList.goTo index)

        _ ->
            LevelSelector p


removeCurrentLevel : Msg -> LevelSelector level -> LevelSelector level
removeCurrentLevel msg (LevelSelector p) =
    case msg of
        PressedRemoveLevelButton ->
            LevelSelector p
                |> mapSelectList SelectList.removeCurrent

        _ ->
            LevelSelector p


moveLevelOneDown : Msg -> LevelSelector level -> LevelSelector level
moveLevelOneDown msg (LevelSelector p) =
    case msg of
        PressedMoveLevelDownButton ->
            LevelSelector p
                |> mapSelectList SelectList.moveElementDown

        _ ->
            LevelSelector p


moveLevelOneUp : Msg -> LevelSelector level -> LevelSelector level
moveLevelOneUp msg (LevelSelector p) =
    case msg of
        PressedMoveLevelUpButton ->
            LevelSelector p
                |> mapSelectList SelectList.moveElementUp

        _ ->
            LevelSelector p


addNewLevel : Msg -> LevelSelector level -> LevelSelector level
addNewLevel msg (LevelSelector p) =
    case msg of
        PressedAddLevelButton ->
            let
                currentLevel =
                    SelectList.current p.selectList
            in
            LevelSelector p
                |> mapSelectList (SelectList.add { currentLevel | name = currentLevel.name ++ " copy" })

        _ ->
            LevelSelector p



-- VIEW


view : LevelSelector level -> Html Msg
view (LevelSelector p) =
    let
        addNewLevelButton =
            button
                [ class "inline-block ml-1 w-4 text-white40 hover:text-white80"
                , onClick PressedAddLevelButton
                , title "Duplicate Level"
                ]
                [ Icons.icons.plus ]

        deleteCurrentLevelButton =
            div
                [ class "inline-block ml-1 w-4 text-white40 hover:text-red-400"
                , onClick PressedRemoveLevelButton
                , title "Delete Level"
                ]
                [ Icons.icons.trash ]

        moveLevelDownButton =
            div
                [ class "inline-block ml-1 w-4 text-white40 hover:text-white80"
                , onClick PressedMoveLevelDownButton
                , title "Move Level Down"
                ]
                [ Icons.icons.moveDown ]

        moveLevelUpButton =
            div
                [ class "inline-block ml-1 w-4 text-white40 hover:text-white80"
                , onClick PressedMoveLevelUpButton
                , title "Move Level Up"
                ]
                [ Icons.icons.moveUp ]

        levelItem index levelName =
            button
                [ class "w-full h-8 p-2 text-left text-white80 border-b border-white20"
                , class
                    (if index == SelectList.currentIndex p.selectList then
                        "bg-black40 hover:bg-black60 active:bg-black80"

                     else
                        "hover:bg-black20"
                    )
                , style "transition" "background-color 0.3s ease"
                , onMouseDown (MouseDownOnLevelItem index)
                ]
                [ if index == SelectList.currentIndex p.selectList then
                    div []
                        [ input
                            [ class "w-[140px] bg-transparent"
                            , placeholder "Enter Level Name"
                            , value (p.selectList |> SelectList.current |> .name)
                            , onInput ChangedCurrentLevelsNameTo
                            , autocomplete False
                            ]
                            []
                        , div [ class "float-right" ]
                            [ addNewLevelButton
                            , moveLevelUpButton
                            , moveLevelDownButton
                            , deleteCurrentLevelButton
                            ]
                        ]

                  else
                    div [ class "whitespace-nowrap" ] [ text levelName ]
                ]
    in
    div
        [ class "w-60 text-xs bg-black20"
        ]
        [ div [ class "text-xl p-2" ] [ text "Level Selector" ]
        , div [ class "w-full h-[200px] overflow-hidden overflow-y-scroll" ]
            (p.selectList |> SelectList.toList |> List.indexedMap (\index { name } -> levelItem index name))
        , div [ class "p-4 border-[0.5px] border-white20" ]
            [ levelExporting (LevelSelector p) ]
        , div [ class "p-4 border-[0.5px] border-white20" ]
            [ levelImporting (LevelSelector p) ]
        ]


makeButton : msg -> String -> Html msg
makeButton msg string =
    Html.button
        [ class "m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"
        , style "transition" "background-color 0.3s ease"
        , Html.Events.onClick msg
        ]
        [ Html.text string ]


levelExporting : LevelSelector level -> Html Msg
levelExporting (LevelSelector p) =
    div []
        [ makeButton ClickedExportLevelsButton "Export"
        , pre
            [ class "w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text" ]
            [ Html.text p.jsonExportedLevels ]
        ]


levelImporting : LevelSelector level -> Html Msg
levelImporting (LevelSelector p) =
    div []
        [ makeButton ClickedImportLevelsButton "Import"
        , textarea
            [ class "w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"
            , rows 150
            , cols 10
            , Html.Events.onInput EditedTextAreaForImportingLevels
            , value p.jsonLevelsToImport
            ]
            [ Html.text "todo" ]
        ]
