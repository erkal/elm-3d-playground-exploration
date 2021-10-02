module CodeGraph exposing (..)


type CodeGraph node edge
    = CodeGraph


type NodeName
    = NodeName String


empty : CodeGraph node edge
empty =
    CodeGraph
