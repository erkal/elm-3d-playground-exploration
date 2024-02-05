module BallGame.World.Physics.Tick exposing (..)

import BallGame.World exposing (Ball, World, mapBall)
import BallGame.World.Physics.Collision.BallToPolygons as BallToPolygons
import BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (Vector2d, add, distance, dotProduct, scaleBy, translateBy)
import BallGame.World.Physics.Collision.PushBallOut as PushBallOut
import Playground.Playground exposing (Computer, Keyboard, getFloat)


tick : Computer -> World -> World
tick computer world =
    world
        |> BallToPolygons.collide computer
        |> mapBall (moveBall computer)
        |> PushBallOut.fromWalls
        |> collectCollectables


moveBall : Computer -> Ball -> Ball
moveBall computer ball =
    ball
        |> handleArrowKeys computer
        |> friction computer
        |> tickRotation computer
        |> physics computer
        |> updateTrail


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


handleArrowKeys : Computer -> Ball -> Ball
handleArrowKeys computer ball =
    let
        direction =
            fromPolar ( 1, ball.directionFromXAxis )

        gasForce =
            getFloat "gas force" computer

        giveGas =
            add (scaleBy (computer.dt * gasForce * toY computer.keyboard) direction)
    in
    { ball
        | directionFromXAxis =
            ball.directionFromXAxis
                - (toX computer.keyboard
                    * getFloat "direction change speed" computer
                    * computer.dt
                  )
        , rotationSpeed =
            if toY computer.keyboard == 0 then
                -- if there is no keyboard input, we rotate the ball looking at its speed
                dotProduct ball.velocity direction

            else
                ball.rotationSpeed + computer.dt * 1000 * toY computer.keyboard |> clamp -14 14
        , velocity =
            ball.velocity |> giveGas
    }


friction : Computer -> Ball -> Ball
friction computer ball =
    { ball
        | velocity = ball.velocity |> scaleBy (1 - computer.dt * 5 * getFloat "friction" computer)
    }


tickRotation : Computer -> Ball -> Ball
tickRotation computer ball =
    { ball
        | rotation = ball.rotation + computer.dt * ball.rotationSpeed
    }


updateTrail : Ball -> Ball
updateTrail ball =
    { ball
        | trail =
            case ball.trail of
                p :: _ ->
                    if distance p ball.circle.center > 1 then
                        ball.circle.center :: ball.trail

                    else
                        ball.trail

                [] ->
                    [ ball.circle.center ]
    }


physics : Computer -> Ball -> Ball
physics computer ({ circle } as ball) =
    { ball
        | circle = { circle | center = ball.circle.center |> translateBy (scaleBy computer.dt ball.velocity) }
    }



--


collectCollectables : World -> World
collectCollectables world =
    let
        collect collectable =
            if not collectable.isCollected && distance collectable.center world.ball.circle.center < 1 then
                { collectable | isCollected = True }

            else
                collectable
    in
    { world | coins = world.coins |> List.map collect }
