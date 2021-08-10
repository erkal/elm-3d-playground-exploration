module Level exposing (..)

import Geometry exposing (Point, Vector, addVector, dotProduct, scaleBy, translateBy)
import Playground exposing (Computer, getFloat, toX, toY)


type alias Level =
    { ball : Ball
    }


type alias Ball =
    { position : Point
    , speed : Vector
    , -- in radians
      directionFromXAxis : Float
    , -- in radians per second
      rotationSpeed : Float
    , -- in radians
      rotation : Float
    }


initialBall : Ball
initialBall =
    { position = Point 0 0 0
    , speed = ( 0, 0, 0 )
    , directionFromXAxis = 0
    , rotationSpeed = 0
    , rotation = 0
    }


directionAsVector : Ball -> Vector
directionAsVector ball =
    let
        ( x, z ) =
            fromPolar ( 1, -ball.directionFromXAxis )
    in
    ( x, 0, z )


empty : Level
empty =
    { ball = initialBall
    }



-- UPDATE


tick : Computer -> Float -> Level -> Level
tick computer dt level =
    { ball =
        level.ball
            |> handleArrowKeys computer
            |> friction computer dt
            |> physics computer dt
            |> gravity computer dt
            |> floor computer dt
    }


handleArrowKeys : Computer -> Ball -> Ball
handleArrowKeys computer ball =
    let
        direction =
            directionAsVector ball

        gasForce =
            getFloat "gas force" computer

        giveGas =
            addVector (scaleBy (gasForce * toY computer.keyboard) direction)

        jump =
            if ball.position.y == 0 && computer.keyboard.space then
                addVector ( 0, 1.7, 0 )

            else
                identity
    in
    { ball
        | directionFromXAxis = ball.directionFromXAxis - 0.04 * toX computer.keyboard
        , rotationSpeed =
            if toY computer.keyboard == 0 then
                -- if there is no keyboard input, we rotate the ball looking at its speed
                dotProduct ball.speed direction

            else
                ball.rotationSpeed + 0.5 * toY computer.keyboard |> clamp -2 2
        , speed = ball.speed |> giveGas |> jump
    }


friction : Computer -> Float -> Ball -> Ball
friction computer dt ball =
    { ball
        | speed = ball.speed |> scaleBy (1 - dt * getFloat "friction" computer)
    }


gravity : Computer -> Float -> Ball -> Ball
gravity computer dt ball =
    { ball
        | speed =
            ball.speed |> addVector ( 0, -0.5 * dt, 0 )
    }


floor : Computer -> Float -> Ball -> Ball
floor computer dt ball =
    if ball.position.y < 0 then
        { ball
            | position = Point ball.position.x 0 ball.position.z
            , speed = ball.speed |> (\( vx, vy, vz ) -> ( vx, 0, vz ))
        }

    else
        ball


physics : Computer -> Float -> Ball -> Ball
physics computer dt ball =
    { ball
        | position = ball.position |> translateBy (scaleBy dt ball.speed)
        , rotation = ball.rotation + dt * ball.rotationSpeed
    }
