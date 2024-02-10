port module Playground.Playground exposing
    ( application
    , boolConfig, colorConfig, configBlock, floatConfig, intConfig, optionsConfig
    , getBool, getColor, getFloat, getInt, getOption
    , Computer, Keyboard, Pointer, Screen
    , Playground, simpleApplication
    )

{-|


# Create

@docs application


# Declaring Configurations

@docs boolConfig, colorConfig, configBlock, floatConfig, intConfig, optionsConfig


# Getting Configurations

@docs getBool, getColor, getFloat, getInt, getOption


# Getting Inputs

@docs Computer, Keyboard, Pointer, Screen, toX, toXY, toY

-}

import Browser
import Html exposing (Attribute, Html, a, button, div, text)
import Html.Attributes as HA exposing (class, href, style, target)
import Html.Events
import Playground.Computer as Computer exposing (Computer, Inputs, Wheel)
import Playground.Configurations as Configurations exposing (Block, Config(..), Configurations)
import Playground.ConfigurationsView as ConfigurationsGUI
import Playground.Icons as Icons
import Playground.Tape as Tape exposing (Message, Tape, currentAppModel, currentComputer)
import Round
import Tools.HtmlHelpers.HtmlHelpers exposing (classIf, hiddenIf, styleIf)
import Tools.SelectList.SelectList as SelectList



-- FLAGS


type alias Flags =
    { inputs : Inputs }



-- PORTS


port tick : (Inputs -> msg) -> Sub msg



-- API


type alias SimpleApp appModel appMsg =
    { initialConfigurations : Configurations
    , init : Computer -> appModel
    , update : Computer -> Message appMsg -> appModel -> appModel
    , view : Computer -> appModel -> Html appMsg
    , hasTape : Bool
    }


type alias App appModel appMsg =
    { initialConfigurations : Configurations
    , init : Computer -> appModel
    , update : Computer -> Message appMsg -> appModel -> ( appModel, Cmd appMsg )
    , subscriptions : appModel -> Sub appMsg
    , view : Computer -> appModel -> Html appMsg
    , hasTape : Bool
    }



-- Create


simpleApplication : SimpleApp appModel appMsg -> Program Flags (Model appModel) (Msg appMsg)
simpleApplication simpleApp =
    application
        { initialConfigurations = simpleApp.initialConfigurations
        , init = simpleApp.init
        , update = \computer msg appModel -> ( simpleApp.update computer msg appModel, Cmd.none )
        , subscriptions = \_ -> Sub.none
        , view = simpleApp.view
        , hasTape = simpleApp.hasTape
        }


application : App appModel appMsg -> Program Flags (Model appModel) (Msg appMsg)
application app =
    Browser.element
        { init = init app
        , update = update app
        , subscriptions = subscriptions app
        , view = view app
        }



-- Declaring Configurations


configBlock =
    Configurations.configBlock


boolConfig name value =
    ( name, Configurations.BoolConfig value )


intConfig name ( min, max ) value =
    ( name, Configurations.IntConfig ( min, max ) value )


floatConfig name ( min, max ) value =
    ( name, Configurations.FloatConfig ( min, max ) value )


colorConfig name value =
    ( name, Configurations.ColorConfig value )


optionsConfig name ( optionsBefore, optionSelected, optionsAfter ) =
    ( name, Configurations.OptionsConfig (SelectList.create ( optionsBefore, optionSelected, optionsAfter )) )



-- Getting Configurations


getBool =
    Computer.getBool


getColor =
    Computer.getColor


getInt =
    Computer.getInt


getFloat =
    Computer.getFloat


getOption =
    Computer.getOption



-- Getting Inputs


type alias Playground appModel appMsg =
    Program Flags (Model appModel) (Msg appMsg)


type alias Computer =
    Computer.Computer


type alias Pointer =
    Computer.Pointer


type alias Screen =
    Computer.Screen


type alias Keyboard =
    Computer.Keyboard



-- INIT


type alias Model appModel =
    { tape : Tape appModel
    , distractionFree : Bool
    , leftBarState : LeftBarState
    }


type LeftBarState
    = ShowingNothing
    | ShowingInputs
    | ShowingConfigurations


init : App appModel appMsg -> Flags -> ( Model appModel, Cmd msg )
init app flags =
    ( { tape =
            (if app.hasTape then
                Tape.init

             else
                Tape.initNoTape
            )
                (Computer.init app.initialConfigurations flags.inputs)
                app.init
      , distractionFree = flags.inputs.screen.width < 500
      , leftBarState = ShowingNothing
      }
    , Cmd.none
    )



-- UPDATE


type Msg appMsg
    = ClickedDistractionFreeButton
    | ClickedOnShowInputsButton
    | ClickedOnShowConfigurationsButton
    | InputsArrived Inputs
    | FromConfigurationsEditor Configurations.Msg
    | FromApp appMsg
    | FromTapeControls Tape.Msg


update : App appModel appMsg -> Msg appMsg -> Model appModel -> ( Model appModel, Cmd (Msg appMsg) )
update app msg model =
    model
        |> handleClickOnDistractionFreeButton msg
        |> handleClickOnLeftBarButtonsButton msg
        |> handleTapeScreenControls msg
        |> handleConfigurationsMsg msg
        |> handleAppUpdate app msg


handleClickOnDistractionFreeButton : Msg appMsg -> Model appModel -> Model appModel
handleClickOnDistractionFreeButton msg model =
    case msg of
        ClickedDistractionFreeButton ->
            { model | distractionFree = not model.distractionFree }

        _ ->
            model


handleClickOnLeftBarButtonsButton : Msg appMsg -> Model appModel -> Model appModel
handleClickOnLeftBarButtonsButton msg model =
    case msg of
        ClickedOnShowInputsButton ->
            { model
                | leftBarState =
                    case model.leftBarState of
                        ShowingInputs ->
                            ShowingNothing

                        _ ->
                            ShowingInputs
            }

        ClickedOnShowConfigurationsButton ->
            { model
                | leftBarState =
                    case model.leftBarState of
                        ShowingConfigurations ->
                            ShowingNothing

                        _ ->
                            ShowingConfigurations
            }

        _ ->
            model


handleConfigurationsMsg : Msg appMsg -> Model appModel -> Model appModel
handleConfigurationsMsg msg model =
    case msg of
        FromConfigurationsEditor configurationsMsg ->
            { model | tape = model.tape |> Tape.updateConfigurations configurationsMsg }

        _ ->
            model


handleTapeScreenControls : Msg appMsg -> Model appModel -> Model appModel
handleTapeScreenControls msg model =
    case msg of
        FromTapeControls tapeMsg ->
            { model | tape = model.tape |> Tape.updateOnTapeMsg tapeMsg }

        _ ->
            model


handleAppUpdate : App appModel appMsg -> Msg appMsg -> Model appModel -> ( Model appModel, Cmd (Msg appMsg) )
handleAppUpdate app msg model =
    case msg of
        FromApp appMsg ->
            let
                ( newTape, appCmd ) =
                    model.tape |> Tape.updateOnAppMsg app.update appMsg
            in
            ( { model | tape = newTape }
            , Cmd.map FromApp appCmd
            )

        InputsArrived inputs ->
            let
                ( newTape, appCmd ) =
                    model.tape |> Tape.updateOnTick app.update inputs
            in
            ( { model | tape = newTape }
            , Cmd.map FromApp appCmd
            )

        _ ->
            ( model
            , Cmd.none
            )



-- SUBSCRIPTIONS


subscriptions : App appModel appMsg -> Model appModel -> Sub (Msg appMsg)
subscriptions app model =
    Sub.batch
        [ tick InputsArrived
        , Sub.map FromApp (app.subscriptions (Tape.currentAppModel model.tape))
        ]



-- VIEW


view : App appModel appMsg -> Model appModel -> Html (Msg appMsg)
view app model =
    let
        computer =
            currentComputer model.tape
    in
    div
        [ class "absolute bg-white"
        , class "overflow-hidden"
        , class "select-none"
        , class "antialiased"
        , style "width" (String.fromFloat computer.screen.width ++ "px")
        , style "height" (String.fromFloat computer.screen.height ++ "px")
        ]
        [ Html.map FromApp (app.view computer (currentAppModel model.tape))
        , viewHUD computer model
        ]


leftBarButton : Bool -> Bool -> Msg appMsg -> String -> Html (Msg appMsg) -> Html (Msg appMsg)
leftBarButton hidden isSelected msg title icon =
    button
        [ class "p-2 w-12 h-12"
        , class "text-white/40 hover:text-white/80"
        , classIf isSelected "bg-white/10"
        , hiddenIf hidden
        , Html.Events.onClick msg
        , HA.title title
        ]
        [ icon ]


iconLink : String -> String -> Html msg -> Html msg
iconLink title linkAddress icon =
    a
        [ class "p-2 w-12 h-12"
        , class "text-white/40 hover:text-white/80"
        , href linkAddress
        , target "_blank"
        , HA.title title
        ]
        [ icon ]


homeButton : Html msg
homeButton =
    iconLink "Home" "../WebPage/index.html" Icons.icons.home


twitterLink : Html msg
twitterLink =
    iconLink "Twitter" "https://twitter.com/AzizErkalSelman" Icons.icons.twitter


githubLink : Html msg
githubLink =
    iconLink "GitHub" "https://github.com/erkal" Icons.icons.githubCat


viewHUD : Computer -> Model appModel -> Html (Msg appMsg)
viewHUD computer model =
    let
        yinYangButton : Html (Msg appMsg)
        yinYangButton =
            leftBarButton False False ClickedDistractionFreeButton "Distraction Free Mode" Icons.icons.yinYang

        configurationsButton : Html (Msg appMsg)
        configurationsButton =
            leftBarButton (List.isEmpty (Tape.currentComputer model.tape).configurations) (model.leftBarState == ShowingConfigurations) ClickedOnShowConfigurationsButton "Configurations" Icons.icons.gear

        inputsButton : Html (Msg appMsg)
        inputsButton =
            leftBarButton False (model.leftBarState == ShowingInputs) ClickedOnShowInputsButton "Inputs" Icons.icons.computer

        leftStripe : Html (Msg appMsg)
        leftStripe =
            div
                [ class "w-12 h-full bg-black/80"
                , class "pointer-events-auto"
                , class "flex flex-col justify-between"
                ]
                [ div [ class "flex flex-col" ]
                    [ yinYangButton
                    , configurationsButton
                    , div [ hiddenIf (Tape.isNoTape model.tape) ] [ inputsButton ]
                    ]
                , div [ class "flex flex-col" ]
                    [ twitterLink
                    , githubLink
                    , homeButton
                    ]
                ]

        viewConfigurations : Html (Msg appMsg)
        viewConfigurations =
            div
                [ class "overflow-y-auto left-12 bg-black/20"
                , style "width" "260px"
                , style "height" <| String.fromFloat computer.screen.height ++ "px"
                , class "pointer-events-auto"
                , hiddenIf (model.leftBarState /= ShowingConfigurations)
                ]
                [ Html.map FromConfigurationsEditor (ConfigurationsGUI.viewConfigurations (currentComputer model.tape).configurations)
                ]

        viewInputs : Html (Msg appMsg)
        viewInputs =
            div
                [ class "overflow-y-auto left-12 bg-black/20"
                , style "width" "260px"
                , style "height" <| String.fromFloat (Tape.currentComputer model.tape).screen.height ++ "px"
                , class "pointer-events-auto"
                , hiddenIf (model.leftBarState /= ShowingInputs)
                ]
                [ viewComputer model
                ]

        viewTape : Html (Msg appMsg)
        viewTape =
            div
                [ class "absolute bottom-0 right-0 w-fit h-12 bg-black rounded-tl-lg"
                , class "pointer-events-auto"
                ]
                [ Html.map FromTapeControls (Tape.view model.tape) ]
    in
    if model.distractionFree then
        div
            [ class "prevent-elm-inputs"
            , class "absolute top-0 left-0 w-12 h-12"
            ]
            [ yinYangButton
            ]

    else
        div
            [ class "prevent-elm-inputs"
            , class "absolute top-0 left-0 h-full w-full"
            , class "pointer-events-none"
            ]
            [ div
                [ class "absolute left-0 top-0 h-full"
                , class "flex flex-row"
                ]
                [ leftStripe
                , viewConfigurations
                , viewInputs
                ]
            , div
                [ class "absolute left-0 top-0"
                , class "pointer-events-none"
                , hiddenIf (Tape.isRecording model.tape || Tape.isNoTape model.tape)
                ]
                [ viewPointer computer model
                ]
            , viewTape
            ]


viewPointer : Computer -> Model appModel -> Html msg
viewPointer computer model =
    div
        [ class "absolute w-8 h-8"
        , style "left" (String.fromFloat (computer.pointer.x + 0.5 * computer.screen.width) ++ "px")
        , style "top" (String.fromFloat (-computer.pointer.y + 0.5 * computer.screen.height) ++ "px")
        ]
        [ div
            [ class <|
                if computer.pointer.isDown then
                    "text-black/80"

                else
                    "text-black/40"
            ]
            [ Icons.icons.pointer ]
        ]


viewComputer : Model appModel -> Html (Msg appMsg)
viewComputer model =
    let
        computer : Computer
        computer =
            currentComputer model.tape

        boolAsText : Bool -> String
        boolAsText bool =
            if bool then
                "True"

            else
                "False"

        fpsAsText : Tape appModel -> String
        fpsAsText tape =
            case Tape.getFps tape of
                Nothing ->
                    "..."

                Just fps ->
                    String.fromInt fps
    in
    div
        [ class "p-6 text-sm text-white/80"
        , class "flex flex-col gap-8"
        ]
        [ div [ class "flex flex-col gap-2" ]
            [ div [ class "text-2xl font-bold" ] [ text "Tape" ]
            , div [] [ Html.text ("fps: " ++ fpsAsText model.tape) ]
            , div [] [ Html.text ("frame: " ++ (model.tape |> Tape.getCurrentFrameIndex |> String.fromInt)) ]
            ]
        , div [ class "flex flex-col gap-2" ]
            [ div [ class "text-2xl font-bold" ] [ text "Inputs" ]
            , div [] [ Html.text ("pressedKeys: " ++ (computer.keyboard.pressedKeys |> List.intersperse " " |> String.concat)) ]
            , div [] [ Html.text ("keyboard.shift: " ++ (computer.keyboard.shift |> boolAsText)) ]
            , div [] [ Html.text ("keyboard.control: " ++ (computer.keyboard.control |> boolAsText)) ]
            , div [] [ Html.text ("downs: " ++ (computer.keyboard.downs |> List.intersperse " " |> String.concat)) ]
            , div [] [ Html.text ("delta time: " ++ Round.round 4 computer.dt) ]
            , div [] [ Html.text ("clock: " ++ Round.round 4 computer.clock) ]
            , div []
                [ Html.text
                    ("pointer is down: "
                        ++ (if computer.pointer.isDown then
                                "yes"

                            else
                                "no"
                           )
                    )
                ]
            , div [] [ Html.text ("pointer.x: " ++ Round.round 2 computer.pointer.x) ]
            , div [] [ Html.text ("pointer.y: " ++ Round.round 2 computer.pointer.y) ]
            , div [] [ Html.text ("wheel deltaX: " ++ String.fromFloat computer.wheel.deltaX) ]
            , div [] [ Html.text ("wheel deltaY: " ++ String.fromFloat computer.wheel.deltaY) ]
            ]
        ]
