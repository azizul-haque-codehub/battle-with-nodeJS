const fs = require("fs/promises");
const [nodeLoc, dirPath, sourceFile, targetFile] = process.argv;

async function copy(source, target) {
  try {
    fs.writeFile(target, await fs.readFile(source, "utf8"));
  } catch (err) {
    console.error(err.message, "line 9");
  }
}

copy(sourceFile, targetFile);
 
