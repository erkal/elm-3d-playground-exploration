module Playground3d.Scene exposing (custom, sunny)

import Angle
import Color exposing (Color)
import Direction3d
import Html exposing (Html)
import Length
import Pixels
import Playground3d exposing (Screen, toEntities)
import Playground3d.Camera exposing (Camera)
import Scene3d exposing (Antialiasing, Exposure, Lights, ToneMapping)
import Scene3d.Light exposing (Chromaticity, Light)


sunny :
    { screen : Screen
    , camera : Camera
    , sunlightAzimuth : Float
    , sunlightElevation : Float
    , backgroundColor : Color
    }
    -> List Playground3d.Shape
    -> Html Never
sunny properties shapes =
    Scene3d.sunny
        { camera = properties.camera
        , clipDepth = Length.centimeters 0.5
        , dimensions =
            ( Pixels.int (round properties.screen.width)
            , Pixels.int (round properties.screen.height)
            )
        , background = Scene3d.backgroundColor properties.backgroundColor
        , entities = toEntities shapes
        , shadows = True
        , upDirection = Direction3d.z
        , sunlightDirection =
            Direction3d.xyZ
                (Angle.radians properties.sunlightAzimuth)
                (Angle.radians properties.sunlightElevation)
        }


custom :
    { screen : Screen
    , camera : Camera
    , lights : Lights ()
    , clipDepth : Float
    , exposure : Exposure
    , toneMapping : ToneMapping
    , whiteBalance : Chromaticity
    , antialiasing : Antialiasing
    , backgroundColor : Color
    }
    -> List Playground3d.Shape
    -> Html Never
custom properties shapes =
    Scene3d.custom
        { lights = properties.lights
        , camera = properties.camera
        , clipDepth = Length.meters properties.clipDepth
        , exposure = properties.exposure
        , toneMapping = properties.toneMapping
        , whiteBalance = properties.whiteBalance
        , antialiasing = properties.antialiasing
        , dimensions =
            ( Pixels.int (round properties.screen.width)
            , Pixels.int (round properties.screen.height)
            )
        , background = Scene3d.backgroundColor properties.backgroundColor
        , entities = toEntities shapes
        }
