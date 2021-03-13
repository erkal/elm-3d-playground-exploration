#! /bin/bash
declare -a dirs i=1

cd games || exit
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
  parcel build games/"$directory"/index.html --out-dir dist/"$directory" --out-file index.html --public-url ./
  echo - "$directory": \[demo\]\(https://erkal.surge.sh/"$directory"\), \[src\]\(https://github.com/erkal/elm-3d-playground-exploration/tree/main/games/"$directory"/src\) >>DEMOS.md
done

surge --project ./dist --domain erkal.surge.sh
