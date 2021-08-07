module Playground.Computer exposing (..)

{-| When writing a [`game`](#game), you can look up all sorts of information
about your computer:

  - [`Mouse`](#Mouse) - Where is the mouse right now?
  - [`Keyboard`](#Keyboard) - Are the arrow keys down?
  - [`Screen`](#Screen) - How wide is the screen?
  - [`Time`](#Time) - What time is it right now in seconds, starting from 0?

So you can use expressions like `computer.mouse.x` and `computer.keyboard.enter`
in games where you want some mouse or keyboard interaction.

-}

-- COMPUTER

import Browser.Dom as Dom
import Browser.Events as E
import Color exposing (Color)
import Dict exposing (Dict)
import Playground.Configurations as Configurations exposing (Configurations)
import Playground.InputConfiguration exposing (InputConfiguration)
import Set


type alias Computer =
    { mouse : Mouse
    , touches : Dict Int { x : Float, y : Float }
    , pointer : Pointer
    , keyboard : Keyboard
    , screen : Screen
    , time : Float
    , configurations : Configurations
    , devicePixelRatio : Float
    , inputConfiguration : InputConfiguration
    }


type Msg
    = KeyChanged Bool String
    | GotViewport Dom.Viewport
    | Resized Int Int
    | VisibilityChanged E.Visibility
    | MouseMove Float Float
    | MouseUp
    | MouseDown
    | TouchStart (List TouchEvent)
    | TouchMove (List TouchEvent)
    | TouchEnd (List TouchEvent)
    | TouchCancel (List TouchEvent)
    | FromConfigurationsEditor Configurations.Msg


type alias TouchEvent =
    { identifier : Int
    , pageX : Float
    , pageY : Float
    }


init : { devicePixelRatio : Float } -> Configurations -> InputConfiguration -> Computer
init { devicePixelRatio } initialConfigurations inputConfiguration =
    { mouse = Mouse 0 0 False
    , pointer = Pointer 0 0 False
    , touches = Dict.empty
    , keyboard = emptyKeyboard
    , screen = toScreen 600 600
    , time = 0
    , configurations = initialConfigurations
    , devicePixelRatio = devicePixelRatio
    , inputConfiguration = inputConfiguration
    }


resetInput : Computer -> Computer
resetInput computer =
    { computer
        | mouse = Mouse 0 0 False
        , pointer = Pointer 0 0 False
        , touches = Dict.empty
        , keyboard = emptyKeyboard
    }


tickTime : Float -> Computer -> Computer
tickTime deltaTimeInSeconds computer =
    { computer
        | time = computer.time + deltaTimeInSeconds
    }


update : Msg -> Computer -> Computer
update msg ({ mouse, pointer } as computer) =
    case msg of
        GotViewport { viewport } ->
            { computer
                | screen = toScreen viewport.width viewport.height
            }

        Resized w h ->
            { computer
                | screen = toScreen (toFloat w) (toFloat h)
            }

        VisibilityChanged visibility ->
            computer
                |> resetInput

        KeyChanged isDown key ->
            { computer
                | keyboard = updateKeyboard isDown key computer.keyboard
            }

        MouseMove pageX pageY ->
            { computer
                | mouse = { mouse | x = computer.screen.left + pageX, y = computer.screen.top - pageY }
                , pointer = { pointer | x = computer.screen.left + pageX, y = computer.screen.top - pageY }
            }

        MouseDown ->
            { computer
                | mouse = { mouse | down = True }
                , pointer = { pointer | down = True }
            }

        MouseUp ->
            { computer
                | mouse = { mouse | down = False }
                , pointer = { pointer | down = False }
            }

        TouchStart touchEvents ->
            { computer
                | touches =
                    touchEvents
                        |> List.foldl
                            (\{ identifier, pageX, pageY } ->
                                Dict.insert identifier
                                    { x = computer.screen.left + pageX, y = computer.screen.top - pageY }
                            )
                            computer.touches
                , pointer =
                    case touchEvents of
                        { pageX, pageY } :: _ ->
                            { pointer
                                | x = computer.screen.left + pageX
                                , y = computer.screen.top - pageY
                                , down = True
                            }

                        [] ->
                            computer.pointer
            }

        TouchMove touchEvents ->
            { computer
                | touches =
                    touchEvents
                        |> List.foldl
                            (\{ identifier, pageX, pageY } ->
                                Dict.insert identifier
                                    { x = computer.screen.left + pageX
                                    , y = computer.screen.top - pageY
                                    }
                            )
                            computer.touches
                , pointer =
                    case touchEvents of
                        { pageX, pageY } :: _ ->
                            { pointer | x = computer.screen.left + pageX, y = computer.screen.top - pageY }

                        [] ->
                            computer.pointer
            }

        TouchEnd touchEvents ->
            { computer
                | touches = touchEvents |> List.foldl (\{ identifier } -> Dict.remove identifier) computer.touches
                , pointer = { pointer | down = False }
            }

        TouchCancel touchEvents ->
            { computer
                | touches = touchEvents |> List.foldl (\{ identifier } -> Dict.remove identifier) computer.touches
                , pointer = { pointer | down = False }
            }

        FromConfigurationsEditor configurationsMsg ->
            { computer
                | configurations = computer.configurations |> Configurations.update configurationsMsg
            }



-- SCREEN


{-| Get the dimensions of the screen. If the screen is 800 by 600, you will see
a value like this:

    { width = 800
    , height = 600
    , top = 300
    , left = -400
    , right = 400
    , bottom = -300
    }

This can be nice when used with [`moveY`](#moveY) if you want to put something
on the bottom of the screen, no matter the dimensions.

-}
type alias Screen =
    { width : Float
    , height : Float
    , top : Float
    , left : Float
    , right : Float
    , bottom : Float
    }



-- MOUSE


{-| Figure out what is going on with the mouse.

You could draw a circle around the mouse with a program like this:

    import Playground exposing (..)

    main =
        game view update 0

    view computer gameModel =
        [ circle yellow 40
            |> moveX computer.mouse.x
            |> moveY computer.mouse.y
        ]

    update computer gameModel =
        gameModel

You could also use `computer.mouse.down` to change the color of the circle
while the mouse button is down.

-}
type alias Mouse =
    { x : Float
    , y : Float
    , down : Bool
    }


type alias Pointer =
    { x : Float
    , y : Float
    , down : Bool
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



-- SCREEN HELPERS


toScreen : Float -> Float -> Screen
toScreen width height =
    { width = width
    , height = height
    , top = height / 2
    , left = -width / 2
    , right = width / 2
    , bottom = -height / 2
    }



-- KEYBOARD


{-| Figure out what is going on with the keyboard.

If someone is pressing the UP and RIGHT arrows, you will see a value like this:

    { up = True
    , down = False
    , left = False
    , right = True
    , space = False
    , enter = False
    , shift = False
    , backspace = False
    , keys = Set.fromList [ "ArrowUp", "ArrowRight" ]
    }

So if you want to move a character based on arrows, you could write an update
like this:

    update computer y =
        if computer.keyboard.up then
            y + 1

        else
            y

Check out [`toX`](#toX) and [`toY`](#toY) which make this even easier!

**Note:** The `keys` set will be filled with the name of all keys which are
down right now. So you will see things like `"a"`, `"b"`, `"c"`, `"1"`, `"2"`,
`"Space"`, and `"Control"` in there. Check out [this list][list] to see the
names used for all the different special keys! From there, you can use
[`Set.member`][member] to check for whichever key you want. E.g.
`Set.member "Control" computer.keyboard.keys`.

[list]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
[member]: /packages/elm/core/latest/Set#member

-}
type alias Keyboard =
    { up : Bool
    , down : Bool
    , left : Bool
    , right : Bool
    , space : Bool
    , enter : Bool
    , shift : Bool
    , backspace : Bool
    , keys : Set.Set String
    }


{-| Turn the LEFT and RIGHT arrows into a number.

    toX { left = False, right = False, ... } == 0
    toX { left = True , right = False, ... } == -1
    toX { left = False, right = True , ... } == 1
    toX { left = True , right = True , ... } == 0

So to make a square move left and right based on the arrow keys, we could say:

    import Playground exposing (..)

    main =
        game view update 0

    view computer x =
        [ square green 40
            |> moveX x
        ]

    update computer x =
        x + toX computer.keyboard

-}
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


getAxis : String -> Computer -> Float
getAxis axisName computer =
    List.filterMap
        (\( name, conf ) ->
            if name == axisName then
                let
                    positiveValue =
                        Set.toList computer.keyboard.keys
                            |> Debug.log "keys"
                            |> List.filter ((==) conf.positiveButton)

                    negativeValue =
                        Set.toList computer.keyboard.keys
                            |> List.filter ((==) conf.negativeButton)
                in
                case ( positiveValue, negativeValue ) of
                    ( _ :: _, _ :: _ ) ->
                        Nothing

                    ( _ :: _, [] ) ->
                        Just 1

                    ( [], _ :: _ ) ->
                        Just -1

                    ( [], [] ) ->
                        Nothing

            else
                Nothing
        )
        computer.inputConfiguration
        |> List.sum
        |> (\val ->
                if val > 0 then
                    1

                else if val < 0 then
                    -1

                else
                    0
           )


{-| Turn the UP and DOWN arrows into a number.

    toY { up = False, down = False, ... } == 0
    toY { up = True , down = False, ... } == 1
    toY { up = False, down = True , ... } == -1
    toY { up = True , down = True , ... } == 0

This can be used to move characters around in games just like [`toX`](#toX):

    import Playground exposing (..)

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

    import Playground exposing (..)

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



-- KEYBOARD HELPERS


emptyKeyboard : Keyboard
emptyKeyboard =
    { up = False
    , down = False
    , left = False
    , right = False
    , space = False
    , enter = False
    , shift = False
    , backspace = False
    , keys = Set.empty
    }


updateKeyboard : Bool -> String -> Keyboard -> Keyboard
updateKeyboard isDown key keyboard =
    let
        keys =
            if isDown then
                Set.insert key keyboard.keys

            else
                Set.remove key keyboard.keys
    in
    case key of
        " " ->
            { keyboard | keys = keys, space = isDown }

        "Enter" ->
            { keyboard | keys = keys, enter = isDown }

        "Shift" ->
            { keyboard | keys = keys, shift = isDown }

        "Backspace" ->
            { keyboard | keys = keys, backspace = isDown }

        "ArrowUp" ->
            { keyboard | keys = keys, up = isDown }

        "ArrowDown" ->
            { keyboard | keys = keys, down = isDown }

        "ArrowLeft" ->
            { keyboard | keys = keys, left = isDown }

        "ArrowRight" ->
            { keyboard | keys = keys, right = isDown }

        _ ->
            { keyboard | keys = keys }
