module IsomorphismGame.Graph exposing
    ( Graph
    , Graph_PreEncoded
    , VertexData
    , VertexId
    , edges
    , empty
    , exampleBaseGraph
    , fromPreEncoded
    , getData
    , getPosition
    , insertEdge
    , insertEdgeAndVertex
    , insertVertex
    , mapVertex
    , mapVertices
    , nearestVertex
    , toPreEncoded
    , vertices
    )

import Dict exposing (Dict)
import IsomorphismGame.GeometryHelpers exposing (Point, distanceXY)
import Set exposing (Set)


type Graph data
    = Graph (Dict VertexId (VertexData data))


type alias VertexId =
    Int


type alias VertexData data =
    { position : Point
    , outNeighbours : Set VertexId
    , data : data
    }


empty : Graph data
empty =
    Graph Dict.empty


exampleBaseGraph : Graph ()
exampleBaseGraph =
    empty
        |> insertVertex () (Point 2 2 0)
        |> insertVertex () (Point 2 -2 0)
        |> insertVertex () (Point -2 -2 0)
        |> insertVertex () (Point -2 2 0)
        |> insertEdge 0 1
        |> insertEdge 1 2
        |> insertEdge 2 3
        |> insertEdge 3 0
        |> insertEdge 0 2



-- PREPARE TO ENCODE/DECODE


type alias Graph_PreEncoded data =
    List ( String, VertexData data )


toPreEncoded : Graph data -> List ( String, VertexData data )
toPreEncoded (Graph graph) =
    graph
        |> Dict.toList
        |> List.map (\( vertexId, vertexData ) -> ( String.fromInt vertexId, vertexData ))


fromPreEncoded : List ( String, VertexData data ) -> Graph data
fromPreEncoded l =
    Graph
        (l
            |> List.map
                (\( vertexIdAsString, vertexData ) ->
                    ( String.toInt vertexIdAsString |> Maybe.withDefault 999
                    , vertexData
                    )
                )
            |> Dict.fromList
        )



-- QUERY


vertices : Graph data -> List ( VertexId, VertexData data )
vertices (Graph graph) =
    graph
        |> Dict.toList


getPosition : VertexId -> Graph data -> Point
getPosition vertexId (Graph graph) =
    graph
        |> Dict.get vertexId
        |> Maybe.map .position
        |> Maybe.withDefault (Point -10 -10 0)


getData : VertexId -> Graph data -> Maybe data
getData vertexId (Graph graph) =
    graph
        |> Dict.get vertexId
        |> Maybe.map .data


edges :
    Graph data
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


distanceXYSquared : Point -> Point -> Float
distanceXYSquared p q =
    (q.x - p.x) ^ 2 + (q.y - p.y) ^ 2


nearestVertex : Point -> Graph data -> Maybe VertexId
nearestVertex p graph =
    vertices graph
        |> List.sortBy (\( _, { position } ) -> distanceXYSquared position p)
        |> List.head
        |> Maybe.map Tuple.first



-- UPDATE


mapVertices : (VertexId -> VertexData data1 -> VertexData data2) -> Graph data1 -> Graph data2
mapVertices up (Graph graph) =
    Graph
        (graph |> Dict.map up)


mapVertex : VertexId -> (VertexData data -> VertexData data) -> Graph data -> Graph data
mapVertex vertexId up (Graph graph) =
    Graph
        (graph
            |> Dict.update vertexId (Maybe.map up)
        )


insertVertex : data -> Point -> Graph data -> Graph data
insertVertex data position (Graph graph) =
    let
        newId =
            List.maximum (Dict.keys graph)
                |> Maybe.withDefault -1
                |> (+) 1

        newVertex =
            { position = position
            , outNeighbours = Set.empty
            , data = data
            }
    in
    Graph (graph |> Dict.insert newId newVertex)


insertEdge : VertexId -> VertexId -> Graph data -> Graph data
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


insertEdgeAndVertex : data -> VertexId -> Point -> Graph data -> Graph data
insertEdgeAndVertex data source targetPosition (Graph graph) =
    let
        targetId =
            List.maximum (Dict.keys graph)
                |> Maybe.withDefault -1
                |> (+) 1

        targetVertex =
            { position = targetPosition
            , outNeighbours = Set.empty
            , data = data
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
