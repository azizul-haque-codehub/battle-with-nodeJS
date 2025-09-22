import fs from "fs";

const readStream = fs.createReadStream(
  "/home/azizul-haque/02-Programming/Software Engr./Backend/battle-with-nodeJS/08: Node.js Streams - Handling Data Flow like a Pro/01.4-All Events of ReadableStream/chars.txt",
  { highWaterMark: 4, encoding: "base64" },
);
// readStream.setEncoding("utf-8")
readStream.on("data", (chunk) => {
  console.log(chunk);
  //   readStream.destroy(new Error("something went wrong"))
});
// readStream.on("pause",()=>{
//     console.log("Paused");
// })
// readStream.pause()
// setTimeout(() => {
//     readStream.resume()
// }, 2000);
// readStream.on("resume",()=>{
//     console.log("resumed");
// })
// readStream.on("readable",()=>{
//     console.log("readable on");
// })

readStream.on("end", () => {
  console.log("ended");
});
readStream.on("close", () => {
  console.log("Closed its run when the readStream tollay removed");
});
readStream.on("ready", () => {
  console.log("ready");
});

readStream.on("error", (err) => {
  console.log(err);
});
