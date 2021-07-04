#! /bin/bash
declare -a dirs i=1

cd examples || exit
for d in */; do
    dirs[i++]="${d%/}"
done
cd ..

rm -rf dist
rm -rf DEMOS.md

touch DEMOS.md
echo '# Demos' >>DEMOS.md
echo '' >>DEMOS.md

for ((i = 1; i <= ${#dirs[@]}; i++)); do
    directory=${dirs[$i]}
    mkdir -p dist/"$directory"
    parcel build examples/"$directory"/index.html --dist-dir dist/"$directory" --public-url ./
    echo - "$directory": \[demo\]\(https://erkal.github.io/elm-3d-playground-exploration/"$directory"\), \[src\]\(https://github.com/erkal/elm-3d-playground-exploration/tree/main/examples/"$directory"/src\) >>DEMOS.md
done

gh-pages -d dist

underlined=$(tput smul)
normal=$(tput sgr0)
echo "${underlined}https://github.com/erkal/elm-3d-playground-exploration/blob/main/DEMOS.md${normal}"
