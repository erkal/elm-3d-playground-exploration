const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

// Remove the build directory if it exists
shell.rm("-rf", "./build");

// Make a fresh build directory
shell.mkdir("-p", "build");

// Copy the helper. js files to the build directory
shell.cp("playground-exploration/src/input.js", "build/");

// Initialize a variable for targets JSON
let targets = {};

// Go through each directory in the examples directory
const examplesDir = "./examples";

fs.readdirSync(examplesDir).forEach((file) => {
  const absolute = path.join(examplesDir, file);
  if (fs.statSync(absolute).isDirectory()) {
    // Extract just the name of the example directory
    const exampleName = file;

    // Create a new directory under the build directory named as the example
    shell.mkdir("-p", `build/${exampleName}`);

    // Make a copy of scripts/index.html and replace every occurrence of
    // EXAMPLE_NAME with the example directory name
    const templateFile = fs.readFileSync(
      "playground-exploration/src/index-template.html",
      "utf8"
    );
    const resultFile = templateFile.replace(/EXAMPLE_NAME/g, exampleName);
    fs.writeFileSync(`build/${exampleName}/index.html`, resultFile);

    // Check if image.png exists, if yes, copy it to the build directory
    if (shell.test("-f", `${absolute}/image.png`)) {
      shell.cp(`${absolute}/image.png`, `build/${exampleName}/image.png`);
    }

    // Store the inputs and output strings
    const input = `examples/${exampleName}/Main.elm`;
    const output = `build/${exampleName}/main.js`;

    // Add the new target to the targets object
    targets[exampleName] = { inputs: [input], output: output };
  }
});

// Remove elm-watch.json if it exists already
shell.rm("-f", "elm-watch.json");

// Create the JSON object and write it into elm-watch.json using Node.js
const data = { targets: targets, serve: "build", port: 8000 };
fs.writeFileSync("elm-watch.json", JSON.stringify(data, null, 2));
