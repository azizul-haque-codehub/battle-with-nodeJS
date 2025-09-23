import fs from "fs";

// const writeStream = fs.createWriteStream("new-file.txt"); // every execution to create a clean file with give argument
// for (let index = 0; index < 10; index++) {
//   writeStream.write("" + index);
// }

// writeStream.write("ABC"); // arg must be a string or buffer
// writeStream.write("DEF"); // this method write like append
// writeStream.write("GHI");

// const uint8 = new Uint8Array(16);
// uint8.forEach((ele, inx) => {
//     uint8[inx] = "Procoder".charCodeAt(inx);
// });
// console.log(uint8);
// writeStream.write(uint8);

import { time, timeEnd } from "console";
import { appendFileSync, createReadStream } from "fs";

const readStream = createReadStream(
  "/home/azizul-haque/Videos/Yt vdeo/Por Fin Encontre ANACONDA GIGANTE !!! @BrunoyJoelRANDOM [iPxZbxofGH4].webm",
  { highWaterMark: 50 * 1024 * 1024 },
);

// time("Write time witout writeStream");
// readStream.on("data", (chunk) => {
//   /** Benchmark
//    * Time: 1s
//    * Memory: 100MB
//    * CPU: 10%
//    */
// //   if (chunk.length === readStream.bytesRead)
// //     fs.writeFileSync("./ANACONDA GIGANTE.webm", chunk);
// //   else appendFileSync("./ANACONDA GIGANTE.webm", chunk);

// });

// readStream.on("end", () => {
//   timeEnd("Write time witout writeStream");
// });

const writeStream = fs.createWriteStream("new-file.webm"); // every execution to create a clean file with give argument
time("Write time with writeStream");
readStream.on("data", (chunk) => {
  /** Benchmark
   * Time: 200 ms
   * Memory: 500 MB
   * CPU: 30%
   */

  writeStream.write(chunk);
});

readStream.on("end", () => {
  timeEnd("Write time with writeStream");
});
