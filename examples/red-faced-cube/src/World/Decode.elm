module World.Decode exposing (..)

import Cube exposing (Cube(..))
import Json.Decode as JD exposing (Decoder)
import World exposing (World)


decoder : Decoder World
decoder =
    -- TODO
    JD.succeed World.levelFromBook
