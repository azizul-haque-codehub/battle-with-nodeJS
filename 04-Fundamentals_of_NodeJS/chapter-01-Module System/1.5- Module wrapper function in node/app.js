
// this is wrapper function
(function (exports, require, module, __filename, __dirname) {
  console.log("Hello Node.js");
})(module.exports, require, module, __filename, __dirname);


//built in wrapper
console.log(module.constructor.wrapper);