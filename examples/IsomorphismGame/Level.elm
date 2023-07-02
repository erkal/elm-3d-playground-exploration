module IsomorphismGame.Level exposing (..)

import Geometry exposing (Point)
import IsomorphismGame.Graph as Graph exposing (Graph(..), Graph_PreEncoded, VertexId, insertEdge, insertVertex)


type alias Level =
    { baseGraph : BaseGraph
    , playerGraph : PlayerGraph
    }


type alias BaseGraph =
    Graph ()


type alias PlayerGraph =
    Graph { mappedToBaseVertex : VertexId }


resetPlayerGraph : Level -> Level
resetPlayerGraph level =
    { baseGraph = level.baseGraph
    , playerGraph =
        level.baseGraph
            |> Graph.mapVertices
                (\vertexId vertexData ->
                    { position = vertexData.position
                    , outNeighbours = vertexData.outNeighbours
                    , data = { mappedToBaseVertex = vertexId }
                    }
                )
    }


exampleLevel : Level
exampleLevel =
    resetPlayerGraph
        { baseGraph = exampleBaseGraph
        , playerGraph = Graph.empty
        }


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


empty : Level
empty =
    { baseGraph = Graph.empty
    , playerGraph = Graph.empty
    }



-- PREPARE TO ENCODE/DECODE


type alias Level_PreEncoded =
    { baseGraph : Graph_PreEncoded ()
    , playerGraph : Graph_PreEncoded PlayerGraphVertexData
    }


type alias PlayerGraphVertexData =
    { mappedToBaseVertex : VertexId }


toPreEncoded : Level -> Level_PreEncoded
toPreEncoded level =
    { baseGraph = level.baseGraph |> Graph.toPreEncoded
    , playerGraph = level.playerGraph |> Graph.toPreEncoded
    }


fromPreEncoded : Level_PreEncoded -> Level
fromPreEncoded level_PreEncoded =
    { baseGraph = level_PreEncoded.baseGraph |> Graph.fromPreEncoded
    , playerGraph = level_PreEncoded.playerGraph |> Graph.fromPreEncoded
    }



-- UPDATE


mapBaseGraph : (BaseGraph -> BaseGraph) -> Level -> Level
mapBaseGraph up level =
    { level | baseGraph = up level.baseGraph }


mapPlayerGraph : (PlayerGraph -> PlayerGraph) -> Level -> Level
mapPlayerGraph up level =
    { level | playerGraph = up level.playerGraph }
