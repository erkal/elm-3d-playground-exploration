module World.Encode exposing (..)

import Cube exposing (Cube(..))
import Json.Encode as JE exposing (Value)
import World exposing (World)


encode : World -> Value
encode world =
    -- TODO
    JE.object []
