module Playground.Computer exposing (..)

import Color exposing (Color)
import Playground.Configurations as Configurations exposing (Configurations)
import Playground.Senso as Senso exposing (Senso, SensoState)


type alias Inputs =
    { dt : Float
    , clock : Float
    , keyboard : Keyboard
    , pointer : Pointer
    , wheel : Wheel
    , screen : Screen
    , devicePixelRatio : Float
    , sensoState : SensoState
    }



--


type alias Computer =
    { dt : Float
    , clock : Float
    , keyboard : Keyboard
    , pointer : Pointer
    , wheel : Wheel
    , screen : Screen
    , devicePixelRatio : Float
    , senso : Senso

    --
    , configurations : Configurations
    }


type alias Keyboard =
    { -- states
      pressedKeys : List String
    , control : Bool
    , alt : Bool
    , shift : Bool
    , left : Bool
    , right : Bool
    , up : Bool
    , down : Bool
    , -- actions
      downs : List String
    }


type alias Pointer =
    { -- states
      x : Float
    , y : Float
    , isDown : Bool
    , -- actions
      down : Bool
    , move : Bool
    , up : Bool
    , rightDown : Bool
    , rightUp : Bool
    }


type alias Wheel =
    { deltaX : Float
    , deltaY : Float
    }


type alias Screen =
    { width : Float
    , height : Float
    }


init : Configurations -> Inputs -> Computer
init initialConfigurations inputs =
    { dt = inputs.dt
    , clock = inputs.clock
    , keyboard = inputs.keyboard
    , pointer = inputs.pointer
    , wheel = inputs.wheel
    , senso = Senso.init
    , screen = inputs.screen
    , devicePixelRatio = inputs.devicePixelRatio
    , configurations = initialConfigurations
    }


tick : Inputs -> Computer -> Computer
tick inputs computer =
    { computer
        | dt = inputs.dt
        , clock =
            -- Note that we don't use the clock from the inputs! This is important for the `Tape` work correctly.
            computer.clock + inputs.dt
        , keyboard = inputs.keyboard
        , pointer = inputs.pointer
        , wheel = inputs.wheel
        , senso = computer.senso |> Senso.update inputs.sensoState
        , screen = inputs.screen
        , devicePixelRatio = inputs.devicePixelRatio
    }


updateConfigurations : Configurations.Msg -> Computer -> Computer
updateConfigurations configurationsMsg computer =
    { computer | configurations = computer.configurations |> Configurations.update configurationsMsg }



-- CONFIGURATIONS


getBool : String -> Computer -> Bool
getBool name computer =
    computer.configurations |> Configurations.getBool name


getInt : String -> Computer -> Int
getInt name computer =
    computer.configurations |> Configurations.getInt name


getFloat : String -> Computer -> Float
getFloat name computer =
    computer.configurations |> Configurations.getFloat name


getColor : String -> Computer -> Color
getColor name computer =
    computer.configurations |> Configurations.getColor name


getOption : String -> Computer -> String
getOption name computer =
    computer.configurations |> Configurations.getOption name
