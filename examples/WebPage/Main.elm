module WebPage.Main exposing (main)

import Color exposing (white)
import Html exposing (Html, a, div, h2, img, span, text)
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
        , class "bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-4xl h-full p-6 sm:p-12 text-lg text-white"
            , class "flex flex-col items-center"
            ]
            [ div [ class "text-3xl font-extrabold mb-5 tracking-tight" ]
                [ span [] [ text "All examples in " ]
                , span []
                    [ a
                        [ href "https://github.com/erkal/elm-3d-playground-exploration"
                        , class "underline py-4 transition-all duration-300 hover:text-blue-400"
                        ]
                        [ text "elm-3d-playground-exploration" ]
                    ]
                ]
            , viewExamples computer model
            ]
        ]


viewExamples : Computer -> Model -> Html EditorMsg
viewExamples computer model =
    div
        [ class "py-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
        ]
        [ viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        ]


viewExample : String -> Html EditorMsg
viewExample exampleName =
    div
        [ class "p-6 rounded-lg shadow-lg"
        , class "bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white"
        ]
        [ h2 [ class "text-2xl font-bold mb-4 text-white" ] [ text exampleName ]
        , a [ href "../Carousel/index.html" ] [ img [ src "../Carousel/image.png" ] [] ]
        , a
            [ class "inline-block mt-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-2xl text-base font-medium tracking-wide rounded-lg"
            , href "https://github.com/erkal/elm-3d-playground-exploration/tree/restructure-for-elm-watch/examples/Carousel"
            ]
            [ text "Source code" ]
        , div [ class "mt-5 text-white" ] [ text "TODO: Write a description here" ]
        ]
