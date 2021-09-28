module Physics.World.Encode exposing (..)

import Json.Encode as JE exposing (Value)
import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d)
import Physics.World exposing (World)


encode : World -> Value
encode world =
    JE.object <|
        [ ( "ball", encodeBall world.ball )
        , ( "polygons", JE.list encodePolygonBody world.polygons )
        , ( "coins", JE.list encodeCoin world.coins )
        , ( "collisionPointsHistoryBallToPolygons", JE.list encodePhysicsPrimitivesGeometry2dPoint2d world.collisionPointsHistoryBallToPolygons )
        , ( "collisionPointsHistoryPolygonsToBall", JE.list encodePhysicsPrimitivesGeometry2dPoint2d world.collisionPointsHistoryPolygonsToBall )
        , ( "ballBouncedInLastTickToPolygonWithId", (Maybe.map JE.int >> Maybe.withDefault JE.null) world.ballBouncedInLastTickToPolygonWithId )
        ]



-- TODO: double-check generated code


encodePhysicsPrimitivesGeometry2dPoint2d : Point2d -> Value
encodePhysicsPrimitivesGeometry2dPoint2d point2d =
    JE.object <|
        [ ( "x", JE.float point2d.x )
        , ( "y", JE.float point2d.y )
        ]



-- TODO: double-check generated code


encodeCircle2d : Circle2d -> Value
encodeCircle2d circle2d =
    JE.object <|
        [ ( "center", encodePhysicsPrimitivesGeometry2dPoint2d circle2d.center )
        , ( "radius", JE.float circle2d.radius )
        ]



-- TODO: double-check generated code


encodeBall : Physics.World.Ball -> Value
encodeBall ball =
    JE.object <|
        [ ( "circle", encodeCircle2d ball.circle )
        , ( "velocity", (\( a, b ) -> JE.list identity [ JE.float a, JE.float b ]) ball.velocity )
        , ( "directionFromXAxis", JE.float ball.directionFromXAxis )
        , ( "rotationSpeed", JE.float ball.rotationSpeed )
        , ( "rotation", JE.float ball.rotation )
        ]



-- TODO: double-check generated code


encodePolygonBody : Physics.World.PolygonBody -> Value
encodePolygonBody polygonBody =
    JE.object <|
        [ ( "id", JE.int polygonBody.id )
        , ( "polygon", JE.list encodePhysicsPrimitivesGeometry2dPoint2d polygonBody.polygon )
        , ( "bounciness", JE.float polygonBody.bounciness )
        ]



-- TODO: double-check generated code


encodeCoin : Physics.World.Coin -> Value
encodeCoin coin =
    JE.object <|
        [ ( "center", encodePhysicsPrimitivesGeometry2dPoint2d coin.center )
        , ( "isCollected", JE.bool coin.isCollected )
        ]
