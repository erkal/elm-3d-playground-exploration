module Physics.World.Decode exposing (..)

import Json.Decode as JD exposing (Decoder)
import Json.Decode.Pipeline exposing (required)
import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d)
import Physics.World exposing (PolygonType(..), World)


decoder : Decoder World
decoder =
    JD.succeed World
        |> required "ball" ballDecoder
        |> required "polygons" (JD.list polygonBodyDecoder)
        |> required "coins" (JD.list coinDecoder)
        |> required "collisionPointsHistoryBallToPolygons" (JD.list physicsPrimitivesGeometry2dPoint2dDecoder)
        |> required "collisionPointsHistoryPolygonsToBall" (JD.list physicsPrimitivesGeometry2dPoint2dDecoder)
        |> required "coinIsCollectedInLastTick" JD.bool
        |> required "ballBouncedInLastTickToPolygonWithCenter" (JD.nullable physicsPrimitivesGeometry2dPoint2dDecoder)



-- TODO: double-check generated code


physicsPrimitivesGeometry2dPoint2dDecoder : Decoder Point2d
physicsPrimitivesGeometry2dPoint2dDecoder =
    JD.succeed Point2d
        |> required "x" JD.float
        |> required "y" JD.float



-- TODO: double-check generated code


circle2dDecoder : Decoder Circle2d
circle2dDecoder =
    JD.succeed Circle2d
        |> required "center" physicsPrimitivesGeometry2dPoint2dDecoder
        |> required "radius" JD.float



-- TODO: double-check generated code


ballDecoder : Decoder Physics.World.Ball
ballDecoder =
    JD.succeed Physics.World.Ball
        |> required "circle" circle2dDecoder
        |> required "velocity" (JD.map2 Tuple.pair (JD.index 0 JD.float) (JD.index 1 JD.float))
        |> required "directionFromXAxis" JD.float
        |> required "rotationSpeed" JD.float
        |> required "rotation" JD.float



-- TODO: double-check generated code


polygonTypeDecoder : Decoder Physics.World.PolygonType
polygonTypeDecoder =
    let
        get id =
            case id of
                "TypeA" ->
                    JD.succeed Physics.World.TypeA

                "TypeB" ->
                    JD.succeed Physics.World.TypeB

                _ ->
                    JD.fail ("unknown value for PolygonType: " ++ id)
    in
    JD.string |> JD.andThen get



-- TODO: double-check generated code


polygon2dDecoder : Decoder Geometry2d.Polygon2d
polygon2dDecoder =
    JD.succeed Geometry2d.Polygon2d
        |> required "center" physicsPrimitivesGeometry2dPoint2dDecoder
        |> required "verticesInLocalCoordinates" (JD.list physicsPrimitivesGeometry2dPoint2dDecoder)



-- TODO: double-check generated code


polygonBodyDecoder : Decoder Physics.World.PolygonBody
polygonBodyDecoder =
    JD.succeed Physics.World.PolygonBody
        |> required "data" polygonTypeDecoder
        |> required "polygon" polygon2dDecoder
        |> required "bounciness" JD.float



-- TODO: double-check generated code


coinDecoder : Decoder Physics.World.Coin
coinDecoder =
    JD.succeed Physics.World.Coin
        |> required "center" physicsPrimitivesGeometry2dPoint2dDecoder
        |> required "isCollected" JD.bool
