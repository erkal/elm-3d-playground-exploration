module Tools.Pages.Pages exposing
    ( Msg
    , Pages
    , current
    , importJSON
    , init
    , mapCurrent
    , update
    , view
    )

import Html exposing (Html, button, div, input, pre, text, textarea)
import Html.Attributes exposing (autocomplete, class, cols, placeholder, rows, style, title, value)
import Html.Events exposing (onClick, onInput, onMouseDown)
import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)
import Playground.Icons as Icons
import Tools.SelectList.SelectList as SelectList exposing (SelectList)


type Pages page
    = Pages
        { selectList : SelectList (Item page)

        --
        , encodePage : page -> Value
        , pageDecoder : Decoder page
        , textAreaContentForExportingJson : String
        , textAreaContentForImportingJson : String
        }


type alias Item page =
    { name : String
    , page : page
    }


init : (page -> Value) -> Decoder page -> Item page -> List (Item page) -> Pages page
init encodePage pageDecoder first rest =
    Pages
        { selectList = SelectList.init ( first, rest )

        --
        , encodePage = encodePage
        , pageDecoder = pageDecoder
        , textAreaContentForExportingJson = ""
        , textAreaContentForImportingJson = ""
        }


current : Pages page -> page
current (Pages p) =
    p.selectList |> SelectList.getCurrent |> .page



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


update : Msg -> Pages page -> Pages page
update msg selectListComponent =
    selectListComponent
        |> addNewLevel msg
        |> removeCurrentLevel msg
        |> moveLevelOneDown msg
        |> moveLevelOneUp msg
        |> selectLevel msg
        |> changeLevelName msg
        |> handleImportExport msg


mapSelectList : (SelectList (Item page) -> SelectList (Item page)) -> Pages page -> Pages page
mapSelectList up (Pages p) =
    Pages { p | selectList = up p.selectList }


mapCurrent : (page -> page) -> Pages page -> Pages page
mapCurrent up =
    mapSelectList
        (SelectList.mapCurrent (\item -> { item | page = up item.page }))


changeLevelName : Msg -> Pages page -> Pages page
changeLevelName msg (Pages p) =
    case msg of
        ChangedCurrentLevelsNameTo newName ->
            Pages p
                |> mapSelectList
                    (SelectList.mapCurrent (\item -> { item | name = newName }))

        _ ->
            Pages p


handleImportExport : Msg -> Pages page -> Pages page
handleImportExport msg (Pages p) =
    case msg of
        ClickedExportLevelsButton ->
            Pages
                { p
                    | textAreaContentForExportingJson =
                        JE.encode 2
                            (p.selectList
                                |> SelectList.toList
                                |> JE.list
                                    (\item ->
                                        JE.object
                                            [ ( "name", JE.string item.name )
                                            , ( "page", p.encodePage item.page )
                                            ]
                                    )
                            )
                }

        ClickedImportLevelsButton ->
            Pages p
                |> importJSON p.textAreaContentForImportingJson

        EditedTextAreaForImportingLevels string ->
            Pages { p | textAreaContentForImportingJson = string }

        _ ->
            Pages p


importJSON : String -> Pages page -> Pages page
importJSON jSONString (Pages p) =
    Pages
        { p
            | selectList =
                let
                    itemDecoder : Decoder (Item page)
                    itemDecoder =
                        JD.map2
                            Item
                            (JD.field "name" JD.string)
                            (JD.field "page" p.pageDecoder)
                in
                jSONString
                    |> JD.decodeString
                        (JD.list itemDecoder
                            |> JD.andThen
                                (\l ->
                                    case l of
                                        [] ->
                                            JD.fail "List of pages is empty"

                                        first :: rest ->
                                            JD.succeed (SelectList.init ( first, rest ))
                                )
                        )
                    |> Result.withDefault p.selectList
        }


selectLevel : Msg -> Pages page -> Pages page
selectLevel msg (Pages p) =
    case msg of
        MouseDownOnLevelItem index ->
            Pages p
                |> mapSelectList (SelectList.goTo index)

        _ ->
            Pages p


removeCurrentLevel : Msg -> Pages page -> Pages page
removeCurrentLevel msg (Pages p) =
    case msg of
        PressedRemoveLevelButton ->
            Pages p
                |> mapSelectList SelectList.removeCurrent

        _ ->
            Pages p


moveLevelOneDown : Msg -> Pages page -> Pages page
moveLevelOneDown msg (Pages p) =
    case msg of
        PressedMoveLevelDownButton ->
            Pages p
                |> mapSelectList SelectList.moveElementDown

        _ ->
            Pages p


moveLevelOneUp : Msg -> Pages page -> Pages page
moveLevelOneUp msg (Pages p) =
    case msg of
        PressedMoveLevelUpButton ->
            Pages p
                |> mapSelectList SelectList.moveElementUp

        _ ->
            Pages p


addNewLevel : Msg -> Pages page -> Pages page
addNewLevel msg (Pages p) =
    case msg of
        PressedAddLevelButton ->
            let
                currentLevel =
                    SelectList.getCurrent p.selectList
            in
            Pages p
                |> mapSelectList (SelectList.add { currentLevel | name = currentLevel.name ++ " copy" })

        _ ->
            Pages p



-- VIEW


view : Pages page -> Html Msg
view (Pages p) =
    let
        addNewLevelButton =
            button
                [ class "inline-block ml-1 w-4 text-white/40 hover:text-white/80"
                , onClick PressedAddLevelButton
                , title "Duplicate Level"
                ]
                [ Icons.icons.plus ]

        deleteCurrentLevelButton =
            div
                [ class "inline-block ml-1 w-4 text-white/40 hover:text-red-400"
                , onClick PressedRemoveLevelButton
                , title "Delete Level"
                ]
                [ Icons.icons.trash ]

        moveLevelDownButton =
            div
                [ class "inline-block ml-1 w-4 text-white/40 hover:text-white/80"
                , onClick PressedMoveLevelDownButton
                , title "Move Level Down"
                ]
                [ Icons.icons.moveDown ]

        moveLevelUpButton =
            div
                [ class "inline-block ml-1 w-4 text-white/40 hover:text-white/80"
                , onClick PressedMoveLevelUpButton
                , title "Move Level Up"
                ]
                [ Icons.icons.moveUp ]

        levelItem index levelName =
            button
                [ class "w-full h-8 p-2 text-left text-white/80 border-b border-white/20"
                , class
                    (if index == SelectList.getCurrentIndex p.selectList then
                        "bg-black/40 hover:bg-black/60 active:bg-black/80"

                     else
                        "hover:bg-black/20"
                    )
                , style "transition" "background-color 0.3s ease"
                , onMouseDown (MouseDownOnLevelItem index)
                ]
                [ if index == SelectList.getCurrentIndex p.selectList then
                    div []
                        [ input
                            [ class "w-[100px] bg-transparent"
                            , placeholder "Enter Level Name"
                            , value (p.selectList |> SelectList.getCurrent |> .name)
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
        [ class "w-60 text-xs"
        ]
        [ div [ class "w-full h-[200px] overflow-hidden overflow-y-scroll" ]
            (p.selectList |> SelectList.toList |> List.indexedMap (\index { name } -> levelItem index name))
        , div [ class "p-4 border-[0.5px] border-white/20" ]
            [ exportingPages (Pages p) ]
        , div [ class "p-4 border-[0.5px] border-white/20" ]
            [ importingPages (Pages p) ]
        ]


makeButton : msg -> String -> Html msg
makeButton msg string =
    Html.button
        [ class "m-1 p-2 rounded text-white/60 bg-black/40 hover:bg-black/80"
        , style "transition" "background-color 0.3s ease"
        , Html.Events.onClick msg
        ]
        [ Html.text string ]


exportingPages : Pages page -> Html Msg
exportingPages (Pages p) =
    div []
        [ makeButton ClickedExportLevelsButton "Export"
        , pre
            [ class "w-full p-2 h-28 overflow-y-scroll text-white/60 text-[8px] leading-[9px] bg-black/40 select-text" ]
            [ Html.text p.textAreaContentForExportingJson ]
        ]


importingPages : Pages page -> Html Msg
importingPages (Pages p) =
    div []
        [ makeButton ClickedImportLevelsButton "Import"
        , textarea
            [ class "w-full p-2 h-28 overflow-y-scroll text-white/60 text-[8px] leading-[9px] bg-black/40 select-text"
            , rows 150
            , cols 10
            , Html.Events.onInput EditedTextAreaForImportingLevels
            , value p.textAreaContentForImportingJson
            ]
            [ Html.text "todo" ]
        ]
