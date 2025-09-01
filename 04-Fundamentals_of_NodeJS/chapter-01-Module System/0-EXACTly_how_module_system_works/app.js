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

// const { add, multi } = require("./math");
/*
-  const {add,multi} = require ("./math") whats happen in this line ? 

*/

// below the require function written in inside nodeJS environment

function my_require(path) {
  const fs = require("fs");
  const moduleCode = fs.readFileSync(path).toString();
  const send = {};
  eval(moduleCode);
  //   return module.exports
  // if we want to replace the exports obj to send obj
  return send;
}

const { add, multi } = my_require("./math.js");

console.log(multi(12, 12));

const {toUppercase} = my_require("./utils.js")

console.log(toUppercase("abcefghi lajasfdlkaj f"));
