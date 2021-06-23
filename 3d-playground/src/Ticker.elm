module Ticker exposing
    ( Ticker
    , currentComputer
    , currentGameModel
    , goToAndPauseAt
    , handleComputerMsg
    , init
    , startReplaying
    , startRunning
    , totalSize
    , updateCurrentGameModelFromEditor
    )

import Computer exposing (Computer, Msg(..))


type Ticker gameModel
    = Ticker
        State
        { past : List ( Computer, gameModel )
        , current : ( Computer, gameModel )
        , future : List ( Computer, gameModel )
        }


type State
    = GameIsRunning
    | Replaying { clockForSync : Float }
    | Paused


handleComputerMsg : (Computer -> gameModel -> gameModel) -> Computer.Msg -> Ticker gameModel -> Ticker gameModel
handleComputerMsg upDateGameModel computerMsg (Ticker state pastCurrentFuture) =
    case computerMsg of
        Tick _ ->
            if state == GameIsRunning then
                let
                    ( lastComputer, lastGameModel ) =
                        pastCurrentFuture.current

                    newComputer =
                        lastComputer |> Computer.update computerMsg

                    newGameModel =
                        upDateGameModel newComputer lastGameModel
                in
                Ticker state
                    { pastCurrentFuture
                        | past = pastCurrentFuture.past ++ [ pastCurrentFuture.current ]
                        , current = ( newComputer, newGameModel )
                        , future = []
                    }

            else
                Ticker state pastCurrentFuture

        _ ->
            Ticker state
                { pastCurrentFuture
                    | current =
                        pastCurrentFuture.current
                            |> Tuple.mapFirst (Computer.update computerMsg)
                }



-- INIT


init : Computer -> (Computer -> gameModel) -> Ticker gameModel
init initialComputer initGameModel =
    Ticker
        GameIsRunning
        { past = []
        , current = ( initialComputer, initGameModel initialComputer )
        , future = []
        }



-- GET (ONLY USED FOR VIEW)


currentComputer : Ticker gameModel -> Computer
currentComputer (Ticker _ { current }) =
    Tuple.first current


currentGameModel : Ticker gameModel -> gameModel
currentGameModel (Ticker _ { current }) =
    Tuple.second current


totalSize : Ticker gameModel -> Int
totalSize (Ticker _ { past, current, future }) =
    List.length past + 1 + List.length future



-- UPDATE


updateCurrentGameModelFromEditor : (Computer -> levelEditorMsg -> gameModel -> gameModel) -> levelEditorMsg -> Ticker gameModel -> Ticker gameModel
updateCurrentGameModelFromEditor updateFromEditor levelEditorMsg (Ticker state ({ current } as pastCurrentFuture)) =
    Ticker state
        { pastCurrentFuture
            | current = current |> Tuple.mapSecond (updateFromEditor (Tuple.first current) levelEditorMsg)
        }


startRunning : Ticker gameModel -> Ticker gameModel
startRunning ticker =
    Debug.todo ""


startReplaying : Ticker gameModel -> Ticker gameModel
startReplaying ticker =
    Debug.todo ""


goToAndPauseAt : Int -> Ticker gameModel -> Ticker gameModel
goToAndPauseAt index ticker =
    Debug.todo ""
