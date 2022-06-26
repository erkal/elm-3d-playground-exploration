#! /bin/bash
declare -a dirs i=1

cd examples || exit
for d in */; do
    dirs[i++]="${d%/}"
done
cd ..

for ((i = 1; i <= ${#dirs[@]}; i++)); do
    directory=${dirs[$i]}
    cd examples/"$directory" || exit

    #################################################################
    # DO THINGS HERE INSIDE:
    
    # remove the directories node_modules and elm-stuff
#    rm -rf node_modules/
#    rm -rf elm-stuff/
    rm -rf yarn.lock

    # copy elm-tooling.json, index.html, main.js, package.json, postcss.config.js, style.css, tailwind.config.js, vite.config.js
#    cp -fr ../a_template/elm-tooling.json ./
#    cp -fr ../a_template/index.html ./
#    cp -fr ../a_template/main.js ./
#    cp -fr ../a_template/package.json ./
#    cp -fr ../a_template/postcss.config.js ./
#    cp -fr ../a_template/style.css ./
#    cp -fr ../a_template/tailwind.config.js ./
#    cp -fr ../a_template/vite.config.js ./
#
#    npm install
#    npm run build

    #################################################################

    cd ../..
done