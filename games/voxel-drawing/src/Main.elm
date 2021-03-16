module Main exposing (main)

import Color exposing (Color, black, gray, grey, hsl, white, yellow)
import Dict exposing (Dict)
import Html exposing (Html)
import Playground3d exposing (Computer, Shape, configurations, cube, gameWithConfigurations, getFloat, group, moveX, moveY, moveZ, rotateY, waveWithDelay)
import Playground3d.Camera as Camera exposing (Camera, perspective)
import Playground3d.Scene as Scene
import Set exposing (Set)


main =
    gameWithConfigurations view update initialConfigurations initialModel


type alias Model =
    { cubes : Dict ( Int, Int ) Color
    }



-- INIT


initialModel : Model
initialModel =
    { cubes = Dict.empty
    }



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
    case Camera.mouseOverXY (camera computer) computer of
        Just p ->
            { model
                | cubes =
                    model.cubes
                        |> Dict.remove ( round p.x, round p.y )
            }

        Nothing ->
            model


insertCube : Computer -> Model -> Model
insertCube computer model =
    case Camera.mouseOverXY (camera computer) computer of
        Just p ->
            { model
                | cubes =
                    model.cubes
                        |> Dict.insert ( round p.x, round p.y )
                            (hsl
                                (getFloat "hue" computer)
                                (getFloat "saturation" computer)
                                (getFloat "lightness" computer)
                            )
            }

        Nothing ->
            model



-- VIEW


camera computer =
    perspective
        { focalPoint = { x = 0, y = 0, z = 0 }
        , eyePoint =
            { x = getFloat "camera x" computer
            , y = getFloat "camera y" computer
            , z = getFloat "camera z" computer
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { screen = computer.screen
        , camera = camera computer
        , backgroundColor = gray
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ cubes computer model ]


initialConfigurations =
    configurations
        [ ( "camera x", ( 0, 1, 16 ) )
        , ( "camera y", ( 0, 1, 10 ) )
        , ( "camera z", ( 0, 40, 60 ) )
        , ( "hue", ( 0, 0.4, 1 ) )
        , ( "saturation", ( 0, 0.8, 1 ) )
        , ( "lightness", ( 0, 0.7, 1 ) )
        ]


cubes : Computer -> Model -> Shape
cubes computer model =
    let
        oneCube ( ( x, y ), color ) =
            cube color 1
                |> moveX (toFloat x)
                |> moveY (toFloat y)
    in
    group
        (model.cubes |> Dict.toList |> List.map oneCube)
