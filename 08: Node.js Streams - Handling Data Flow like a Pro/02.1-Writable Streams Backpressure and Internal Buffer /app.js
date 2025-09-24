// backpressure are create when the producer produce large data than consumer recieving
import fs from "fs";

// const consumerStream = fs.createWriteStream("file.txt", { highWaterMark: 4 }); // 4bytes writable buffer

// let isMt = consumerStream.write("a");
// console.log("writable buffer is empty: ", isMt);
// console.log("writable data length", consumerStream.writableLength, "bytes");
// isMt = consumerStream.write("a");
// console.log("writable buffer is empty: ", isMt);
// console.log("writable data length", consumerStream.writableLength, "bytes");
// isMt = consumerStream.write("a");
// console.log("writable buffer is empty: ", isMt);
// console.log("writable data length", consumerStream.writableLength, "bytes");
// isMt = consumerStream.write("a");
// console.log("writable buffer is empty: ", isMt);
// console.log("writable data length", consumerStream.writableLength, "bytes");
// isMt = consumerStream.write("a");
// console.log("writable buffer is empty: ", isMt);
// console.log("writable data length", consumerStream.writableLength, "bytes");

// let i = 0;
// while (i <= 1000) {
//   console.log(consumerStream.writableLength);
//   const isEmpty = consumerStream.write("a");
//   console.log(isEmpty);
//   ++i;
//   if (!isEmpty) {
//     break;
//   }
// }

// consumerStream.on("drain", () => {
//   console.log("drained");
//   while (i <= 1000) {
//     console.log(consumerStream.writableLength);
//     const isEmpty = consumerStream.write("a");
//     console.log(isEmpty);
//     ++i;
//     if (!isEmpty) {
//       break;
//     }
//   }
// });

/** output
  0
true
1
true
2
true
3
false
drained
0
true
1
true
2
true
3
false
drained
 */

const producerStream = fs.createReadStream(
  "/home/azizul-haque/Videos/Yt vdeo/Por Fin Encontre ANACONDA GIGANTE !!! @BrunoyJoelRANDOM [iPxZbxofGH4].webm",
);
const consumerStream = fs.createWriteStream("./new-video.webm")

producerStream.on("data", (chunk) => {
  const isEmpty = consumerStream.write(chunk);
  console.log(isEmpty);
  if (!isEmpty) {
    producerStream.pause();
  }
});

consumerStream.on("drain",()=>{
    console.log("drained");
    producerStream.resume()
})