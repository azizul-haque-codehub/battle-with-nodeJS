import { time, timeEnd } from "console";
import { appendFileSync, createReadStream } from "fs";
import { stat } from "fs/promises";

const readStream = createReadStream(
  "/home/azizul-haque/Videos/Yt vdeo/Por Fin Encontre ANACONDA GIGANTE !!! @BrunoyJoelRANDOM [iPxZbxofGH4].webm",
  { highWaterMark: 50 * 1024 * 1024 },
);
const { size: filesize } = await stat(
  "/home/azizul-haque/Videos/Yt vdeo/Por Fin Encontre ANACONDA GIGANTE !!! @BrunoyJoelRANDOM [iPxZbxofGH4].webm",
);
let readedChunk = 0;
let progress = 0;

time("Readtime");
readStream.on("data", (chunk) => {
  readedChunk += chunk.byteLength;
  appendFileSync("./ANACONDA GIGANTE.webm", chunk);
  progress = Math.ceil((readedChunk / filesize) * 100);
  console.log(`progress: ${progress}`);
});

readStream.on("end", () => {
  timeEnd("Readtime");
});
