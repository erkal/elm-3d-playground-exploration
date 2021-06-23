port module Playground3d exposing
    ( game, gameWithConfigurations, gameWithConfigurationsAndEditor
    , configurations, getColor, getFloat
    , Shape, block, cube, cylinder, group, line, sphere, triangle
    , move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround
    , spin, wave, zigzag
    , Computer, Mouse, Screen, Keyboard, toX, toY, toXY
    , toEntities
    )

{-| NOTE: Most of the following code is copied from evancz/elm-playground


# Playground

@docs game, gameWithConfigurations, gameWithConfigurationsAndEditor


# Configurations

@docs configurations, getColor, getFloat


# Shapes

@docs Shape, block, cube, cylinder, group, line, sphere, triangle


# Move Shapes

@docs move, moveX, moveY, moveZ, rotateX, rotateY, rotateZ, rotateAround, scale, scaleAround


# Groups

@docs group


# Time

@docs spin, wave, zigzag


# Computer

@docs Computer, Mouse, Screen, Keyboard, toX, toY, toXY


### Rendering

@docs toEntities

-}

import Angle exposing (Angle)
import Axis3d exposing (Axis3d)
import Block3d exposing (Block3d)
import Browser
import Browser.Dom as Dom
import Browser.Events as E
import Color exposing (Color)
import Computer exposing (Computer, Msg(..), TouchEvent, init)
import Cylinder3d exposing (Cylinder3d)
import Direction3d exposing (Direction3d)
import Html exposing (Html, button, div, option, select, text)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onClick)
import Html.Events.Extra exposing (onChange)
import Json.Decode as D
import Length exposing (Length, Meters)
import LineSegment3d exposing (LineSegment3d)
import Playground3d.Configurations as Configurations exposing (Configurations)
import Playground3d.Geometry exposing (Point)
import Point3d exposing (Point3d)
import Scene3d
import Scene3d.Material as Material exposing (Material)
import Sphere3d exposing (Sphere3d)
import Task
import Triangle3d exposing (Triangle3d)
import Vector3d



-- PORTS FOR TOUCH EVENTS


port touchStart : (List TouchEvent -> msg) -> Sub msg


port touchMove : (List TouchEvent -> msg) -> Sub msg


port touchEnd : (List TouchEvent -> msg) -> Sub msg


port touchCancel : (List TouchEvent -> msg) -> Sub msg



-- EXPORTS


type alias Computer =
    Computer.Computer


type alias Mouse =
    Computer.Mouse


type alias Screen =
    Computer.Screen


type alias Keyboard =
    Computer.Keyboard


toX =
    Computer.toX


toY =
    Computer.toX


toXY =
    Computer.toXY


configurations =
    Computer.configurations


getColor =
    Computer.getColor


getFloat =
    Computer.getFloat



-- TIME


{-| The current time.

Helpful when making an [`animation`](#animation) with functions like
[`spin`](#spin), [`wave`](#wave), and [`zigzag`](#zigzag).

-}
type alias Time =
    Float


{-| Create an angle that cycles from 0 to 360 degrees over time.

Here is an [`animation`](#animation) with a spinning triangle:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ triangle orange 50
            |> rotate (spin 8 time)
        ]

It will do a full rotation once every eight seconds. Try changing the `8` to
a `2` to make it do a full rotation every two seconds. It moves a lot faster!

-}
spin : Float -> Time -> Float
spin period time =
    360 * toFrac period time


{-| Smoothly wave between two numbers.

Here is an [`animation`](#animation) with a circle that resizes:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ circle lightBlue (wave 50 90 7 time)
        ]

The radius of the circle will cycles between 50 and 90 every seven seconds.
It kind of looks like it is breathing.

-}
wave : Float -> Float -> Float -> Time -> Float
wave lo hi period time =
    lo + (hi - lo) * (1 + cos (turns (toFrac period time))) / 2


{-| Zig zag between two numbers.

Here is an [`animation`](#animation) with a rectangle that tips back and forth:

    import Playground3d exposing (..)

    main =
        animation view

    view time =
        [ rectangle lightGreen 20 100
            |> rotate (zigzag -20 20 4 time)
        ]

It gets rotated by an angle. The angle cycles from -20 degrees to 20 degrees
every four seconds.

-}
zigzag : Float -> Float -> Float -> Time -> Float
zigzag lo hi period time =
    lo + (hi - lo) * abs (2 * toFrac period time - 1)


toFrac : Float -> Time -> Float
toFrac period time =
    (time - toFloat (floor (time / period)) * period)
        / period



-- GAME


type alias Flags =
    { devicePixelRatio : Float }


{-| Create a game!

Once you get comfortable with [`animation`](#animation), you can try making a
game with the keyboard and mouse. Here is an example of a green square that
just moves to the right:

    import Playground3d exposing (..)

    main =
        game view update 0

    view computer offset =
        [ square green 40
            |> moveRight offset
        ]

    update computer offset =
        offset + 0.03

This shows the three important parts of a game:

1.  `gameModel` - makes it possible to store information. So with our green square,
    we save the `offset` in gameModel. It starts out at `0`.
2.  `view` - lets us say which shapes to put on screen. So here we move our
    square right by the `offset` saved in gameModel.
3.  `update` - lets us update the gameModel. We are incrementing the `offset` by
    a tiny amount on each frame.

The `update` function is called about 60 times per second, so our little
changes to `offset` start to add up pretty quickly!

This game is not very fun though! Making a `game` also gives you access to the
[`Computer`](#Computer), so you can use information about the [`Mouse`](#Mouse)
and [`Keyboard`](#Keyboard) to make it interactive! So here is a red square that
moves based on the arrow keys:

    import Playground3d exposing (..)

    main =
        game view update ( 0, 0 )

    view computer ( x, y ) =
        [ square red 40
            |> move x y
        ]

    update computer ( x, y ) =
        ( x + toX computer.keyboard
        , y + toY computer.keyboard
        )

Notice that in the `update` we use information from the keyboard to update the
`x` and `y` values. These building blocks let you make pretty fancy games!

-}
game :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> (Computer -> gameModel)
    -> Program Flags (Model gameModel) (Msg Never)
game viewGameModel updateGameModel initGameModel =
    gameWithConfigurations
        viewGameModel
        updateGameModel
        Configurations.empty
        initGameModel


gameWithConfigurations :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> (Computer -> gameModel)
    -> Program Flags (Model gameModel) (Msg Never)
gameWithConfigurations viewGameModel updateGameModel initialConfigurations initGameModel =
    gameWithConfigurationsAndEditor
        viewGameModel
        updateGameModel
        initialConfigurations
        initGameModel
        (\_ _ -> div [] [])
        (\_ _ gameModel -> gameModel)


gameWithConfigurationsAndEditor :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> gameModel)
    -> Configurations
    -> (Computer -> gameModel)
    -> (Computer -> gameModel -> Html levelEditorMsg)
    -> (Computer -> levelEditorMsg -> gameModel -> gameModel)
    -> Program Flags (Model gameModel) (Msg levelEditorMsg)
gameWithConfigurationsAndEditor viewGameModel updateGameModel initialConfigurations initGameModel viewEditor updateFromEditor =
    let
        init flags =
            let
                initialComputer_ =
                    Computer.init flags initialConfigurations
            in
            ( { computer = initialComputer_
              , gameModel = initGameModel initialComputer_
              , editorIsOn = False
              , activeEditorTab = Configurations
              , visibility = E.Visible
              }
            , Task.perform (GotViewport >> ToComputer) Dom.getViewport
            )

        update msg model =
            ( gameUpdate updateGameModel updateFromEditor msg model
            , Cmd.none
            )

        subscriptions { visibility } =
            case visibility of
                E.Hidden ->
                    E.onVisibilityChange VisibilityChanged
                        |> Sub.map ToComputer

                E.Visible ->
                    gameSubscriptions
    in
    Browser.element
        { init = init
        , view = view viewGameModel viewEditor
        , update = update
        , subscriptions = subscriptions
        }


view :
    (Computer -> gameModel -> Html Never)
    -> (Computer -> gameModel -> Html levelEditorMsg)
    -> Model gameModel
    -> Html (Msg levelEditorMsg)
view viewGameModel viewEditor model =
    let
        editorOnOffButton msg symbol =
            button
                [ style "font-size" "30px"
                , style "width" "40px"
                , style "height" "40px"
                , onClick msg
                ]
                [ text symbol ]

        optionWith editorTab =
            option
                [ value (editorTabToString editorTab)
                ]
                [ text (editorTabToString editorTab) ]

        editorTabSelection =
            div
                [ style "margin-left" "0px"
                ]
                [ select
                    [ onChange (editorTabFromString >> SelectTab)
                    , value (editorTabToString model.activeEditorTab)
                    , style "width" "200px"
                    , style "height" "40px"
                    , style "font-size" "20px"
                    ]
                    (List.map optionWith [ Configurations, LevelEditor ])
                ]

        viewGame =
            div
                [ style "position" "fixed"
                , style "top" "0px"
                , style "left" "0px"
                , style "width" (String.fromFloat model.computer.screen.width ++ "px")
                , style "height" (String.fromFloat model.computer.screen.height ++ "px")
                , style "font-size" "16px"
                ]
                [ Html.map (always NoOp) (viewGameModel model.computer model.gameModel)
                ]

        viewLeftBar =
            div
                [ style "position" "fixed"
                , style "top" "0px"
                , style "left" "0px"
                , style "width" (String.fromFloat 250 ++ "px")
                , style "height" (String.fromFloat model.computer.screen.height ++ "px")
                , style "font-family" """-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif"""
                , style "font-size" "16px"
                ]
                (if model.editorIsOn then
                    [ div
                        [ style "height" "100px" ]
                        [ editorOnOffButton HideEditor "✕"
                        , editorTabSelection
                        ]
                    , div
                        [ style "height" (String.fromFloat (model.computer.screen.height - 100) ++ "px") ]
                        [ viewActiveEditor ]
                    ]

                 else
                    [ editorOnOffButton ShowEditor "≡" ]
                )

        viewActiveEditor =
            case model.activeEditorTab of
                Configurations ->
                    Html.map FromConfigurationEditor (Configurations.view model.computer.configurations)

                LevelEditor ->
                    Html.map FromLevelEditor (viewEditor model.computer model.gameModel)
    in
    div
        [ style "touch-action" "none"
        , style "user-select" "none"
        ]
        [ viewGame
        , viewLeftBar
        ]



-- SUBSCRIPTIONS


gameSubscriptions : Sub (Msg levelEditorMsg)
gameSubscriptions =
    Sub.batch <|
        List.map (Sub.map ToComputer)
            [ E.onResize Resized
            , E.onKeyUp (D.map (KeyChanged False) (D.field "key" D.string))
            , E.onKeyDown (D.map (KeyChanged True) (D.field "key" D.string))
            , E.onAnimationFrameDelta ((*) 0.001 >> Tick)
            , E.onVisibilityChange VisibilityChanged
            , E.onClick (D.succeed MouseClick)
            , E.onMouseDown (D.succeed (MouseButton True))
            , E.onMouseUp (D.succeed (MouseButton False))
            , E.onMouseMove (D.map2 MouseMove (D.field "pageX" D.float) (D.field "pageY" D.float))
            , touchStart TouchStart
            , touchMove TouchMove
            , touchEnd TouchEnd
            , touchCancel TouchCancel
            ]



-- GAME HELPERS


type alias Model gameModel =
    { computer : Computer
    , gameModel : gameModel
    , editorIsOn : Bool
    , activeEditorTab : EditorTab
    , visibility : E.Visibility
    }


type EditorTab
    = Configurations
    | LevelEditor


editorTabToString : EditorTab -> String
editorTabToString editorTab =
    case editorTab of
        Configurations ->
            "Configurations"

        LevelEditor ->
            "Level Editor"


editorTabFromString : String -> EditorTab
editorTabFromString str =
    [ Configurations, LevelEditor ]
        |> List.filterMap
            (\editorTab ->
                if editorTabToString editorTab == str then
                    Just editorTab

                else
                    Nothing
            )
        |> List.head
        |> Maybe.withDefault Configurations


type Msg levelEditorMsg
    = NoOp
    | SelectTab EditorTab
    | HideEditor
    | ShowEditor
    | FromLevelEditor levelEditorMsg
    | FromConfigurationEditor Configurations.Msg
    | ToComputer Computer.Msg


gameUpdate : (Computer -> gameModel -> gameModel) -> (Computer -> levelEditorMsg -> gameModel -> gameModel) -> Msg levelEditorMsg -> Model gameModel -> Model gameModel
gameUpdate updateGameModel updateFromEditor msg ({ computer } as model) =
    case msg of
        NoOp ->
            model

        SelectTab editorTab ->
            { model | activeEditorTab = editorTab }

        HideEditor ->
            { model | editorIsOn = False }

        ShowEditor ->
            { model | editorIsOn = True }

        FromLevelEditor levelEditorMsg ->
            { model
                | gameModel =
                    model.gameModel |> updateFromEditor model.computer levelEditorMsg
            }

        FromConfigurationEditor configurationsMsg ->
            { model
                | computer =
                    { computer
                        | configurations =
                            computer.configurations |> Configurations.update configurationsMsg
                    }
            }

        ToComputer computerMsg ->
            let
                newGameModel =
                    case computerMsg of
                        Tick _ ->
                            model.gameModel |> updateGameModel computer

                        _ ->
                            model.gameModel

                newComputer =
                    model.computer |> Computer.update computerMsg
            in
            { model
                | gameModel = newGameModel
                , computer = newComputer
            }



-- SHAPES


{-| Shapes help you make a `picture`, `animation`, or `game`.

Read on to see examples of [`circle`](#circle), [`rectangle`](#rectangle),
[`words`](#words), [`image`](#image), and many more!

-}
type Shape
    = Block Color (Block3d Meters ())
    | Triangle Color (Triangle3d Meters ())
    | Cylinder Color (Cylinder3d Meters ())
    | Sphere Color (Sphere3d Meters ())
    | Line Color (LineSegment3d Meters ())
    | Group (List Shape)


material color =
    Material.matte color


type alias Vector =
    ( Float, Float, Float )


block : Color -> Vector -> Shape
block color ( xDim, yDim, zDim ) =
    let
        ( hXDim, hYDim, hZDim ) =
            ( xDim / 2
            , yDim / 2
            , zDim / 2
            )
    in
    Block color
        (Block3d.from
            (Point3d.meters -hXDim -hYDim -hZDim)
            (Point3d.meters hXDim hYDim hZDim)
        )


triangle : Color -> ( Point, Point, Point ) -> Shape
triangle color ( p, q, r ) =
    Triangle color
        (Triangle3d.from
            (Point3d.meters p.x p.y p.z)
            (Point3d.meters q.x q.y q.z)
            (Point3d.meters r.x r.y r.z)
        )


cube : Color -> Float -> Shape
cube color width =
    let
        hw =
            width / 2
    in
    Block color
        (Block3d.from
            (Point3d.meters -hw -hw -hw)
            (Point3d.meters hw hw hw)
        )


cylinder : Color -> Float -> Float -> Shape
cylinder color radius length =
    Cylinder color
        (Cylinder3d.centeredOn Point3d.origin
            Direction3d.positiveY
            { radius = Length.meters radius
            , length = Length.meters length
            }
        )


sphere : Color -> Float -> Shape
sphere color radius =
    Sphere color
        (Sphere3d.withRadius (Length.meters radius) Point3d.origin)


line : Color -> Vector -> Shape
line color vector =
    Line color
        (LineSegment3d.fromPointAndVector Point3d.origin
            (Vector3d.fromTuple Length.meters vector)
        )


group : List Shape -> Shape
group drawables =
    Group drawables



-- MODIFY


rotate : Axis3d Meters () -> Angle -> Shape -> Shape
rotate axis angle shape =
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.rotateAround axis angle)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.rotateAround axis angle)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.rotateAround axis angle)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.rotateAround axis angle)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.rotateAround axis angle)

        Group drawables ->
            Group
                (List.map (rotate axis angle) drawables)


rotateAround : ( Point, Vector ) -> Float -> Shape -> Shape
rotateAround ( axisOrigin, ( dx, dy, dz ) ) angle =
    rotate
        (Axis3d.through (Point3d.fromMeters axisOrigin)
            (Direction3d.unsafe { x = dx, y = dy, z = dz })
        )
        (Angle.radians angle)


rotateX : Float -> Shape -> Shape
rotateX angle shape =
    rotate Axis3d.x (Angle.radians angle) shape


rotateY : Float -> Shape -> Shape
rotateY angle shape =
    rotate Axis3d.y (Angle.radians angle) shape


rotateZ : Float -> Shape -> Shape
rotateZ angle shape =
    rotate Axis3d.z (Angle.radians angle) shape


scaleAround : Point -> Float -> Shape -> Shape
scaleAround { x, y, z } factor =
    move ( -x, -y, -z ) >> scale factor >> move ( x, y, z )


scale : Float -> Shape -> Shape
scale factor shape =
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.scaleAbout Point3d.origin factor)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.scaleAbout Point3d.origin factor)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.scaleAbout Point3d.origin factor)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.scaleAbout Point3d.origin factor)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.scaleAbout Point3d.origin factor)

        Group drawables ->
            Group
                (List.map (scale factor) drawables)


move : Vector -> Shape -> Shape
move ( x, y, z ) shape =
    let
        translation =
            Vector3d.meters x y z
    in
    case shape of
        Block color block3d ->
            Block color
                (block3d |> Block3d.translateBy translation)

        Triangle color triangle3d ->
            Triangle color
                (triangle3d |> Triangle3d.translateBy translation)

        Sphere color sphere3d ->
            Sphere color
                (sphere3d |> Sphere3d.translateBy translation)

        Cylinder color cylinder3d ->
            Cylinder color
                (cylinder3d |> Cylinder3d.translateBy translation)

        Line color lineSegment3d ->
            Line color
                (lineSegment3d |> LineSegment3d.translateBy translation)

        Group drawables ->
            Group
                (List.map (move ( x, y, z )) drawables)


moveX : Float -> Shape -> Shape
moveX x =
    move ( x, 0, 0 )


moveY : Float -> Shape -> Shape
moveY y =
    move ( 0, y, 0 )


moveZ : Float -> Shape -> Shape
moveZ z =
    move ( 0, 0, z )



-- VIEW


toEntities : List Shape -> List (Scene3d.Entity ())
toEntities drawables =
    drawables
        |> List.concatMap drawableToEntities


drawableToEntities : Shape -> List (Scene3d.Entity ())
drawableToEntities shape =
    case shape of
        Block color block3d ->
            [ Scene3d.blockWithShadow (material color) block3d ]

        Triangle color triangle3d ->
            [ Scene3d.facetWithShadow (material color) triangle3d ]

        Sphere color sphere3d ->
            [ Scene3d.sphereWithShadow (material color) sphere3d ]

        Cylinder color cylinder3d ->
            [ Scene3d.cylinderWithShadow (material color) cylinder3d ]

        Line color lineSegment3d ->
            [ Scene3d.lineSegment (Material.color color) lineSegment3d ]

        Group drawables ->
            drawables
                |> List.concatMap drawableToEntities
