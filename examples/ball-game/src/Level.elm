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


tick : Computer -> Level -> Level
tick computer level =
    { ball =
        level.ball
            |> handleArrowKeys computer
            |> friction computer
            |> physics computer
            --|> gravity computer
            |> floor computer
    }


handleArrowKeys : Computer -> Ball -> Ball
handleArrowKeys computer ball =
    let
        direction =
            directionAsVector ball

        gasForce =
            getFloat "gas force" computer

        giveGas =
            addVector (scaleBy (computer.deltaTime * gasForce * toY computer.keyboard) direction)

        jump =
            if ball.position.y == 0 && computer.keyboard.space then
                addVector ( 0, getFloat "jump speed" computer, 0 )

            else
                identity
    in
    { ball
        | directionFromXAxis =
            ball.directionFromXAxis
                - (toX computer.keyboard
                    * getFloat "direction change speed" computer
                    * computer.deltaTime
                  )
        , rotationSpeed =
            if toY computer.keyboard == 0 then
                -- if there is no keyboard input, we rotate the ball looking at its speed
                dotProduct ball.speed direction

            else
                ball.rotationSpeed + computer.deltaTime * 1000 * toY computer.keyboard |> clamp -12 12
        , speed = ball.speed |> giveGas |> jump
    }


friction : Computer -> Ball -> Ball
friction computer ball =
    { ball
        | speed = ball.speed |> scaleBy (1 - computer.deltaTime * getFloat "friction" computer)
    }


gravity : Computer -> Ball -> Ball
gravity computer ball =
    { ball
        | speed = ball.speed |> addVector ( 0, -9.81 * computer.deltaTime, 0 )
    }


floor : Computer -> Ball -> Ball
floor computer ball =
    if ball.position.y < 0 then
        { ball
            | position = Point ball.position.x 0 ball.position.z
            , speed = ball.speed |> (\( vx, vy, vz ) -> ( vx, 0, vz ))
        }

    else
        ball


physics : Computer -> Ball -> Ball
physics computer ball =
    { ball
        | position = ball.position |> translateBy (scaleBy computer.deltaTime ball.speed)
        , rotation = ball.rotation + computer.deltaTime * ball.rotationSpeed
    }
