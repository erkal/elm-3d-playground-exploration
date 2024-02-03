module Tree.Address exposing
    ( Address, fromString, toString, next, parent, ancestor
    , firstChild, length, previous
    )

{-| The path of a `RoseTree.Tree` node is represented as a `List Int`.

This module provides functions for path manipulation.

@docs Address, fromString, toString, next, parent, ancestor

-}


type alias Address =
    List Int


length : Address -> Int
length address =
    List.length address


toString : Address -> String
toString address =
    address
        |> List.map String.fromInt
        |> String.join " "


fromString : String -> Address
fromString string =
    string
        |> String.split " "
        |> List.filterMap String.toInt


{-| Increment last element of the path.

    next [ 1, 2, 3 ] == [ 1, 2, 4 ]

-}
next : List Int -> List Int
next path =
    case List.reverse path of
        [] ->
            []

        idx :: rest ->
            List.reverse (idx + 1 :: rest)


{-| Decrement last element of the path.

    previous [ 1, 2, 3 ] == [ 1, 2, 2 ]

-}
previous : List Int -> List Int
previous path =
    case List.reverse path of
        [] ->
            []

        idx :: rest ->
            List.reverse (idx - 1 :: rest)


{-| Obtain the parent path.

    parent [ 1, 2, 3 ] == [ 1, 2 ]

-}
parent : List Int -> List Int
parent path =
    case List.reverse path of
        [] ->
            []

        _ :: rest ->
            List.reverse rest


{-| Obtain first child path.

    child [ 1, 2, 3 ] == [ 1, 2, 3, 0 ]

-}
firstChild : List Int -> List Int
firstChild path =
    path ++ [ 0 ]


{-| Find a common ancestor path for a list of paths.

    parent [ [ 0, 1, 0, 1 ], [ 0, 1, 1, 0 ], [ 0, 1, 2, 3 ] ] == [ 0, 1 ]

-}
ancestor : List (List Int) -> List Int
ancestor lists =
    case lists of
        [] ->
            []

        headList :: tailLists ->
            ancestorHelp headList tailLists


ancestorHelp : List Int -> List (List Int) -> List Int
ancestorHelp common lists =
    case lists of
        [] ->
            common

        headList :: tailLists ->
            ancestorHelp (findCommonPrefix common headList) tailLists


findCommonPrefix : List Int -> List Int -> List Int
findCommonPrefix list1 list2 =
    case ( list1, list2 ) of
        ( [], _ ) ->
            []

        ( _, [] ) ->
            []

        ( head1 :: tail1, head2 :: tail2 ) ->
            if head1 == head2 then
                head1 :: findCommonPrefix tail1 tail2

            else
                []
