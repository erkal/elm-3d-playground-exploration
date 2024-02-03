module WebPage.Main exposing (main)

import Html exposing (Html, a, div, h2, i, img, span, text)
import Html.Attributes exposing (class, href, src, target)
import Playground.Icons
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = []
        , init = \_ -> {}
        , update = \_ _ _ -> {}
        , view = view
        , hasTape = False
        }


type alias Model =
    {}



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div
        [ class "absolute z-10 w-full h-full"
        , class "bg-gradient-to-br from-blue-400 via-lightBlue-500 to-cyan-700"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-5xl h-full p-12 sm:px-12 text-lg text-white"
            , class "flex flex-col items-center"
            ]
            [ div [ class "text-3xl font-extrabold mb-8 tracking-tight" ]
                [ span [] [ text "Erkal's Home Page" ]
                ]
            , viewExamples computer model
            ]
        ]


viewExamples : Computer -> Model -> Html Never
viewExamples computer model =
    div
        [ class "grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8" ]
        [ viewExample "TrixelEditor" "A trixel editor with zoom and pan"
        , viewExample "RedFacedCube" "The Red-Faced Cube: One of the puzzles from Martin Gardner's column. It has a unique solution!"
        , viewExample "WaveInWave" "A Creative coding example"
        , viewExample "ColorShower" "A Creative coding example"
        , viewExample "DancingCubes" "A Creative coding example"
        , viewExample "BallGame" "Continuous collision detection for circle to polygon. Roll the ball with arrow keys"
        , viewExample "Carousel" "A carousel that works with mouse, keyboard and touch"
        , viewExample "HappyBirthdayAndrey" "This was a birthday card made for Andrey Kuzmin"
        , viewExample "IsomorphismGame" "A prototype for a game on graph isomorphism"
        , viewExample "JohnHarrisEightRollingCubes" "One of the puzzles from Martin Gardner's column"
        , viewExample "MultipleShadowsFromIanMackenzie" "Using the lighting from an example by Ian Mackenzie"
        , viewExample "PlanetarySystem" "Simple example for grouping objects"
        , viewExample "RecursiveRotation" "Simple example for recursion"
        , viewExample "RecursiveTree" "Simple example for recursion"
        , viewExample "TheSomaCube" "Just a start for a puzzle game. It is not working yet"
        , viewExample "GooeyEffect" "An example showing the use of GLSL shaders"
        , viewExample "GrowingSquares" "A Creative coding example"
        , viewExample "TurningBlocks" "A Creative coding example"
        , viewExample "ZoomAndPan" "Zooming and panning"
        , viewExample "CubeAndCube" "Another simple example with pastel colors"
        , viewExample "CanvasExample" "An elm-playground-like API on top of joakin/elm-canvas"
        ]


viewExample : String -> String -> Html Never
viewExample exampleName descriptionText =
    let
        exampleLink =
            "../" ++ exampleName ++ "/index.html"

        imageLink =
            "../" ++ exampleName ++ "/image.png"

        sourceCodeLink =
            "https://github.com/erkal/elm-3d-playground-exploration/tree/main/examples/" ++ exampleName
    in
    div
        [ class "p-6 transition-all duration-300 ease-in-out rounded-3xl shadow-lg hover:shadow-2xl"
        , class "bg-gradient-to-b from-lightBlue-400 via-cyan-500 to-lightBlue-600 text-white"
        ]
        [ a
            [ href exampleLink
            ]
            [ div
                [ class "relative cursor-pointer group" ]
                [ img [ src imageLink, class "rounded-xl transition-all duration-300 hover:opacity-75" ] []
                , div
                    [ class "flex opacity-0 justify-center items-center absolute inset-0 w-full h-full text-2xl font-bold text-white bg-black bg-opacity-75 rounded-xl transition-all duration-300 group-hover:opacity-100" ]
                    [ div [ class "w-20 h-20" ] [ Playground.Icons.icons.zoomToFit ] ]
                ]
            ]
        , a
            [ class "inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl text-base font-medium tracking-wide rounded-lg"
            , href sourceCodeLink
            , target "_blank"
            ]
            [ text "Source code" ]
        , div [ class "mt-2 text-white" ] [ text descriptionText ]
        ]
