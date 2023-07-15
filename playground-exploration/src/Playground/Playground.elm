port module Playground.Playground exposing
    ( basic, webApp, advanced
    , Computer, Keyboard, Pointer, Screen, boolConfig, colorConfig, configBlock, floatConfig, getBool, getColor, getFloat, getInt, intConfig, toX, toXY, toY
    )

{-|


# Playground

@docs basic, webApp, advanced

-}

import Browser
import Html exposing (Html, a, button, div, p, pre, text)
import Html.Attributes as HA exposing (class, href, id, style, target)
import Html.Events
import Playground.Computer as Computer exposing (Computer, Inputs, Wheel)
import Playground.Configurations as Configurations exposing (Block, Config(..), Configurations)
import Playground.ConfigurationsGUI as ConfigurationsGUI
import Playground.Icons as Icons
import Playground.Tape as Tape exposing (Tape, currentComputer, currentGameModel)



-- PORTS


port tick : (Inputs -> msg) -> Sub msg



-- FOR EXPOSING TO THE USER OF THIS MODULE


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


getBool =
    Computer.getBool


getColor =
    Computer.getColor


getInt =
    Computer.getInt


getFloat =
    Computer.getFloat



-- CREATE APP


type alias Flags =
    { inputs : Inputs }


{-|

    defines an app which cannot use HTML interactivity.
    It uses `Html Never` for view.
    Apps made with `basic` are done with porting them to other platforms (other than web) in mind.

-}
basic :
    { initialConfigurations : Configurations
    , init : Computer -> model
    , update : Computer -> model -> model
    , view : Computer -> model -> Html Never
    }
    -> Program Flags (Model model) (Msg Never)
basic r =
    advanced
        { initialConfigurations = r.initialConfigurations
        , init = r.init
        , update = r.update
        , view = r.view
        , updateWithMsg = \_ _ model -> model
        , viewWithMsg = \_ _ -> div [] []
        }


{-|

    defines an app with the ability to use HTML interactivity.

-}
webApp :
    { initialConfigurations : Configurations
    , init : Computer -> model
    , update : Computer -> msg -> model -> model
    , view : Computer -> model -> Html msg
    }
    -> Program Flags (Model model) (Msg msg)
webApp r =
    advanced
        { initialConfigurations = r.initialConfigurations
        , init = r.init
        , update = \_ model -> model
        , view = \_ _ -> text ""
        , updateWithMsg = r.update
        , viewWithMsg = r.view
        }


{-| Use this type of app if you want to create a game with an editor built in HTML.
-}
advanced :
    { initialConfigurations : Configurations
    , init : Computer -> model
    , update : Computer -> model -> model
    , view : Computer -> model -> Html Never
    , updateWithMsg : Computer -> msg -> model -> model
    , viewWithMsg : Computer -> model -> Html msg
    }
    -> Program Flags (Model model) (Msg msg)
advanced r =
    let
        init flags =
            let
                initialComputer =
                    flags.inputs |> Computer.assignConfigurations r.initialConfigurations
            in
            ( { tape = Tape.init initialComputer r.init
              , distractionFree = flags.inputs.screen.width < 500
              }
            , Cmd.none
            )

        update msg model =
            ( appUpdate r.update r.updateWithMsg msg model
            , Cmd.none
            )
    in
    Browser.element
        { init = init
        , view = view r.view r.viewWithMsg
        , update = update
        , subscriptions = always (tick Tick)
        }


type alias Model model =
    { tape : Tape model
    , distractionFree : Bool
    }


type Msg msg
    = ClickOnDistractionFreeButton
    | Tick Inputs
    | FromConfigurationsEditor Configurations.Msg
    | FromLevelEditor msg
    | FromTape Tape.Msg



-- UPDATE


appUpdate :
    (Computer -> model -> model)
    -> (Computer -> msg -> model -> model)
    -> Msg msg
    -> Model model
    -> Model model
appUpdate update updateWithMsg msg model =
    case msg of
        ClickOnDistractionFreeButton ->
            { model | distractionFree = not model.distractionFree }

        Tick inputs ->
            { model | tape = model.tape |> Tape.tick update inputs }

        FromConfigurationsEditor computerMsg ->
            { model | tape = model.tape |> Tape.updateConfigurations computerMsg }

        FromLevelEditor editorMsg ->
            { model | tape = model.tape |> Tape.updateWithMsg updateWithMsg editorMsg }

        FromTape tapeMsg ->
            { model | tape = model.tape |> Tape.update tapeMsg }



-- VIEW


view :
    (Computer -> model -> Html Never)
    -> (Computer -> model -> Html msg)
    -> Model model
    -> Html (Msg msg)
view viewWithoutMsg viewLevelEditor appModel =
    let
        computer =
            currentComputer appModel.tape

        model =
            currentGameModel appModel.tape
    in
    div
        [ class "bg-black/40"
        , class "select-none"
        , class "antialiased"
        , style "width" (String.fromFloat computer.screen.width ++ "px")
        , style "height" (String.fromFloat computer.screen.height ++ "px")
        ]
        [ div [ class "fixed" ]
            [ Html.map never (viewWithoutMsg computer model) ]
        , div [ id "gui" ]
            [ viewWithMsg computer appModel
            , Html.map FromLevelEditor (viewLevelEditor computer model)
            ]
        ]


viewComputer : Computer -> Model model -> Html msg
viewComputer computer model =
    let
        viewPointer =
            if Tape.isRecording model.tape then
                div [] []

            else
                div
                    [ class "absolute pointer-events-none w-8 h-8"
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
    in
    div []
        [ viewPointer

        --, pre
        --    [ class "fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white/20 bg-black/20 text-xs text-white/60"
        --    ]
        --    [ p [] [ Html.text ("pressedKeys: " ++ (computer.keyboard.pressedKeys |> List.intersperse " " |> String.concat)) ]
        --    , p [] [ Html.text ("delta time: " ++ Round.round 4 computer.dt) ]
        --    , p []
        --        [ Html.text
        --            ("pointer is down: "
        --                ++ (if computer.pointer.isDown then
        --                        "yes"
        --
        --                    else
        --                        "no"
        --                   )
        --            )
        --        ]
        --    , p [] [ Html.text ("pointer.x: " ++ Round.round 2 computer.pointer.x) ]
        --    , p [] [ Html.text ("pointer.y: " ++ Round.round 2 computer.pointer.y) ]
        --    , p [] [ Html.text ("wheel deltaX: " ++ String.fromFloat computer.wheel.deltaX) ]
        --    , p [] [ Html.text ("wheel deltaY: " ++ String.fromFloat computer.wheel.deltaY) ]
        --    ]
        ]


viewWithMsg : Computer -> Model model -> Html (Msg msg)
viewWithMsg computer model =
    let
        yingYangButton =
            button
                [ class <|
                    if model.distractionFree then
                        "text-black/20 hover:text-black/80"

                    else
                        "text-white/40 hover:text-white/80"
                , Html.Events.onClick ClickOnDistractionFreeButton
                , HA.title "Distraction Free Mode"
                ]
                [ Icons.icons.yinYang ]

        homeButton =
            div [ class "absolute w-8 top-12" ]
                [ a
                    [ class "text-white/40 hover:text-white/80"
                    , href "../WebPage/index.html"
                    , target "_blank"
                    , HA.title "Home of all examples"
                    ]
                    [ Icons.icons.home ]
                ]

        twitterLink =
            div [ class "absolute w-8 bottom-12" ]
                [ a
                    [ class "text-twitterBlue/40 hover:text-twitterBlue"
                    , href "https://twitter.com/AzizErkalSelman"
                    , target "_blank"
                    ]
                    [ Icons.icons.twitter ]
                ]

        githubLink =
            div [ class "absolute w-8 bottom-2" ]
                [ a
                    [ class "text-githubCat/40 hover:text-githubCat"
                    , href "https://github.com/erkal/elm-3d-playground-exploration"
                    , target "_blank"
                    ]
                    [ Icons.icons.githubCat ]
                ]

        widthOfLeftStripe =
            40

        widthOfConfigurationsEditor =
            260

        heightOfTape =
            80

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
        div [ class "fixed w-10 h-10 p-1" ]
            [ yingYangButton
            ]

    else
        div []
            [ div
                [ class "absolute h-full p-1 border-r-[0.5px] border-white/20 bg-black/80"
                , style "width" <| String.fromFloat widthOfLeftStripe ++ "px"
                ]
                [ yingYangButton, homeButton, twitterLink, githubLink ]
            , div
                [ class "absolute overflow-y-auto left-10 bg-black/20 border-x-[0.5px] border-white/20"
                , style "width" <| String.fromFloat widthOfConfigurationsEditor ++ "px"
                , style "height" <| String.fromFloat heightOfConfigurationsEditor ++ "px"
                ]
                [ Html.map FromConfigurationsEditor (ConfigurationsGUI.view (currentComputer model.tape).configurations)
                ]
            , div
                [ class "absolute bottom-0"
                , style "left" (String.fromFloat leftOfTape ++ "px")
                , style "height" (String.fromFloat heightOfTape ++ "px")
                , style "width" <| String.fromFloat widthOfTape ++ "px"
                ]
                [ Html.map FromTape (Tape.view model.tape) ]
            , viewComputer computer model
            ]
