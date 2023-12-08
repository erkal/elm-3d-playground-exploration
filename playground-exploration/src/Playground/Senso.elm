module Playground.Senso exposing
    ( Senso, SensoState
    , init
    , update
    , getUnifiedPress
    )

{-|

@docs Senso, SensoState


# Creation

@docs init


# Query

@docs unify


# Manipulate

@docs update

-}


{-| Same type as in javascript.
It makes it possible to convert from javascript to elm without needing to write decoder.
-}
type alias SensoState =
    { center : SensoPress
    , right : SensoPress
    , up : SensoPress
    , left : SensoPress
    , down : SensoPress
    }


{-| This lives in `Computer` and is exposed to the user.
It is structured in a way that makes it easy to the user to access the input.
-}
type alias Senso =
    { center : SensoPress
    , right : SensoPress
    , up : SensoPress
    , left : SensoPress
    , down : SensoPress

    -- the above are the current state.
    -- the below are the target state for lerping
    , target : SensoState
    }


type alias SensoPress =
    { x : Float, y : Float, f : Float }



-- Creation


init : Senso
init =
    { center = initSensoPress
    , right = initSensoPress
    , up = initSensoPress
    , left = initSensoPress
    , down = initSensoPress
    , target =
        { center = initSensoPress
        , right = initSensoPress
        , up = initSensoPress
        , left = initSensoPress
        , down = initSensoPress
        }
    }


initSensoPress : SensoPress
initSensoPress =
    { x = 0, y = 0, f = 0 }



-- Query


{-| calculates

  - the weighted average of positions and
  - the total force

-}
getUnifiedPress : Senso -> SensoPress
getUnifiedPress senso =
    let
        reduce : SensoPress -> SensoPress -> SensoPress
        reduce { x, y, f } acc =
            { x = acc.x + f * x
            , y = acc.y + f * y
            , f = acc.f + f
            }
    in
    [ senso.center
    , senso.right
    , senso.up
    , senso.left
    , senso.down
    ]
        |> List.foldl reduce { x = 0, y = 0, f = 0 }
        |> (\{ x, y, f } ->
                { x = x |> divideSafelyBy f
                , y = y |> divideSafelyBy f
                , f = f
                }
           )



-- Manipulate


divideSafelyBy : Float -> Float -> Float
divideSafelyBy divisor dividend =
    if divisor == 0 then
        dividend

    else
        dividend / divisor


{-| transforms the coordinates in SensoState such that

  - the ranges of x and y are [-1, 1]. (The origin is in the center)
  - the y axis is inverted (shows up)

-}
normalizeCoordinates : SensoPress -> SensoPress
normalizeCoordinates { x, y, f } =
    { x = x / 3 * 2 - 1
    , y = -(y / 3 * 2 - 1)
    , f = f
    }


lerpTo : SensoPress -> SensoPress -> SensoPress
lerpTo target current =
    let
        interpolationFactor : Float
        interpolationFactor =
            0.3
    in
    { x = current.x + (target.x - current.x) * interpolationFactor
    , y = current.y + (target.y - current.y) * interpolationFactor
    , f = current.f + (target.f - current.f) * interpolationFactor
    }


update : SensoState -> Senso -> Senso
update sensoState senso =
    { center = senso.center |> normalizeCoordinates |> lerpTo sensoState.center
    , right = senso.right |> normalizeCoordinates |> lerpTo sensoState.right
    , up = senso.up |> normalizeCoordinates |> lerpTo sensoState.up
    , left = senso.left |> normalizeCoordinates |> lerpTo sensoState.left
    , down = senso.down |> normalizeCoordinates |> lerpTo sensoState.down

    --
    , target = sensoState
    }
