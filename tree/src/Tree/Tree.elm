module Tree.Tree exposing
    ( Tree
    , branch, leaf
    , get, updateAt, replaceAt, removeAt, insertBefore, insertAfter
    , value, setValue, updateValue, getValueAt, updateValueAt
    , children, unshift, push, pushChildFor, unshiftChildFor
    , map, mapValues, filterMap, foldl, foldr, findl, findr, any, all
    , foldWithPath
    , flatten
    )

{-|

@docs Tree


# Create

@docs branch, leaf


# Traversing and updating

@docs get, updateAt, replaceAt, removeAt, insertBefore, insertAfter


# Properties

@docs value, setValue, updateValue, getValueAt, updateValueAt


# Children

@docs children, unshift, push, pushChildFor, unshiftChildFor


# Folds

@docs map, mapValues, filterMap, foldl, foldr, findl, findr, any, all
@docs foldWithPath

-}

import List.Extra
import Tree.Address as Address


{-| Represents a tree where each node contains a value of type `a`
and an array of zero or more children.

    tree : Tree String
    tree =
        Tree "root" (Array.fromList [ Tree "a" (Array.fromList []) ])

-}
type Tree a
    = Tree a (List (Tree a))


{-| Creates a leaf node with the given value.

     leaf 42 == Tree 42 (Array.fromList [])

-}
leaf : a -> Tree a
leaf a =
    Tree a []


{-| Creates a branch node with the given value and children.

    branch "root" [ leaf "a" ]
        == Tree "root" (Array.fromList [ Tree "a" (Array.fromList []) ])

-}
branch : a -> List (Tree a) -> Tree a
branch a ns =
    Tree a ns


{-| Retrieves the value of a tree node.

     value (leaf "leaf") == "leaf"

-}
value : Tree a -> a
value (Tree a _) =
    a


{-| Sets the value of a tree node.

     setValue "new" (leaf "old") == leaf "new"

-}
setValue : a -> Tree a -> Tree a
setValue a (Tree _ ns) =
    Tree a ns


{-| Updates the value of a tree node using a function.

     updateValue String.toUpper (leaf "value") == leaf "VALUE"

-}
updateValue : (a -> a) -> Tree a -> Tree a
updateValue f (Tree a ns) =
    Tree (f a) ns


{-| Retrieves the value of a child node at the specified path.

     getValueAt [ 1, 0 ] (branch "root" [ leaf "a", branch "b" [ leaf "z" ] ])
         == Just "z"

-}
getValueAt : List Int -> Tree a -> Maybe a
getValueAt path tree =
    get path tree |> Maybe.map value


{-| Updates the value for a child node at the specified path using a function.

    updateValueAt [ 1 ] String.toUpper (branch "root" [ leaf "a", leaf "b" ])
        == branch "root" [ leaf "a", leaf "B" ]

-}
updateValueAt : List Int -> (a -> a) -> Tree a -> Tree a
updateValueAt path f =
    updateAt path (updateValue f)


{-| Retrieves the immediate children of a tree node.

    children (branch "root" [ leaf "a", leaf "b" ])
        == [ leaf "a", leaf "b" ]

-}
children : Tree a -> List (Tree a)
children (Tree _ ns) =
    ns


{-| Adds a child node to the end of the children list of a parent node.

    push (leaf "b") (branch "root" [ leaf "a" ])
        == branch "root" [ leaf "a", leaf "b" ]

-}
push : Tree a -> Tree a -> Tree a
push n (Tree a ns) =
    Tree a (ns ++ [ n ])


{-| Adds a child node to the beginning of the children list of a parent node.

    unshift (leaf "b") (branch "root" [ leaf "a" ])
        == branch "root" [ leaf "b", leaf "a" ]

-}
unshift : Tree a -> Tree a -> Tree a
unshift n (Tree a ns) =
    Tree a (n :: ns)


{-| Adds a child node to the end of the children list of a parent node at
a path.

    pushChildFor [ 0 ] (leaf "x") (branch "root" [ branch "a" [ leaf "b" ] ])
        == branch "root" [ branch "a" [ leaf "b", leaf "x" ] ]

-}
pushChildFor : List Int -> Tree a -> Tree a -> Tree a
pushChildFor path child =
    updateAt path (push child)


{-| Adds a child node to the beginning of the children list of a parent node at
a path.

    unshiftChildFor [ 0 ] (leaf "x") (branch "root" [ branch "a" [ leaf "b" ] ])
        == branch "root" [ branch "a" [ leaf "x", leaf "b" ] ]

-}
unshiftChildFor : List Int -> Tree a -> Tree a -> Tree a
unshiftChildFor path child =
    updateAt path (unshift child)


{-| Retrieves a child node at the specified path.

     get [ 1, 0 ] (branch "root" [ leaf "a", branch "b" [ leaf "z" ] ])
         == Just (leaf "z")

-}
get : List Int -> Tree a -> Maybe (Tree a)
get path (Tree _ ns) =
    case path of
        idx :: [] ->
            List.Extra.getAt idx ns

        idx :: rest ->
            Maybe.andThen (get rest) (List.Extra.getAt idx ns)

        [] ->
            Nothing


{-| Updates a child node at the specified path using a function if the node
exists.

    updateAt [ 1 ] (updateValue ((*) -1)) (branch 0 [ leaf 1, leaf 2 ])
        == branch 0 [ leaf 1, leaf -2 ]

-}
updateAt : List Int -> (Tree a -> Tree a) -> Tree a -> Tree a
updateAt path f node =
    updateAtHelp path (\idx -> List.Extra.updateAt idx f) node


{-| Replaces a child node at the specified path with a new node if the node
exists.

    replaceAt [ 1 ] (leaf "new") (branch "root" [ leaf "a", leaf "old" ])
        == branch "root" [ leaf "a", leaf "new" ]

-}
replaceAt : List Int -> Tree a -> Tree a -> Tree a
replaceAt path inserted node =
    updateAt path (always inserted) node


{-| Removes a child node at the specified path.

    removeAt [ 1, 0 ]
        (branch "root" [ leaf "a", branch "b" [ leaf "z" ] ])
        == branch "root" [ leaf "a", leaf "b" ]

-}
removeAt : List Int -> Tree a -> Tree a
removeAt path node =
    updateAtHelp path List.Extra.removeAt node


{-| Inserts a new node before a child node at the specified path.

    insertBefore [ 1 ] (leaf "new") (branch "root" [ leaf "a", leaf "b" ])
        == branch "root" [ leaf "a", leaf "new", leaf "b" ]

-}
insertBefore : List Int -> Tree a -> Tree a -> Tree a
insertBefore path inserted =
    updateAtHelp path (insertHelp identity inserted)


{-| Inserts a new node after a child node at the specified path.

    insertAfter [ 0 ] (leaf "new") (branch "root" [ leaf "a", leaf "b" ])
        == branch "root" [ leaf "a", leaf "new", leaf "b" ]

-}
insertAfter : List Int -> Tree a -> Tree a -> Tree a
insertAfter path inserted =
    updateAtHelp path (insertHelp ((+) 1) inserted)


{-| Applies a transformation function to each node in the tree.

     map (updateValue ((+) 1)) (branch 0 [ leaf 1, branch 2 [ leaf 3 ] ])
         == branch 1 [ branch 2 [], branch 3 [ leaf 4 ] ]

-}
map : (Tree a -> Tree a) -> Tree a -> Tree a
map f (Tree a ns) =
    f (Tree a (List.map (map f) ns))


{-| Flattens a tree into a list.

     flatten (branch 0 [ leaf 1, branch 2 [ leaf 3 ] ])
        == [ 0, 1, 2, 3 ]

-}
flatten : Tree a -> List a
flatten (Tree a ns) =
    a :: List.concatMap flatten ns


{-| Applies a value transformation function to the values of each node in the
tree.

    mapValues ((*) 2) (branch 0 [ leaf 1, branch 2 [ leaf 3 ] ])
        == branch 0 [ branch 2 [], branch 4 [ leaf 6 ] ]

    map (updateValue ((*) 2)) (leaf 0) == mapValues ((*) 2) (leaf 0)

-}
mapValues : (a -> b) -> Tree a -> Tree b
mapValues f (Tree a ns) =
    Tree (f a) (List.map (mapValues f) ns)


{-| Applies a filter and transformation function to each node in the tree. Nodes
for which the filter returns `Nothing` are removed, and nodes for which the
filter returns `Just` are replaced with the transformed value.

    filterMap
        (\node ->
            if value node == "b" then
                Just (setValue "x" node)

            else
                Nothing
        )
        (branch "root" [ leaf "a", branch "b" [ leaf "z" ] ])
        == branch "root" [ leaf "x" ]

-}
filterMap : (Tree a -> Maybe (Tree a)) -> Tree a -> Tree a
filterMap f (Tree a ns) =
    Tree a (List.filterMap (filterMap f >> f) ns)


{-| Reduces a tree from the deepest rightmost.

     foldl (\n acc -> value n ++ acc) "" (branch "a" [ leaf "b", leaf "c" ])
         == "cba"

-}
foldl : (Tree a -> b -> b) -> b -> Tree a -> b
foldl f acc (Tree a ns) =
    List.foldl (\n acc_ -> foldl f acc_ n) (f (Tree a ns) acc) ns


{-| Reduces a tree from the deepest leftmost, passing the path as the first
argument to the reducer, and omitting the root.

Folding to a list will make for a weird order ;)

    foldWithPath (\p n acc -> ( value n, p ) :: acc) [] (branch "a" [ leaf "b", leaf "c" ])
        == [ ( "c", [ 1 ] ), ( "b", [ 0 ] ) ]

-}
foldWithPath : (List Int -> Tree a -> b -> b) -> b -> Tree a -> b
foldWithPath f acc node =
    foldWithPathHelp f [] acc node


foldWithPathHelp : (List Int -> Tree a -> b -> b) -> List Int -> b -> Tree a -> b
foldWithPathHelp f path acc (Tree a ns) =
    ns
        |> List.foldl
            (\n ( path_, acc_ ) ->
                ( Address.next path_, foldWithPathHelp f path_ acc_ n )
            )
            ( path ++ [ 0 ]
            , if List.isEmpty path then
                acc

              else
                f path (Tree a ns) acc
            )
        |> Tuple.second


{-| Reduces a tree from the deepest leftmost.

     foldr (\n acc -> value n ++ acc) "" (branch "a" [ leaf "b", leaf "c" ])
         == "bca"

-}
foldr : (Tree a -> b -> b) -> b -> Tree a -> b
foldr f acc (Tree a ns) =
    List.foldr (\n acc_ -> foldr f acc_ n) (f (Tree a ns) acc) ns


{-| Checks if any node in the tree satisfies a predicate function.

    any (\n -> value n == "b") (branch "root" [ leaf "a", leaf "b" ]) == True

-}
any : (Tree a -> Bool) -> Tree a -> Bool
any pred =
    foldl (\n acc -> acc || pred n) False


{-| Checks if all nodes in the tree satisfy a predicate function.

    all (\n -> value n > 1) (branch 2 [ leaf 3, leaf 4 ]) == True

-}
all : (Tree a -> Bool) -> Tree a -> Bool
all pred =
    foldl (\n acc -> acc && pred n) True


{-| Finds the first node in the tree that satisfies a predicate function
straring from the deepest leftmost node.

     findl (\n -> value n > 1) (branch 0 [ branch 1 [ leaf 0, leaf 2, leaf 3 ] ])
         == Just (leaf 2)

-}
findl : (Tree a -> Bool) -> Tree a -> Maybe (Tree a)
findl pred =
    foldl
        (\n acc ->
            if pred n && acc == Nothing then
                Just n

            else
                acc
        )
        Nothing


{-| Finds the first node in the tree that satisfies a predicate function
straring from the deepest rightmost node.

     findr (\n -> value n > 1) (branch 0 [ branch 1 [ leaf 0, leaf 2, leaf 3 ] ])
         == Just (leaf 3)

-}
findr : (Tree a -> Bool) -> Tree a -> Maybe (Tree a)
findr pred =
    foldr
        (\n acc ->
            if pred n && acc == Nothing then
                Just n

            else
                acc
        )
        Nothing



-- HELPERS


updateAtHelp :
    List Int
    -> (Int -> List (Tree a) -> List (Tree a))
    -> Tree a
    -> Tree a
updateAtHelp path f (Tree a ns) =
    case path of
        idx :: [] ->
            Tree a (f idx ns)

        idx :: rest ->
            Tree a (List.Extra.updateAt idx (updateAtHelp rest f) ns)

        [] ->
            Tree a ns


insertHelp : (Int -> Int) -> Tree a -> Int -> List (Tree a) -> List (Tree a)
insertHelp f inserted idx ns =
    if List.length ns < idx then
        ns

    else
        let
            ( h, t ) =
                List.Extra.splitAt (f idx) ns
        in
        h ++ [ inserted ] ++ t
