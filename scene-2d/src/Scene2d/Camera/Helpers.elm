module Scene2d.Camera.Helpers exposing (coordinatesGrid, limitToDown, limitToLeft, limitToRight)

import Color exposing (Color)
import Scene2d exposing (Drawable, group, lineTo, moveX, moveY, path, words)
import Scene2d.Camera as Camera exposing (Camera)


coordinatesGrid :
    Camera
    ->
        { unitSize : Float
        , lineWidth : Float
        , color : Color
        }
    -> Drawable
coordinatesGrid camera { unitSize, lineWidth, color } =
    let
        cameraBB =
            Camera.getBoundingBoxAtZ 0 camera

        lineProps =
            { stroke = Just color
            , lineWidth = lineWidth
            , fillColor = Nothing
            }

        horizontalLineAt j =
            path lineProps [ lineTo { x = cameraBB.right - cameraBB.left, y = 0 } ]
                |> moveX cameraBB.left
                |> moveY (unitSize * toFloat j)

        ( m, n ) =
            ( ceiling (cameraBB.top - cameraBB.bottom)
            , ceiling (cameraBB.right - cameraBB.left)
            )

        horizontalLines =
            group
                (List.range (floor cameraBB.bottom) (ceiling cameraBB.bottom + m)
                    |> List.map horizontalLineAt
                )

        verticalLineAt i =
            path lineProps [ lineTo { x = 0, y = cameraBB.top - cameraBB.bottom } ]
                |> moveX (unitSize * toFloat i)
                |> moveY cameraBB.bottom

        verticalLines =
            group
                (List.range (floor cameraBB.left) (ceiling cameraBB.left + n)
                    |> List.map verticalLineAt
                )
    in
    group
        [ horizontalLines
        , verticalLines
        ]


limitToLeft : Float -> Camera -> Camera
limitToLeft leftLimit camera =
    let
        cameraBB =
            Camera.getBoundingBoxAtZ 0 camera

        excess =
            leftLimit - cameraBB.left
    in
    if excess > 0 then
        camera |> Camera.moveX excess

    else
        camera


limitToRight : Float -> Camera -> Camera
limitToRight rightLimit camera =
    let
        cameraBB =
            Camera.getBoundingBoxAtZ 0 camera

        excess =
            cameraBB.right - rightLimit
    in
    if excess > 0 then
        camera |> Camera.moveX -excess

    else
        camera


limitToDown : Float -> Camera -> Camera
limitToDown bottomLimit camera =
    let
        cameraBB =
            Camera.getBoundingBoxAtZ 0 camera

        excess =
            bottomLimit - cameraBB.bottom
    in
    if excess > 0 then
        camera |> Camera.moveY excess

    else
        camera
