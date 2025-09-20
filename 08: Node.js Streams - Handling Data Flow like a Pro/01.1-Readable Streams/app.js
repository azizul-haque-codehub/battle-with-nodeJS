import { readFile, stat } from "fs/promises";
import { appendFileSync, createReadStream } from "fs";

/*  we can read file less 2 GiB multiple times but if one file is greater then 2 GiB then it nor permited because In Javascript can take 2 GiB storage from RAM  */

// const fileBuff = await readFile("./video.webm")
// const fileBuff2 = await readFile("./video.webm")
// const fileBuff3 = await readFile("./video.webm")
// const fileBuff4 = await readFile("./video.webm")
// const fileBuff5 = await readFile("./video.webm")
// const fileBuff6 = await readFile("./video.webm")
// const fileBuff7 = await readFile("./video.webm")
// const fileBuff8 = await readFile("./video.webm")

//  setInterval(() => {
//     console.log("abc");
//  }, 1010);

/*
Pitfall of Direct File reading
1. RAM consume equal to File Size which current reading
2. CPU usages high
3. Time almost depend on file size avarage
*/

const readStream = createReadStream("./video.webm", {
  highWaterMark: 40 * 1024 * 1024,
});
const fileDetails = await stat("./video.webm");

let byteReads = 0;
let progress = 0;
readStream.on("data", (chunkBuffer) => {
  byteReads += chunkBuffer.byteLength;
  appendFileSync("./test.webm",chunkBuffer)
  progress = Math.ceil((byteReads / fileDetails.size) * 100);
  console.log(`progress: ${progress}%`);
});

// console.log(readStream.readableHighWaterMark);
