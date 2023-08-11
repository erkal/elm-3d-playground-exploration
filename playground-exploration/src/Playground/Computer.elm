module Playground.Computer exposing (..)

import Color exposing (Color)
import Playground.Configurations as Configurations exposing (Configurations)


type alias Inputs =
    { dt : Float
    , clock : Float
    , keyboard : Keyboard
    , pointer : Pointer
    , wheel : Wheel
    , screen : Screen
    , devicePixelRatio : Float
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
        , screen = inputs.screen
        , devicePixelRatio = inputs.devicePixelRatio
    }


updateConfigurations : Configurations.Msg -> Computer -> Computer
updateConfigurations configurationsMsg computer =
    { computer | configurations = computer.configurations |> Configurations.update configurationsMsg }



-- CONFIGURATIONS


getBool : String -> Computer -> Bool
getBool key computer =
    computer.configurations |> Configurations.getBool key


getInt : String -> Computer -> Int
getInt key computer =
    computer.configurations |> Configurations.getInt key


getFloat : String -> Computer -> Float
getFloat key computer =
    computer.configurations |> Configurations.getFloat key


getColor : String -> Computer -> Color
getColor key computer =
    computer.configurations |> Configurations.getColor key



-- Getting directions from the keyboard


toX : Keyboard -> Float
toX keyboard =
    (if keyboard.right then
        1

     else
        0
    )
        - (if keyboard.left then
            1

           else
            0
          )


toY : Keyboard -> Float
toY keyboard =
    (if keyboard.up then
        1

     else
        0
    )
        - (if keyboard.down then
            1

           else
            0
          )


toXY : Keyboard -> ( Float, Float )
toXY keyboard =
    let
        x =
            toX keyboard

        y =
            toY keyboard
    in
    if x /= 0 && y /= 0 then
        ( x / squareRootOfTwo, y / squareRootOfTwo )

    else
        ( x, y )


squareRootOfTwo : Float
squareRootOfTwo =
    sqrt 2
