// Absolute Path -> which started from root directory
const pathOnLinux = "/home/azizul-haque/02-Programming/Software Engr./Backend/battle-with-nodeJS/03-Basics of OS/08-Path system (windows vs linux)/app.js"
const pathOnWindows = "C:\Users\aziz\downloads" // but here is a problem, the '\' backward slash uses in any programming language to act as a regex . so solution is use dobule backward '\\'
const correctWindowsPath = "C:\\Users\\aziz\\downloads"
console.log(correctWindowsPath);

// Relative Path -> which is relation with current directory
const relativePathLinux = "app.js"
const childRelativePathToAccessFile = "./child_dir/child_app.js"