#! /bin/bash
declare -a dirs i=1

cd games || exit
for d in */; do
  dirs[i++]="${d%/}"
done
cd ..

echo "Which game do you want to develop?"

for ((i = 1; i <= ${#dirs[@]}; i++)); do
  echo " " \($i\) "${dirs[i]}"
done

echo -n "> "

read -r i
directory=${dirs[$i]}
rm -rf dev-temp/"$directory"
mkdir -p dev-temp/"$directory"
parcel games/"$directory"/index.html --out-dir dev-temp/"$directory"
