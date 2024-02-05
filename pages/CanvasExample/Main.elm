module CanvasExample.Main exposing (main)

import Color exposing (black, blue, darkBlue, darkGreen, darkPurple, gray, green, lightBlue, lightGray, lightGreen, lightPurple, lightYellow, purple, red, rgb255, white)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene2d exposing (..)
import Scene2d.Camera as Camera exposing (Camera)
import Tools.Geometry.Geometry exposing (..)


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
    { pointerInGameCoordinates : Point2d }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    { pointerInGameCoordinates = Point2d 0 0 }



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    case message of
        Tick ->
            { model
                | pointerInGameCoordinates =
                    Point2d
                        (0.5 + computer.pointer.x / computer.screen.width)
                        (0.5 - computer.pointer.y / computer.screen.width)
                        |> Camera.toGameCoordinates (camera computer)
            }

        Message appMsg ->
            model


camera : Computer -> Camera
camera computer =
    Camera.init
        { aspectRatio = computer.screen.width / computer.screen.height
        , gameWidth = 20
        , yIsUp = False
        }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene2d.toHtml
        { sceneWidthInPixels = round computer.screen.width
        , camera = camera computer
        }
        [ rectangle 1000 1000 purple
        , rectangle 4 4 lightBlue
        , rectangle 2 2 lightGray
            |> moveX 3
            |> moveY 3
        , group
            [ circle 1.5 lightPurple
            , circle 0.5 darkPurple
                |> moveY (sin (3 * computer.clock))
            ]
            |> moveX (sin (3 * computer.clock))
        , circle 0.2 white
            |> moveX model.pointerInGameCoordinates.x
            |> moveY model.pointerInGameCoordinates.y
        ]
