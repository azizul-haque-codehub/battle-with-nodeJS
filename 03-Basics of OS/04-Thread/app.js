
// console.time();

// for (let i = 0; i < 1000000000; i++) {
//    if(i % 400000000 === 0) {
//       console.log(`Running loop no 1 - ${i}`);
//    }
// }

// for (let i = 0; i < 1000000000; i++) {
//    if(i % 400000000 === 0) {
//       console.log(`Running loop no 2 - ${i}`);
//    }
// }

// for (let i = 0; i < 1000000000; i++) {
//    if(i % 400000000 === 0) {
//       console.log(`Running loop no 3 - ${i}`);
//    }
// }

// console.timeEnd();

// main.js
const { Worker } = require("worker_threads");

console.log("Main thread start");

// create worker
const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("From Worker:", msg);
});

console.log("Main thread end");
