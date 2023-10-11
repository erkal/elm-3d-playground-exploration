module GooeyEffect.Main exposing (main)

import Html exposing (Html)
import Html.Attributes exposing (height, style, width)
import Math.Vector2 exposing (Vec2, vec2)
import Playground.Playground as Playground exposing (..)
import Playground.Tape exposing (Message(..))
import WebGL exposing (Mesh, Shader)


main : Playground Model Never
main =
    Playground.simpleApplication
        { initialConfigurations = initialConfigurations
        , init = init
        , update = update
        , view = view
        , hasTape = True
        }


type alias Model =
    {}



-- INIT


initialConfigurations =
    [ configBlock "Parameters"
        True
        [ floatConfig "ball radius" ( 0.01, 0.2 ) 0.06
        ]
    ]


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Message Never -> Model -> Model
update computer message model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    let
        -- TODO: use computer.devicePixelRatio for better resolution (but how?)
        ( w, h ) =
            ( computer.screen.width
            , computer.screen.height
            )
    in
    WebGL.toHtml
        [ width (round w)
        , height (round h)
        ]
        [ WebGL.entity vertexShader
            fragmentShader
            mesh
            { time = computer.clock
            , resolution = vec2 w h
            , ballRadius = getFloat "ball radius" computer
            }
        ]



-- Mesh


type alias Vertex =
    { position : Vec2
    }


mesh : Mesh Vertex
mesh =
    WebGL.indexedTriangles
        [ Vertex (vec2 1 -1)
        , Vertex (vec2 1 1)
        , Vertex (vec2 -1 1)
        , Vertex (vec2 -1 -1)
        ]
        [ ( 0, 1, 2 ), ( 2, 3, 0 ) ]



-- Shaders


type alias Uniforms =
    { time : Float
    , resolution : Vec2
    , ballRadius : Float
    }


vertexShader : Shader Vertex Uniforms {}
vertexShader =
    [glsl|
        attribute vec2 position;

        void main () {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    |]


fragmentShader : Shader {} Uniforms {}
fragmentShader =
    [glsl|
        precision mediump float;

        uniform float time;
        uniform vec2 resolution;
        uniform float ballRadius;

        void main () {
            vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.x, resolution.y);

            vec2 centers[3];
            centers[0] = vec2(sin(time * 0.5) * 0.2, cos(time * 0.2) * 0.3);
            centers[1] = vec2(sin(time * 0.6) * 0.3, cos(time * 0.7) * 0.2);
            centers[2] = vec2(sin(time * 0.4) * 0.3, cos(time * 0.3) * 0.3);

            vec3 pixel = vec3(0.0, 0.0, 0.0);
            for	(int i = 0; i < 3; i++)
                pixel += vec3(ballRadius / distance(uv, centers[i]));

            pixel = step(1.0, pixel);

            gl_FragColor = vec4(pixel, 1.0);
        }
    |]
