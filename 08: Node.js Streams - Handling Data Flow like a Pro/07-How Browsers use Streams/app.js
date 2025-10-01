import http from "http";
import fs from "fs/promises";
const fileHandle = await fs.open(
  "/home/azizul-haque/Music/Rauf & Faik — детство (Official video) [m-el0pQLQE4].webm",
  "r",
);
const readStream = fileHandle.createReadStream();

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  // res.setHeader("Content-Type", "text/txt");
  // res.setHeader("Content-Type", "image/jpeg");
  res.setHeader("Content-Type", "video/mp4");

  readStream.on("data", (chunk) => {
    res.write(chunk);
    // readStream.pause();
  });
  // const id = setInterval(() => {
  //   readStream.resume();
  // }, 50);
  readStream.on("end", () => {
    // clearInterval(id)
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
