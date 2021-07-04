module Playground3d.Configurations exposing (..)

import Color exposing (Color)
import Round


type alias Configurations =
    List Config


type Config
    = Float String ( Float, Float ) Float
    | Color String Color



-- QUERY


getFloat : String -> Configurations -> Float
getFloat key configurations =
    configurations
        |> List.filterMap
            (\config ->
                case config of
                    Float k _ value ->
                        if k == key then
                            Just value

                        else
                            Nothing

                    _ ->
                        Nothing
            )
        |> List.head
        |> Maybe.withDefault 0


getColor : String -> Configurations -> Color
getColor key configurations =
    configurations
        |> List.filterMap
            (\config ->
                case config of
                    Color k value ->
                        if k == key then
                            Just value

                        else
                            Nothing

                    _ ->
                        Nothing
            )
        |> List.head
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
                |> List.map
                    (\config ->
                        case config of
                            Float k ( min, max ) _ ->
                                if k == key then
                                    Float k ( min, max ) (roundFloatValue min max newValue)

                                else
                                    config

                            _ ->
                                config
                    )

        SetColor key newValue ->
            configurations
                |> List.map
                    (\config ->
                        case config of
                            Color k _ ->
                                if k == key then
                                    Color k newValue

                                else
                                    config

                            _ ->
                                config
                    )
