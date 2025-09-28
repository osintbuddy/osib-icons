import path from "node:path"
import fs from "node:fs"

// Svg paths are relative to TODONEW directory
const svgCollections = [
  // {
  //   path: "web3icons/raw-svgs",
  //   params: {
  //     subnames: true,
  //     excludeFolders: ["background", "mono"]
  //   }
  // },
  { path: "networking-icons" },
  { path: "govicons/raw-svg" },
];

// NOTE: Paths are absolute
const TODONEW_DIR_PATH = path.resolve("../TODONEW/");
const NEW_ICONS_DIR_PATH = path.resolve("../icons/new/");

// Icons to preload
const TABLER_FILLED_ICONS_PATH = path.resolve("../icons/filled/");
const TABLER_OUTLINE_ICONS_PATH = path.resolve("../icons/outline/");

const preloadPaths = [
  TABLER_FILLED_ICONS_PATH,
  TABLER_OUTLINE_ICONS_PATH,
];

// Map<string, string>
// svg_name: svgpath
const svgs = new Map();
const existingFilenames = [];

function preloadExistingSvgFilenames() {
  for (const preloadPath of preloadPaths) {
    const files = fs.readdirSync(preloadPath, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile() && path.extname(file.name) === ".svg") {
        const filename = file.name.replace(".svg", "");

        // If already exists, we create a duplicate name
        if (existingFilenames.includes(filename)) {
          existingFilenames.push(duplicateName(filename));
        }
        else {
          existingFilenames.push(filename);
        }
      }
    }
  }
}

function duplicateName(filename) {
  let counter = 0;
  let current_name = `${filename}-${counter}`;
  while (svgs.has(current_name) || existingFilenames.includes(current_name)) {
    counter++;
    current_name = `${filename}-${counter}`;
  }
  return current_name;
}

function saveSvgsAndGoThroughFolders(absPath, params) {
  try {
    const files = fs.readdirSync(absPath, { withFileTypes: true });
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filepath = path.resolve(absPath, file.name);

      if (file.isFile() && path.extname(filepath) === ".svg") {
        let filename = path.basename(filepath).replace(".svg", "");

        if (params && params.subnames) {
          const parentDir = path.basename(path.dirname(filepath));
          filename = `${parentDir}-${filename}`;
        }

        if (svgs.has(filename) || existingFilenames.includes(filename)) {
          filename = duplicateName(filename);
        }

        svgs.set(filename, filepath);
      }
      else if (file.isDirectory()) {
        if (params && params.excludeFolders) {
          console.log("Dir name: " + file.name);
          if (!params.excludeFolders.includes(file.name)) {
            saveSvgsAndGoThroughFolders(filepath, params);
          }
        }
        else {
          saveSvgsAndGoThroughFolders(filepath, params);
        }
      }
    }
  }
  catch (err) {
    console.log("Error while saving svgs: " + err);
  }
}

function logSvgs() {
  for (const [filename, filepath] of svgs.entries()) {
    try {
      fs.appendFileSync("./paths.log", `${filename} => ${filepath}\n`);
    }
    catch (err) {
      console.log("Error writing to file: " + err);
    }
  }
}

function copySvgs() {
  if (!fs.existsSync(NEW_ICONS_DIR_PATH)) {
    fs.mkdirSync(NEW_ICONS_DIR_PATH);
  }

  for (const [filename, filepath] of svgs.entries()) {
    try {
      const svgSrcPath = filepath;
      const svgDestPath = path.resolve(NEW_ICONS_DIR_PATH, `${filename}.svg`);
      fs.copyFileSync(svgSrcPath, svgDestPath);
    }
    catch (err) {
      console.log("Error writing to file: " + err);
    }
  }
}

function main() {
  preloadExistingSvgFilenames();

  for (const svgCollection of svgCollections) {
    const collectionPath = path.resolve(TODONEW_DIR_PATH, svgCollection.path);
    saveSvgsAndGoThroughFolders(collectionPath, svgCollection.params);
  }

  logSvgs();
  copySvgs();
}

main();

