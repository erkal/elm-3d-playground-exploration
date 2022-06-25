#! /bin/bash
declare -a dirs i=1

cd examples || exit
for d in */; do
    dirs[i++]="${d%/}"
done
cd ..

for ((i = 1; i <= ${#dirs[@]}; i++)); do
    directory=${dirs[$i]}
    cd examples/"$directory"

    #################################################################
    # DO THINGS HERE INSIDE:
    
    # remove the directories node_modules and elm-stuff
    rm -rf node_modules/
    rm -rf elm-stuff/

    # copy elm-tooling.json, index.html, main.js, package.json, postcss.config.js, style.css, tailwind.config.js, vite.config.js
    cp -fr ../_tailwind-experiment/elm-tooling.json ./
    cp -fr ../_tailwind-experiment/index.html ./
    cp -fr ../_tailwind-experiment/main.js ./
    cp -fr ../_tailwind-experiment/package.json ./
    cp -fr ../_tailwind-experiment/postcss.config.js ./
    cp -fr ../_tailwind-experiment/style.css ./
    cp -fr ../_tailwind-experiment/tailwind.config.js ./
    cp -fr ../_tailwind-experiment/vite.config.js ./

    npm install
    npm run build

    #################################################################

    cd ../..
done