module Playground3d.Configurations exposing (..)

import Color exposing (Color)
import Dict exposing (Dict)
import Round


type alias Configurations =
    List Block


type alias Block =
    { name : String
    , isOpen : Bool
    , configs : Dict String Config
    }


type Config
    = Float ( Float, Float ) Float
    | Int ( Int, Int ) Int
    | Color Color
    | Bool Bool


configBlock : String -> Bool -> List ( String, Config ) -> Block
configBlock name isOn configList =
    Block name isOn (Dict.fromList configList)



-- QUERY


getBool : String -> Configurations -> Bool
getBool key configurations =
    configurations
        |> List.filterMap (getBoolFromBlock key)
        |> List.head
        |> Maybe.withDefault False


getBoolFromBlock : String -> Block -> Maybe Bool
getBoolFromBlock key block =
    block.configs
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Bool value ->
                        value

                    _ ->
                        False
            )


getInt : String -> Configurations -> Int
getInt key configurations =
    configurations
        |> List.filterMap (getIntFromBlock key)
        |> List.head
        |> Maybe.withDefault 0


getIntFromBlock : String -> Block -> Maybe Int
getIntFromBlock key block =
    block.configs
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Int _ value ->
                        value

                    _ ->
                        0
            )


getFloat : String -> Configurations -> Float
getFloat key configurations =
    configurations
        |> List.filterMap (getFloatFromBlock key)
        |> List.head
        |> Maybe.withDefault 0


getFloatFromBlock : String -> Block -> Maybe Float
getFloatFromBlock key block =
    block.configs
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Float _ value ->
                        value

                    _ ->
                        0
            )


getColor : String -> Configurations -> Color
getColor key configurations =
    configurations
        |> List.filterMap (getColorFromBlock key)
        |> List.head
        |> Maybe.withDefault Color.black


getColorFromBlock : String -> Block -> Maybe Color
getColorFromBlock key block =
    block.configs
        |> Dict.get key
        |> Maybe.map
            (\config ->
                case config of
                    Color value ->
                        value

                    _ ->
                        Color.black
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


mapConfigs : (Dict String Config -> Dict String Config) -> Block -> Block
mapConfigs up block =
    { block | configs = up block.configs }


updateConfigs : Msg -> Dict String Config -> Dict String Config
updateConfigs msg =
    case msg of
        SetInt key newValue ->
            Dict.update key
                (Maybe.map
                    (\config ->
                        case config of
                            Int ( min, max ) _ ->
                                Int ( min, max ) newValue

                            _ ->
                                config
                    )
                )

        SetFloat key newValue ->
            Dict.update key
                (Maybe.map
                    (\config ->
                        case config of
                            Float ( min, max ) _ ->
                                Float ( min, max ) (roundFloatValue min max newValue)

                            _ ->
                                config
                    )
                )

        SetBool key newValue ->
            Dict.update key
                (Maybe.map
                    (\config ->
                        case config of
                            Bool _ ->
                                Bool newValue

                            _ ->
                                config
                    )
                )

        SetColor key newValue ->
            Dict.update key
                (Maybe.map
                    (\config ->
                        case config of
                            Color _ ->
                                Color newValue

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
