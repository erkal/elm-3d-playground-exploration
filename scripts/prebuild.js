const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const examplesDir = "./examples";
const buildDir = "./build";

// Delete the build directory if it exists
if (shell.test("-d", buildDir)) {
  shell.rm("-rf", buildDir);
}

// Create a new build directory
shell.mkdir("-p", buildDir);

// Copy helper.js file to the build directory
shell.cp("playground-exploration/src/input.js", buildDir);

// Initialize a variable for targets JSON
let targets = {};

// Read all directories in the examples directory
const exampleDirs = fs.readdirSync(examplesDir).filter((file) => {
  return fs.statSync(path.join(examplesDir, file)).isDirectory();
});

exampleDirs.forEach((exampleName) => {
  const examplePath = path.join(examplesDir, exampleName);
  const buildExamplePath = path.join(buildDir, exampleName);

  // Create a new directory under the build directory named as the example
  shell.mkdir("-p", buildExamplePath);

  // Copy scripts/index.html and replace every occurrence of
  // EXAMPLE_NAME with the example directory name
  let templateFile = fs.readFileSync(
    "playground-exploration/src/index-template.html",
    "utf8"
  );
  let resultFile = templateFile.replace(/EXAMPLE_NAME/g, exampleName);
  fs.writeFileSync(`${buildExamplePath}/index.html`, resultFile);

  // If image.png exists, copy it to the build directory
  shell.cp("-n", `${examplePath}/image.png`, buildExamplePath);

  // If assets directory exists, copy it to the build directory
  shell.cp("-r", `${examplePath}/assets`, buildExamplePath);

  // Store the inputs and output strings
  const inputData = `examples/${exampleName}/Main.elm`;
  const outputData = `build/${exampleName}/main.js`;

  // Add the new target to the targets object
  targets[exampleName] = {
    inputs: [inputData],
    output: outputData,
  };
});

// Remove elm-watch.json if it exists already
if (shell.test("-f", "elm-watch.json")) {
  shell.rm("-f", "elm-watch.json");
}

// Writing targets data into elm-watch.json
let data = {
  targets: targets,
  serve: buildDir,
  port: 8000,
};
fs.writeFileSync("elm-watch.json", JSON.stringify(data, null, 2));
