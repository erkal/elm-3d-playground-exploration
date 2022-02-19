module World.Decode exposing (..)

import Cell exposing (Cell)
import Cube as Cubde exposing (Axis(..), Cube(..), RedFaceDirection, Sign(..))
import Json.Decode as Decode exposing (Decoder)
import Path exposing (Path, PathSegment)
import World exposing (World)


decoder : Decoder World
decoder =
    Decode.map3
        World
        (Decode.field "cube" decodeCube)
        (Decode.field "playerPath" decodePath)
        (Decode.field "solutionPath" decodePath)


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
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" decodeCell)
        (Decode.field "A2" (Decode.list decodeCell))


decodePathSegment : Decoder PathSegment
decodePathSegment =
    Decode.map2
        (\a1 a2 -> ( a1, a2 ))
        (Decode.field "A1" decodeCell)
        (Decode.field "A2" decodeCell)


decodeRedFaceDirection : Decoder RedFaceDirection
decodeRedFaceDirection =
    Decode.map2
        Cubde.RedFaceDirection
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
