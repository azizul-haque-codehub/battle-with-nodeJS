import moduleName from "fs";
import { pipeline } from "stream";

console.time();
const path = "/home/azizul-haque/Amorf - Çöl [ipeIvjsAzQ0].webm";
const readStream = moduleName.createReadStream(path);

const writeStream = moduleName.createWriteStream("./new-music.webm");

// readStream.on("data", (c) => {
//   const isMT = writeStream.write(c);
//   if (!isMT) {
//     readStream.pause();
//   }

// });

// writeStream.on("drain", () => {
//   readStream.resume();
// });
pipeline(readStream, writeStream, (err) => {
  console.log(err);
});
setTimeout(()=>{
  readStream.destroy("throwed error")
},10)

// readStream.pipe(writeStream);

// readStream.on("error",(er)=>{
//   console.log(er);
// })

// setTimeout(() => {
//   readStream.unpipe(writeStream);
// }, 10);

// writeStream.on("pipe", () => {
//   console.log("Pipe connected");
// });
// writeStream.on("unpipe", () => {
//   console.log("Pipe disconnected");
// });

readStream.on("end", () => {
  console.timeEnd();
});
// writeStream.on("finish",()=>{
//     console.timeEnd();
// })
