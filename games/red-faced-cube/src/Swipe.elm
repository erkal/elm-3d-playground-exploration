module Swipe exposing
    ( Swipe
    , init
    , swipedDown
    , swipedLeft
    , swipedRight
    , swipedUp
    , update
    )

import Dict
import Playground3d exposing (Computer)


type Swipe
    = Idle
    | SwipingStartedAt Point
    | Swiped SwipeDirection


type alias Point =
    { x : Float
    , y : Float
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



-- helpers


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
            case Dict.values computer.touches of
                firstTouch :: _ ->
                    SwipingStartedAt firstTouch

                _ ->
                    Idle


fireGesture : Computer -> { threshold : Float } -> Swipe -> Swipe
fireGesture computer { threshold } swipe =
    case ( swipe, Dict.values computer.touches ) of
        ( SwipingStartedAt startCoordinates, firstTouch :: _ ) ->
            case maybeSwipeTo threshold startCoordinates firstTouch of
                Just swipeDirection ->
                    Swiped swipeDirection

                Nothing ->
                    swipe

        _ ->
            swipe


finishSwiping : Computer -> Swipe -> Swipe
finishSwiping computer swipe =
    if List.isEmpty (Dict.values computer.touches) then
        Idle

    else
        swipe


dist : Point -> Point -> Float
dist p q =
    sqrt ((p.x - q.x) ^ 2 + (p.y - q.y) ^ 2)


maybeSwipeTo : Float -> Point -> Point -> Maybe SwipeDirection
maybeSwipeTo threshold startCoordinates currentCoordinates =
    let
        ( s, c ) =
            ( startCoordinates, currentCoordinates )

        distance =
            dist startCoordinates currentCoordinates

        isBelowThreshold =
            distance < threshold
    in
    if isBelowThreshold then
        Nothing

    else if c.x - s.x > abs (c.y - s.y) then
        Just Right

    else if s.x - c.x > abs (c.y - s.y) then
        Just Left

    else if c.y - s.y > abs (c.x - s.x) then
        Just Up

    else
        Just Down
