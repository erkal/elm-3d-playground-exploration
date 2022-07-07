module Camera2d exposing
    ( Camera2d
    , PartialScreen
    , getZoom
    , init
    , isPanningWithSpaceBar
    , maxZoom
    , minZoom
    , panWithWheel
    , setPosition
    , setZoom
    , tick
    , toPerspectiveCamera
    , zoomInBy
    , zoomOutBy
    , zoomTo100
    , zoomToFit
    )

import Camera exposing (Camera)
import Geometry2d exposing (BoundingBox, Point2d, scaleAbout, scaleBy, translateBy, vectorFrom)
import Playground exposing (Computer, Screen)


minZoom =
    0.1


maxZoom =
    1


type Camera2d
    = Camera2d
        { position : Point2d
        , zoom : Float
        , state : CameraState
        }


type CameraState
    = Idle
    | ZoomingWithWheel { lastWheelDeltaYArrivedAt : Float }
    | PanningWithSpaceBar { pointerPositionAtPanStart : Point2d, cameraPositionAtStart : Point2d }


type alias PartialScreen =
    { top : Float
    , left : Float
    , width : Float
    , height : Float
    }


init : Camera2d
init =
    Camera2d
        { position = Point2d 0 0
        , zoom = 1
        , state = Idle
        }


isPanningWithSpaceBar : Camera2d -> Bool
isPanningWithSpaceBar (Camera2d camera2d) =
    case camera2d.state of
        PanningWithSpaceBar _ ->
            True

        _ ->
            False


getZoom : Camera2d -> Float
getZoom (Camera2d camera2d) =
    camera2d.zoom


setPosition : Point2d -> Camera2d -> Camera2d
setPosition position (Camera2d camera2d) =
    Camera2d
        { camera2d | position = position }


setZoom : Float -> Camera2d -> Camera2d
setZoom zoom (Camera2d camera2d) =
    Camera2d
        { camera2d | zoom = zoom }


zoomTo100 : Camera2d -> Camera2d
zoomTo100 (Camera2d camera2d) =
    Camera2d { camera2d | zoom = 1 }


zoomInBy : Float -> Camera2d -> Camera2d
zoomInBy factor (Camera2d camera2d) =
    Camera2d { camera2d | zoom = camera2d.zoom |> (*) factor |> clamp minZoom maxZoom }


zoomOutBy : Float -> Camera2d -> Camera2d
zoomOutBy factor (Camera2d camera2d) =
    Camera2d { camera2d | zoom = camera2d.zoom |> (*) (1 / factor) |> clamp minZoom maxZoom }


zoomToFit : Screen -> PartialScreen -> BoundingBox -> Camera2d -> Camera2d
zoomToFit windowSize partialScreen boundingBoxOfObjects camera2d =
    let
        zoomToFitWidth =
            partialScreen.width
                / (boundingBoxOfObjects.maxX - boundingBoxOfObjects.minX)

        zoomToFitHeight =
            partialScreen.height
                / (boundingBoxOfObjects.maxY - boundingBoxOfObjects.minY)

        targetZoom =
            min zoomToFitWidth zoomToFitHeight
                |> clamp minZoom maxZoom

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

        targetPosition =
            centerOfGraph
                |> translateBy
                    ( (centerOfScreen.x - centerOfPartialScreen.x) / targetZoom
                    , (centerOfScreen.y - centerOfPartialScreen.y) / targetZoom
                    )
    in
    camera2d
        |> setPosition targetPosition
        |> setZoom targetZoom


zoomAround : Float -> Point2d -> Camera2d -> Camera2d
zoomAround zoomDelta zoomCenter (Camera2d camera2d) =
    let
        newZoom =
            (camera2d.zoom + zoomDelta)
                |> clamp minZoom maxZoom
    in
    Camera2d
        { camera2d
            | zoom = newZoom
            , position = camera2d.position |> scaleAbout zoomCenter (camera2d.zoom / newZoom)
        }



-- TRANSFORMATIONS


toPerspectiveCamera : Screen -> Camera2d -> Camera
toPerspectiveCamera screen (Camera2d camera2d) =
    Camera.perspective
        { focalPoint =
            { x = camera2d.position.x
            , y = camera2d.position.y
            , z = 0
            }
        , eyePoint =
            { x = camera2d.position.x
            , y = camera2d.position.y
            , z = screen.height / camera2d.zoom
            }
        , upDirection = { x = 0, y = 1, z = 0 }
        }



-- TICK


tick : Computer -> Camera2d -> Camera2d
tick computer camera2d =
    let
        mouseOverXY =
            computer.pointer
                |> Camera.mouseOverXY (toPerspectiveCamera computer.screen camera2d) computer.screen
                |> Maybe.map (\p -> { x = p.x, y = p.y })
                |> Maybe.withDefault { x = 0, y = 0 }
    in
    camera2d
        -- zoom with wheel
        |> startZoomingWithWheel computer mouseOverXY
        |> continueZoomingWithWheel computer mouseOverXY
        |> stopZoomingWithWheelByDeltaX computer
        |> stopZoomingWithWheelByTime computer
        -- pan with wheel
        |> panWithWheel computer
        -- pan with space bar
        |> startPanningWithSpaceBar computer
        |> panWithSpaceBar computer
        |> stopPanningWithSpaceBar computer


startZoomingWithWheel : Computer -> Point2d -> Camera2d -> Camera2d
startZoomingWithWheel { wheel, keyboard, clock } zoomCenter (Camera2d camera2d) =
    case ( keyboard.control, camera2d.state ) of
        ( True, Idle ) ->
            Camera2d
                { camera2d | state = ZoomingWithWheel { lastWheelDeltaYArrivedAt = clock } }
                |> zoomAround (0.002 * -wheel.deltaY) zoomCenter

        _ ->
            Camera2d camera2d


continueZoomingWithWheel : Computer -> Point2d -> Camera2d -> Camera2d
continueZoomingWithWheel { wheel, clock } zoomCenter (Camera2d camera2d) =
    case ( wheel.deltaX /= 0 || wheel.deltaY /= 0, camera2d.state ) of
        ( True, ZoomingWithWheel { lastWheelDeltaYArrivedAt } ) ->
            Camera2d
                { camera2d
                    | state =
                        ZoomingWithWheel
                            { lastWheelDeltaYArrivedAt =
                                if wheel.deltaX /= 0 && wheel.deltaY == 0 then
                                    lastWheelDeltaYArrivedAt

                                else
                                    clock
                            }
                }
                |> zoomAround (0.002 * -wheel.deltaY) zoomCenter

        _ ->
            Camera2d camera2d


stopZoomingWithWheelByDeltaX : Computer -> Camera2d -> Camera2d
stopZoomingWithWheelByDeltaX { wheel, clock } (Camera2d camera2d) =
    case ( wheel.deltaX /= 0, camera2d.state ) of
        ( True, ZoomingWithWheel { lastWheelDeltaYArrivedAt } ) ->
            if (wheel.deltaX /= 0) && (clock - lastWheelDeltaYArrivedAt > 0.06) then
                Camera2d { camera2d | state = Idle }

            else
                Camera2d camera2d

        _ ->
            Camera2d camera2d


stopZoomingWithWheelByTime : Computer -> Camera2d -> Camera2d
stopZoomingWithWheelByTime { clock } (Camera2d camera2d) =
    case camera2d.state of
        ZoomingWithWheel { lastWheelDeltaYArrivedAt } ->
            if clock - lastWheelDeltaYArrivedAt > 0.08 then
                Camera2d { camera2d | state = Idle }

            else
                Camera2d camera2d

        _ ->
            Camera2d camera2d


panWithWheel : Computer -> Camera2d -> Camera2d
panWithWheel { wheel } (Camera2d camera2d) =
    case camera2d.state of
        Idle ->
            let
                translation =
                    ( wheel.deltaX, -wheel.deltaY )
                        |> scaleBy (1 / camera2d.zoom)
                        |> scaleBy 1.4
            in
            Camera2d { camera2d | position = camera2d.position |> translateBy translation }

        _ ->
            Camera2d camera2d


startPanningWithSpaceBar : Computer -> Camera2d -> Camera2d
startPanningWithSpaceBar { keyboard, pointer } (Camera2d camera2d) =
    if List.member "Space" keyboard.pressedKeys && pointer.down then
        Camera2d
            { camera2d
                | state =
                    PanningWithSpaceBar
                        { pointerPositionAtPanStart = Point2d pointer.x pointer.y
                        , cameraPositionAtStart = camera2d.position
                        }
            }

    else
        Camera2d camera2d


panWithSpaceBar : Computer -> Camera2d -> Camera2d
panWithSpaceBar { keyboard, pointer } (Camera2d camera2d) =
    case camera2d.state of
        PanningWithSpaceBar { pointerPositionAtPanStart, cameraPositionAtStart } ->
            let
                translation =
                    vectorFrom (Point2d pointer.x pointer.y) pointerPositionAtPanStart
                        |> scaleBy (1 / camera2d.zoom)
            in
            Camera2d { camera2d | position = cameraPositionAtStart |> translateBy translation }

        _ ->
            Camera2d camera2d


stopPanningWithSpaceBar : Computer -> Camera2d -> Camera2d
stopPanningWithSpaceBar { pointer } (Camera2d camera2d) =
    if pointer.up then
        Camera2d
            { camera2d | state = Idle }

    else
        Camera2d camera2d
