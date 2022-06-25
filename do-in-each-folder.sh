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
    
    # DO THINGS HERE:
    # START
    
    # remove the directories node_modules and elm-stuff
    rm -rf node_modules/
    rm -rf elm-stuff/

    # copy elm-tooling.json, elm.json, index.html, main.js, package.json, postcss.config.js, style.css, tailwind.config.js, vite.config.js
    cp -fr ../_tailwind-experiment/elm-tooling.json ./
    
    # END
    
    cd ../..
done