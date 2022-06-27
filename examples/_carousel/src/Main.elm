module Main exposing (main)

import Camera exposing (Camera, perspective)
import Carousel exposing (Carousel)
import Color exposing (Color, black, blue, charcoal, darkBlue, darkGray, gray, green, lightBlue, lightBrown, lightGray, orange, purple, red, rgb255)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    game view update init


type alias Model =
    Carousel Color



-- INIT


init : Computer -> Model
init computer =
    Carousel.init lightBrown [ purple, charcoal, darkBlue, lightBlue, gray, orange ]



-- UPDATE


update : Computer -> Model -> Model
update ({ pointer } as computer) model =
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



--|> scale (wave 1 2 14 computer.clock)
--|> rotateX (wave 1 10 30 computer.clock)
--|> rotateY (wave 1 10 30 computer.clock)
--|> rotateZ (wave 1 10 30 computer.clock)
