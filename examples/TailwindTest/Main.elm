module TailwindTest.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, gray, green, red, rgb255)
import Css.Global
import Html exposing (Html)
import Html.Styled exposing (div, toUnstyled)
import Html.Styled.Attributes exposing (css)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tailwind.Theme exposing (blue_500, red_500, slate_100)
import Tailwind.Utilities as Tw exposing (bg_color, globalStyles)


main =
    game view update init


type alias Model =
    {}



-- INIT


init : Computer -> Model
init computer =
    {}



-- UPDATE


update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    toUnstyled <|
        div []
            [ Css.Global.global globalStyles
            , div
                [ css
                    [ Tw.bg_color blue_500, Tw.w_60, Tw.h_60 ]
                ]
                []

            -- Continue with any other Html
            ]
