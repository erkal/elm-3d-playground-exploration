port module Playground3d exposing
    ( game, gameWithConfigurations, gameWithConfigurationsAndEditor
    , configurations, getColor, getFloat
    , spin, wave, zigzag
    , Computer, Mouse, Screen, Keyboard, toX, toY, toXY
    )

{-| NOTE: Most of the following code is copied from evancz/elm-playground


# Playground

@docs game, gameWithConfigurations, gameWithConfigurationsAndEditor


# Configurations

@docs configurations, getColor, getFloat


# Groups

@docs group


# Time

@docs spin, wave, zigzag


# Computer

@docs Computer, Mouse, Screen, Keyboard, toX, toY, toXY

-}

import Browser
import Browser.Dom as Dom
import Browser.Events as E
import Computer exposing (Computer, Msg(..), TouchEvent, init)
import Html exposing (Html, button, div, option, select, text)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onChange)
import Json.Decode as D
import Playground3d.Configurations as Configurations exposing (Configurations)
import Tape exposing (Tape)
import Task



-- PORTS FOR TOUCH EVENTS


port touchStart : (List TouchEvent -> msg) -> Sub msg


port touchMove : (List TouchEvent -> msg) -> Sub msg


port touchEnd : (List TouchEvent -> msg) -> Sub msg


port touchCancel : (List TouchEvent -> msg) -> Sub msg



-- EXPORTS


type alias Computer =
    Computer.Computer


type alias Mouse =
    Computer.Mouse


type alias Screen =
    Computer.Screen


type alias Keyboard =
    Computer.Keyboard


toX =
    Computer.toX


toY =
    Computer.toX


toXY =
    Computer.toXY


configurations =
    Computer.configurations


getColor =
    Computer.getColor


getFloat =
    Computer.getFloat



-- ANIMATIONS


type alias Time =
    Float


{-| Create an angle that cycles from 0 to 360 degrees over time.

Here is an [`animation`](#animation) with a spinning triangle:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ triangle orange 50
            |> rotate (spin 8 time)
        ]

It will do a full rotation once every eight seconds. Try changing the `8` to
a `2` to make it do a full rotation every two seconds. It moves a lot faster!

-}
spin : Float -> Time -> Float
spin period time =
    360 * toFrac period time


{-| Smoothly wave between two numbers.

Here is an [`animation`](#animation) with a circle that resizes:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ circle lightBlue (wave 50 90 7 time)
        ]

The radius of the circle will cycles between 50 and 90 every seven seconds.
It kind of looks like it is breathing.

-}
wave : Float -> Float -> Float -> Time -> Float
wave lo hi period time =
    lo + (hi - lo) * (1 + cos (turns (toFrac period time))) / 2


{-| Zig zag between two numbers.

Here is an [`animation`](#animation) with a rectangle that tips back and forth:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ rectangle lightGreen 20 100
            |> rotate (zigzag -20 20 4 time)
        ]

It gets rotated by an angle. The angle cycles from -20 degrees to 20 degrees
every four seconds.

-}
zigzag : Float -> Float -> Float -> Time -> Float
zigzag lo hi period time =
    lo + (hi - lo) * abs (2 * toFrac period time - 1)


toFrac : Float -> Time -> Float
toFrac period time =
    (time - toFloat (floor (time / period)) * period)
        / period



-- GAME


type alias Flags =
    { devicePixelRatio : Float }



--


game :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> (Computer -> gameModel)
    -> Program Flags (Model gameModel) (Msg Never)
game viewGameModel updateGameModel initGameModel =
    gameWithConfigurations
        viewGameModel
        updateGameModel
        Configurations.empty
        initGameModel


gameWithConfigurations :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> (Computer -> gameModel)
    -> Program Flags (Model gameModel) (Msg Never)
gameWithConfigurations viewGameModel updateGameModel initialConfigurations initGameModel =
    gameWithConfigurationsAndEditor
        viewGameModel
        updateGameModel
        initialConfigurations
        initGameModel
        (\_ _ -> div [] [])
        (\_ _ gameModel -> gameModel)


gameWithConfigurationsAndEditor :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> (Computer -> gameModel)
    -> (Computer -> gameModel -> Html levelEditorMsg)
    -> (Computer -> levelEditorMsg -> gameModel -> gameModel)
    -> Program Flags (Model gameModel) (Msg levelEditorMsg)
gameWithConfigurationsAndEditor viewGameModel updateGameModel initialConfigurations initGameModel viewEditor updateFromEditor =
    let
        init flags =
            let
                initialComputer =
                    Computer.init flags initialConfigurations
            in
            ( { tape = Tape.init initialComputer initGameModel
              , editorIsOn = False
              , activeEditorTab = Configurations
              , visibility = E.Visible
              }
            , Task.perform (GotViewport >> ToComputer) Dom.getViewport
            )

        update msg model =
            ( gameUpdate updateGameModel updateFromEditor msg model
            , Cmd.none
            )

        subscriptions { visibility } =
            case visibility of
                E.Hidden ->
                    E.onVisibilityChange VisibilityChanged
                        |> Sub.map ToComputer

                E.Visible ->
                    gameSubscriptions
    in
    Browser.element
        { init = init
        , view = view viewGameModel viewEditor
        , update = update
        , subscriptions = subscriptions
        }



-- SUBSCRIPTIONS


gameSubscriptions : Sub (Msg levelEditorMsg)
gameSubscriptions =
    Sub.batch <|
        E.onAnimationFrameDelta ((*) 0.001 >> Tick)
            :: List.map (Sub.map ToComputer)
                [ E.onResize Resized
                , E.onKeyUp (D.map (KeyChanged False) (D.field "key" D.string))
                , E.onKeyDown (D.map (KeyChanged True) (D.field "key" D.string))
                , E.onVisibilityChange VisibilityChanged
                , E.onClick (D.succeed MouseClick)
                , E.onMouseDown (D.succeed (MouseButton True))
                , E.onMouseUp (D.succeed (MouseButton False))
                , E.onMouseMove (D.map2 MouseMove (D.field "pageX" D.float) (D.field "pageY" D.float))
                , touchStart TouchStart
                , touchMove TouchMove
                , touchEnd TouchEnd
                , touchCancel TouchCancel
                ]


type alias Model gameModel =
    { tape : Tape gameModel
    , editorIsOn : Bool
    , activeEditorTab : EditorTab
    , visibility : E.Visibility
    }


type EditorTab
    = Configurations
    | LevelEditor


editorTabToString : EditorTab -> String
editorTabToString editorTab =
    case editorTab of
        Configurations ->
            "Configurations"

        LevelEditor ->
            "Level Editor"


editorTabFromString : String -> EditorTab
editorTabFromString str =
    [ Configurations, LevelEditor ]
        |> List.filterMap
            (\editorTab ->
                if editorTabToString editorTab == str then
                    Just editorTab

                else
                    Nothing
            )
        |> List.head
        |> Maybe.withDefault Configurations


type Msg levelEditorMsg
    = NoOp
    | SelectTab EditorTab
    | HideEditor
    | ShowEditor
    | FromLevelEditor levelEditorMsg
    | FromTape Tape.Msg
    | Tick Float
    | ToComputer Computer.Msg


gameUpdate : (Computer -> gameModel -> gameModel) -> (Computer -> levelEditorMsg -> gameModel -> gameModel) -> Msg levelEditorMsg -> Model gameModel -> Model gameModel
gameUpdate updateGameModel updateFromEditor msg model =
    case msg of
        NoOp ->
            model

        SelectTab editorTab ->
            { model | activeEditorTab = editorTab }

        HideEditor ->
            { model | editorIsOn = False }

        ShowEditor ->
            { model | editorIsOn = True }

        FromLevelEditor levelEditorMsg ->
            { model | tape = model.tape |> Tape.updateCurrentGameModelWithEditorMsg updateFromEditor levelEditorMsg }

        FromTape tapeMsg ->
            { model | tape = model.tape |> Tape.update tapeMsg }

        ToComputer computerMsg ->
            { model | tape = model.tape |> Tape.updateCurrentComputer computerMsg }

        Tick deltaTimeInSeconds ->
            { model | tape = model.tape |> Tape.tick updateGameModel deltaTimeInSeconds }



-- VIEW


view :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> Html levelEditorMsg)
    -> Model gameModel
    -> Html (Msg levelEditorMsg)
view viewGameModel viewLevelEditor model =
    let
        computer =
            Tape.currentComputer model.tape

        gameModel =
            Tape.currentGameModel model.tape

        editorOnOffButton msg symbol =
            button
                [ style "font-size" "30px"
                , style "width" "40px"
                , style "height" "40px"
                , onClick msg
                ]
                [ text symbol ]

        optionWith editorTab =
            option
                [ value (editorTabToString editorTab)
                ]
                [ text (editorTabToString editorTab) ]

        editorTabSelection =
            div
                [ style "margin-left" "0px"
                ]
                [ select
                    [ onChange (editorTabFromString >> SelectTab)
                    , value (editorTabToString model.activeEditorTab)
                    , style "width" "200px"
                    , style "height" "40px"
                    , style "font-size" "20px"
                    ]
                    (List.map optionWith [ Configurations, LevelEditor ])
                ]

        viewGame =
            div
                [ style "position" "fixed"
                , style "top" "0px"
                , style "left" "0px"
                , style "width" (String.fromFloat computer.screen.width ++ "px")
                , style "height" (String.fromFloat computer.screen.height ++ "px")
                , style "font-size" "16px"
                ]
                [ Html.map (always NoOp) (viewGameModel computer gameModel)
                ]

        viewEditor =
            div
                [ style "position" "fixed"
                , style "top" "0px"
                , style "left" "0px"
                , style "width" (String.fromFloat 250 ++ "px")
                , style "height" (String.fromFloat computer.screen.height ++ "px")
                , style "font-family" """-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif"""
                , style "font-size" "16px"
                ]
                (if model.editorIsOn then
                    [ div
                        [ style "height" "100px" ]
                        [ editorOnOffButton HideEditor "✕"
                        , editorTabSelection
                        ]
                    , div
                        [ style "height" (String.fromFloat (computer.screen.height - 100) ++ "px") ]
                        [ viewActiveEditor ]
                    ]

                 else
                    [ editorOnOffButton ShowEditor "≡" ]
                )

        viewActiveEditor =
            case model.activeEditorTab of
                Configurations ->
                    div []
                        [ Html.map FromTape (Tape.view model.tape)
                        , Html.map (FromConfigurationsEditor >> ToComputer) (Configurations.view computer.configurations)
                        ]

                LevelEditor ->
                    Html.map FromLevelEditor (viewLevelEditor computer gameModel)
    in
    div
        [ style "touch-action" "none"
        , style "user-select" "none"
        ]
        [ viewGame
        , viewEditor
        ]
