module AAA_UsingImages.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (hsl, rgb255)
import Html exposing (Html, div)
import Html.Attributes exposing (class, style)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)


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
    {}



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    div
        [ class "fixed w-full h-full"
        , style "background-image" "url('./assets/canvas-background.jpg')"

        -- repeat the background image:
        , style "background-size" "320px 200px"
        , style "background-repeat" "repeat"
        ]
        []
