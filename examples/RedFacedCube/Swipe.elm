module RedFacedCube.Swipe exposing
    ( Swipe
    , init
    , swipedDown
    , swipedLeft
    , swipedRight
    , swipedUp
    , update
    )

import Dict
import Playground.Playground as Playground exposing (Computer)


type Swipe
    = Idle
    | SwipingStartedAt PixelCoordinates
    | Swiped SwipeDirection


type alias PixelCoordinates =
    { x : Float
    , y : Float
    }


pointerPosition computer =
    { x = computer.pointer.x
    , y = computer.pointer.y
    }


type SwipeDirection
    = Left
    | Right
    | Up
    | Down


init : Swipe
init =
    Idle



-- GET


swipedLeft : Swipe -> Bool
swipedLeft =
    (==) (Swiped Left)


swipedRight : Swipe -> Bool
swipedRight =
    (==) (Swiped Right)


swipedUp : Swipe -> Bool
swipedUp =
    (==) (Swiped Up)


swipedDown : Swipe -> Bool
swipedDown =
    (==) (Swiped Down)



-- CHANGE


update : Computer -> { threshold : Float } -> Swipe -> Swipe
update computer sT swipe =
    swipe
        |> clearGesture
        |> startSwiping computer
        |> finishSwiping computer
        |> fireGesture computer sT



-- HELPERS


clearGesture : Swipe -> Swipe
clearGesture swipe =
    case swipe of
        Swiped _ ->
            Idle

        _ ->
            swipe


startSwiping : Computer -> Swipe -> Swipe
startSwiping computer swipe =
    case swipe of
        SwipingStartedAt _ ->
            swipe

        _ ->
            if computer.pointer.isDown then
                SwipingStartedAt (pointerPosition computer)

            else
                Idle


fireGesture : Computer -> { threshold : Float } -> Swipe -> Swipe
fireGesture computer { threshold } swipe =
    case ( swipe, computer.pointer.isDown ) of
        ( SwipingStartedAt startCoordinates, True ) ->
            case maybeSwipeTo threshold startCoordinates (pointerPosition computer) of
                Just swipeDirection ->
                    Swiped swipeDirection

                Nothing ->
                    swipe

        _ ->
            swipe


finishSwiping : Computer -> Swipe -> Swipe
finishSwiping computer swipe =
    if not computer.pointer.isDown then
        Idle

    else
        swipe


dist : PixelCoordinates -> PixelCoordinates -> Float
dist p q =
    sqrt ((p.x - q.x) ^ 2 + (p.y - q.y) ^ 2)


maybeSwipeTo : Float -> PixelCoordinates -> PixelCoordinates -> Maybe SwipeDirection
maybeSwipeTo threshold start current =
    let
        ( s, c ) =
            ( start, current )
    in
    if dist s c < threshold then
        Nothing

    else if c.x - s.x > abs (c.y - s.y) then
        Just Right

    else if s.x - c.x > abs (c.y - s.y) then
        Just Left

    else if c.y - s.y > abs (c.x - s.x) then
        Just Up

    else
        Just Down
