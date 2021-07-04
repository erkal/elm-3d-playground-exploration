#! /bin/bash
declare -a dirs i=1

cd examples || exit
for d in */; do
  dirs[i++]="${d%/}"
done
cd ..

echo "Which game do you want to build?"

for ((i = 1; i <= ${#dirs[@]}; i++)); do
  echo " " \($i\) "${dirs[i]}"
done

echo -n "> "

read -r i
directory=${dirs[$i]}
rm -rf dist/"$directory"
mkdir -p dist/"$directory"
parcel build examples/"$directory"/index.html --dist-dir dist/"$directory" --public-url ./
http-server dist/"$directory"
