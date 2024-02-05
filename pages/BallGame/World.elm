module BallGame.World exposing (..)

import BallGame.World.Physics.Collision.Primitives.Geometry2d exposing (Circle2d, Point2d, Polygon2d, Vector2d, distance, pointInPolygon)


type alias World =
    { ball : Ball
    , polygons : List PolygonBody
    , coins : List Coin

    --
    , collisionPointsHistory : List Point2d
    , ballBouncedInLastTickToPolygonWithId : Maybe Int
    }


type alias PolygonBody =
    { id : Int
    , polygon : Polygon2d
    , bounciness : Float
    }


type alias Ball =
    { circle : Circle2d
    , velocity : Vector2d
    , directionFromXAxis : {- in radians -} Float
    , rotationSpeed : {- in radians per second -} Float
    , rotation : {- in radians -} Float
    , trail : List Point2d
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
    , collisionPointsHistory = []
    , ballBouncedInLastTickToPolygonWithId = Nothing
    }
        -- TODO: Remove the next line[ Point2d 0 0, Point2d 4 0, Point2d 4 4, Point2d 0 4 ]
        |> addPolygon
            [ Point2d 6 0
            , Point2d 6 6
            , Point2d 0 6
            ]


initialBall : Ball
initialBall =
    { circle = { center = Point2d 0 0, radius = 0.5 }
    , velocity = ( 0, 0 )
    , directionFromXAxis = 0
    , rotationSpeed = 0
    , rotation = 0
    , trail = []
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
        | collisionPointsHistory = []
    }


addCoin : Point2d -> World -> World
addCoin center world =
    { world | coins = Coin center False :: world.coins }


addPolygon : List Point2d -> World -> World
addPolygon polygon world =
    let
        newPolygon =
            { id = 1 + (world.polygons |> List.map .id |> List.maximum |> Maybe.withDefault -1)
            , polygon = polygon
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
    { world | polygons = world.polygons |> List.filter (.polygon >> pointInPolygon p >> not) }


resetBall : World -> World
resetBall world =
    { world | ball = initialBall }


mapBall : (Ball -> Ball) -> World -> World
mapBall up world =
    { world | ball = up world.ball }
