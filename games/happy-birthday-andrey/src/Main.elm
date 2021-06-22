module Main exposing (main)

import Color exposing (Color, black, yellow)
import Html exposing (Html)
import Illuminance
import LuminousFlux
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, group, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, wave)
import Playground3d.Camera as Camera exposing (Camera, perspective)
import Playground3d.Light as Light
import Playground3d.Scene as Scene
import Scene3d
import Scene3d.Light
import Set exposing (Set)
import Temperature


main =
    gameWithConfigurations view update (configurations [] []) init


type alias Model =
    { cubes : Set ( Int, Int )
    }



-- INIT


init : Computer -> Model
init computer =
    { cubes = andreysBrithDayCubes
    }


andreysBrithDayCubes =
    Set.fromList
        [ ( -3, -3 ), ( -3, 1 ), ( -3, 2 ), ( -3, 3 ), ( -2, -2 ), ( -2, 0 ), ( -2, 3 ), ( -2, 4 ), ( -1, -5 ), ( -1, -4 ), ( -1, -3 ), ( -1, -2 ), ( -1, 0 ), ( -1, 3 ), ( -1, 4 ), ( 0, -4 ), ( 0, -3 ), ( 0, -2 ), ( 0, -1 ), ( 0, 0 ), ( 0, 1 ), ( 0, 2 ), ( 0, 3 ), ( 0, 4 ), ( 1, -5 ), ( 1, -4 ), ( 1, -3 ), ( 1, -2 ), ( 1, 0 ), ( 1, 3 ), ( 1, 4 ), ( 2, -2 ), ( 2, 0 ), ( 2, 3 ), ( 2, 4 ), ( 3, -3 ), ( 3, 1 ), ( 3, 2 ), ( 3, 3 ) ]



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    if computer.keyboard.shift && computer.mouse.down then
        removeCube computer model

    else if computer.mouse.down then
        insertCube computer model

    else
        model


removeCube : Computer -> Model -> Model
removeCube computer model =
    case Camera.mouseOverXY (camera computer) computer.screen computer.mouse of
        Just p ->
            { model | cubes = Set.remove ( round p.x, round p.y ) model.cubes }

        Nothing ->
            model


insertCube : Computer -> Model -> Model
insertCube computer model =
    case Camera.mouseOverXY (camera computer) computer.screen computer.mouse of
        Just p ->
            --let
            --    e =
            --        model.cubes |> Debug.log ""
            --in
            { model | cubes = Set.insert ( round p.x, round p.y ) model.cubes }

        Nothing ->
            model



-- VIEW


camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint = { x = 1 + wave -5 5 7 computer.time, y = 1, z = 20 }
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
        , backgroundColor = black
        }
        [ cubes computer model ]


cubes : Computer -> Model -> Shape
cubes computer model =
    let
        oneCube ( x, y ) =
            let
                delay =
                    toFloat (x + y) * 0.1

                wavyRotation =
                    wave -pi pi 14 (computer.time + delay)
            in
            cube yellow 1
                |> rotateY wavyRotation
                |> rotateX wavyRotation
                |> rotateZ wavyRotation
                |> moveX (toFloat x)
                |> moveY (toFloat y)
                |> moveZ -0.5
    in
    group
        (model.cubes |> Set.toList |> List.map oneCube)
        |> moveY (wave -0.5 0.5 7 computer.time)
