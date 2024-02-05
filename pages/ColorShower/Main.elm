module ColorShower.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (hsl)
import Html exposing (Html)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (wave)


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
    {}



-- INIT


init : Computer -> Model
init _ =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update _ _ model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = getFloat "camera distance" computer
        }


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera distance" ( 3, 60 ) 50
        , floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0.5
        ]
    , configBlock "Parameters"
        True
        [ floatConfig "delay per index" ( 0, 1 ) 0.15
        , intConfig "number of spheres" ( 10, 100 ) 50
        ]
    , configBlock "Colors and light"
        True
        [ floatConfig "saturation" ( 0, 1 ) 0.5
        , floatConfig "lighting" ( 0, 1 ) 0.7
        , colorConfig "background color" (hsl 0.85 0.32 0.45)
        ]
    ]


view : Computer -> Model -> Html Never
view computer _ =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = getColor "background color" computer
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ spheresInAColumn computer
        , spheresInAColumn computer |> rotateY (degrees 120)
        , spheresInAColumn computer |> rotateY (degrees 240)
        ]


spheresInAColumn : Computer -> Shape
spheresInAColumn computer =
    let
        n =
            getInt "number of spheres" computer
    in
    group
        (List.range -(n // 2) (n // 2)
            |> List.map (sphereWithIndex computer)
        )


sphereWithIndex : Computer -> Int -> Shape
sphereWithIndex computer i =
    let
        timeWithDelay =
            computer.clock + toFloat i * getFloat "delay per index" computer

        n =
            getInt "number of spheres" computer

        size =
            30 / toFloat n

        lighting =
            getFloat "lighting" computer

        saturation =
            getFloat "saturation" computer

        hue =
            wave 0 1 7 timeWithDelay
    in
    sphere (matte (hsl hue saturation lighting)) size
        |> scale (wave 1 4 4 timeWithDelay)
        |> moveX (wave 3 4 1 timeWithDelay)
        |> rotateY (wave 0 10 20 timeWithDelay)
        |> moveY (size * 1.1 * toFloat i)
