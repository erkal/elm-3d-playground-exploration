port module Playground3d exposing
    ( game, gameWithConfigurations, gameWithConfigurationsAndEditor
    , configurations, getColor, getFloat
    , Computer, Mouse, Screen, Keyboard, toX, toY, toXY
    )

{-|


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
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events exposing (onClick)
import Element.Font as Font
import Html exposing (Html, div)
import Html.Attributes as HA
import Json.Decode as D
import Playground3d.Colors as Colors
import Playground3d.Computer as Computer exposing (Computer, Msg(..), TouchEvent, init)
import Playground3d.ConfigurationEditor as ConfigurationEditor exposing (..)
import Playground3d.Configurations as Configurations exposing (Configurations)
import Playground3d.Icons as Icons
import Playground3d.Tape as Tape exposing (Tape, currentComputer, currentGameModel)
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
    Computer.toX


toXY =
    Computer.toXY


configurations =
    Computer.configurations


getColor =
    Computer.getColor


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
              , distractionFree = False
              , configurationEditor = ConfigurationEditor.init
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
    , distractionFree : Bool
    , configurationEditor : ConfigurationEditor
    , visibility : E.Visibility
    }


type Msg levelEditorMsg
    = NoOp
    | ClickOnDistractionFreeButton
    | ToComputer Computer.Msg
    | Tick Float
    | ConfigurationEditorMsg ConfigurationEditor.Msg
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
            { model | tape = model.tape |> Tape.updateCurrentComputer computerMsg }

        ClickOnDistractionFreeButton ->
            { model | distractionFree = not model.distractionFree }

        Tick deltaTimeInSeconds ->
            { model | tape = model.tape |> Tape.tick updateGameModel deltaTimeInSeconds }

        ConfigurationEditorMsg configurationEditorMsg ->
            { model | configurationEditor = model.configurationEditor |> ConfigurationEditor.update configurationEditorMsg }

        LevelEditorMsg levelEditorMsg ->
            { model | tape = model.tape |> Tape.updateCurrentGameModelWithEditorMsg updateFromEditor levelEditorMsg }

        TapeMsg tapeMsg ->
            { model | tape = model.tape |> Tape.update tapeMsg }



-- VIEW


layoutParams =
    { leftStripeWidth = 54
    , leftBarWidth = 260
    , rightBarWidth = 260
    , topBarHeight = 54
    }


view :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> Html levelEditorMsg)
    -> Model gameModel
    -> Html (Msg levelEditorMsg)
view viewGameModel viewLevelEditor model =
    let
        computer =
            currentComputer model.tape

        gameModel =
            currentGameModel model.tape

        yingYangInDistractionFree : Element (Msg levelEditorMsg)
        yingYangInDistractionFree =
            el
                [ width (px layoutParams.leftStripeWidth)
                , alignTop
                , padding 7
                , onClick ClickOnDistractionFreeButton
                , pointer
                , htmlAttribute (HA.title "Deactivate Distraction Free Mode (A)")
                , htmlAttribute (HA.style "pointer-events" "auto")
                ]
                (html (Icons.draw40pxWithColor Colors.lightGray Icons.icons.yinAndYang))
    in
    layoutWith
        { options = [ focusStyle { borderColor = Nothing, backgroundColor = Nothing, shadow = Nothing } ] }
        [ width (px (ceiling computer.screen.width))
        , height (px (ceiling computer.screen.height))
        , htmlAttribute (HA.style "-webkit-font-smoothing" "antialiased")
        , htmlAttribute (HA.style "pointer-events" "none")
        , htmlAttribute (HA.style "touch-action" "none")
        , htmlAttribute (HA.style "user-select" "none")
        , inFront
            (if model.distractionFree then
                yingYangInDistractionFree

             else
                row
                    [ width fill
                    , height fill
                    ]
                    [ leftStripe model

                    --, leftBar m
                    --, midCol
                    --, rightBar m
                    ]
            )
        ]
        (html (Html.map (always NoOp) (viewGameModel computer gameModel)))


leftStripe : Model gameModel -> Element (Msg levelEditorMsg)
leftStripe model =
    let
        distractionFreeButton =
            el
                [ width (px layoutParams.leftStripeWidth |> minimum layoutParams.leftStripeWidth)
                , padding 7
                , onClick ClickOnDistractionFreeButton
                , Border.widthEach { bottom = 1, left = 0, right = 0, top = 0 }
                , Border.color Colors.menuBorder
                , pointer
                , htmlAttribute (HA.title "Activate Distraction Free Mode (A)")
                ]
                (html (Icons.draw40pxWithColor Colors.leftStripeIconSelected Icons.icons.yinAndYang))

        modeButton title activeMode iconPath =
            let
                color =
                    if activeMode == model.configurationEditor.activeMode then
                        Colors.white

                    else
                        Colors.leftStripeIconSelected
            in
            el
                [ htmlAttribute (HA.title title)
                , onClick (ConfigurationEditorMsg (SelectMode activeMode))
                , pointer
                , padding 7
                ]
                (html (Icons.draw40pxWithColor color iconPath))

        radioButtonsForMode =
            column
                [ alignTop
                ]
                [ modeButton "Edit" Edit Icons.icons.folder
                , modeButton "Import/Export" ImportExport Icons.icons.listOfThree
                ]

        githubButton =
            newTabLink
                [ htmlAttribute (HA.title "Source Code")
                , alignBottom
                , pointer
                , padding 7
                ]
                { url = "https://github.com/erkal/elm-3d-playground-exploration"
                , label = html (Icons.draw40pxWithColor Colors.yellow Icons.icons.githubCat)
                }
    in
    column
        [ Background.color Colors.black
        , width (px layoutParams.leftStripeWidth)
        , height fill
        , scrollbarY
        , htmlAttribute (HA.style "pointer-events" "auto")
        ]
        [ distractionFreeButton
        , radioButtonsForMode
        , githubButton
        ]
