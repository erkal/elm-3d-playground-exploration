module Physics.World exposing (..)

import Physics.Primitives.Geometry2d as Geometry2d exposing (Circle2d, Point2d, Polygon2d, Vector2d, distance, translateBy)


type alias World =
    { ball : Ball
    , polygons : List PolygonBody
    , coins : List Coin
    , collisionPointsHistoryBallToPolygons : List Point2d
    , collisionPointsHistoryPolygonsToBall : List Point2d
    , ballBouncedInLastTickToPolygonWithCenter : Maybe Point2d
    }


type alias PolygonBody =
    { polygon : Polygon2d
    , bounciness : Float
    }


verticesInWorldCoordinates : PolygonBody -> List Point2d
verticesInWorldCoordinates polygonBody =
    let
        toWorldCoordinates =
            translateBy
                ( polygonBody.polygon.center.x
                , polygonBody.polygon.center.y
                )
    in
    polygonBody.polygon.vertexCoordinatesRelativeToCenter
        |> List.map toWorldCoordinates


type alias Ball =
    { circle : Circle2d
    , velocity : Vector2d
    , directionFromXAxis : {- in radians -} Float
    , rotationSpeed : {- in radians per second -} Float
    , rotation : {- in radians -} Float
    }


type alias Coin =
    { center : Point2d
    , isCollected : Bool
    }


init : World
init =
    { ball = initialBall
    , polygons = []
    , coins = []
    , collisionPointsHistoryBallToPolygons = []
    , collisionPointsHistoryPolygonsToBall = []
    , ballBouncedInLastTickToPolygonWithCenter = Nothing
    }


initialBall : Ball
initialBall =
    { circle = { center = Point2d 0 0, radius = 0.5 }
    , velocity = ( 0, 0 )
    , directionFromXAxis = 0
    , rotationSpeed = 0
    , rotation = 0
    }


reset : World -> World
reset world =
    world
        |> resetBall
        |> resetCoins
        |> resetCollisionHistories


resetCoins : World -> World
resetCoins world =
    { world | coins = world.coins |> List.map (\medal -> { medal | isCollected = False }) }


resetCollisionHistories : World -> World
resetCollisionHistories world =
    { world
        | collisionPointsHistoryBallToPolygons = []
        , collisionPointsHistoryPolygonsToBall = []
    }


addCoin : Point2d -> World -> World
addCoin center world =
    { world | coins = Coin center False :: world.coins }


addPolygon : { verticesInLocalCoordinates : List Point2d, center : Point2d } -> World -> World
addPolygon { verticesInLocalCoordinates, center } world =
    let
        newPolygon =
            { polygon =
                { center = center
                , vertexCoordinatesRelativeToCenter = verticesInLocalCoordinates
                }
            , bounciness = 1
            }
    in
    { world | polygons = newPolygon :: world.polygons }


removeObjects : Point2d -> World -> World
removeObjects p world =
    world
        |> removePolygons p
        |> removeCoins p


removeCoins : Point2d -> World -> World
removeCoins p world =
    let
        coversPoint medal =
            distance p medal.center < 0.5
    in
    { world | coins = world.coins |> List.filter (coversPoint >> not) }


removePolygons : Point2d -> World -> World
removePolygons p world =
    let
        coversPoint polygon =
            polygon
                |> verticesInWorldCoordinates
                |> Geometry2d.pointInPolygon p
    in
    { world | polygons = world.polygons |> List.filter (coversPoint >> not) }


resetBall : World -> World
resetBall world =
    { world | ball = initialBall }


mapBall : (Ball -> Ball) -> World -> World
mapBall up world =
    { world | ball = up world.ball }
