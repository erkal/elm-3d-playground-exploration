module Level exposing (..)

import Graph exposing (Graph)


type alias Level =
    { baseGraph : Graph
    , playerGraph : Graph
    }


exampleLevel : Level
exampleLevel =
    { baseGraph = Graph.exampleGraph
    , playerGraph = Graph.exampleGraph
    }


empty : Level
empty =
    { baseGraph = Graph.empty
    , playerGraph = Graph.empty
    }


mapBaseGraph : (Graph -> Graph) -> Level -> Level
mapBaseGraph up level =
    { level | baseGraph = up level.baseGraph }


mapPlayerGraph : (Graph -> Graph) -> Level -> Level
mapPlayerGraph up level =
    { level | playerGraph = up level.playerGraph }
