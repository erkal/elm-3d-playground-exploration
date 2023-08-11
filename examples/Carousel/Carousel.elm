module Carousel.Carousel exposing
    ( Carousel
    , animateToNext
    , animateToPrevious
    , constants
    , getCardAt
    , getSelectedCard
    , getSelectedCardData
    , goTo
    , init
    , tick
    )

import Array exposing (Array)
import Playground.Playground as Playground exposing (Computer)



-- MODEL


constants =
    { distanceBetweenCardCenters = 0.35
    , maxRailSpeed = 6
    }


type Carousel card
    = Carousel
        { state : State
        , railX : Float

        --
        , first : card
        , rest : Array card

        --
        , lastPointerDeltas : List { deltaTime : Float, pointerX : Float }
        }


type State
    = Floating { targetX : Float, railVx : Float }
    | Dragging { pointerXAtStart : Float, railXAtStart : Float }


init : card -> List card -> Carousel card
init first rest =
    Carousel
        { state = Floating { targetX = 0, railVx = 0 }
        , railX = 0

        --
        , first = first
        , rest = Array.fromList rest

        --
        , lastPointerDeltas = []
        }



-- GET


numberOfCards : Carousel card -> Int
numberOfCards (Carousel carousel) =
    Array.length carousel.rest + 1


indexOfSelected : Carousel card -> Int
indexOfSelected (Carousel carousel) =
    round (-carousel.railX / constants.distanceBetweenCardCenters)
        |> modBy (numberOfCards (Carousel carousel))


getSelectedCard : Carousel card -> card
getSelectedCard =
    getSelectedCardData >> .card


getSelectedCardData : Carousel card -> { card : card, index : Int, normalizedXToDraw : Float }
getSelectedCardData (Carousel carousel) =
    getCardAt
        (indexOfSelected (Carousel carousel))
        (Carousel carousel)


getCardAt : Int -> Carousel card -> { card : card, index : Int, normalizedXToDraw : Float }
getCardAt unsafeIndex (Carousel carousel) =
    let
        i =
            unsafeIndex |> modBy (numberOfCards (Carousel carousel))
    in
    { card = Array.get (i - 1) carousel.rest |> Maybe.withDefault carousel.first
    , index = i
    , normalizedXToDraw = carousel.railX - (carousel.railX |> nearestMultipleOf constants.distanceBetweenCardCenters)
    }



-- UPDATE


doIf : Bool -> (a -> a) -> a -> a
doIf bool foo =
    if bool then
        foo

    else
        identity


goTo : Int -> Carousel card -> Carousel card
goTo i (Carousel carousel) =
    let
        x =
            toFloat i * constants.distanceBetweenCardCenters
    in
    Carousel
        { carousel
            | railX = x
            , state = Floating { targetX = x, railVx = 0 }
        }


animateToNext : Carousel card -> Carousel card
animateToNext (Carousel carousel) =
    Carousel
        { carousel
            | state =
                Floating
                    { targetX = (carousel.railX - constants.distanceBetweenCardCenters) |> nearestMultipleOf constants.distanceBetweenCardCenters
                    , railVx = 0.2 * -constants.maxRailSpeed
                    }
        }


animateToPrevious : Carousel card -> Carousel card
animateToPrevious (Carousel carousel) =
    Carousel
        { carousel
            | state =
                Floating
                    { targetX = (carousel.railX + constants.distanceBetweenCardCenters) |> nearestMultipleOf constants.distanceBetweenCardCenters
                    , railVx = 0.2 * constants.maxRailSpeed
                    }
        }


tick : Computer -> Carousel card -> Carousel card
tick computer (Carousel carousel) =
    case carousel.state of
        Dragging draggingState ->
            Carousel carousel
                |> updateLastPointerDeltas computer
                |> drag computer draggingState
                |> doIf (not computer.pointer.isDown) startFloating

        Floating { targetX, railVx } ->
            Carousel carousel
                |> resetLastPointerDeltas
                |> doIf computer.pointer.isDown (startDragging computer)
                |> moveRail computer.dt targetX railVx


resetLastPointerDeltas : Carousel card -> Carousel card
resetLastPointerDeltas (Carousel carousel) =
    Carousel { carousel | lastPointerDeltas = [] }


updateLastPointerDeltas : Computer -> Carousel card -> Carousel card
updateLastPointerDeltas { dt, pointer } (Carousel carousel) =
    Carousel
        { carousel
            | lastPointerDeltas =
                { deltaTime = dt
                , pointerX = pointer.x
                }
                    :: carousel.lastPointerDeltas
                    |> List.take 6
        }


startDragging : Computer -> Carousel card -> Carousel card
startDragging computer (Carousel carousel) =
    Carousel
        { carousel
            | state =
                Dragging
                    { pointerXAtStart = computer.pointer.x
                    , railXAtStart = carousel.railX
                    }
        }


drag : Computer -> { pointerXAtStart : Float, railXAtStart : Float } -> Carousel card -> Carousel card
drag { pointer } { pointerXAtStart, railXAtStart } (Carousel carousel) =
    Carousel { carousel | railX = railXAtStart - (pointerXAtStart - pointer.x) }


startFloating : Carousel card -> Carousel card
startFloating (Carousel carousel) =
    let
        ( lastPointerX, firstPointerX ) =
            ( carousel.lastPointerDeltas |> List.head |> Maybe.map .pointerX |> Maybe.withDefault 0
            , carousel.lastPointerDeltas |> List.reverse |> List.head |> Maybe.map .pointerX |> Maybe.withDefault 0
            )

        totalPointerDeltaX =
            lastPointerX - firstPointerX

        totalDeltaTime =
            carousel.lastPointerDeltas
                |> List.map .deltaTime
                |> {- drop the first deltaTime -} List.take (List.length carousel.lastPointerDeltas - 1)
                |> List.sum

        pointerVx =
            if totalDeltaTime == 0 then
                -- prevent possible run time error by preventing division by zero
                0

            else
                totalPointerDeltaX / totalDeltaTime
    in
    Carousel
        { carousel
            | state =
                Floating
                    { targetX = (carousel.railX + 0.3 * pointerVx) |> nearestMultipleOf constants.distanceBetweenCardCenters
                    , railVx = pointerVx |> clamp -constants.maxRailSpeed constants.maxRailSpeed
                    }
        }


nearestMultipleOf : Float -> Float -> Float
nearestMultipleOf divisor dividend =
    (dividend / divisor) |> round |> toFloat |> (*) divisor


moveRail : Float -> Float -> Float -> Carousel card -> Carousel card
moveRail deltaTime targetX railVx (Carousel carousel) =
    if abs (targetX - carousel.railX) < 0.5 * constants.distanceBetweenCardCenters then
        -- lerp to targetX if it is too near
        Carousel { carousel | railX = carousel.railX + (0.1 * (targetX - carousel.railX)) }

    else
        -- move with railVx otherwise
        Carousel { carousel | railX = carousel.railX + (deltaTime * railVx) }
