import * as fs from "fs";

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
  // Load package.json as object
  const source = fs.readFileSync(__dirname + "/package.json").toString("utf-8");
  const sourceObj = JSON.parse(source);

  // Remove scripts and devDependencies
  sourceObj.scripts = undefined;
  sourceObj.devDependencies = undefined;

  // Remove dist/ prefix from main
  if (sourceObj.main.startsWith("dist/")) {
    sourceObj.main = sourceObj.main.slice(5);
  }

  // Write updated package.json
  fs.writeFileSync(
    __dirname + "/dist/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"),
  );

  // Copy files
  copyFile("README.md", "dist/README.md");

  // Remove setup script
  //fs.unlinkSync(__dirname + "/package.setup.d.ts");
  //fs.unlinkSync(__dirname + "/package.setup.js");

  function copyFile(fromPath: string, toPath: string) {
    fs.copyFileSync(__dirname + "/" + fromPath, __dirname + "/" + toPath);
  }
}

main();
