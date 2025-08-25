// problem with single threaded js its taking 6 seconds to complete the task

// console.time()

// for (let i = 0; i < 1000000000; i++) {
//   if(i % 400000000 == 0){
//     console.log(`Loop no 1 : ${i}`)

//   }
// }
// for (let i = 0; i < 1000000000; i++) {
//   if(i % 400000000 == 0){
//     console.log(`Loop no 1 : ${i}`)

//   }
// }
// for (let i = 0; i < 1000000000; i++) {
//   if(i % 400000000 == 0){
//     console.log(`Loop no 1 : ${i}`)

//   }
// }
// console.timeEnd()

// solution is to use worker threads

const { Worker } = require('worker_threads')

new Worker("./thread1.js")
new Worker("./thread2.js")
new Worker("./thread3.js")










