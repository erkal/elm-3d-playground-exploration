#!/bin/bash

# Remove the build directory if it exists
if [ -d "./build" ]; then
    rm -rf "./build"
fi

# Make a fresh build directory
mkdir -p build

# Initialize a variable for targets JSON
targets_json=""

# Go through each subdirectory in the examples directory
for example in examples/*; do
    # Extract just the name of the example directory
    example_name=$(basename "$example")

    # Create a new directory under the build directory named as the example
    mkdir -p "build/${example_name}"

    # Make a copy of scripts/index.html and replace every occurrence of
    # {{ EXAMPLE_NAME }} with the example directory name
    cat scripts/index.html | sed "s/{{ EXAMPLE_NAME }}/${example_name}/g" >"build/${example_name}/index.html"

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
node -e "const fs = require('fs'); const data = { targets: { ${targets_json} } }; fs.writeFileSync('elm-watch.json', JSON.stringify(data, null, 2));"

# Create the index.html file in the build directory with initial html, head tags and adding some style in head.
cat <<EOF >./build/index.html
<!DOCTYPE html>
<html>
<head>
    <title>Elm Examples</title>
    <style>
        body {
            background-color: #282c34;
            color: #abb2bf;
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
        }
        a {
            color: #61afef;
        }
        a:hover {
            color: #c678dd;
        }
    </style>
</head>
<body>
<h1>Elm Examples:</h1>
EOF

# Go through each subdirectory in the examples directory
for example in examples/*; do
    # Extract just the name of the example directory
    example_name=$(basename "$example")

    # Write the link to the example's index.html to the main index.html
    echo "<a href='$example_name/index.html'>$example_name</a><br>" >>./build/index.html
done

# Close html and body tags
echo "</body></html>" >>./build/index.html
