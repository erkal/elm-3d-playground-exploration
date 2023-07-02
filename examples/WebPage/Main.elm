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
        , class "bg-gradient-to-br from-blue-400 via-lightBlue-500 to-cyan-700"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-5xl h-full py-6 px-6 sm:px-12 text-lg text-white"
            , class "flex flex-col items-center"
            ]
            [ div [ class "text-3xl font-extrabold mb-8 tracking-tight" ]
                [ span [] [ text "All examples in " ]
                , span []
                    [ a
                        [ href "https://github.com/erkal/elm-3d-playground-exploration"
                        , class "underline transition-all duration-300 hover:text-lightBlue-400"
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
        [ class "grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8" ]
        [ viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        , viewExample "Carousel"
        ]


viewExample : String -> Html EditorMsg
viewExample exampleName =
    div
        [ class "p-6 transition-all duration-300 ease-in-out rounded-3xl shadow-lg hover:shadow-2xl"
        , class "bg-gradient-to-b from-lightBlue-400 via-cyan-500 to-lightBlue-600 text-white"
        ]
        [ h2 [ class "text-xl font-semibold mb-4 text-white" ] [ text exampleName ]
        , a [ href "../Carousel/index.html" ]
            [ img [ src "../Carousel/image.png", class "rounded-xl hover:opacity-75 transition-all duration-300 " ] [] ]
        , a
            [ class "inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl text-base font-medium tracking-wide rounded-lg"
            , href "https://github.com/erkal/elm-3d-playground-exploration/tree/restructure-for-elm-watch/examples/Carousel"
            ]
            [ text "Source code" ]
        , div [ class "mt-2 text-sm text-white" ] [ text "Here goes the longer description for your example that should fit well without stretching the cards too much. Adjust text size to fit more content, if necessary." ]
        ]
