// we know in nodejs , ei app.js file e joto variable takbe sobguluy local scope e takbe kintu amra chaile Code vm(virtual machine ) globally run  parbo

const fs = require("fs");
const vm = require("vm");

// const worker = fs.readFileSync("./worker.js").toString()
const code = `
const testInterval = setInterval(() => {
  console.log(Math.random());
},500);

var aglob_var = "I am node js"
`

vm.runInThisContext(code)

console.log("object");
 