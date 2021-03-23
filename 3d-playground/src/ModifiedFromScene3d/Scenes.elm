module ModifiedFromScene3d.Scenes exposing (sunnyWithDevicePixelRatio)

import Camera3d exposing (Camera3d)
import Direction3d exposing (Direction3d)
import Html exposing (Html)
import Illuminance
import Length exposing (Length, Meters)
import Pixels exposing (Pixels)
import Quantity exposing (Quantity)
import Scene3d exposing (Background, Entity, custom, exposureValue, multisampling, noToneMapping, supersampling, threeLights)
import Scene3d.Light as Light


sunnyWithDevicePixelRatio :
    { devicePixelRatio : Float
    , upDirection : Direction3d coordinates
    , sunlightDirection : Direction3d coordinates
    , shadows : Bool
    , dimensions : ( Quantity Int Pixels, Quantity Int Pixels )
    , camera : Camera3d Meters coordinates
    , clipDepth : Length
    , background : Background coordinates
    , entities : List (Entity coordinates)
    }
    -> Html msg
sunnyWithDevicePixelRatio arguments =
    let
        sun =
            Light.directional (Light.castsShadows arguments.shadows)
                { direction = arguments.sunlightDirection
                , intensity = Illuminance.lux 80000
                , chromaticity = Light.sunlight
                }

        sky =
            Light.overhead
                { upDirection = arguments.upDirection
                , chromaticity = Light.skylight
                , intensity = Illuminance.lux 20000
                }

        environment =
            Light.overhead
                { upDirection = Direction3d.reverse arguments.upDirection
                , chromaticity = Light.daylight
                , intensity = Illuminance.lux 15000
                }

        lights =
            threeLights sun sky environment
    in
    custom
        { lights = lights
        , camera = arguments.camera
        , clipDepth = arguments.clipDepth
        , exposure = exposureValue 15
        , toneMapping = noToneMapping
        , whiteBalance = Light.daylight
        , antialiasing = supersampling arguments.devicePixelRatio
        , dimensions = arguments.dimensions
        , background = arguments.background
        , entities = arguments.entities
        }
