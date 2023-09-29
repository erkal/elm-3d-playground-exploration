module Grid.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (hsl, rgb255)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)


main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    {}


colors =
    { lightPeach = Color.rgb255 255 204 153
    , softPink = Color.rgb255 255 153 204
    , lightMint = Color.rgb255 153 255 204
    , babyBlue = Color.rgb255 153 204 255
    , lightLilac = Color.rgb255 204 153 255
    , lightLemon = Color.rgb255 255 255 153
    }



-- INIT


initialConfigurations =
    [ configBlock "Camera"
        True
        [ intConfig "n" ( 1, 100 ) 24
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Color"
        True
        [ colorConfig "cube color" (hsl 0 0.36 0.5)
        ]
    , configBlock "Time"
        True
        [ floatConfig "period" ( 0.1, 20 ) 10
        ]
    ]


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = toFloat (getInt "n" computer) * 1.1
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = Color.charcoal
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ squares computer
        ]


squares : Computer -> Shape
squares computer =
    let
        n =
            getInt "n" computer
    in
    group
        (cartesianProduct
            (List.range 1 n)
            (List.range 1 n)
            |> List.map (makeSquare computer)
        )
        |> moveX -(toFloat (n + 1) / 2)
        |> moveY -(toFloat (n + 1) / 2)


makeSquare : Computer -> ( Int, Int ) -> Shape
makeSquare computer ( i, j ) =
    let
        rotation =
            wave 0
                (2 * pi)
                (getFloat "period" computer + toFloat (i + j))
                computer.clock
    in
    block (matte colors.babyBlue) ( 0.7, 0.7, 0.7 )
        |> rotateX rotation
        |> moveX (toFloat j)
        |> moveY (toFloat i)


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row
