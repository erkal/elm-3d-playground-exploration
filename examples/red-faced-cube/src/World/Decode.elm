module World.Decode exposing (decodeWorld)

import Cell exposing (Cell)
import Cube exposing (Axis(..), Cube(..), RedFaceDirection(..), Sign(..))
import Json.Decode as Decode exposing (Decoder)
import Path exposing (Path, PathSegment)
import World exposing (World)



{- Generated with <https://dkodaj.github.io/decgen/> with the following input

    type alias World =
        { playerCube : Cube
        , playerPath : Path
        , levelCube : Cube
        , levelPath : Path
        }


   type alias Path =
       { last : Cell
       , rest : List Cell
       }


   type alias PathSegment =
       ( Cell, Cell )


   type Cube
       = Cube Cell RedFaceDirection


   type RedFaceDirection
       = RedFaceDirection Axis Sign


   type Sign
       = Positive
       | Negative


   type alias Cell =
       ( Int, Int )


   type Axis
       = X
       | Y
       | Z

-}


decodeAxis : Decoder Axis
decodeAxis =
    let
        recover x =
            case x of
                "X" ->
                    Decode.succeed X

                "Y" ->
                    Decode.succeed Y

                "Z" ->
                    Decode.succeed Z

                other ->
                    Decode.fail <| "Unknown constructor for type Axis: " ++ other
    in
    Decode.string |> Decode.andThen recover


decodeCell : Decoder Cell
decodeCell =
    Decode.map2
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" Decode.int)
        (Decode.field "A2" Decode.int)


decodeCube : Decoder Cube
decodeCube =
    Decode.map2
        Cube
        (Decode.field "A1" decodeCell)
        (Decode.field "A2" decodeRedFaceDirection)


decodePath : Decoder Path
decodePath =
    Decode.map2
        Path
        (Decode.field "last" decodeCell)
        (Decode.field "rest" (Decode.list decodeCell))


decodePathSegment : Decoder PathSegment
decodePathSegment =
    Decode.map2
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" decodeCell)
        (Decode.field "A2" decodeCell)


decodeRedFaceDirection : Decoder RedFaceDirection
decodeRedFaceDirection =
    Decode.map2
        RedFaceDirection
        (Decode.field "A1" decodeAxis)
        (Decode.field "A2" decodeSign)


decodeSign : Decoder Sign
decodeSign =
    let
        recover x =
            case x of
                "Positive" ->
                    Decode.succeed Positive

                "Negative" ->
                    Decode.succeed Negative

                other ->
                    Decode.fail <| "Unknown constructor for type Sign: " ++ other
    in
    Decode.string |> Decode.andThen recover


decodeWorld : Decoder World
decodeWorld =
    Decode.map4
        World
        (Decode.field "playerCube" decodeCube)
        (Decode.field "playerPath" decodePath)
        (Decode.field "levelCube" decodeCube)
        (Decode.field "levelPath" decodePath)
