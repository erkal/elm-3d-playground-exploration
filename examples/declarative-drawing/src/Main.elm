module Main exposing (main)

import Array exposing (Array)
import Camera exposing (Camera, perspective)
import Color exposing (blue, gray, green, red, rgb255)
import Dict exposing (Dict)
import Html exposing (Html)
import Playground exposing (Computer, game)
import Playground.Animation exposing (..)
import Scene as Scene exposing (..)
import Scene3d.Material exposing (matte)


main =
    game view update init


type alias Model =
    { numbers : Dict String ( Number, List NumberModification )
    , numberArrays : Dict String ( NumberArray, List NumberArrayModification )
    , picture : Picture
    }



-- NUMBERS


{-|

    x =
        1

    y =
        x + 1

-}
type Number
    = Num Float
    | NumReference String


type NumberModification
    = AddTo Number
    | MultiplyBy Number
    | Sin
    | Cos



-- NUMBER ARRAYS


{-|

    a =
        [ 1, 2, 3, 4, 5 ]

    b =
        sin (a + 1)

    c =
        cos (b * [ 4, 3, 6, 1, 8 ])

-}
type NumberArray
    = NumArray (Array Number)
    | NumArrayReference String


type NumberArrayModification
    = SingleNumAction NumberModification
    | AddToNumArray NumberArray
    | MultiplyByNumArray NumberArray



-- DRAWINGS


type Snap
    = CanvasCenter
    | CanvasTopLeft
    | LineStart String
    | LineEnd String
    | LineOnRatio String Number


type Picture
    = PictureDrawing (Dict String ( Picture, List PictureModification ))
    | PictureDrawingFromNumberArrayViaMap {- TODO -} ()
    | PictureDrawingFromNumberArrayViaFold {- TODO -} ()
    | LineDrawing ( Line, List LineModification )
    | CircleDrawing ( Circle, List CircleModification )


type PictureModification
    = ScaleAroundCenter Number


type Line
    = Line
        { start : Snap
        , end : Snap
        }


type LineModification
    = ScaleAroundStartingPointBy Number
    | RotateAroundStartingPointBy Number


type Circle
    = Circle
        { center : Snap
        , endOfRadiusLine : Snap
        }


type CircleModification
    = ScaleAround Snap Number



-- INIT


init : Computer -> Model
init computer =
    { numbers = Dict.singleton "time" ( Num 0, [] )
    , numberArrays = Dict.empty
    , picture = PictureDrawing "canvas" Dict.empty
    }



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model
        |> updateTime computer


updateTime : Computer -> Model -> Model
updateTime computer model =
    { model | numbers = model.numbers |> Dict.insert "time" ( Num computer.time, [] ) }



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera =
            perspective
                { focalPoint = { x = 0, y = 0, z = 0 }
                , eyePoint = { x = 0, y = 4, z = 8 }
                , upDirection = { x = 0, y = 1, z = 0 }
                }
        , backgroundColor = rgb255 46 46 46
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        (shapes computer model)


shapes : Computer -> Model -> List Shape
shapes computer model =
    [ axes
    , wavingCube computer
    ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


wavingCube : Computer -> Shape
wavingCube computer =
    block (matte gray) ( 1, 1, 1 )
        |> scale (wave 1 2 14 computer.time)
        |> rotateX (wave 1 10 30 computer.time)
        |> rotateY (wave 1 10 30 computer.time)
        |> rotateZ (wave 1 10 30 computer.time)
