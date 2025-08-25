
main.js
const { Worker } = require("worker_threads");

console.log("Main thread start");

// create worker
const worker = new Worker("./worker.js");

worker.on("message", (msg) => {
  console.log("From Worker:", msg);
});

console.log("Main thread end");
