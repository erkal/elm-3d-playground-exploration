module WebPage.Main exposing (main)

import Html exposing (Html, a, div, img, text)
import Html.Attributes as HA exposing (class, href, src, target)
import Playground.Icons as Icons
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Tools.StyledElements.StyledElements exposing (withHomePageHeader)


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
    withHomePageHeader (cards computer model)


cards : Computer -> Model -> Html Never
cards computer model =
    div
        [ class "grid grid-cols-1 md:grid-cols-2 mb-24 gap-8 text-white text-xl" ]
        [ card
            { exampleLink = "https://erkal.github.io/kite/"
            , imageLink = "./assets/kite.png"
            , sourceCodeLink = "https://github.com/erkal/kite"
            }
            "Kite: An Interactive Visualization Tool for Graph Theory"
        , cardWithInternalLink "TrixelEditor" "A trixel editor with zoom and pan"
        , cardWithInternalLink "RedFacedCube" "The Red-Faced Cube: One of the puzzles from Martin Gardner's column. It has a unique solution!"
        , cardWithInternalLink "WaveInWave" "A Creative coding example"
        , cardWithInternalLink "ColorShower" "A Creative coding example"
        , cardWithInternalLink "DancingCubes" "A Creative coding example"
        , cardWithInternalLink "BallGame" "Continuous collision detection for circle to polygon. Roll the ball with arrow keys"
        , cardWithInternalLink "Carousel" "A carousel that works with mouse, keyboard and touch"
        , cardWithInternalLink "HappyBirthdayAndrey" "This was a birthday card made for Andrey Kuzmin"
        , cardWithInternalLink "IsomorphismGame" "A prototype for a game on graph isomorphism"
        , cardWithInternalLink "JohnHarrisEightRollingCubes" "One of the puzzles from Martin Gardner's column"
        , cardWithInternalLink "MultipleShadowsFromIanMackenzie" "Using the lighting from an example by Ian Mackenzie"
        , cardWithInternalLink "PlanetarySystem" "Simple example for grouping objects"
        , cardWithInternalLink "RecursiveRotation" "Simple example for recursion"
        , cardWithInternalLink "RecursiveTree" "Simple example for recursion"
        , cardWithInternalLink "TheSomaCube" "Just a start for a puzzle game. It is not working yet"
        , cardWithInternalLink "GooeyEffect" "An example showing the use of GLSL shaders"
        , cardWithInternalLink "GrowingSquares" "A Creative coding example"
        , cardWithInternalLink "TurningBlocks" "A Creative coding example"
        , cardWithInternalLink "ZoomAndPan" "Zooming and panning"
        , cardWithInternalLink "CubeAndCube" "Another simple example with pastel colors"
        , cardWithInternalLink "CanvasExample" "An elm-playground-like API on top of joakin/elm-canvas"
        , cardWithInternalLink "UndoRedo" "Implementing safe undo/redo in Elm. A blog post with interactive explanations"
        ]


cardWithInternalLink : String -> String -> Html Never
cardWithInternalLink exampleName =
    card
        { exampleLink = "../" ++ exampleName ++ "/index.html"
        , imageLink = "../" ++ exampleName ++ "/image.png"
        , sourceCodeLink = "https://github.com/erkal/elm-3d-playground-exploration/tree/main/pages/" ++ exampleName
        }


card : { exampleLink : String, imageLink : String, sourceCodeLink : String } -> String -> Html Never
card { exampleLink, imageLink, sourceCodeLink } descriptionText =
    div
        [ class "p-6 transition-all duration-300 ease-in-out rounded-3xl shadow-lg hover:shadow-2xl"
        , class "bg-black/50"
        , class "flex flex-col items-center gap-8"
        ]
        [ a [ href exampleLink ]
            [ div
                [ class "relative cursor-pointer group" ]
                [ img [ src imageLink, class "rounded-xl transition-all duration-300 hover:opacity-75" ] []
                , div
                    [ class "flex opacity-0 justify-center items-center absolute inset-0 w-full h-full text-2xl font-bold text-white bg-black bg-opacity-75 rounded-xl transition-all duration-300 group-hover:opacity-100" ]
                    [ div [ class "w-20 h-20" ] [ Icons.icons.zoomToFit ] ]
                ]
            ]
        , div [ class "px-4 grow flex items-center" ] [ text descriptionText ]
        , a
            [ class "inline-block mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl text-base font-medium tracking-wide rounded-lg"
            , href sourceCodeLink
            , target "_blank"
            ]
            [ text "Source code" ]
        ]
