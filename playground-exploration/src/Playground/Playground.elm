port module Playground.Playground exposing
    ( application
    , boolConfig, colorConfig, configBlock, floatConfig, intConfig
    , getBool, getColor, getFloat, getInt
    , Computer, Keyboard, Pointer, Screen, toX, toXY, toY
    )

{-|


# Create

@docs application


# Declaring Configurations

@docs boolConfig, colorConfig, configBlock, floatConfig, intConfig


# Getting Configurations

@docs getBool, getColor, getFloat, getInt


# Getting Inputs

@docs Computer, Keyboard, Pointer, Screen, toX, toXY, toY

-}

import Browser
import Html exposing (Attribute, Html, a, button, div, hr, pre, text)
import Html.Attributes as HA exposing (class, href, id, style, target)
import Html.Events
import Playground.Computer as Computer exposing (Computer, Inputs, Wheel)
import Playground.Configurations as Configurations exposing (Block, Config(..), Configurations)
import Playground.ConfigurationsView as ConfigurationsGUI
import Playground.Icons as Icons
import Playground.Tape as Tape exposing (Message, Tape, currentAppModel, currentComputer)
import Round



-- FLAGS


type alias Flags =
    { inputs : Inputs }



-- PORTS


port tick : (Inputs -> msg) -> Sub msg



-- API


type alias App appModel appMsg =
    { initialConfigurations : Configurations
    , init : Computer -> appModel
    , update : Computer -> Message appMsg -> appModel -> appModel
    , subscriptions : appModel -> Sub appMsg
    , view : Computer -> appModel -> Html appMsg
    , hasTape : Bool
    }



-- Create


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


boolConfig key value =
    ( key, Configurations.BoolConfig value )


intConfig key ( min, max ) value =
    ( key, Configurations.IntConfig ( min, max ) value )


floatConfig key ( min, max ) value =
    ( key, Configurations.FloatConfig ( min, max ) value )


colorConfig key value =
    ( key, Configurations.ColorConfig value )



-- Getting Configurations


getBool =
    Computer.getBool


getColor =
    Computer.getColor


getInt =
    Computer.getInt


getFloat =
    Computer.getFloat



-- Getting Inputs


type alias Computer =
    Computer.Computer


type alias Pointer =
    Computer.Pointer


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



-- INIT


type alias Model appModel =
    { tape : Tape appModel
    , distractionFree : Bool
    , inputsAreShown : Bool
    }


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
      , inputsAreShown = False
      }
    , Cmd.none
    )



-- UPDATE


type Msg appMsg
    = ClickedDistractionFreeButton
    | ClickedShowInputsToggleButton
    | InputsArrived Inputs
    | FromConfigurationsEditor Configurations.Msg
    | FromApp appMsg
    | FromTapeControls Tape.Msg


update : App appModel appMsg -> Msg appMsg -> Model appModel -> ( Model appModel, Cmd msg )
update app msg model =
    ( updateHelper app msg model
    , Cmd.none
    )


updateHelper : App appModel appMsg -> Msg appMsg -> Model appModel -> Model appModel
updateHelper app msg model =
    model
        |> handleClickOnDistractionFreeButton msg
        |> handleClickOnShowInputsButton msg
        |> handleTapeMsg msg
        |> handleConfigurationsMsg msg
        |> handleAppUpdate app msg


handleClickOnDistractionFreeButton : Msg appMsg -> Model appModel -> Model appModel
handleClickOnDistractionFreeButton msg model =
    case msg of
        ClickedDistractionFreeButton ->
            { model | distractionFree = not model.distractionFree }

        _ ->
            model


handleClickOnShowInputsButton : Msg appMsg -> Model appModel -> Model appModel
handleClickOnShowInputsButton msg model =
    case msg of
        ClickedShowInputsToggleButton ->
            { model | inputsAreShown = not model.inputsAreShown }

        _ ->
            model


handleConfigurationsMsg : Msg appMsg -> Model appModel -> Model appModel
handleConfigurationsMsg msg model =
    case msg of
        FromConfigurationsEditor configurationsMsg ->
            { model | tape = model.tape |> Tape.updateConfigurations configurationsMsg }

        _ ->
            model


handleTapeMsg : Msg appMsg -> Model appModel -> Model appModel
handleTapeMsg msg model =
    case msg of
        FromTapeControls tapeMsg ->
            { model | tape = model.tape |> Tape.updateOnTapeMsg tapeMsg }

        _ ->
            model


handleAppUpdate : App appModel appMsg -> Msg appMsg -> Model appModel -> Model appModel
handleAppUpdate app msg model =
    case msg of
        FromApp appMsg ->
            { model | tape = model.tape |> Tape.updateOnAppMsg app.update appMsg }

        InputsArrived inputs ->
            { model | tape = model.tape |> Tape.updateOnTick app.update inputs }

        _ ->
            model



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
        [ class "bg-black/40"
        , class "select-none"
        , class "antialiased"
        , style "width" (String.fromFloat computer.screen.width ++ "px")
        , style "height" (String.fromFloat computer.screen.height ++ "px")
        ]
        [ Html.map FromApp (app.view computer (currentAppModel model.tape))
        , viewHUD computer model
        ]


viewHUD : Computer -> Model appModel -> Html (Msg appMsg)
viewHUD computer model =
    let
        yinYangButton : Html (Msg appMsg)
        yinYangButton =
            button
                [ class <|
                    if model.distractionFree then
                        "text-black/20 hover:text-black/80"

                    else
                        "text-white/40 hover:text-white/80"
                , Html.Events.onClick ClickedDistractionFreeButton
                , HA.title "Distraction Free Mode"
                ]
                [ Icons.icons.yinYang ]

        toggleInputsViewButton : Html (Msg appMsg)
        toggleInputsViewButton =
            button
                [ class <|
                    if model.distractionFree then
                        "text-black/20 hover:text-black/80"

                    else
                        "text-white/40 hover:text-white/80"
                , Html.Events.onClick ClickedShowInputsToggleButton
                , HA.title "Toggle Inputs View"
                , class "absolute bottom-0 w-10 h-10 m-4"
                , class "pointer-events-auto"
                ]
                [ Icons.icons.computer ]

        homeButton : Html msg
        homeButton =
            div [ class "absolute w-8 top-12" ]
                [ a
                    [ class "text-white/40 hover:text-white/80"
                    , href "../WebPage/index.html"
                    , HA.title "Home of all examples"
                    ]
                    [ Icons.icons.home ]
                ]

        twitterLink : Html msg
        twitterLink =
            div [ class "absolute w-8 bottom-12" ]
                [ a
                    [ class "text-white/40 hover:text-white"
                    , href "https://twitter.com/AzizErkalSelman"
                    , target "_blank"
                    ]
                    [ Icons.icons.twitter ]
                ]

        githubLink : Html msg
        githubLink =
            div [ class "absolute w-8 bottom-2" ]
                [ a
                    [ class "text-white/40 hover:text-white"
                    , href "https://github.com/erkal/elm-3d-playground-exploration"
                    , target "_blank"
                    ]
                    [ Icons.icons.githubCat ]
                ]

        widthOfLeftStripe =
            40

        widthOfConfigurationsEditor =
            if List.isEmpty computer.configurations then
                0

            else
                260

        heightOfTape =
            64

        ( heightOfConfigurationsEditor, leftOfTape, widthOfTape ) =
            if computer.screen.width > 640 then
                ( computer.screen.height
                , widthOfLeftStripe + widthOfConfigurationsEditor
                , computer.screen.width - (widthOfLeftStripe + widthOfConfigurationsEditor)
                )

            else
                ( computer.screen.height - heightOfTape
                , widthOfLeftStripe
                , computer.screen.width - widthOfLeftStripe
                )
    in
    if model.distractionFree then
        div [ class "absolute top-0 left-0 w-10 h-10 p-1" ]
            [ yinYangButton
            ]

    else
        div
            [ id "gui"
            , class "absolute top-0 left-0 h-full w-full"
            , class "pointer-events-none"
            ]
            [ div
                [ class "absolute h-full p-1 border-r-[0.5px] border-white/20 bg-black/80"
                , style "width" <| String.fromFloat widthOfLeftStripe ++ "px"
                , class "pointer-events-auto"
                ]
                [ yinYangButton, homeButton, twitterLink, githubLink ]
            , div
                [ class "absolute overflow-y-auto left-10 bg-black/20 border-x-[0.5px] border-white/20"
                , style "width" <| String.fromFloat widthOfConfigurationsEditor ++ "px"
                , style "height" <| String.fromFloat heightOfConfigurationsEditor ++ "px"
                , class "pointer-events-auto"
                ]
                [ Html.map FromConfigurationsEditor (ConfigurationsGUI.viewConfigurations (currentComputer model.tape).configurations)
                ]
            , div
                [ class "absolute bottom-0"
                , style "left" (String.fromFloat leftOfTape ++ "px")
                , style "height" (String.fromFloat heightOfTape ++ "px")
                , style "width" <| String.fromFloat widthOfTape ++ "px"
                , class "pointer-events-auto"
                ]
                [ Html.map FromTapeControls (Tape.view model.tape) ]
            , div
                [ class "absolute"
                , style "left" (String.fromFloat leftOfTape ++ "px")
                , style "bottom" (String.fromFloat heightOfTape ++ "px")
                ]
                [ viewComputer model
                , toggleInputsViewButton
                ]
            , div
                [ class "absolute left-0 top-0"
                , class "pointer-events-none"
                ]
                [ viewPointer computer model
                ]
            ]


hiddenIf : Bool -> Attribute msg
hiddenIf condition =
    if condition then
        class "hidden"

    else
        class ""


viewPointer : Computer -> Model appModel -> Html msg
viewPointer computer model =
    div
        [ class "absolute w-8 h-8"
        , style "left" (String.fromFloat (computer.pointer.x + 0.5 * computer.screen.width) ++ "px")
        , style "top" (String.fromFloat (-computer.pointer.y + 0.5 * computer.screen.height) ++ "px")
        , hiddenIf (not model.inputsAreShown)
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

        fpsAsText : Tape appModel -> String
        fpsAsText tape =
            case Tape.getFps tape of
                Nothing ->
                    "..."

                Just fps ->
                    String.fromInt fps
    in
    pre
        [ class "px-8 pt-8 pb-20 w-[300px] bottom-20 right-0 border-[0.5px] border-white/20 bg-black/20 text-xs text-white/60"
        , class "flex flex-col gap-1"
        , hiddenIf (not model.inputsAreShown)
        ]
        [ div [] [ Html.text ("fps: " ++ fpsAsText model.tape) ]
        , div [] [ Html.text ("frame: " ++ (model.tape |> Tape.getCurrentFrameIndex |> String.fromInt)) ]
        , div [] [ Html.text ("pressedKeys: " ++ (computer.keyboard.pressedKeys |> List.intersperse " " |> String.concat)) ]
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
