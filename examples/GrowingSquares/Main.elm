module GrowingSquares.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (Color, blue, gray, green, red, rgb255)
import Geometry exposing (Point)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material as Material exposing (matte)
import Tools.Animation.Animation exposing (..)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    List Square


type alias Square =
    { color : Color
    , center : { x : Float, y : Float }
    , sideLength : Float
    }


constants =
    { numberOfSquares = 300
    , maximumSideLength = 3
    }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    let
        n =
            constants.numberOfSquares

        distance =
            constants.maximumSideLength / n

        color i =
            Color.hsl (toFloat i / n) 0.3 0.5
    in
    List.range 0 (n - 1)
        |> List.map (\i -> Square (color i) { x = 0, y = 0 } (toFloat i * distance))



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model
        |> growInTime computer
        |> removeSquare computer
        |> addNew computer


growInTime : Computer -> Model -> Model
growInTime computer =
    List.map
        (\square ->
            { square
                | sideLength =
                    min
                        constants.maximumSideLength
                        (square.sideLength + computer.dt)
            }
        )


squareColor clock =
    Color.hsl (wave 0 1 2 clock) 0.3 0.5


removeSquare : Computer -> Model -> Model
removeSquare computer =
    List.filter
        (\square -> square.sideLength /= constants.maximumSideLength)


addNew : Computer -> Model -> Model
addNew computer model =
    if List.length model < constants.numberOfSquares then
        Square (squareColor computer.clock) { x = 0, y = 0 } 0.3 :: model

    else
        model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = sin computer.clock, y = -2, z = 4 }
                , upDirection = { x = 0, y = 0, z = 1 }
                }
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 20)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ squares computer model
    ]


squares : Computer -> Model -> Shape
squares computer model =
    group (model |> List.map drawSquare)


drawSquare : Square -> Shape
drawSquare square =
    block
        (Material.color square.color)
        ( square.sideLength
        , square.sideLength
        , 1 / square.sideLength
        )
