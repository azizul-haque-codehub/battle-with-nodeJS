// Module System are used for only developer flexibility not for others

// --------------- If we write code in Single Page --------------------
// Math utils
/*
function add(a, b) {
  return a + b;
}
function multi(a, b) {
  return a * b;
}

// string utils

function  toUppercase(str) {
    return str.toUpperCase()
}
 
console.log(add(120,120),multi(10,12)); */

// --------------- If we write code in Single Page but moduler way--------------------

console.log("Appjs first line executed");

const { add, multi } = require("./math");
/*
-  const {add,multi} = require ("./math") whats happen in this line ? 

*/

// below the require function written in inside nodeJS environment
const fs = require("fs");
(function (
  exports,
  require,
  module,
  __filename,
  __dirname,
) {
  require(__filename);
})(module.exports, require, module, __filename, __dirname);

function require(path) {
  const moduleCode = fs.readFileSync(path).toString();
  eval(moduleCode);
}


console.log(multi(10, 10));
