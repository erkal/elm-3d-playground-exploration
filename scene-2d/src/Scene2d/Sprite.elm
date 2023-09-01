module Scene2d.Sprite exposing (circulateWithFrequency, cut, cutFromGrid)

import Canvas.Texture as Texture exposing (Texture)


cut :
    { width : Float
    , height : Float
    , row : Int
    , column : Int
    }
    -> Texture
    -> Texture
cut record =
    Texture.sprite
        { x = toFloat record.column * record.width
        , y = toFloat record.row * record.height
        , width = record.width
        , height = record.height
        }


cutFromGrid :
    { numberOfColumns : Int
    , columnIndex : Int
    , numberOfRows : Int
    , rowIndex : Int
    }
    -> Texture
    -> Texture
cutFromGrid { numberOfColumns, columnIndex, numberOfRows, rowIndex } texture =
    let
        { width, height } =
            Texture.dimensions texture

        spriteWidth =
            width / toFloat numberOfColumns

        spriteHeight =
            height / toFloat numberOfRows
    in
    texture
        |> Texture.sprite
            { x = toFloat columnIndex * spriteWidth
            , y = toFloat rowIndex * spriteHeight
            , width = spriteWidth
            , height = spriteHeight
            }


{-|

    Example:
    `circulateWithFrequency clock frequency 4` circulates the numbers 0, 1, 2, 3 with the given frequency

-}
circulateWithFrequency : Float -> Float -> Int -> Int
circulateWithFrequency clock frequency mod =
    modBy mod (floor (clock * frequency))
