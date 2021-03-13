module Main exposing (main)

import Color exposing (black, blue, brown, darkGreen, gray, green, hsl, lightBlue, lightGray, lightGreen, lightPurple, lightRed, orange, purple, red, white, yellow)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, block, cube, cylinder, game, group, line, move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, scale, sphere, spin, triangle, wave)
import Playground3d.Camera exposing (Camera, perspective)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Temperature


main =
    game view update initialModel


type alias Model =
    { animationState : State
    }


type State
    = Idle
    | Animating



-- INIT


initialModel : Model
initialModel =
    { animationState = Idle
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


camera : Computer -> Camera
camera computer =
    perspective
        { focalPoint = { x = 0, y = -2, z = 0 }
        , eyePoint =
            { x = 0 + wave -2 2 20 computer.time
            , y = 6 + wave -3 3 18 computer.time
            , z = 6 + wave -3 3 16 computer.time
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 1 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 8000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 1 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 8000
                }

        thirdLight =
            Light.directional
                { azimuth = degrees -45
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 3000)
                , intensity = Illuminance.lux 80
                }

        fourthLight =
            Light.soft
                { azimuth = degrees 0
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 20
                , intensityBelow = Illuminance.lux 10
                }
    in
    Scene.custom
        { screen = computer.screen
        , camera = camera computer
        , lights =
            Scene3d.fourLights
                firstLight
                secondLight
                thirdLight
                fourthLight
        , clipDepth = 0.1
        , exposure = Scene3d.exposureValue 6
        , toneMapping = Scene3d.hableFilmicToneMapping -- See ExposureAndToneMapping.elm for details
        , whiteBalance = Scene3d.Light.fluorescent
        , antialiasing = Scene3d.multisampling
        , backgroundColor = lightBlue
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ floor computer
    , axes
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


floorCubesCoordinates =
    cartesianProduct
        (List.range -3 3)
        (List.range -2 2)


cartesianProduct : List a -> List b -> List ( b, a )
cartesianProduct columns =
    let
        row i =
            List.map (\j -> ( i, j )) columns
    in
    List.concatMap row


floor : Computer -> Shape
floor computer =
    let
        floorCube ( x, z ) =
            group
                [ block (hsl (wave 0 1 16 computer.time) 0.2 0.7)
                    ( 0.95, 0.2, 0.95 )
                    |> moveZ -0.5
                    |> rotateX (wave 0 (degrees 90) 4 computer.time)
                    |> moveZ 0.5
                    |> moveX (toFloat x)
                    |> moveZ (toFloat z)
                ]

        squares =
            group
                (floorCubesCoordinates
                    |> List.map floorCube
                )
    in
    group
        [ squares
        , block white ( 5.4, 1, 7.4 )
            |> moveY -0.5
        ]
