#!/bin/bash

# Remove the build directory if it exists
if [ -d "./build" ]; then
    rm -rf "./build"
fi

# Make a fresh build directory
mkdir -p build

# Copy the input.js and preventEvents.js files to the build directory
cp playground-exploration/src/input.js build/
cp playground-exploration/src/preventEvents.js build/

# Initialize a variable for targets JSON
targets_json=""

# Go through each subdirectory in the examples directory
for example in examples/*; do
    # Extract just the name of the example directory
    example_name=$(basename "$example")

    # Create a new directory under the build directory named as the example
    mkdir -p "build/${example_name}"

    # Make a copy of scripts/index.html and replace every occurrence of
    # EXAMPLE_NAME with the example directory name
    cat playground-exploration/src/index-template.html | sed "s/EXAMPLE_NAME/${example_name}/g" >"build/${example_name}/index.html"

    # Check if image.png exists, if yes, copy it to the build directory
    if [ -f "${example}/image.png" ]; then
        cp "${example}/image.png" "build/${example_name}/image.png"
    fi

    # Store the inputs and output strings
    input="examples/${example_name}/Main.elm"
    output="build/${example_name}/main.js"

    # Append the new target to the targets JSON string
    targets_json+='"'$example_name'": { "inputs": ["'$input'"], "output": "'$output'" },'
done

# Remove the last comma from the targets JSON string
targets_json=${targets_json%?}

# Remove elm-watch.json if it exists already
if [ -f "elm-watch.json" ]; then
    rm "elm-watch.json"
fi

# Create the JSON object and write it into elm-watch.json using Node.js

node -e "const fs = require('fs'); const data = { targets: { ${targets_json} }, serve: 'build' }; fs.writeFileSync('elm-watch.json', JSON.stringify(data, null, 2));"
