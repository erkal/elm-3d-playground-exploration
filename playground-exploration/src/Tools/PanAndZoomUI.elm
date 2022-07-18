module Tools.PanAndZoomUI exposing
    ( PanAndZoomUI
    , PartialScreen
    , get
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

import Camera exposing (Camera)
import Playground exposing (Computer, Screen)
import Tools.PanAndZoomUI.Geometry2d exposing (BoundingBox, Point2d, scaleAbout, scaleBy, translateBy, vectorFrom)


type PanAndZoomUI
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


init : { minZoom : Float, maxZoom : Float } -> PanAndZoomUI
init { minZoom, maxZoom } =
    PAZ
        { pan = Point2d 0 0
        , zoom = maxZoom
        , state = Idle
        , minZoom = minZoom
        , maxZoom = maxZoom
        }


isPanningWithSpaceBar : PanAndZoomUI -> Bool
isPanningWithSpaceBar (PAZ p) =
    case p.state of
        PanningWithSpaceBar _ ->
            True

        _ ->
            False


get : PanAndZoomUI -> { panX : Float, panY : Float, zoom : Float }
get (PAZ p) =
    { panX = p.pan.x
    , panY = p.pan.y
    , zoom = p.zoom
    }


setPan : Point2d -> PanAndZoomUI -> PanAndZoomUI
setPan pan (PAZ p) =
    PAZ
        { p | pan = pan }


setZoom : Float -> PanAndZoomUI -> PanAndZoomUI
setZoom zoom (PAZ p) =
    PAZ
        { p | zoom = zoom }


setState : State -> PanAndZoomUI -> PanAndZoomUI
setState state (PAZ p) =
    PAZ
        { p | state = state }


zoomTo100 : PanAndZoomUI -> PanAndZoomUI
zoomTo100 (PAZ p) =
    PAZ { p | zoom = 1 }


zoomInBy : Float -> PanAndZoomUI -> PanAndZoomUI
zoomInBy factor (PAZ p) =
    PAZ { p | zoom = p.zoom |> (*) factor |> clamp p.minZoom p.maxZoom }


zoomOutBy : Float -> PanAndZoomUI -> PanAndZoomUI
zoomOutBy factor (PAZ p) =
    PAZ { p | zoom = p.zoom |> (*) (1 / factor) |> clamp p.minZoom p.maxZoom }


zoomToFit : Screen -> PartialScreen -> BoundingBox -> PanAndZoomUI -> PanAndZoomUI
zoomToFit windowSize partialScreen boundingBoxOfObjects (PAZ p) =
    let
        zoomToFitWidth =
            partialScreen.width
                / (boundingBoxOfObjects.maxX - boundingBoxOfObjects.minX)

        zoomToFitHeight =
            partialScreen.height
                / (boundingBoxOfObjects.maxY - boundingBoxOfObjects.minY)

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
                (0.5 * (boundingBoxOfObjects.minX + boundingBoxOfObjects.maxX))
                (0.5 * (boundingBoxOfObjects.minY + boundingBoxOfObjects.maxY))

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


zoomAround : Float -> Point2d -> PanAndZoomUI -> PanAndZoomUI
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


tick : Computer -> Point2d -> PanAndZoomUI -> PanAndZoomUI
tick computer zoomCenter panAndZoomUI =
    panAndZoomUI
        -- zoom with wheel
        |> startZoomingWithWheel computer
        |> continueZoomingWithWheel computer zoomCenter
        |> stopZoomingWithWheelByDeltaX computer
        |> stopZoomingWithWheelByTime computer
        -- pan with wheel
        |> panWithWheel computer
        -- pan with space bar
        |> startPanningWithSpaceBar computer
        |> panWithSpaceBar computer
        |> stopPanningWithSpaceBar computer


startZoomingWithWheel : Computer -> PanAndZoomUI -> PanAndZoomUI
startZoomingWithWheel { wheel, keyboard, clock } (PAZ p) =
    case ( keyboard.control, p.state ) of
        ( True, Idle ) ->
            PAZ p
                |> setState (ZoomingWithWheel { lastWheelDeltaYArrivedAt = clock })

        _ ->
            PAZ p


continueZoomingWithWheel : Computer -> Point2d -> PanAndZoomUI -> PanAndZoomUI
continueZoomingWithWheel { wheel, clock } zoomCenter (PAZ p) =
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
                |> zoomAround (zoomSpeed * -wheel.deltaY) zoomCenter

        _ ->
            PAZ p


stopZoomingWithWheelByDeltaX : Computer -> PanAndZoomUI -> PanAndZoomUI
stopZoomingWithWheelByDeltaX { wheel, clock } (PAZ p) =
    case ( wheel.deltaX /= 0, p.state ) of
        ( True, ZoomingWithWheel { lastWheelDeltaYArrivedAt } ) ->
            if (wheel.deltaX /= 0) && (clock - lastWheelDeltaYArrivedAt > 0.06) then
                PAZ p |> setState Idle

            else
                PAZ p

        _ ->
            PAZ p


stopZoomingWithWheelByTime : Computer -> PanAndZoomUI -> PanAndZoomUI
stopZoomingWithWheelByTime { clock } (PAZ p) =
    case p.state of
        ZoomingWithWheel { lastWheelDeltaYArrivedAt } ->
            if clock - lastWheelDeltaYArrivedAt > 0.08 then
                PAZ p |> setState Idle

            else
                PAZ p

        _ ->
            PAZ p


panWithWheel : Computer -> PanAndZoomUI -> PanAndZoomUI
panWithWheel { wheel } (PAZ p) =
    case p.state of
        Idle ->
            let
                translation =
                    ( wheel.deltaX, -wheel.deltaY )
                        |> scaleBy (1 / p.zoom)
                        |> scaleBy 1.4
            in
            PAZ { p | pan = p.pan |> translateBy translation }

        _ ->
            PAZ p


startPanningWithSpaceBar : Computer -> PanAndZoomUI -> PanAndZoomUI
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


panWithSpaceBar : Computer -> PanAndZoomUI -> PanAndZoomUI
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


stopPanningWithSpaceBar : Computer -> PanAndZoomUI -> PanAndZoomUI
stopPanningWithSpaceBar { pointer } (PAZ p) =
    if pointer.up then
        PAZ p |> setState Idle

    else
        PAZ p
