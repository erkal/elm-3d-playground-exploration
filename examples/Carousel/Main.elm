module Carousel.Main exposing (main)

import Camera exposing (Camera, perspective)
import Carousel.Carousel as Carousel exposing (Carousel)
import Color exposing (Color, blue, charcoal, darkBlue, gray, green, lightBlue, lightBrown, orange, purple, red, rgb255)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = False
        }


type alias Model =
    Carousel Color



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    Carousel.init lightBrown [ purple, charcoal, darkBlue, lightBlue, gray, orange ]



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    case message of
        Tick ->
            model
                |> handleKeyPresses computer
                |> tickCarousel computer

        _ ->
            model


handleKeyPresses : Computer -> Model -> Model
handleKeyPresses { keyboard } =
    if keyboard.left then
        Carousel.animateToPrevious

    else if keyboard.right then
        Carousel.animateToNext

    else
        identity


tickCarousel : Computer -> Model -> Model
tickCarousel ({ pointer } as computer) model =
    let
        { x, y } =
            pointer
                |> Camera.mouseOverXY camera computer.screen
                |> Maybe.withDefault { x = 0, y = 0, z = 0 }

        computerWithCorrectedPointerPosition =
            { computer | pointer = { pointer | x = x, y = y } }
    in
    model
        |> Carousel.tick computerWithCorrectedPointerPosition



-- VIEW


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint = { x = 0, y = -0.2, z = 1 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    div [ class "absolute" ]
        [ div
            [ class "absolute p-4 text-white/80"
            , class "grid place-items-center w-full"
            ]
            [ div [] [ text "Swipe or press left/right arrow keys" ]
            ]
        , viewScene computer model
        ]


viewScene : Computer -> Model -> Html Never
viewScene computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            camera
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 15)
        , sunlightElevation = -(degrees 45)
        }
        [ drawCarousel computer model

        --, axes
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


drawCarousel : Computer -> Carousel Color -> Shape
drawCarousel computer carousel =
    let
        selectedCardWithDataForEfficientDrawing =
            Carousel.getSelectedCardData carousel

        middleCardX =
            selectedCardWithDataForEfficientDrawing.normalizedXToDraw

        i =
            selectedCardWithDataForEfficientDrawing.index

        centerXOf j =
            middleCardX + (toFloat (j - i) * Carousel.constants.distanceBetweenCardCenters)

        drawCardAtIndex j =
            drawCard computer (Carousel.getCardAt j carousel).card
                |> scale (1 - 0.7 * abs (centerXOf j))
                |> moveY -(0.1 * abs (centerXOf j))
                |> moveX (centerXOf j)
    in
    group
        (List.range (i - 3) (i + 3)
            |> List.map drawCardAtIndex
        )


drawCard : Computer -> Color -> Shape
drawCard computer color =
    block (matte color) ( 0.2, 0.3, 0.3 )
