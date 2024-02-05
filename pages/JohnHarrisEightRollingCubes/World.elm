module JohnHarrisEightRollingCubes.World exposing (..)

import JohnHarrisEightRollingCubes.Cube as Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), RollDirection(..), Sign(..))


type alias World =
    List Cube


init : World
init =
    [ Cube ( -1, 1 ) (RedFaceDirection Z Positive)
    , Cube ( -1, 0 ) (RedFaceDirection Z Positive)
    , Cube ( -1, -1 ) (RedFaceDirection Z Positive)
    , Cube ( 0, -1 ) (RedFaceDirection Z Positive)
    , Cube ( 0, 1 ) (RedFaceDirection Z Positive)
    , Cube ( 1, 1 ) (RedFaceDirection Z Positive)
    , Cube ( 1, 0 ) (RedFaceDirection Z Positive)
    , Cube ( 1, -1 ) (RedFaceDirection Z Positive)
    ]


type RollResult
    = NoCubeThere
    | CannotRoll
    | Roll RollDirection World


rollCubeAt : ( Int, Int ) -> World -> RollResult
rollCubeAt positionAtStart world =
    let
        isAtGivenPosition (Cube position _) =
            position == positionAtStart

        cubeAtGivenPosition =
            world
                |> List.filter isAtGivenPosition
                |> List.head
    in
    case cubeAtGivenPosition of
        Nothing ->
            NoCubeThere

        Just c ->
            rollCube c world


isOccupied : ( Int, Int ) -> World -> Bool
isOccupied xy =
    List.any (\(Cube position _) -> xy == position)


isOnBoard : ( Int, Int ) -> Bool
isOnBoard ( x, y ) =
    x >= -1 && x <= 1 && y >= -1 && y <= 1


rollCube : Cube -> World -> RollResult
rollCube ((Cube startPosition _) as cube) world =
    let
        result =
            [ Up, Down, Left, Right ]
                |> List.filterMap
                    (\rollDirection ->
                        let
                            ((Cube newPos _) as newCube) =
                                Cube.roll rollDirection cube
                        in
                        if isOccupied newPos world || not (isOnBoard newPos) then
                            Nothing

                        else
                            Just ( newCube, rollDirection )
                    )
                |> List.head
    in
    case result of
        Nothing ->
            CannotRoll

        Just ( newCube, rollDirection ) ->
            Roll rollDirection
                (world
                    |> List.filter (\(Cube position _) -> position /= startPosition)
                    |> (::) newCube
                )
