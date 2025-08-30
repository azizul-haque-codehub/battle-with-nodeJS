// console.log(process.argv.slice(2, process.argv.length));

// console.log(process.cwd());
 
// file: listDir.js

const fs = require("fs");

process.chdir("./tmp")
const dirPath = process.cwd();

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    return console.error("Error reading directory:", err);
  }

  files.forEach(content => {
    if (content.isDirectory()) {
      console.log(`[DIR ] ${content.name}`);
    } else {
      console.log(` [FILE] ${content.name}`);
    }
  });
});
