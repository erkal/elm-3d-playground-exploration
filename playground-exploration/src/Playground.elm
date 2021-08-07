port module Playground exposing
    ( game, gameWithConfigurations, gameWithConfigurationsAndEditor
    , getColor, getFloat, getBool
    , Computer, Mouse, Screen, Keyboard, toX, toY, toXY
    , boolConfig, colorConfig, configBlock, floatConfig, getAxis, getInt, intConfig
    )

{-|


# Playground

@docs game, gameWithConfigurations, gameWithConfigurationsAndEditor


# Configurations

@docs configurations, getColor, getFloat, getBool


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
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events exposing (onClick)
import Element.Font as Font
import Html exposing (Html)
import Html.Attributes as HA
import Json.Decode as D
import Playground.Colors as Colors
import Playground.Computer as Computer exposing (Computer, Msg(..), TouchEvent, init)
import Playground.Configurations as Configurations exposing (Block, Config(..), Configurations)
import Playground.ConfigurationsGUI as ConfigurationsGUI
import Playground.Icons as Icons
import Playground.InputConfiguration exposing (InputConfiguration)
import Playground.Tape as Tape exposing (Tape, currentComputer, currentGameModel)
import Task



-- PORTS


port touchStart : (List TouchEvent -> msg) -> Sub msg


port touchMove : (List TouchEvent -> msg) -> Sub msg


port touchEnd : (List TouchEvent -> msg) -> Sub msg


port touchCancel : (List TouchEvent -> msg) -> Sub msg



-- FOR EXPOSING


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
    Computer.toY


toXY =
    Computer.toXY


getAxis =
    Computer.getAxis


configBlock =
    Configurations.configBlock


boolConfig key value =
    ( key, Configurations.Bool value )


intConfig key ( min, max ) value =
    ( key, Configurations.Int ( min, max ) value )


floatConfig key ( min, max ) value =
    ( key, Configurations.Float ( min, max ) value )


colorConfig key value =
    ( key, Configurations.Color value )


getBool =
    Computer.getBool


getColor =
    Computer.getColor


getInt =
    Computer.getInt


getFloat =
    Computer.getFloat



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
        []
        []
        initGameModel


gameWithConfigurations :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> InputConfiguration
    -> (Computer -> gameModel)
    -> Program Flags (Model gameModel) (Msg Never)
gameWithConfigurations viewGameModel updateGameModel initialConfigurations inputConfiguration initGameModel =
    gameWithConfigurationsAndEditor
        viewGameModel
        updateGameModel
        initialConfigurations
        inputConfiguration
        initGameModel
        (\_ _ -> none)
        (\_ _ gameModel -> gameModel)


gameWithConfigurationsAndEditor :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> InputConfiguration
    -> (Computer -> gameModel)
    -> (Computer -> gameModel -> Element levelEditorMsg)
    -> (Computer -> levelEditorMsg -> gameModel -> gameModel)
    -> Program Flags (Model gameModel) (Msg levelEditorMsg)
gameWithConfigurationsAndEditor viewGameModel updateGameModel initialConfigurations inputConfiguration initGameModel viewEditor updateFromEditor =
    let
        init flags =
            let
                initialComputer =
                    Computer.init flags initialConfigurations inputConfiguration
            in
            ( { activeMode = ConfigurationsMode
              , tape = Tape.init initialComputer initGameModel
              , distractionFree = True
              , visibility = E.Visible
              }
            , Task.perform (GotViewport >> ToComputer) Dom.getViewport
            )

        update msg model =
            ( gameUpdate updateGameModel updateFromEditor msg model
            , Cmd.none
            )
    in
    Browser.element
        { init = init
        , view = view viewGameModel viewEditor
        , update = update
        , subscriptions = subscriptions
        }



-- SUBSCRIPTIONS


subscriptions : Model gameModel -> Sub (Msg levelEditorMsg)
subscriptions { visibility } =
    case visibility of
        E.Hidden ->
            E.onVisibilityChange VisibilityChanged
                |> Sub.map ToComputer

        E.Visible ->
            Sub.batch <|
                E.onAnimationFrameDelta ((*) 0.001 >> Tick)
                    :: List.map (Sub.map ToComputer)
                        [ E.onResize Resized
                        , E.onKeyUp (D.map (KeyChanged False) (D.field "key" D.string))
                        , E.onKeyDown (D.map (KeyChanged True) (D.field "key" D.string))
                        , E.onVisibilityChange VisibilityChanged
                        , E.onMouseDown (D.succeed MouseDown)
                        , E.onMouseUp (D.succeed MouseUp)
                        , E.onMouseMove (D.map2 MouseMove (D.field "pageX" D.float) (D.field "pageY" D.float))
                        , touchStart TouchStart
                        , touchMove TouchMove
                        , touchEnd TouchEnd
                        , touchCancel TouchCancel
                        ]


type alias Model gameModel =
    { activeMode : Mode
    , tape : Tape gameModel
    , distractionFree : Bool
    , visibility : E.Visibility
    }


type Mode
    = ConfigurationsMode
    | Thanks


type Msg levelEditorMsg
    = NoOp
    | ClickOnDistractionFreeButton
    | ToComputer Computer.Msg
    | Tick Float
    | SelectMode Mode
    | LevelEditorMsg levelEditorMsg
    | TapeMsg Tape.Msg


gameUpdate :
    (Computer -> gameModel -> gameModel)
    -> (Computer -> levelEditorMsg -> gameModel -> gameModel)
    -> Msg levelEditorMsg
    -> Model gameModel
    -> Model gameModel
gameUpdate updateGameModel updateFromEditor msg model =
    case msg of
        NoOp ->
            model

        ToComputer computerMsg ->
            { model
                | distractionFree =
                    case computerMsg of
                        GotViewport { scene } ->
                            scene.width <= 600

                        _ ->
                            model.distractionFree
                , tape = model.tape |> Tape.updateCurrentComputer computerMsg
            }

        ClickOnDistractionFreeButton ->
            { model | distractionFree = not model.distractionFree }

        Tick deltaTimeInSeconds ->
            { model | tape = model.tape |> Tape.tick updateGameModel deltaTimeInSeconds }

        SelectMode mode ->
            { model | activeMode = mode }

        LevelEditorMsg levelEditorMsg ->
            { model | tape = model.tape |> Tape.updateCurrentGameModelWithEditorMsg updateFromEditor levelEditorMsg }

        TapeMsg tapeMsg ->
            { model | tape = model.tape |> Tape.update tapeMsg }



-- VIEW


layoutParams =
    { leftStripeWidth = 54
    , leftBarWidth = 260
    }


view :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> Element levelEditorMsg)
    -> Model gameModel
    -> Html (Msg levelEditorMsg)
view viewGameModel viewLevelEditor model =
    let
        computer =
            currentComputer model.tape

        gameModel =
            currentGameModel model.tape
    in
    layoutWith
        { options = [ focusStyle { borderColor = Nothing, backgroundColor = Nothing, shadow = Nothing } ] }
        [ width (px (ceiling computer.screen.width))
        , height (px (ceiling computer.screen.height))
        , htmlAttribute (HA.style "-webkit-font-smoothing" "antialiased")
        , htmlAttribute (HA.style "pointer-events" "none")
        , htmlAttribute (HA.style "touch-action" "none")
        , htmlAttribute (HA.style "user-select" "none")

        --
        , inFront (Element.map LevelEditorMsg (viewLevelEditor computer gameModel))
        , inFront (viewGUI model)
        ]
        (html (Html.map (always NoOp) (viewGameModel computer gameModel)))


viewGUI : Model gameModel -> Element (Msg levelEditorMsg)
viewGUI model =
    let
        yingYangInDistractionFree =
            el
                [ width (px layoutParams.leftStripeWidth)
                , alignTop
                , padding 4
                , onClick ClickOnDistractionFreeButton
                , pointer
                , htmlAttribute (HA.title "Deactivate Distraction Free Mode (A)")
                ]
                (html (Icons.draw 46 Colors.black Icons.icons.yinAndYang))
    in
    if model.distractionFree then
        yingYangInDistractionFree

    else
        row
            [ width (px (layoutParams.leftStripeWidth + layoutParams.leftBarWidth))
            , height fill
            ]
            [ leftStripe model.activeMode
            , leftBar model.activeMode model.tape
            ]


leftStripe : Mode -> Element (Msg levelEditorMsg)
leftStripe activeMode =
    let
        distractionFreeButton =
            el
                [ width (px layoutParams.leftStripeWidth)
                , padding 4
                , onClick ClickOnDistractionFreeButton
                , Border.widthEach { bottom = 1, left = 0, right = 0, top = 0 }
                , Border.color Colors.menuBorder
                , pointer
                , htmlAttribute (HA.title "Activate Distraction Free Mode")
                ]
                (html (Icons.draw 46 Colors.white Icons.icons.yinAndYang))

        modeButton title mode iconPath =
            let
                color =
                    if mode == activeMode then
                        Colors.white

                    else
                        Colors.leftStripeIconSelected
            in
            el
                [ htmlAttribute (HA.title title)
                , onClick (SelectMode mode)
                , pointer
                , padding 7
                ]
                (html (Icons.draw 40 color iconPath))

        radioButtonsForMode =
            column
                [ alignTop
                ]
                [ modeButton "Configurations" ConfigurationsMode Icons.icons.sliders

                --, modeButton "Thanks" Thanks Icons.icons.heart
                ]

        githubButton =
            column []
                [ newTabLink
                    [ htmlAttribute (HA.title "Twitter")
                    , alignBottom
                    , pointer
                    , padding 7
                    ]
                    { url = "https://twitter.com/AzizErkalSelman"
                    , label = html (Icons.draw 40 Colors.twitterBlue Icons.icons.twitter)
                    }
                , newTabLink
                    [ htmlAttribute (HA.title "Source Code")
                    , alignBottom
                    , pointer
                    , padding 7
                    ]
                    { url = "https://github.com/erkal/elm-3d-playground-exploration"
                    , label = html (Icons.draw 40 Colors.githubCatColor Icons.icons.githubCat)
                    }
                ]
    in
    column
        [ width (px layoutParams.leftStripeWidth)
        , height fill
        , scrollbarY
        , Background.color Colors.black
        ]
        [ distractionFreeButton
        , radioButtonsForMode
        , githubButton
        ]


leftBar : Mode -> Tape gameModel -> Element (Msg levelEditorMsg)
leftBar activeMode tape =
    column
        [ if (tape |> currentComputer |> .screen |> .width) > 600 then
            Background.color Colors.menuBackground

          else
            Background.color Colors.transparent
        , Border.widthEach { bottom = 0, left = 0, right = 1, top = 0 }
        , Border.color Colors.menuBorder
        , width (px layoutParams.leftBarWidth)
        , height fill
        ]
        [ case activeMode of
            ConfigurationsMode ->
                column
                    [ width fill
                    , height fill
                    , padding 14
                    , spacing 14
                    ]
                    [ viewTape tape
                    , viewConfigurations tape
                    ]

            Thanks ->
                none
        ]


viewTape : Tape gameModel -> Element (Msg levelEditorMsg)
viewTape tape =
    column
        [ width fill
        , spacing 14
        , paddingEach { bottom = 20, left = 0, right = 0, top = 0 }
        , Border.widthEach { bottom = 1, left = 0, right = 0, top = 0 }
        , Border.color Colors.menuBorder
        ]
        [ el [ Font.size 16, Font.bold, Font.color Colors.lightText ] (text "Time Travel")
        , Element.map TapeMsg (Tape.view tape)
        ]


viewConfigurations : Tape gameModel -> Element (Msg levelEditorMsg)
viewConfigurations tape =
    column
        [ width fill
        , height fill
        ]
        [ row
            [ spacing 14
            , width fill
            ]
            [--, Input.button [ alignRight ]
             --    { onPress = Nothing
             --    , label = html (Icons.draw 20 Colors.lightGray Icons.icons.download)
             --    }
             --, Input.button [ alignRight ]
             --    { onPress = Nothing
             --    , label = html (Icons.draw 20 Colors.lightGray Icons.icons.upload)
             --    }
            ]
        , Element.map (FromConfigurationsEditor >> ToComputer)
            (ConfigurationsGUI.view (currentComputer tape).configurations)
        ]
