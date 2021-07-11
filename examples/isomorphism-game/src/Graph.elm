module Graph exposing
    ( Graph
    , VertexData
    , VertexId
    , edges
    , empty
    , exampleBaseGraph
    , getData
    , getPosition
    , insertEdge
    , insertEdgeAndVertex
    , insertVertex
    , mapVertices
    , nearestVertexAtReach
    , setVertexPosition
    , vertices
    )

import Dict exposing (Dict)
import Geometry exposing (Point, distanceXY, lerp)
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



-- QUERY


vertices : Graph data -> List ( VertexId, VertexData data )
vertices (Graph graph) =
    graph
        |> Dict.toList


mapVertices : (VertexId -> VertexData data1 -> VertexData data2) -> Graph data1 -> Graph data2
mapVertices up (Graph graph) =
    Graph
        (graph |> Dict.map up)


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


nearestVertexAtReach : Float -> Point -> Graph data -> Maybe VertexId
nearestVertexAtReach reach p graph =
    vertices graph
        |> List.filterMap
            (\( vertexId, { position } ) ->
                let
                    dist =
                        distanceXY position p
                in
                if dist < reach then
                    Just ( vertexId, dist )

                else
                    Nothing
            )
        |> List.sortBy Tuple.second
        |> List.head
        |> Maybe.map Tuple.first



-- UPDATE


setVertexPosition : VertexId -> Point -> Graph data -> Graph data
setVertexPosition vertexId position (Graph graph) =
    let
        updatePosition vertexData =
            { vertexData | position = position }
    in
    Graph
        (graph
            |> Dict.update vertexId (Maybe.map updatePosition)
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
