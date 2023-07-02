module Light exposing
    ( directional
    , point
    , soft
    )

{-| Create both a Light and an Entity (a bright glowing sphere) representing a
particular point light
-}

{- THIS CODE IS CODE ADAPTED FROM
   https://github.com/ianmackenzie/elm-3d-scene/blob/1.0.1/examples/MultipleShadows.elm
-}

import Angle
import Direction3d
import Geometry exposing (Point, Vector)
import Illuminance exposing (Illuminance)
import LuminousFlux exposing (LuminousFlux)
import Point3d exposing (Point3d)
import Scene3d.Light exposing (Chromaticity, Light)



-- Rough approximation of unlight near sunset


directional :
    { azimuth : Float
    , elevation : Float
    , chromaticity : Chromaticity
    , intensity : Illuminance
    }
    -> Light coordinates Bool
directional properties =
    Scene3d.Light.directional (Scene3d.Light.castsShadows True)
        { direction = Direction3d.xyZ (Angle.radians properties.azimuth) (Angle.radians properties.elevation)
        , chromaticity = properties.chromaticity
        , intensity = properties.intensity
        }


soft :
    { azimuth : Float
    , elevation : Float
    , chromaticity : Chromaticity
    , intensityAbove : Illuminance
    , intensityBelow : Illuminance
    }
    -> Light coordinates Never
soft properties =
    Scene3d.Light.soft
        { upDirection = Direction3d.xyZ (Angle.radians properties.azimuth) (Angle.radians properties.elevation)
        , chromaticity = properties.chromaticity
        , intensityAbove = properties.intensityAbove
        , intensityBelow = properties.intensityBelow
        }


point :
    { position : Point
    , chromaticity : Chromaticity
    , intensity : LuminousFlux
    }
    -> Light coordinates Bool
point properties =
    Scene3d.Light.point (Scene3d.Light.castsShadows True)
        { position = Point3d.fromMeters properties.position
        , chromaticity = properties.chromaticity
        , intensity = properties.intensity
        }
