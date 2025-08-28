console.log("I am in child dir of 08-path");
const fs = require("fs")
// how to access parent directory's files (absolute path)
const parentDir = "/home/azizul-haque/02-Programming/Software Engr./Backend/battle-with-nodeJS/03-Basics of OS/08-Path system (windows vs linux)/app.js"
console.log(fs.readFileSync(parentDir));

// how to access parent directory (relative path)
const relParentDir = "../../../../../../../HSC.pdf"

console.log(fs.readFileSync(relParentDir).toString());