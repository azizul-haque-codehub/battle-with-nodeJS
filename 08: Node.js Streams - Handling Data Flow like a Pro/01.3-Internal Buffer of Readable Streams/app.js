import fs from "fs";

const readStream = fs.createReadStream(
  "/home/azizul-haque/02-Programming/Software Engr./Backend/battle-with-nodeJS/08: Node.js Streams - Handling Data Flow like a Pro/01.3-Internal Buffer of Readable Streams/chars.txt",
  { highWaterMark: 6 },
);

readStream.on("data", (c) => {
  //   if (readStream.bytesRead === c.length) console.log(c); // way to print once
console.log(c.toString());
  console.log(c.length);
});

readStream.on("readable", () => {
  console.log(readStream.readableLength);
  readStream.read(2); // ekane bole dicchi koto byte read korbe kintu buffer size 6 kintu 2 byte read korar poro kintu buffer e 4 byte theke jai ei jonno pore bar 6 byte chunk asbe kintu buffer size to limited tarpor ar buffer chunk asbe na 
});
