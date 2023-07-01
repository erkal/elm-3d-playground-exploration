module WebPage.Main exposing (main)

import Color exposing (white)
import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (class, href, src)
import Playground exposing (Computer, boolConfig, colorConfig, configBlock, floatConfig, gameWithConfigurationsAndEditor)


main =
    gameWithConfigurationsAndEditor viewGameModel update initialConfigurations init viewEditor updateFromEditor


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}


initialConfigurations =
    [ configBlock "Configurations"
        True
        [ boolConfig "example check box" False
        ]
    ]



-- UPDATE


update computer model =
    model



-- VIEW


type EditorMsg
    = NoOp


updateFromEditor : Computer -> EditorMsg -> Model -> Model
updateFromEditor computer editorMsg model =
    model


viewGameModel : Computer -> Model -> Html Never
viewGameModel computer model =
    div [] []


viewEditor : Computer -> Model -> Html EditorMsg
viewEditor computer model =
    div
        [ class "fixed w-full h-full"
        , class "pointer-events-none"
        ]
        [ div
            [ class "mx-auto container max-w-screen-md"
            , class "h-full bg-black/40"
            , class "pointer-events-auto"
            , class "overflow-y-scroll"
            , class "p-12 text-lg"
            , class "flex flex-col items-center"
            , class "text-gray-300"
            ]
            [ div [ class "text-3xl" ] [ text "All examples in" ]
            , a
                [ href "https://github.com/erkal/elm-3d-playground-exploration"
                , class "text-xl text-gray-400 underline py-3 transition-colors duration-300 hover:text-white"
                ]
                [ text "elm-3d-playground-exploration" ]
            , viewExamples computer model
            ]
        ]


viewExamples : Computer -> Model -> Html EditorMsg
viewExamples computer model =
    div
        [ class "py-8"
        , class "flex flex-col items-center gap-16"
        ]
        [ viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        ]


viewExample : String -> Html EditorMsg
viewExample exampleName =
    div
        [ class "p-8 bg-pink-800 rounded"
        , class "shadow-lg"
        , class "flex flex-col gap-10"
        ]
        [ text exampleName
        , a [ href "../Carousel/index.html" ] [ img [ src "../Carousel/image.png" ] [] ]
        , a
            [ class "w-fit p-2 bg-white/10"
            , href "https://github.com/erkal/elm-3d-playground-exploration/tree/restructure-for-elm-watch/examples/Carousel"
            , class "text-gray-400 underline transition-colors duration-300 hover:text-white"
            ]
            [ text "Source code" ]
        , div [] [ text "TODO: Write a description here" ]
        ]
