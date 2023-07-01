module BallGame.World.Decode exposing (..)

import BallGame.World as World exposing (World)
import BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (Circle2d, Point2d)
import Json.Decode as JD exposing (Decoder)
import Json.Decode.Pipeline exposing (required)


decoder : Decoder World
decoder =
    JD.succeed World
        |> required "ball" ballDecoder
        |> required "polygons" (JD.list polygonBodyDecoder)
        |> required "coins" (JD.list coinDecoder)
        |> required "collisionPointsHistory" (JD.list worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder)
        |> required "ballBouncedInLastTickToPolygonWithId" (JD.nullable JD.int)



-- TODO: double-check generated code


worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder : Decoder Point2d
worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder =
    JD.succeed Point2d
        |> required "x" JD.float
        |> required "y" JD.float



-- TODO: double-check generated code


circle2dDecoder : Decoder Circle2d
circle2dDecoder =
    JD.succeed Circle2d
        |> required "center" worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder
        |> required "radius" JD.float



-- TODO: double-check generated code


ballDecoder : Decoder World.Ball
ballDecoder =
    JD.succeed World.Ball
        |> required "circle" circle2dDecoder
        |> required "velocity" (JD.map2 Tuple.pair (JD.index 0 JD.float) (JD.index 1 JD.float))
        |> required "directionFromXAxis" JD.float
        |> required "rotationSpeed" JD.float
        |> required "rotation" JD.float
        |> required "trail" (JD.list worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder)



-- TODO: double-check generated code


polygonBodyDecoder : Decoder World.PolygonBody
polygonBodyDecoder =
    JD.succeed World.PolygonBody
        |> required "id" JD.int
        |> required "polygon" (JD.list worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder)
        |> required "bounciness" JD.float



-- TODO: double-check generated code


coinDecoder : Decoder World.Coin
coinDecoder =
    JD.succeed World.Coin
        |> required "center" worldPhysicsCollisionPrimitivesGeometry2dPoint2dDecoder
        |> required "isCollected" JD.bool
