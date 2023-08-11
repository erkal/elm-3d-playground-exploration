module Tools.PanAndZoom.PanAndZoom exposing
    ( PanAndZoom
    , PartialScreen
    , get
    , getPointerPositionInLocalCoordinates
    , getZoom
    , init
    , isPanningWithSpaceBar
    , panWithWheel
    , setPan
    , setZoom
    , tick
    , zoomInBy
    , zoomOutBy
    , zoomTo100
    , zoomToFit
    )

import Playground.Playground exposing (Computer, Screen)
import Tools.Geometry.Geometry exposing (BoundingBox, Point2d, scaleAbout, scaleBy, translateBy, vectorFrom)


type PanAndZoom
    = PAZ
        { pan : Point2d
        , zoom : Float
        , state : State

        --
        , minZoom : Float
        , maxZoom : Float
        }


type State
    = Idle
    | ZoomingWithWheel { lastWheelDeltaYArrivedAt : Float }
    | PanningWithSpaceBar { pointerPositionAtPanStart : Point2d, panAtStart : Point2d }


type alias PartialScreen =
    { top : Float
    , left : Float
    , width : Float
    , height : Float
    }


init : { minZoom : Float, maxZoom : Float } -> PanAndZoom
init { minZoom, maxZoom } =
    PAZ
        { pan = Point2d 0 0
        , zoom = maxZoom
        , state = Idle
        , minZoom = minZoom
        , maxZoom = maxZoom
        }



-- HELPERS


negativeIf : Bool -> (Float -> Float)
negativeIf bool =
    if bool then
        (*) -1

    else
        identity



-- GET


isPanningWithSpaceBar : PanAndZoom -> Bool
isPanningWithSpaceBar (PAZ p) =
    case p.state of
        PanningWithSpaceBar _ ->
            True

        _ ->
            False


get : { yIsUp : Bool } -> PanAndZoom -> { panX : Float, panY : Float, zoom : Float }
get { yIsUp } (PAZ p) =
    { panX = p.pan.x
    , panY = p.pan.y |> negativeIf (not yIsUp)
    , zoom = p.zoom
    }


getZoom : PanAndZoom -> Float
getZoom (PAZ p) =
    p.zoom


getPointerPositionInLocalCoordinates : Computer -> { yIsUp : Bool } -> PanAndZoom -> Point2d
getPointerPositionInLocalCoordinates computer { yIsUp } (PAZ { pan, zoom }) =
    Point2d
        (pan.x + (computer.pointer.x / zoom))
        ((pan.y + (computer.pointer.y / zoom)) |> negativeIf (not yIsUp))


setPan : Point2d -> PanAndZoom -> PanAndZoom
setPan pan (PAZ p) =
    PAZ
        { p | pan = pan }


setZoom : Float -> PanAndZoom -> PanAndZoom
setZoom zoom (PAZ p) =
    PAZ
        { p | zoom = zoom }


setState : State -> PanAndZoom -> PanAndZoom
setState state (PAZ p) =
    PAZ
        { p | state = state }


zoomTo100 : PanAndZoom -> PanAndZoom
zoomTo100 (PAZ p) =
    PAZ { p | zoom = 1 }


zoomInBy : Float -> PanAndZoom -> PanAndZoom
zoomInBy factor (PAZ p) =
    PAZ { p | zoom = p.zoom |> (*) factor |> clamp p.minZoom p.maxZoom }


zoomOutBy : Float -> PanAndZoom -> PanAndZoom
zoomOutBy factor (PAZ p) =
    PAZ { p | zoom = p.zoom |> (*) (1 / factor) |> clamp p.minZoom p.maxZoom }


zoomToFit : Screen -> PartialScreen -> BoundingBox -> { yIsUp : Bool } -> PanAndZoom -> PanAndZoom
zoomToFit windowSize partialScreen boundingBoxOfObjects { yIsUp } (PAZ p) =
    let
        flipY : BoundingBox -> BoundingBox
        flipY box =
            { box | minY = -box.maxY, maxY = -box.minY }

        boundingBoxOfObjects_ =
            if yIsUp then
                boundingBoxOfObjects

            else
                flipY boundingBoxOfObjects

        zoomToFitWidth =
            partialScreen.width
                / (boundingBoxOfObjects_.maxX - boundingBoxOfObjects_.minX)

        zoomToFitHeight =
            partialScreen.height
                / (boundingBoxOfObjects_.maxY - boundingBoxOfObjects_.minY)

        targetZoom =
            min zoomToFitWidth zoomToFitHeight
                |> clamp p.minZoom p.maxZoom

        centerOfScreen =
            { x = windowSize.width / 2
            , y = windowSize.height / 2
            }

        centerOfPartialScreen =
            { x = partialScreen.left + (partialScreen.width / 2)
            , y = partialScreen.top + (partialScreen.height / 2)
            }

        centerOfGraph =
            Point2d
                (0.5 * (boundingBoxOfObjects_.minX + boundingBoxOfObjects_.maxX))
                (0.5 * (boundingBoxOfObjects_.minY + boundingBoxOfObjects_.maxY))

        targetPan =
            centerOfGraph
                |> translateBy
                    ( (centerOfScreen.x - centerOfPartialScreen.x) / targetZoom
                    , (centerOfScreen.y - centerOfPartialScreen.y) / targetZoom
                    )
    in
    PAZ p
        |> setPan targetPan
        |> setZoom targetZoom


zoomAround : Float -> Point2d -> PanAndZoom -> PanAndZoom
zoomAround zoomDelta zoomCenter (PAZ p) =
    let
        newZoom =
            (p.zoom + zoomDelta)
                |> clamp p.minZoom p.maxZoom
    in
    PAZ
        { p
            | zoom = newZoom
            , pan = p.pan |> scaleAbout zoomCenter (p.zoom / newZoom)
        }



-- TICK


tick : Computer -> PanAndZoom -> PanAndZoom
tick computer panAndZoomUI =
    panAndZoomUI
        -- zoom with wheel
        |> startZoomingWithWheel computer
        |> continueZoomingWithWheel computer
        |> stopZoomingWithWheelByDeltaX computer
        |> stopZoomingWithWheelByTime computer
        -- pan with wheel
        |> panWithWheel computer
        -- pan with space bar
        |> startPanningWithSpaceBar computer
        |> panWithSpaceBar computer
        |> stopPanningWithSpaceBar computer


startZoomingWithWheel : Computer -> PanAndZoom -> PanAndZoom
startZoomingWithWheel { wheel, keyboard, clock } (PAZ p) =
    case ( keyboard.control, p.state ) of
        ( True, Idle ) ->
            PAZ p
                |> setState (ZoomingWithWheel { lastWheelDeltaYArrivedAt = clock })

        _ ->
            PAZ p


continueZoomingWithWheel : Computer -> PanAndZoom -> PanAndZoom
continueZoomingWithWheel ({ wheel, clock } as computer) (PAZ p) =
    case ( wheel.deltaX /= 0 || wheel.deltaY /= 0, p.state ) of
        ( True, ZoomingWithWheel { lastWheelDeltaYArrivedAt } ) ->
            let
                zoomSpeed =
                    0.002 * (p.maxZoom - p.minZoom)
            in
            PAZ p
                |> setState
                    (ZoomingWithWheel
                        { lastWheelDeltaYArrivedAt =
                            if wheel.deltaX /= 0 && wheel.deltaY == 0 then
                                lastWheelDeltaYArrivedAt

                            else
                                clock
                        }
                    )
                |> zoomAround (zoomSpeed * -wheel.deltaY) (getPointerPositionInLocalCoordinates computer { yIsUp = True } (PAZ p))

        _ ->
            PAZ p


stopZoomingWithWheelByDeltaX : Computer -> PanAndZoom -> PanAndZoom
stopZoomingWithWheelByDeltaX { wheel, clock } (PAZ p) =
    case ( wheel.deltaX /= 0, p.state ) of
        ( True, ZoomingWithWheel { lastWheelDeltaYArrivedAt } ) ->
            if (wheel.deltaX /= 0) && (clock - lastWheelDeltaYArrivedAt > 0.06) then
                PAZ p |> setState Idle

            else
                PAZ p

        _ ->
            PAZ p


stopZoomingWithWheelByTime : Computer -> PanAndZoom -> PanAndZoom
stopZoomingWithWheelByTime { clock } (PAZ p) =
    case p.state of
        ZoomingWithWheel { lastWheelDeltaYArrivedAt } ->
            if clock - lastWheelDeltaYArrivedAt > 0.08 then
                PAZ p |> setState Idle

            else
                PAZ p

        _ ->
            PAZ p


panWithWheel : Computer -> PanAndZoom -> PanAndZoom
panWithWheel { wheel, keyboard } (PAZ p) =
    case ( p.state, keyboard.control ) of
        ( Idle, False ) ->
            let
                translation =
                    ( wheel.deltaX, -wheel.deltaY )
                        |> scaleBy (1 / p.zoom)
                        |> scaleBy 1.4
            in
            PAZ { p | pan = p.pan |> translateBy translation }

        _ ->
            PAZ p


startPanningWithSpaceBar : Computer -> PanAndZoom -> PanAndZoom
startPanningWithSpaceBar { keyboard, pointer } (PAZ p) =
    if List.member "Space" keyboard.pressedKeys && pointer.down then
        PAZ p
            |> setState
                (PanningWithSpaceBar
                    { pointerPositionAtPanStart = Point2d pointer.x pointer.y
                    , panAtStart = p.pan
                    }
                )

    else
        PAZ p


panWithSpaceBar : Computer -> PanAndZoom -> PanAndZoom
panWithSpaceBar { keyboard, pointer } (PAZ p) =
    case p.state of
        PanningWithSpaceBar { pointerPositionAtPanStart, panAtStart } ->
            let
                translation =
                    vectorFrom (Point2d pointer.x pointer.y) pointerPositionAtPanStart
                        |> scaleBy (1 / p.zoom)
            in
            PAZ { p | pan = panAtStart |> translateBy translation }

        _ ->
            PAZ p


stopPanningWithSpaceBar : Computer -> PanAndZoom -> PanAndZoom
stopPanningWithSpaceBar { pointer } (PAZ p) =
    if pointer.up then
        PAZ p |> setState Idle

    else
        PAZ p
