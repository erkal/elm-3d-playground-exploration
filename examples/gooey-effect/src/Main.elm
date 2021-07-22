module Main exposing (main)

import Html exposing (Html)
import Html.Attributes exposing (height, style, width)
import Math.Vector2 exposing (Vec2, vec2)
import Playground3d exposing (Computer, colorConfig, configBlock, floatConfig, gameWithConfigurations, getFloat)
import WebGL exposing (Mesh, Shader)


main =
    gameWithConfigurations view update initialConfigurations init


type alias Model =
    {}



-- INIT


initialConfigurations =
    []


init : Computer -> Model
init computer =
    {}



-- UPDATE


update : Computer -> Model -> Model
update computer model =
    model



-- VIEW


view : Computer -> Model -> Html Never
view computer model =
    WebGL.toHtml
        [ width (round (computer.screen.width * computer.devicePixelRatio))
        , height (round (computer.screen.height * computer.devicePixelRatio))
        , style "width" (String.fromFloat computer.screen.width)
        , style "height" (String.fromFloat computer.screen.height)
        ]
        [ WebGL.entity
            vertexShader
            fragmentShader
            mesh
            { time = computer.time
            , resolution = vec2 computer.screen.width computer.screen.height
            }
        ]



-- Mesh


type alias Vertex =
    { position : Vec2
    }


mesh : Mesh Vertex
mesh =
    -- v2 +---+ v1
    --    |\  |
    --    | \ |
    --    |  \|
    -- v3 +---+ v0
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

        vec3 Sphere(vec2 uv, vec2 position, float radius)
        {
            float dist = radius / distance(uv, position);
            return vec3(dist * dist);
        }

        void main () {
            vec2 uv = (gl_FragCoord.xy - resolution.xy) / resolution.x;

            vec3 pixel = vec3(0.0, 0.0, 0.0);
            vec2 positions[5];
            positions[0] = vec2(sin(time * 1.4) * 1.3, cos(time * 2.3) * 0.4);
            positions[1] = vec2(sin(time * 3.0) * 0.5, cos(time * 1.3) * 0.6);
            positions[2] = vec2(sin(time * 2.1) * 0.1, cos(time * 1.9) * 0.8);
            positions[3] = vec2(sin(time * 1.1) * 1.1, cos(time * 2.6) * 0.7);
            positions[4] = vec2(0.0, 0.0);

            for	(int i = 0; i < 5; i++)
                pixel += Sphere(uv, positions[i], 0.12);

            pixel = step(1.0, pixel) * pixel;

            gl_FragColor = vec4(pixel, 1.0);
        }
    |]
