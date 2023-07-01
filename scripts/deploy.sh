#! /bin/bash
gh-pages -d build

underlined=$(tput smul)
normal=$(tput sgr0)
echo "${underlined}https://github.com/erkal/elm-3d-playground-exploration/blob/main/DEMOS.md${normal}"
