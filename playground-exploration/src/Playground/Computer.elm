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


assignConfigurations : Configurations -> Inputs -> Computer
assignConfigurations initialConfigurations inputs =
    { dt = inputs.dt
    , clock = inputs.clock
    , keyboard = inputs.keyboard
    , pointer = inputs.pointer
    , wheel = inputs.wheel
    , screen = inputs.screen
    , devicePixelRatio = inputs.devicePixelRatio
    , configurations = initialConfigurations
    }


updateConfigurations : Configurations.Msg -> Computer -> Computer
updateConfigurations configurationsMsg computer =
    { computer
        | configurations = computer.configurations |> Configurations.update configurationsMsg
    }



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


{-| Turn the UP and DOWN arrows into a number.

    toY { up = False, down = False, ... } == 0
    toY { up = True , down = False, ... } == 1
    toY { up = False, down = True , ... } == -1
    toY { up = True , down = True , ... } == 0

This can be used to move characters around in games just like [`toX`](#toX):

    import Playground.Playground as Playground exposing (..)

    main =
        game view update ( 0, 0 )

    view computer ( x, y ) =
        [ square blue 40
            |> move x y
        ]

    update computer ( x, y ) =
        ( x + toX computer.keyboard
        , y + toY computer.keyboard
        )

-}
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


{-| If you just use `toX` and `toY`, you will move diagonal too fast. You will go
right at 1 pixel per update, but you will go up/right at 1.41421 pixels per
update.

So `toXY` turns the arrow keys into an `(x,y)` pair such that the distance is
normalized:

    toXY { up = True , down = False, left = False, right = False, ... } == (1, 0)
    toXY { up = True , down = False, left = False, right = True , ... } == (0.707, 0.707)
    toXY { up = False, down = False, left = False, right = True , ... } == (0, 1)

Now when you go up/right, you are still going 1 pixel per update.

    import Playground.Playground as Playground exposing (..)

    main =
        game view update ( 0, 0 )

    view computer ( x, y ) =
        [ square green 40
            |> move x y
        ]

    update computer ( x, y ) =
        let
            ( dx, dy ) =
                toXY computer.keyboard
        in
        ( x + dx, y + dy )

-}
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
