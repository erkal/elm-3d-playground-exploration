module MultipleShadowsFromIanMackenzie.Main exposing (main)

import Camera exposing (Camera, perspective)
import Color exposing (blue, brown, gray, green, hsl, lightBlue, lightGreen, lightPurple, orange, red, white)
import Html exposing (Html)
import Illuminance
import Light
import LuminousFlux
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import Scene exposing (..)
import Scene3d
import Scene3d.Light
import Scene3d.Material exposing (matte)
import Temperature
import Tools.Animation.Animation exposing (spin, wave)


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
init computer =
    {}


initialConfigurations =
    [ configBlock "Parameters"
        True
        [ intConfig "number of tree blocks" ( 1, 20 ) 16
        , floatConfig "turning speed of the tree" ( 0.1, 4 ) 1
        ]
    , configBlock "Lighting"
        True
        [ floatConfig "azimuth for third light" ( -pi, pi ) 1
        , floatConfig "elevation for third light" ( -pi, pi ) -2
        , floatConfig "azimuth for fourth light" ( -pi, pi ) 1
        , floatConfig "elevation for fourth light" ( -pi, pi ) -2
        ]
    ]



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model



-- VIEW


camera : Camera
camera =
    perspective
        { focalPoint = { x = 0, y = 1, z = 0 }
        , eyePoint = { x = 5, y = 5, z = 12 }
        , upDirection = { x = 0, y = 1, z = 0 }
        }


view : Computer -> Model -> Html Never
view computer model =
    let
        firstLight =
            Light.point
                { position = { x = -2, y = 4, z = 1 }
                , chromaticity = Scene3d.Light.incandescent
                , intensity = LuminousFlux.lumens 6000
                }

        secondLight =
            Light.point
                { position = { x = 2, y = 3, z = 1 }
                , chromaticity = Scene3d.Light.fluorescent
                , intensity = LuminousFlux.lumens 6000
                }

        thirdLight =
            Light.directional
                { azimuth = getFloat "azimuth for third light" computer
                , elevation = getFloat "elevation for third light" computer
                , chromaticity = Scene3d.Light.colorTemperature (Temperature.kelvins 2000)
                , intensity = Illuminance.lux 120
                }

        fourthLight =
            Light.soft
                { azimuth = getFloat "azimuth for fourth light" computer
                , elevation = getFloat "elevation for fourth light" computer
                , chromaticity = Scene3d.Light.fluorescent
                , intensityAbove = Illuminance.lux 20
                , intensityBelow = Illuminance.lux 10
                }
    in
    Scene.custom
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera
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
    , cubes computer
    , orbitingCubes computer
    , spheres computer

    --, axes
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


floor : Computer -> Shape
floor computer =
    let
        square color =
            block color ( 10, 1, 10 )
                |> moveY -1

        octaThing color =
            group
                [ square color
                , square color |> rotateY (degrees 45)
                ]
    in
    group
        [ funky
        , octaThing (matte gray)
        , octaThing (matte blue)
            |> scale 1.1
            |> moveY -0.1
        , octaThing (matte gray)
            |> scale 1.2
            |> moveY -0.2
        , tree computer
            |> moveX 5
            |> moveY 1
        , group
            (List.range 1 7
                |> List.map
                    (\i ->
                        tetrahedron
                            |> scale 2
                            |> moveX 5.5
                            |> moveY (-1 / 3)
                            |> rotateY (degrees (toFloat i * 45))
                    )
            )
        ]
        |> rotateY (spin 1000 computer.clock)


spheres : Computer -> Shape
spheres computer =
    group
        [ group
            [ sphere (matte lightBlue) 0.5 |> moveX -0.02
            , sphere (matte lightGreen) 0.5 |> moveX 0.02
            ]
            |> rotateZ (spin 100 computer.clock)
            |> moveZ 3.5
            |> rotateY -(spin 640 computer.clock)
        ]


cubes : Computer -> Shape
cubes computer =
    let
        spinIt s =
            s
                |> rotateX (spin 300 computer.clock)
                |> rotateY (spin 300 computer.clock)
                |> rotateZ (spin 300 computer.clock)
    in
    group
        [ cube (matte lightGreen) 1
            |> spinIt
            |> moveX -2
            |> moveY 2
        , cube (matte blue) 1
            |> spinIt
            |> moveX 2
            |> moveY 2
        , cube (matte lightPurple) 1
            |> spinIt
            |> moveY 4
        , tetrahedron
            |> spinIt
            |> moveY 1.5
        ]


funky : Shape
funky =
    let
        a =
            group
                [ cube (matte white) 1
                , cube (matte white) 1
                    |> rotateY (degrees 45)
                ]
    in
    group
        [ group [ a, a |> scale 1.3 |> moveY -0.4 ]
        , cylinder (matte white) 1 0.5 |> moveY -0.7
        ]


tree : Computer -> Shape
tree computer =
    let
        n =
            getInt "number of tree blocks" computer

        layerBlock i =
            let
                width =
                    0.2 * toFloat (n - i) |> min 2

                height =
                    0.25

                wavyColor =
                    hsl (wave (toFloat i / toFloat n) 1 10 computer.clock) 0.6 0.6
            in
            block (matte wavyColor) ( width, height, width )
                |> moveY (toFloat i * 1.2 * height)
                |> rotateY (getFloat "turning speed of the tree" computer * toFloat i * wave 3 5 10 computer.clock)
    in
    group
        [ block (matte brown) ( 0.2, 8, 0.2 )
        , group (List.map layerBlock (List.range 0 (n - 1)))
        ]


orbitingCubes : Computer -> Shape
orbitingCubes computer =
    let
        n =
            14
    in
    group
        (List.range 0 (n - 1)
            |> List.map
                (\i ->
                    cube (matte orange) 0.3
                        |> rotateZ (spin 300 computer.clock)
                        |> rotateX (spin 600 computer.clock)
                        |> moveY (wave -1 1 10 computer.clock)
                        |> moveX 1.3
                        |> rotateY -(toFloat i / n * degrees 360)
                        |> rotateY -(spin 200 computer.clock)
                        |> rotateX (spin 1000 computer.clock)
                        |> rotateZ (spin 1000 computer.clock)
                        |> moveY 4
                )
        )


tetrahedron : Shape
tetrahedron =
    let
        h =
            sqrt 3 / 2

        equilateralTriangle =
            triangle (matte white)
                ( { x = h, y = 0, z = 0 }
                , { x = 0, y = 0.5, z = 0 }
                , { x = 0, y = -0.5, z = 0 }
                )

        oneSide =
            equilateralTriangle |> rotateY (acos (1 / 3)) |> moveX -(h / 3)
    in
    group
        [ equilateralTriangle |> moveX -(h / 3)
        , oneSide
        , oneSide |> rotateZ (degrees 120)
        , oneSide |> rotateZ (degrees 240)
        ]
        |> rotateX (degrees 90)
        |> moveY -(h / 3)
