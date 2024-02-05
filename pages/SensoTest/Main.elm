module SensoTest.Main exposing (main)

import Camera exposing (Camera, perspectiveWithOrbit)
import Color exposing (blue, green, hsl, red, rgb255)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Playground.Playground as Playground exposing (..)
import Playground.Senso as Senso
import Playground.Tape exposing (Message(..))
import Round
import Scene exposing (..)
import Scene3d.Material exposing (matte)
import Tools.Animation.Animation exposing (..)
import Tools.Geometry.Geometry exposing (Point2d, distance)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


initialConfigurations =
    [ configBlock "Camera"
        True
        [ floatConfig "camera azimuth" ( 0, 2 * pi ) 0
        , floatConfig "camera elevation" ( -pi / 2, pi / 2 ) 0
        ]
    , configBlock "Other things"
        True
        [ optionsConfig "some options" ( [ "option 1", "option 2" ], "option 3", [ "option 4", "option 5" ] )
        ]
    ]


type alias Model =
    {}


init : Computer -> Model
init computer =
    {}


update : Computer -> Message Never -> Model -> Model
update computer message model =
    case message of
        Tick ->
            model

        _ ->
            model


camera : Computer -> Camera
camera computer =
    perspectiveWithOrbit
        { focalPoint = { x = 0, y = 0, z = 0 }
        , azimuth = getFloat "camera azimuth" computer
        , elevation = getFloat "camera elevation" computer
        , distance = 2
        }


view : Computer -> Model -> Html Never
view computer model =
    div []
        [ viewSensoAsText computer
        , viewSensoAsDrawing computer model
        ]


viewSensoAsText : Computer -> Html Never
viewSensoAsText { senso } =
    let
        viewArea name { x, y, f } =
            div [ class "bg-white/10 p-4" ]
                [ div [] [ text name ]
                , div [ class "pl-4" ]
                    [ div [] [ text <| "x: " ++ Round.floorCom 3 x ]
                    , div [] [ text <| "y: " ++ Round.floorCom 3 y ]
                    , div [] [ text <| "f: " ++ Round.floorCom 3 f ]
                    ]
                ]
    in
    div
        [ class "absolute m-16 p-16 bg-white/10"
        , class "flex flex-col gap-8"
        ]
        [ div [] [ text "current:" ]
        , div [ class "flex flex-row gap-8" ]
            [ viewArea "center:" senso.center
            , viewArea "right:" senso.right
            , viewArea "up:" senso.up
            , viewArea "left:" senso.left
            , viewArea "down:" senso.down
            ]
        , div [] [ text "target:" ]
        , div [ class "flex flex-row gap-8" ]
            [ viewArea "center:" senso.target.center
            , viewArea "right:" senso.target.right
            , viewArea "up:" senso.target.up
            , viewArea "left:" senso.target.left
            , viewArea "down:" senso.target.down
            ]
        , div [] [ text "unified:" ]
        , div []
            [ viewArea "x:" (senso |> Senso.getUnifiedPress)
            ]
        ]



--


viewSensoAsDrawing : Computer -> Model -> Html Never
viewSensoAsDrawing computer model =
    Scene.sunny
        { devicePixelRatio = computer.devicePixelRatio
        , screen = computer.screen
        , camera = camera computer
        , backgroundColor = Color.charcoal
        , sunlightAzimuth = -(degrees 135)
        , sunlightElevation = -(degrees 45)
        }
        [ viewSenso computer model
        , axes
        ]


axes : Shape
axes =
    group
        [ line red ( 100, 0, 0 ) -- x axis
        , line green ( 0, 100, 0 ) -- y axis
        , line blue ( 0, 0, 100 ) -- z axis
        ]


viewSenso : Computer -> Model -> Shape
viewSenso { senso } model =
    let
        { x, y, f } =
            senso |> Senso.getUnifiedPress
    in
    sphere (matte blue) f
        |> moveX x
        |> moveY y



--|> moveZ f
