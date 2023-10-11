module HappyBirthdayAndrey.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (Color, black, yellow)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Illuminance
import Light
import LuminousFlux
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material exposing (matte)
import Set exposing (Set)
import Temperature
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
    { cubes : Set ( Int, Int )
    }



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    { cubes = andreysBrithDayCubes
    }


andreysBrithDayCubes =
    Set.fromList
        [ ( -3, -3 ), ( -3, 1 ), ( -3, 2 ), ( -3, 3 ), ( -2, -2 ), ( -2, 0 ), ( -2, 3 ), ( -2, 4 ), ( -1, -5 ), ( -1, -4 ), ( -1, -3 ), ( -1, -2 ), ( -1, 0 ), ( -1, 3 ), ( -1, 4 ), ( 0, -4 ), ( 0, -3 ), ( 0, -2 ), ( 0, -1 ), ( 0, 0 ), ( 0, 1 ), ( 0, 2 ), ( 0, 3 ), ( 0, 4 ), ( 1, -5 ), ( 1, -4 ), ( 1, -3 ), ( 1, -2 ), ( 1, 0 ), ( 1, 3 ), ( 1, 4 ), ( 2, -2 ), ( 2, 0 ), ( 2, 3 ), ( 2, 4 ), ( 3, -3 ), ( 3, 1 ), ( 3, 2 ), ( 3, 3 ) ]



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    if computer.keyboard.shift && computer.pointer.isDown then
        removeCube computer model

    else if computer.pointer.isDown then
        insertCube computer model

    else
        model


removeCube : Computer -> Model -> Model
removeCube computer model =
    case Camera.mouseOverXY (camera computer) computer.screen computer.pointer of
        Just p ->
            { model | cubes = Set.remove ( round p.x, round p.y ) model.cubes }

        Nothing ->
            model


insertCube : Computer -> Model -> Model
insertCube computer model =
    case Camera.mouseOverXY (camera computer) computer.screen computer.pointer of
        Just p ->
            { model | cubes = Set.insert ( round p.x, round p.y ) model.cubes }

        Nothing ->
            model



-- VIEW


camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint = { x = 1 + wave -5 5 7 computer.clock, y = 1, z = 20 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 3 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 3 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = degrees -90
                , elevation = degrees -45
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 100
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
    div []
        [ div [ class "fixed text-white/50 ml-[320px] mt-8" ]
            [ div [] [ text "Press mouse to add new cube" ]
            , div [] [ text "Shift + Press to remove" ]
            ]
        , Scene.custom
            { devicePixelRatio = computer.devicePixelRatio
            , screen = computer.screen
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
            , backgroundColor = black
            }
            [ cubes computer model ]
        ]


cubes : Computer -> Model -> Shape
cubes computer model =
    let
        oneCube ( x, y ) =
            let
                delay =
                    toFloat (x + y) * 0.1

                wavyRotation =
                    wave -pi pi 14 (computer.clock + delay)
            in
            cube (matte yellow) 1
                |> rotateY wavyRotation
                |> rotateX wavyRotation
                |> rotateZ wavyRotation
                |> moveX (toFloat x)
                |> moveY (toFloat y)
                |> moveZ -0.5
    in
    group
        (model.cubes |> Set.toList |> List.map oneCube)
        |> moveY (wave -0.5 0.5 7 computer.clock)
