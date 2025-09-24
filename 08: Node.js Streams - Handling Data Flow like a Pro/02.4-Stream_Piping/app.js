import fs from "fs";
import { stat } from "fs/promises";

const readStream = fs.createReadStream(
  "/home/azizul-haque/Amorf - Çöl [ipeIvjsAzQ0].webm",
);
const writeStream = fs.createWriteStream("music-col.webm");
const stats = await stat("/home/azizul-haque/Amorf - Çöl [ipeIvjsAzQ0].webm");

// readStream.on("data", (c) => {
//   const empty = writeStream.write(c);
//   if (!empty) {
//     readStream.pause();
//   } else if (readStream.bytesRead === stats.size) {
//     writeStream.end();
//   }
// });
// writeStream.on("drain", () => {
//   readStream.resume();
// });

// writeStream.on("finish", () => {
//   console.log("Finish");
// });

  readStream.pipe (writeStream)
 