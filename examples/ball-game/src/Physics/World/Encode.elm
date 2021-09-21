module Physics.World.Encode exposing (..)

import Json.Encode as JE exposing (Value)
import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d)
import Physics.World exposing (PolygonType(..), World)


encode : World -> Value
encode world =
    JE.object <|
        [ ( "ball", encodeBall world.ball )
        , ( "polygons", JE.list encodePolygonBody world.polygons )
        , ( "coins", JE.list encodeCoin world.coins )
        , ( "collisionPointsHistoryBallToPolygons", JE.list encodePhysicsPrimitivesGeometry2dPoint2d world.collisionPointsHistoryBallToPolygons )
        , ( "collisionPointsHistoryPolygonsToBall", JE.list encodePhysicsPrimitivesGeometry2dPoint2d world.collisionPointsHistoryPolygonsToBall )
        , ( "coinIsCollectedInLastTick", JE.bool world.coinIsCollectedInLastTick )
        , ( "ballBouncedInLastTickToPolygonWithCenter", (Maybe.map encodePhysicsPrimitivesGeometry2dPoint2d >> Maybe.withDefault JE.null) world.ballBouncedInLastTickToPolygonWithCenter )
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


encodePolygonType : Physics.World.PolygonType -> Value
encodePolygonType polygonType =
    case polygonType of
        TypeA ->
            JE.string "TypeA"

        TypeB ->
            JE.string "TypeB"



-- TODO: double-check generated code


encodePolygon2d : Geometry2d.Polygon2d -> Value
encodePolygon2d polygon2d =
    JE.object <|
        [ ( "center", encodePhysicsPrimitivesGeometry2dPoint2d polygon2d.center )
        , ( "verticesInLocalCoordinates", JE.list encodePhysicsPrimitivesGeometry2dPoint2d polygon2d.vertexCoordinatesRelativeToCenter )
        ]



-- TODO: double-check generated code


encodePolygonBody : Physics.World.PolygonBody -> Value
encodePolygonBody polygonBody =
    JE.object <|
        [ ( "data", encodePolygonType polygonBody.data )
        , ( "polygon", encodePolygon2d polygonBody.polygon )
        , ( "bounciness", JE.float polygonBody.bounciness )
        ]



-- TODO: double-check generated code


encodeCoin : Physics.World.Coin -> Value
encodeCoin coin =
    JE.object <|
        [ ( "center", encodePhysicsPrimitivesGeometry2dPoint2d coin.center )
        , ( "isCollected", JE.bool coin.isCollected )
        ]
