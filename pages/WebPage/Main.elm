module WebPage.Main exposing (main)

import Html exposing (Html, a, div, img, text)
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
            [ div
                [ class "w-full flex justify-end items-center mb-2 border-b border-gray-200 pb-4" ]
                [ twitterLink
                , githubLink
                ]
            , viewPages computer model
            ]
        ]


viewPages : Computer -> Model -> Html Never
viewPages computer model =
    div
        [ class "grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-8" ]
        [ viewPage "TrixelEditor" "A trixel editor with zoom and pan"
        , viewPage "RedFacedCube" "The Red-Faced Cube: One of the puzzles from Martin Gardner's column. It has a unique solution!"
        , viewPage "WaveInWave" "A Creative coding example"
        , viewPage "ColorShower" "A Creative coding example"
        , viewPage "DancingCubes" "A Creative coding example"
        , viewPage "BallGame" "Continuous collision detection for circle to polygon. Roll the ball with arrow keys"
        , viewPage "Carousel" "A carousel that works with mouse, keyboard and touch"
        , viewPage "HappyBirthdayAndrey" "This was a birthday card made for Andrey Kuzmin"
        , viewPage "IsomorphismGame" "A prototype for a game on graph isomorphism"
        , viewPage "JohnHarrisEightRollingCubes" "One of the puzzles from Martin Gardner's column"
        , viewPage "MultipleShadowsFromIanMackenzie" "Using the lighting from an example by Ian Mackenzie"
        , viewPage "PlanetarySystem" "Simple example for grouping objects"
        , viewPage "RecursiveRotation" "Simple example for recursion"
        , viewPage "RecursiveTree" "Simple example for recursion"
        , viewPage "TheSomaCube" "Just a start for a puzzle game. It is not working yet"
        , viewPage "GooeyEffect" "An example showing the use of GLSL shaders"
        , viewPage "GrowingSquares" "A Creative coding example"
        , viewPage "TurningBlocks" "A Creative coding example"
        , viewPage "ZoomAndPan" "Zooming and panning"
        , viewPage "CubeAndCube" "Another simple example with pastel colors"
        , viewPage "CanvasExample" "An elm-playground-like API on top of joakin/elm-canvas"
        , viewPage "UndoRedo" "Implementing safe undo/redo in Elm. A blog post with interactive explanations"
        ]


viewPage : String -> String -> Html Never
viewPage exampleName descriptionText =
    let
        exampleLink =
            "../" ++ exampleName ++ "/index.html"

        imageLink =
            "../" ++ exampleName ++ "/image.png"

        sourceCodeLink =
            "https://github.com/erkal/elm-3d-playground-exploration/tree/main/pages/" ++ exampleName
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
