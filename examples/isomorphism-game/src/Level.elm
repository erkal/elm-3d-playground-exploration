module Level exposing (..)

import Geometry exposing (Point)
import Graph exposing (Graph, VertexId, insertEdge, insertVertex)


type alias Level =
    { baseGraph : BaseGraph
    , playerGraph : Graph { mappedToBaseVertex : VertexId }
    }


type alias BaseGraph =
    Graph ()


type alias PlayerGraph =
    Graph { mappedToBaseVertex : VertexId }


exampleBaseGraph : Graph ()
exampleBaseGraph =
    Graph.empty
        |> insertVertex () (Point 2 2 0)
        |> insertVertex () (Point 2 -2 0)
        |> insertVertex () (Point -2 -2 0)
        |> insertVertex () (Point -2 2 0)
        |> insertEdge 0 1
        |> insertEdge 1 2
        |> insertEdge 2 3
        |> insertEdge 3 0
        |> insertEdge 0 2


levelFrom : BaseGraph -> Level
levelFrom baseGraph =
    { baseGraph = baseGraph
    , playerGraph =
        baseGraph
            |> Graph.mapVertices
                (\vertexId vertexData ->
                    { position = vertexData.position
                    , animationTarget = vertexData.animationTarget
                    , outNeighbours = vertexData.outNeighbours
                    , data = { mappedToBaseVertex = vertexId }
                    }
                )
    }


exampleLevel : Level
exampleLevel =
    levelFrom exampleBaseGraph


empty : Level
empty =
    { baseGraph = Graph.empty
    , playerGraph = Graph.empty
    }


mapBaseGraph : (BaseGraph -> BaseGraph) -> Level -> Level
mapBaseGraph up level =
    { level | baseGraph = up level.baseGraph }


mapPlayerGraph : (PlayerGraph -> PlayerGraph) -> Level -> Level
mapPlayerGraph up level =
    { level | playerGraph = up level.playerGraph }
