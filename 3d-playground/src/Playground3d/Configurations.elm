module Playground3d.Configurations exposing (..)

import Color exposing (Color)
import Dict exposing (Dict)
import Round


type alias Configurations =
    Dict String Config


type Config
    = Float ( Float, Float ) Float
    | Color Color



-- QUERY


getFloat : String -> Configurations -> Float
getFloat key configurations =
    configurations
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Float _ value ->
                        value

                    _ ->
                        0
            )
        |> Maybe.withDefault 0


getColor : String -> Configurations -> Color
getColor key configurations =
    configurations
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Color value ->
                        value

                    _ ->
                        Color.black
            )
        |> Maybe.withDefault Color.black



-- UPDATE


type Msg
    = SetFloat String Float
    | SetColor String Color


roundFloatValue : Float -> Float -> Float -> Float
roundFloatValue min max value =
    let
        scale =
            logBase 10 (abs (max - min))

        n =
            if scale < 0 then
                3

            else if scale < 1 then
                2

            else if scale < 2 then
                1

            else
                0
    in
    Round.roundNum n value


update : Msg -> Configurations -> Configurations
update msg configurations =
    case msg of
        SetFloat key newValue ->
            configurations
                |> Dict.update key
                    (Maybe.map
                        (\config ->
                            case config of
                                Float ( min, max ) _ ->
                                    Float ( min, max ) (roundFloatValue min max newValue)

                                _ ->
                                    config
                        )
                    )

        SetColor key newValue ->
            configurations
                |> Dict.update key
                    (Maybe.map
                        (\config ->
                            case config of
                                Color _ ->
                                    Color newValue

                                _ ->
                                    config
                        )
                    )
