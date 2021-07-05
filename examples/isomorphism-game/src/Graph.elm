module Graph exposing (..)

import Dict exposing (Dict)


type Graph
    = Graph (Dict VertexId VertexData)


type alias VertexId =
    Int


type alias VertexData =
    { position : Point
    , outNeighbours : List VertexId
    }


type alias Point =
    { x : Float
    , y : Float
    }


exampleGraph : Graph
exampleGraph =
    Graph
        (Dict.fromList
            [ ( 0
              , { position = { x = 0, y = 0 }
                , outNeighbours = []
                }
              )
            , ( 1
              , { position = { x = 3, y = 2 }
                , outNeighbours = []
                }
              )
            , ( 2
              , { position = { x = -2, y = -1 }
                , outNeighbours = []
                }
              )
            , ( 3
              , { position = { x = -4, y = 1 }
                , outNeighbours = []
                }
              )
            ]
        )


allVertices : Graph -> List ( VertexId, VertexData )
allVertices (Graph graph) =
    graph
        |> Dict.toList
