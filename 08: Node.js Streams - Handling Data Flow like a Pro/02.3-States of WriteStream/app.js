import fs from "fs";
const writeStream = fs.createWriteStream("./file.txt", { highWaterMark: 4 });

// states of write stream

// 1. writable

// console.log(writeStream.writable); // true
// writeStream.end()
// console.log(writeStream.writable); // false : because stream was end by end() method

// 2. corked -> ছিপি দ্বারা বন্ধ করা
// writeStream.write("a")
// writeStream.write("a")
// writeStream.write("a")

// console.log(writeStream.writableCorked); // // 0 means not corked,  > 0 means corked

// writeStream.cork()
// writeStream.cork()
// console.log(writeStream.writableCorked); // // 0 means not corked,  > 0 means corked
// writeStream.uncork()
// writeStream.uncork()

// 3. End state

// writeStream.write("aa")
// writeStream.end()
// console.log(writeStream.writableEnded); // true
// writeStream.write("aa") // error

// 4. Finish state

writeStream.write("a");

console.log(writeStream.writableFinished); // false
writeStream.end();

console.log(writeStream.writableLength); //  1

setTimeout(() => {
    console.log(writeStream.writableFinished); // true
    console.log(writeStream.writableLength); // 0
}, 10);
