const { atob } = require('node:buffer');
const { EventEmitterAsyncResource } = require('node:events');
const { argv } = require('node:process');

 
  os = require('node:os')

// console.dir(v8);
// console.dir(os);
for (const key in os) {
    if (!Object.hasOwn(os, key)) continue;
    if(typeof os[key] === "function"){
       console.log(os[key]);
    }
}

// console.log( "netinf", os.networkInterfaces());

console.log(os.userInfo());
console.log(os.cpus());
// console.log(os.getMachine());
// console.log(os.getOSversion());
// console.log(os.getOSTy

console.log(process.argv);

console.log(atob("ABCD"));