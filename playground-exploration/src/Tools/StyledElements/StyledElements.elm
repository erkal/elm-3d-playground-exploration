module Tools.StyledElements.StyledElements exposing (..)

import Html exposing (Html, a, div)
import Html.Attributes as HA exposing (class, href, target)
import Playground.Icons as Icons


withHomePageHeader : Html msg -> Html msg
withHomePageHeader content =
    div
        [ class "absolute w-full h-full z-10"
        , class "bg-[#303030]"
        , class "overflow-y-auto"
        ]
        [ div
            [ class "mx-auto container max-w-5xl px-4 sm:px-12"
            , class "flex flex-col gap-0"
            ]
            [ div
                [ class "w-full sm:mt-4 sm:mb-24 mt-0 mb-12"
                , class "flex justify-end items-center"
                , class "border-b border-gray-200 border-opacity-50"
                ]
                [ a
                    [ class "p-4 w-20 h-20"
                    , class "text-white/40 hover:text-white/80"
                    , href "../WebPage/index.html"
                    , HA.title "Home"
                    ]
                    [ Icons.icons.home ]
                , a
                    [ class "p-4 w-20 h-20"
                    , class "text-white/40 hover:text-white/80"
                    , href "https://twitter.com/AzizErkalSelman"
                    , target "_blank"
                    , HA.title "Twitter"
                    ]
                    [ Icons.icons.twitter ]
                , a
                    [ class "p-4 w-20 h-20"
                    , class "text-white/40 hover:text-white/80"
                    , href "https://github.com/erkal"
                    , target "_blank"
                    , HA.title "GitHub"
                    ]
                    [ Icons.icons.githubCat ]
                ]
            , content
            ]
        ]
