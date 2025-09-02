// const bob = require("./mdle")

// console.log(bob);

import {bob} from './mdle.js';

console.log(bob);

// CommonJS (CJS) Modules //
// - Synchronous file loading
// - Imports are not hoisted
// - Top-level await is not allowed
// - Multiple values can be exported using `module.exports = {}`
// - Strict mode is not enabled by default
// - File extension is optional
// - Can load any file if given the full file path (depends on require method)
// - Conventionally uses the ".cjs" extension
// - Setting `"type": "commonjs"` in package.json is optional (default in Node.js)
// - `this` points to `module.exports` by default
// - to access file or dirname , we can get from module object like module.filename

// ES6 (ESM) Modules //
// - Asynchronous file loading
// - Imports are hoisted
// - Top-level await is allowed
// - Multiple values can be exported
// - Strict mode is enabled by default
// - File extension is mandatory (`.mjs` unless `"type": "module"` is set in package.json)
// - Can only load `.js` and `.mjs` files
// - Conventionally uses the ".mjs" extension
// - Must set `"type": "module"` in package.json for `.js` files to work as modules
// - `this` is `undefined`
// - to access file or dirname , we can get from import.meta object like import.meta.filename