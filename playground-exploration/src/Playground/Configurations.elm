module Playground.Configurations exposing (..)

import Color exposing (Color)
import List.Extra
import Round


type alias Configurations =
    List Block


type alias Block =
    { name : String
    , isOpen : Bool
    , configs : List ( String, Config )
    }


type Config
    = FloatConfig ( Float, Float ) Float
    | IntConfig ( Int, Int ) Int
    | ColorConfig Color
    | BoolConfig Bool


configBlock : String -> Bool -> List ( String, Config ) -> Block
configBlock name isOn configList =
    Block name isOn configList



-- QUERY


getBool : String -> Configurations -> Bool
getBool key configurations =
    configurations
        |> List.Extra.findMap (getBoolFromBlock key)
        |> Maybe.withDefault False


getBoolFromBlock : String -> Block -> Maybe Bool
getBoolFromBlock key block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == key, config ) of
                    ( True, BoolConfig value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getInt : String -> Configurations -> Int
getInt key configurations =
    configurations
        |> List.Extra.findMap (getIntFromBlock key)
        |> Maybe.withDefault 0


getIntFromBlock : String -> Block -> Maybe Int
getIntFromBlock key block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == key, config ) of
                    ( True, IntConfig _ value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getFloat : String -> Configurations -> Float
getFloat key configurations =
    configurations
        |> List.Extra.findMap (getFloatFromBlock key)
        |> Maybe.withDefault 0


getFloatFromBlock : String -> Block -> Maybe Float
getFloatFromBlock key block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == key, config ) of
                    ( True, FloatConfig _ value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getColor : String -> Configurations -> Color
getColor key configurations =
    configurations
        |> List.Extra.findMap (getColorFromBlock key)
        |> Maybe.withDefault Color.black


getColorFromBlock : String -> Block -> Maybe Color
getColorFromBlock key block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == key, config ) of
                    ( True, ColorConfig value ) ->
                        Just value

                    _ ->
                        Nothing
            )



-- UPDATE


type Msg
    = SetFloat String Float
    | SetInt String Int
    | SetColor String Color
    | SetBool String Bool


update : Msg -> Configurations -> Configurations
update msg configurations =
    configurations |> List.map (updateBlock msg)


updateBlock : Msg -> Block -> Block
updateBlock msg =
    mapConfigs (updateConfigs msg)


mapConfigs : (List ( String, Config ) -> List ( String, Config )) -> Block -> Block
mapConfigs up block =
    { block | configs = up block.configs }


updateConfigs : Msg -> List ( String, Config ) -> List ( String, Config )
updateConfigs msg =
    case msg of
        SetInt key newValue ->
            List.Extra.updateIf (Tuple.first >> (==) key)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            IntConfig ( min, max ) _ ->
                                IntConfig ( min, max ) newValue

                            _ ->
                                config
                    )
                )

        SetFloat key newValue ->
            List.Extra.updateIf (Tuple.first >> (==) key)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            FloatConfig ( min, max ) _ ->
                                FloatConfig ( min, max ) (roundFloatValue min max newValue)

                            _ ->
                                config
                    )
                )

        SetBool key newValue ->
            List.Extra.updateIf (Tuple.first >> (==) key)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            BoolConfig _ ->
                                BoolConfig newValue

                            _ ->
                                config
                    )
                )

        SetColor key newValue ->
            List.Extra.updateIf (Tuple.first >> (==) key)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            ColorConfig _ ->
                                ColorConfig newValue

                            _ ->
                                config
                    )
                )


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
