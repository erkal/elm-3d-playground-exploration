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

    
    # END
    
    cd ../..
done