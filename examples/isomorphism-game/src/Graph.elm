module Graph exposing (..)

import Dict exposing (Dict)
import Set exposing (Set)


type Graph
    = Graph (Dict VertexId VertexData)


type alias VertexId =
    Int


type alias VertexData =
    { position : Point
    , outNeighbours : Set VertexId
    }


type alias Point =
    { x : Float
    , y : Float
    , z : Float
    }


empty : Graph
empty =
    Graph Dict.empty


exampleGraph : Graph
exampleGraph =
    empty
        |> insertVertex (Point 2 2 0)
        |> insertVertex (Point 2 -2 0)
        |> insertVertex (Point -2 -2 0)
        |> insertVertex (Point -2 2 0)
        |> insertEdge 0 1
        |> insertEdge 1 2
        |> insertEdge 2 3
        |> insertEdge 3 0
        |> insertEdge 0 2



-- QUERY


vertices : Graph -> List ( VertexId, VertexData )
vertices (Graph graph) =
    graph
        |> Dict.toList


getPosition : VertexId -> Graph -> Point
getPosition vertexId (Graph graph) =
    graph
        |> Dict.get vertexId
        |> Maybe.map .position
        |> Maybe.withDefault (Point -10 -10 0)


edges :
    Graph
    ->
        List
            { sourcePosition : Point
            , targetPosition : Point
            , sourceId : VertexId
            , targetId : VertexId
            }
edges (Graph graph) =
    graph
        |> Dict.toList
        |> List.concatMap
            (\( sourceId, { outNeighbours } ) ->
                outNeighbours
                    |> Set.toList
                    |> List.map
                        (\targetId ->
                            { sourcePosition = getPosition sourceId (Graph graph)
                            , targetPosition = getPosition targetId (Graph graph)
                            , sourceId = sourceId
                            , targetId = targetId
                            }
                        )
            )


distance : Point -> Point -> Float
distance p q =
    sqrt ((q.x - p.x) ^ 2 + (q.y - p.y) ^ 2 + (q.z - p.z) ^ 2)


twoNeaerstVerticesAtReach : Float -> Point -> Graph -> Maybe ( VertexId, Maybe VertexId )
twoNeaerstVerticesAtReach reach p graph =
    vertices graph
        |> List.filterMap
            (\( vertexId, { position } ) ->
                let
                    dist =
                        distance position p
                in
                if dist < reach then
                    Just ( vertexId, dist )

                else
                    Nothing
            )
        |> List.sortBy Tuple.second
        |> List.map Tuple.first
        |> (\l ->
                case l of
                    first :: second :: _ ->
                        Just ( first, Just second )

                    [ only ] ->
                        Just ( only, Nothing )

                    [] ->
                        Nothing
           )


neaerstVertexAtReach : Float -> Point -> Graph -> Maybe VertexId
neaerstVertexAtReach reach p graph =
    case twoNeaerstVerticesAtReach reach p graph of
        Just ( first, _ ) ->
            Just first

        _ ->
            Nothing


secondNearestVertexAtReach : Float -> Point -> Graph -> Maybe VertexId
secondNearestVertexAtReach reach p graph =
    case twoNeaerstVerticesAtReach reach p graph of
        Just ( first, Just second ) ->
            Just second

        _ ->
            Nothing



-- EDIT


moveVertex : VertexId -> Point -> Graph -> Graph
moveVertex vertexId newPosition (Graph graph) =
    let
        updatePosition vertexData =
            { vertexData | position = newPosition }
    in
    Graph
        (graph
            |> Dict.update vertexId (Maybe.map updatePosition)
        )


insertVertex : Point -> Graph -> Graph
insertVertex position (Graph graph) =
    let
        newId =
            List.maximum (Dict.keys graph)
                |> Maybe.withDefault -1
                |> (+) 1

        newVertex =
            { position = position
            , outNeighbours = Set.empty
            }
    in
    Graph (graph |> Dict.insert newId newVertex)


insertEdge : VertexId -> VertexId -> Graph -> Graph
insertEdge source target (Graph graph) =
    Graph
        (graph
            |> Dict.update source
                (Maybe.map
                    (\vertexData ->
                        { vertexData
                            | outNeighbours =
                                vertexData.outNeighbours
                                    |> Set.insert target
                        }
                    )
                )
        )


insertEdgeAndVertex : VertexId -> Point -> Graph -> Graph
insertEdgeAndVertex source targetPosition (Graph graph) =
    let
        targetId =
            List.maximum (Dict.keys graph)
                |> Maybe.withDefault -1
                |> (+) 1

        targetVertex =
            { position = targetPosition
            , outNeighbours = Set.empty
            }
    in
    Graph
        (graph
            |> Dict.insert targetId targetVertex
            |> Dict.update source
                (Maybe.map
                    (\vertexData ->
                        { vertexData
                            | outNeighbours =
                                vertexData.outNeighbours
                                    |> Set.insert targetId
                        }
                    )
                )
        )
