module Main exposing (main)

import Browser
import Browser.Events
import Circle2d
import Dict exposing (Dict)
import Geometry.Svg as Svg
import Html exposing (Html)
import Html.Attributes
import Json.Decode as Decode
import LineSegment2d
import Pixels exposing (pixels)
import Point2d exposing (Point2d)
import QuadraticSpline2d
import String exposing (fromInt)
import Svg exposing (Svg)
import Svg.Attributes as Attributes exposing (..)



-- constants


ncols =
    9


nrows =
    7


ncolors =
    10


gridSize =
    20


margin =
    20


colorNames =
    [ "#008097"
    , "#59b8d0"
    , "#fa9137"
    , "#8b4119"
    , "#42833f"
    , "#96b0b7"
    , "#d09e7a"
    ]


lineStyleBlack =
    [ Attributes.stroke "black"
    , Attributes.strokeWidth "16"
    , Attributes.strokeLinecap "round"
    , Attributes.fill "none"
    ]


lineStyleGeneric =
    [ Attributes.strokeWidth "16"
    , Attributes.strokeLinecap "round"
    , Attributes.fill "none"
    ]


lineStyleWhite =
    [ Attributes.stroke "white"
    , Attributes.strokeWidth "25"
    , Attributes.fill "none"
    ]


dotStyle =
    [ Attributes.fill "#ffb400"
    , Attributes.stroke "#dddddd"
    , Attributes.strokeWidth "2"
    , Attributes.opacity ".8"
    ]


initialModel =
    { edges = colorAllEdges (initiateEdges ())
    , states = initiateStates ()
    }



-- type definitions


type alias Edge =
    { from : ( Int, Int )
    , to : ( Int, Int )
    , color : Int
    , layer : Bool
    , belongsToCrossingPoint : Maybe ( Int, Int )
    }


type alias Edges =
    List Edge


type alias States =
    Dict ( Int, Int ) Int


type alias Model =
    { edges : Edges
    , states : States
    }


type alias Msg =
    { x : Int
    , y : Int
    }


type Corner
    = TopLeft
    | TopRight
    | BottomLeft
    | BottomRight
    | NoCorner


type Border
    = Left
    | Right
    | Top
    | Bottom
    | NoBorder


type alias Flags =
    ()



-- functions


initiateStates : () -> States
initiateStates () =
    let
        a =
            List.range 0 ((nrows + 1) * 2)
                |> List.concatMap
                    (\i ->
                        List.range 0 ((ncols + 1) * 2)
                            |> List.map (\j -> ( i, j ))
                    )
    in
    let
        crossing =
            List.filter isCrossing a
    in
    Dict.fromList (List.map (\( x, y ) -> ( ( x, y ), 2 )) crossing)


initiateEdges : () -> Edges
initiateEdges () =
    let
        a =
            List.range 0 ((nrows + 1) * 2)
                |> List.concatMap
                    (\i ->
                        List.range 0 ((ncols + 1) * 2)
                            |> List.map (\j -> ( i, j ))
                    )
    in
    let
        crossing =
            List.filter isCrossing a
    in
    List.map
        (\( x, y ) ->
            { from = ( x + 1, y + 1 )
            , to = ( x - 1, y - 1 )
            , color = 1
            , layer = False
            , belongsToCrossingPoint = Just ( x, y )
            }
        )
        crossing
        ++ List.map
            (\( x, y ) ->
                { from = ( x + 1, y - 1 )
                , to = ( x - 1, y + 1 )
                , color = 1
                , layer = True
                , belongsToCrossingPoint = Just ( x, y )
                }
            )
            crossing
        -- top border
        ++ (List.range 0 (truncate (toFloat ncols / 2) - 2)
                |> List.map
                    (\i ->
                        { from = ( 1, 5 + 4 * i )
                        , to = ( 1, 7 + 4 * i )
                        , color = 1
                        , layer = False
                        , belongsToCrossingPoint = Nothing
                        }
                    )
           )
        -- bottom border
        ++ (List.range 0 (truncate (toFloat ncols / 2) - 2)
                |> List.map
                    (\i ->
                        { from = ( nrows * 2 + 1, 5 + 4 * i )
                        , to = ( nrows * 2 + 1, 7 + 4 * i )
                        , color = 1
                        , layer = False
                        , belongsToCrossingPoint = Nothing
                        }
                    )
           )
        -- left border
        ++ (List.range 0 (truncate (toFloat nrows / 2) - 2)
                |> List.map
                    (\i ->
                        { from = ( 5 + 4 * i, 1 )
                        , to = ( 7 + 4 * i, 1 )
                        , color = 1
                        , layer = False
                        , belongsToCrossingPoint = Nothing
                        }
                    )
           )
        -- right border
        ++ (List.range 0 (truncate (toFloat nrows / 2) - 2)
                |> List.map
                    (\i ->
                        { from = ( 5 + 4 * i, ncols * 2 + 1 )
                        , to = ( 7 + 4 * i, ncols * 2 + 1 )
                        , color = 1
                        , layer = False
                        , belongsToCrossingPoint = Nothing
                        }
                    )
           )
        -- corners
        ++ [ { from = ( 3, 1 )
             , to = ( 1, 3 )
             , color = 1
             , layer = False
             , belongsToCrossingPoint = Nothing
             }
           , { from = ( 1, ncols * 2 - 1 )
             , to = ( 3, ncols * 2 + 1 )
             , color = 1
             , layer = False
             , belongsToCrossingPoint = Nothing
             }
           , { from = ( nrows * 2 - 1, 1 )
             , to = ( nrows * 2 + 1, 3 )
             , color = 1
             , layer = False
             , belongsToCrossingPoint = Nothing
             }
           , { from = ( nrows * 2 - 1, ncols * 2 + 1 )
             , to = ( nrows * 2 + 1, ncols * 2 - 1 )
             , color = 1
             , layer = False
             , belongsToCrossingPoint = Nothing
             }
           ]


isCrossing : ( Int, Int ) -> Bool
isCrossing ( x, y ) =
    if modBy 2 x == 1 then
        False

    else if modBy 2 y == 1 then
        False

    else if y == 0 || y == (ncols + 1) * 2 then
        False

    else if x == 0 || x == (nrows + 1) * 2 then
        False

    else if modBy 2 (truncate (toFloat x / 2)) == modBy 2 (truncate (toFloat y / 2)) then
        False

    else
        True


nearCrossing : Msg -> ( Int, Int )
nearCrossing msg =
    let
        x_ =
            (toFloat msg.x - margin) / gridSize

        y_ =
            (toFloat msg.y - margin) / gridSize
    in
    let
        d =
            1

        -- squared distance
        a =
            List.range 0 ((nrows + 1) * 2)
                |> List.concatMap
                    (\i ->
                        List.range 0 ((ncols + 1) * 2)
                            |> List.map (\j -> ( i, j ))
                    )
    in
    let
        crossing =
            List.filter isCrossing a
    in
    let
        nextCrossing =
            List.head (List.filter (isNear d ( x_, y_ )) crossing)
    in
    case nextCrossing of
        Nothing ->
            ( -10, -10 )

        Just nextCrossing_ ->
            nextCrossing_


isNear : Float -> ( Float, Float ) -> ( Int, Int ) -> Bool
isNear d ( x_, y_ ) ( x, y ) =
    let
        x__ =
            toFloat x

        y__ =
            toFloat y
    in
    if (x__ - x_) * (x__ - x_) + (y__ - y_) * (y__ - y_) < d then
        True

    else
        False


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        ( x, y ) =
            nearCrossing msg
    in
    let
        state_ =
            Dict.get ( x, y ) model.states
    in
    case state_ of
        Just s ->
            nextStateModel model s ( x, y )

        Nothing ->
            ( model, Cmd.none )


nextStateModel : Model -> Int -> ( Int, Int ) -> ( Model, Cmd Msg )
nextStateModel model s ( x, y ) =
    let
        nextState =
            modBy 4 (s + 1)
    in
    let
        newEdges_ =
            addEdgesForNextState ( x, y ) nextState

        --            _ = Debug.log "" (Debug.toString newEdges_)
    in
    let
        states_ =
            Dict.update ( x, y ) (\_ -> Just nextState) model.states
    in
    let
        edges_ =
            List.filter (\edge -> edge.belongsToCrossingPoint /= Just ( x, y )) model.edges
    in
    let
        edges__ =
            edges_
                ++ [ { from = newEdges_.aFrom
                     , to = newEdges_.aTo
                     , color = 1
                     , layer = False
                     , belongsToCrossingPoint = Just ( x, y )
                     }
                   , { from = newEdges_.bFrom
                     , to = newEdges_.bTo
                     , color = 1
                     , layer = True
                     , belongsToCrossingPoint = Just ( x, y )
                     }
                   ]
    in
    ( { model | states = states_, edges = colorAllEdges edges__ }, Cmd.none )


colorAllEdges : Edges -> Edges
colorAllEdges edges =
    let
        edges_ =
            List.map (\e -> { e | color = -1 * e.color }) edges
    in
    colorEdges edges_ Nothing 0


colorEdges : Edges -> Maybe Edge -> Int -> Edges
colorEdges edges lastColoredEdge step =
    let
        newColor =
            case lastColoredEdge of
                Just edge ->
                    edge.color

                Nothing ->
                    chooseGoodColor edges

        --    _ = Debug.log "newColor: " (Debug.toString newColor)
    in
    let
        nextEdge_oldcolor =
            case lastColoredEdge of
                Just edge ->
                    chooseUncoloredEdge edges edge

                Nothing ->
                    List.head (getUncoloredEdges edges)

        --      _ = Debug.log "newEdge oldcolor: " (Debug.toString nextEdge_oldcolor)
    in
    let
        nextEdge_newcolor =
            case nextEdge_oldcolor of
                Nothing ->
                    Nothing

                Just nextEdge_oldcolor_ ->
                    Just { nextEdge_oldcolor_ | color = newColor }

        -- _ = Debug.log "newEdge newcolor: " (Debug.toString nextEdge_newcolor)
    in
    let
        newEdges =
            updateColor edges nextEdge_oldcolor newColor
    in
    let
        colored =
            getColoredEdges newEdges

        --                _ = Debug.log "colored are now: " (Debug.toString colored)
        --               _ = Debug.log "step: " (Debug.toString step)
    in
    if List.length colored == List.length edges then
        newEdges

    else if step == 1000 then
        newEdges

    else
        colorEdges newEdges nextEdge_newcolor (step + 1)


chooseUncoloredEdge : Edges -> Edge -> Maybe Edge
chooseUncoloredEdge edges lastColoredEdge =
    let
        newEdge =
            List.head
                (List.filter
                    (\e ->
                        (e.from
                            == lastColoredEdge.from
                            || e.from
                            == lastColoredEdge.to
                            || e.to
                            == lastColoredEdge.from
                            || e.to
                            == lastColoredEdge.to
                        )
                            && (e.from
                                    /= lastColoredEdge.from
                                    || e.to
                                    /= lastColoredEdge.to
                               )
                    )
                    (getUncoloredEdges edges)
                )
    in
    newEdge


updateColor : Edges -> Maybe Edge -> Int -> Edges
updateColor edges edge color =
    case edge of
        Just edge_ ->
            List.filter
                (\e ->
                    if (e.from == edge_.from && e.to == edge_.to) || (e.from == edge_.to && e.to == edge_.from) then
                        False

                    else
                        True
                )
                edges
                ++ [ { edge_ | color = color } ]

        _ ->
            edges


chooseGoodColor : Edges -> Int
chooseGoodColor edges =
    let
        colors =
            getColoredEdges edges |> List.map (\e -> e.color)
    in
    let
        mincolor_ =
            List.minimum
                (List.range 1 ncolors
                    |> List.map
                        (\i ->
                            if List.member i colors then
                                10

                            else
                                i
                        )
                )
    in
    let
        mincolor =
            case mincolor_ of
                Nothing ->
                    0

                Just color ->
                    color
    in
    mincolor


getColoredEdges : Edges -> Edges
getColoredEdges edges =
    List.filter (\e -> e.color > 0) edges


getUncoloredEdges : Edges -> Edges
getUncoloredEdges edges =
    {- let _ = Debug.log "we have uncolored edges: " (Debug.toString (List.length (List.filter (\e -> if e.color < 0 then True else False) edges)))
       in
    -}
    List.filter (\e -> e.color < 0) edges


addEdgesForNextState :
    ( Int, Int )
    -> Int
    ->
        { aFrom : ( Int, Int )
        , aTo : ( Int, Int )
        , bFrom : ( Int, Int )
        , bTo : ( Int, Int )
        }
addEdgesForNextState ( x, y ) s =
    let
        p1 =
            ( x - 1, y - 1 )

        p2 =
            ( x - 1, y + 1 )

        p3 =
            ( x + 1, y + 1 )

        p4 =
            ( x + 1, y - 1 )
    in
    case s of
        0 ->
            { aFrom = p1
            , aTo = p4
            , bFrom = p2
            , bTo = p3
            }

        1 ->
            { aFrom = p1
            , aTo = p2
            , bFrom = p4
            , bTo = p3
            }

        2 ->
            { aFrom = p1
            , aTo = p3
            , bFrom = p2
            , bTo = p4
            }

        _ ->
            { aFrom = p2
            , aTo = p4
            , bFrom = p1
            , bTo = p3
            }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Browser.Events.onClick
            (Decode.map2 Msg
                (Decode.field "pageX" Decode.int)
                (Decode.field "pageY" Decode.int)
            )
        ]


view : Model -> Html Msg
view model =
    --Html.text ("Len of edge list = " ++ Debug.toString (List.length model.edges))
    Html.div
        [ Html.Attributes.style "color" "#042931"
        , Html.Attributes.style "width" "300px"
        , Html.Attributes.style "font-size" "14px"
        , Html.Attributes.style "font-family" "Helvetica"
        , Html.Attributes.style "margin" (String.fromInt margin ++ "px")
        ]
        [ drawKnot model
        , statistics model
        , Html.p [] [ Html.text "Can you generate at least three intertwined knots by using not more than three bypasses (gaps) – such that any crossing is between two different knots?" ]
        , Html.p [] [ Html.text "Can you generate one single knot with no crossings at all?" ]
        , Html.p [] [ Html.text "Can you generate two intertwined knots with using one single gap?" ]
        , Html.p [] [ Html.text "Can you generate one single knot such that all interior points are gaps?" ]
        , Html.p [] [ Html.text "(Hard): What is the smallest number of gaps you have to insert to produce a link such that on every join – no matter if crossing or gap –, two different knots are meeting?" ]
        ]


statistics : Model -> Html Msg
statistics model =
    let
        nGaps =
            List.length (List.filter (\s -> s == 0 || s == 1) (Dict.values model.states))

        nKnots_ =
            List.maximum (List.map (\e -> e.color) model.edges)
    in
    let
        nKnots =
            case nKnots_ of
                Nothing ->
                    0

                Just n ->
                    n
    in
    let
        gaps =
            if nGaps > 0 then
                fromInt nGaps ++ " gaps"

            else
                "no gap"

        knots =
            if nKnots > 0 then
                fromInt nKnots ++ " knots"

            else
                "no knot"
    in
    Html.p [ Html.Attributes.style "color" "#008097" ] [ Html.text ("You have drawn: " ++ gaps ++ " and " ++ knots) ]


drawKnot : Model -> Html Msg
drawKnot model =
    let
        a =
            List.range 0 ((nrows + 1) * 2)
                |> List.concatMap
                    (\i ->
                        List.range 0 ((ncols + 1) * 2)
                            |> List.map (\j -> ( i, j ))
                    )
    in
    let
        crossing =
            List.filter isCrossing a
    in
    let
        svgSizex =
            2 * (ncols + 1) * gridSize

        svgSizey =
            2 * (nrows + 1) * gridSize
    in
    Svg.svg
        [ width (fromInt svgSizey)
        , height (fromInt svgSizex)
        , viewBox ("0 0 " ++ fromInt svgSizey ++ " " ++ fromInt svgSizex)
        ]
        -- draw bottom layer
        ((List.filter
            (\e ->
                if e.layer == True then
                    True

                else
                    False
            )
            model.edges
            |> List.map drawEdge
         )
            -- draw top layer
            ++ (List.filter
                    (\e ->
                        if e.layer == False then
                            True

                        else
                            False
                    )
                    model.edges
                    |> List.map drawEdge
               )
            -- crossing dots on top
            ++ List.map drawDot crossing
        )


drawDot : ( Int, Int ) -> Svg msg
drawDot ( x, y ) =
    Svg.circle2d
        dotStyle
        (Circle2d.withRadius (pixels 4)
            (Point2d.pixels
                (toFloat (gridSize * x))
                (toFloat (gridSize * y))
            )
        )


drawEdge : Edge -> Svg msg
drawEdge e =
    let
        corner =
            isCorner e

        border =
            isBorder e
    in
    if corner /= NoCorner then
        drawCorner e corner

    else if border /= NoBorder then
        drawBorder e border

    else
        drawConnection e


isCorner : Edge -> Corner
isCorner e =
    let
        x1 =
            Tuple.first e.from

        y1 =
            Tuple.second e.from

        x2 =
            Tuple.first e.to

        y2 =
            Tuple.second e.to
    in
    let
        minx =
            Basics.min x1 x2

        maxx =
            Basics.max x1 x2

        miny =
            Basics.min y1 y2

        maxy =
            Basics.max y1 y2
    in
    if e.belongsToCrossingPoint /= Nothing then
        NoCorner

    else if minx == 1 && miny == 1 then
        TopLeft

    else if minx == 1 && maxy == ncols * 2 + 1 then
        TopRight

    else if maxx == nrows * 2 + 1 && miny == 1 then
        BottomLeft

    else if maxx == nrows * 2 + 1 && maxy == ncols * 2 + 1 then
        BottomRight

    else
        NoCorner


isBorder : Edge -> Border
isBorder e =
    let
        x1 =
            Tuple.first e.from

        y1 =
            Tuple.second e.from

        x2 =
            Tuple.first e.to

        y2 =
            Tuple.second e.to
    in
    if e.belongsToCrossingPoint /= Nothing then
        NoBorder

    else if x1 == 1 && x2 == 1 then
        Top

    else if y1 == 1 && y2 == 1 then
        Left

    else if y1 == 2 * (ncols + 1) - 1 && y2 == 2 * (ncols + 1) - 1 then
        Right

    else if x1 == 2 * (nrows + 1) - 1 && x2 == 2 * (nrows + 1) - 1 then
        Bottom

    else
        NoBorder


drawCorner : Edge -> Corner -> Svg msg
drawCorner e corner =
    let
        x1 =
            Tuple.first e.from

        y1 =
            Tuple.second e.from

        x2 =
            Tuple.first e.to

        y2 =
            Tuple.second e.to
    in
    let
        pfrom =
            Point2d.pixels (toFloat (gridSize * x1)) (toFloat (gridSize * y1))

        pto =
            Point2d.pixels (toFloat (gridSize * x2)) (toFloat (gridSize * y2))
    in
    let
        pcontrol =
            case corner of
                TopLeft ->
                    Point2d.pixels (gridSize * -0.5) (gridSize * -0.5)

                TopRight ->
                    Point2d.pixels (gridSize * -0.5) (gridSize * (2 * (ncols + 1) + 0.5))

                BottomLeft ->
                    Point2d.pixels (gridSize * (2 * (nrows + 1) + 0.5)) (gridSize * -0.5)

                -- BottomRight
                _ ->
                    Point2d.pixels (gridSize * (2 * (nrows + 1) + 0.5)) (gridSize * (2 * (ncols + 1) + 0.5))
    in
    let
        spline =
            QuadraticSpline2d.fromControlPoints pfrom pcontrol pto
    in
    Svg.g []
        [ Svg.quadraticSpline2d lineStyleWhite spline
        , Svg.quadraticSpline2d (lineStyleGeneric ++ [ Attributes.stroke (getColor e.color) ]) spline
        ]


drawBorder : Edge -> Border -> Svg msg
drawBorder e border =
    let
        x1 =
            Tuple.first e.from

        y1 =
            Tuple.second e.from

        x2 =
            Tuple.first e.to

        y2 =
            Tuple.second e.to
    in
    let
        pfrom =
            Point2d.pixels (toFloat (gridSize * x1)) (toFloat (gridSize * y1))

        pto =
            Point2d.pixels (toFloat (gridSize * x2)) (toFloat (gridSize * y2))

        xmin =
            Basics.min x1 x2

        ymin =
            Basics.min y1 y2
    in
    let
        pcontrol =
            case border of
                Top ->
                    Point2d.pixels 0.0 (toFloat (ymin + 1) * gridSize)

                Left ->
                    Point2d.pixels (toFloat (xmin + 1) * gridSize) 0.0

                Right ->
                    Point2d.pixels (toFloat (xmin + 1) * gridSize) (gridSize * 2 * (toFloat ncols + 1))

                -- Bottom
                _ ->
                    Point2d.pixels (gridSize * 2 * (toFloat nrows + 1)) (toFloat (ymin + 1) * gridSize)
    in
    let
        spline =
            QuadraticSpline2d.fromControlPoints pfrom pcontrol pto
    in
    Svg.g []
        [ Svg.quadraticSpline2d lineStyleWhite spline
        , Svg.quadraticSpline2d (lineStyleGeneric ++ [ Attributes.stroke (getColor e.color) ]) spline
        ]


drawConnection : Edge -> Svg msg
drawConnection e =
    let
        ( x1, y1 ) =
            e.from

        ( x2, y2 ) =
            e.to

        ( x_, y_ ) =
            case e.belongsToCrossingPoint of
                Just ( a, b ) ->
                    ( a, b )

                Nothing ->
                    ( -1, -1 )
    in
    let
        pfrom =
            Point2d.pixels (toFloat (gridSize * x1)) (toFloat (gridSize * y1))

        pto =
            Point2d.pixels (toFloat (gridSize * x2)) (toFloat (gridSize * y2))

        pcontrol =
            Point2d.pixels (toFloat (gridSize * x_)) (toFloat (gridSize * y_))

        spline =
            if (x1 == x2 || y1 == y2) && e.belongsToCrossingPoint /= Nothing then
                Just (QuadraticSpline2d.fromControlPoints pfrom pcontrol pto)

            else
                Nothing
    in
    case spline of
        Just spline_ ->
            Svg.g []
                [ Svg.quadraticSpline2d lineStyleWhite spline_
                , Svg.quadraticSpline2d (lineStyleGeneric ++ [ Attributes.stroke (getColor e.color) ]) spline_
                ]

        Nothing ->
            Svg.g []
                [ Svg.lineSegment2d lineStyleWhite (LineSegment2d.from pfrom pto)
                , Svg.lineSegment2d (lineStyleGeneric ++ [ Attributes.stroke (getColor e.color) ]) (LineSegment2d.from pfrom pto)
                ]


getColor : Int -> String
getColor color =
    let
        s =
            List.head (List.drop (color - 1) colorNames)
    in
    case s of
        Nothing ->
            "black"

        Just s_ ->
            s_


init : Flags -> ( Model, Cmd Msg )
init () =
    ( initialModel, Cmd.none )


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
