module Playground.Configurations exposing (..)

import Color exposing (Color)
import List.Extra
import Round
import Tools.SelectList.SelectList as SelectList exposing (SelectList)


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
    | OptionsConfig (SelectList String)


configBlock : String -> Bool -> List ( String, Config ) -> Block
configBlock name isOn configList =
    Block name isOn configList



-- QUERY


getBool : String -> Configurations -> Bool
getBool name configurations =
    configurations
        |> List.Extra.findMap (getBoolFromBlock name)
        |> Maybe.withDefault False


getBoolFromBlock : String -> Block -> Maybe Bool
getBoolFromBlock name block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == name, config ) of
                    ( True, BoolConfig value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getInt : String -> Configurations -> Int
getInt name configurations =
    configurations
        |> List.Extra.findMap (getIntFromBlock name)
        |> Maybe.withDefault 0


getIntFromBlock : String -> Block -> Maybe Int
getIntFromBlock name block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == name, config ) of
                    ( True, IntConfig _ value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getFloat : String -> Configurations -> Float
getFloat name configurations =
    configurations
        |> List.Extra.findMap (getFloatFromBlock name)
        |> Maybe.withDefault 0


getFloatFromBlock : String -> Block -> Maybe Float
getFloatFromBlock name block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == name, config ) of
                    ( True, FloatConfig _ value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getColor : String -> Configurations -> Color
getColor name configurations =
    configurations
        |> List.Extra.findMap (getColorFromBlock name)
        |> Maybe.withDefault Color.black


getColorFromBlock : String -> Block -> Maybe Color
getColorFromBlock name block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == name, config ) of
                    ( True, ColorConfig value ) ->
                        Just value

                    _ ->
                        Nothing
            )


getOption : String -> Configurations -> String
getOption name configurations =
    configurations
        |> List.Extra.findMap (getSelectedOptionFromBlock name)
        |> Maybe.withDefault ""


getSelectedOptionFromBlock : String -> Block -> Maybe String
getSelectedOptionFromBlock name block =
    block.configs
        |> List.Extra.findMap
            (\( k, config ) ->
                case ( k == name, config ) of
                    ( True, OptionsConfig selectList ) ->
                        Just (SelectList.getCurrent selectList)

                    _ ->
                        Nothing
            )



-- UPDATE


type Msg
    = SetFloat String Float
    | SetInt String Int
    | SetColor String Color
    | SetBool String Bool
    | SetOption String String


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
        SetInt name newValue ->
            List.Extra.updateIf (Tuple.first >> (==) name)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            IntConfig ( min, max ) _ ->
                                IntConfig ( min, max ) newValue

                            _ ->
                                config
                    )
                )

        SetFloat name newValue ->
            List.Extra.updateIf (Tuple.first >> (==) name)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            FloatConfig ( min, max ) _ ->
                                FloatConfig ( min, max ) (roundFloatValue min max newValue)

                            _ ->
                                config
                    )
                )

        SetColor name newValue ->
            List.Extra.updateIf (Tuple.first >> (==) name)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            ColorConfig _ ->
                                ColorConfig newValue

                            _ ->
                                config
                    )
                )

        SetBool name newValue ->
            List.Extra.updateIf (Tuple.first >> (==) name)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            BoolConfig _ ->
                                BoolConfig newValue

                            _ ->
                                config
                    )
                )

        SetOption name selectedOption ->
            List.Extra.updateIf (Tuple.first >> (==) name)
                (Tuple.mapSecond
                    (\config ->
                        case config of
                            OptionsConfig value ->
                                OptionsConfig
                                    (value
                                        |> SelectList.toList
                                        |> List.Extra.findIndex ((==) selectedOption)
                                        |> Maybe.map (\index -> SelectList.goTo index value)
                                        |> Maybe.withDefault value
                                    )

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
