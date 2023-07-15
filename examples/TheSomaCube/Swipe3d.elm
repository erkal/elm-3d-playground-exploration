module TheSomaCube.Swipe3d exposing
    ( SwipeState
    , init
    , swipedToXNegative
    , swipedToXPositive
    , swipedToYNegative
    , swipedToYPositive
    , swipedToZNegative
    , swipedToZPositive
    )

import Camera exposing (Camera)
import Dict
import Playground.Playground as Playground exposing (Computer)


type SwipeState
    = Idle
    | SwipingStartedAt PixelCoordinates
    | Swiped SwipeDirection


type SwipeDirection
    = X_Positive
    | X_Negative
    | Y_Positive
    | Y_Negative
    | Z_Positive
    | Z_Negative


type alias PixelCoordinates =
    { x : Float
    , y : Float
    }


init : SwipeState
init =
    Idle



--GET


swipedToXPositive : SwipeState -> Bool
swipedToXPositive =
    (==) (Swiped X_Positive)


swipedToXNegative : SwipeState -> Bool
swipedToXNegative =
    (==) (Swiped X_Negative)


swipedToYPositive : SwipeState -> Bool
swipedToYPositive =
    (==) (Swiped Y_Positive)


swipedToYNegative : SwipeState -> Bool
swipedToYNegative =
    (==) (Swiped Y_Negative)


swipedToZPositive : SwipeState -> Bool
swipedToZPositive =
    (==) (Swiped Z_Positive)


swipedToZNegative : SwipeState -> Bool
swipedToZNegative =
    (==) (Swiped Z_Negative)



-- CHANGE


startSwipingAt : Computer -> SwipeState -> SwipeState
startSwipingAt computer swipe =
    case swipe of
        SwipingStartedAt _ ->
            swipe

        _ ->
            case Dict.values computer.touches of
                firstTouch :: _ ->
                    SwipingStartedAt firstTouch

                _ ->
                    Idle


maybeSwipeTo : Camera -> Float -> PixelCoordinates -> PixelCoordinates -> Maybe SwipeDirection
maybeSwipeTo camera thresholdInWorldUnits startInPixelCoordinates currentInPixelCoordinates =
    let
        ( s, c ) =
            ( startInPixelCoordinates, currentInPixelCoordinates )
    in
    Nothing
