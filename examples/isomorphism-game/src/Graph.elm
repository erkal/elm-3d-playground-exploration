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
    }


empty : Graph
empty =
    Graph Dict.empty


exampleGraph : Graph
exampleGraph =
    empty
        |> insertVertex (Point 0 0)
        |> insertVertex (Point -3 2)
        |> insertVertex (Point 2 -3)
        |> insertVertex (Point 3 1)
        |> insertVertex (Point 3 3)
        |> insertVertex (Point -3 -3)
        |> insertEdge 0 2
        |> insertEdge 1 3
        |> insertEdge 3 4
        |> insertEdge 2 3
        |> insertEdge 5 3



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
        |> Maybe.withDefault (Point -10 -10)


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
