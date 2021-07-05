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


exampleGraph : Graph
exampleGraph =
    empty
        |> insertVertex (Point 0 0)
        |> insertVertex (Point -3 2)
        |> insertVertex (Point 2 -3)
        |> insertVertex (Point 4 1)
        |> insertVertex (Point 4 4)
        |> insertEdge 0 2
        |> insertEdge 1 3
        |> insertEdge 2 3


allVertices : Graph -> List ( VertexId, VertexData )
allVertices (Graph graph) =
    graph
        |> Dict.toList


getPosition : VertexId -> Graph -> Point
getPosition vertexId (Graph graph) =
    graph
        |> Dict.get vertexId
        |> Maybe.map .position
        |> Maybe.withDefault (Point -10 -10)


allEdges : Graph -> List ( Point, Point )
allEdges (Graph graph) =
    graph
        |> Dict.toList
        |> List.concatMap
            (\( sourceId, { outNeighbours } ) ->
                outNeighbours
                    |> Set.toList
                    |> List.map
                        (\targetId ->
                            ( getPosition sourceId (Graph graph)
                            , getPosition targetId (Graph graph)
                            )
                        )
            )
