import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  const fileHandle = await fs.open("./river.webp")
  // const fileHandle = await fs.open("/home/azizul-haque/Amorf.webm");
  const stats = await fileHandle.stat();
  const readStream = fileHandle.createReadStream({highWaterMark: 10000} );

  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/txt");
  // res.setHeader("Content-Type", "video/mp4");
  // res.setHeader("Content-Length", stats.size);
  // res.setHeader("Content-Disposition", `attachment; filename=${Math.random()}.mp4`);

  readStream.on("data", (chunk) => {
    res.write(chunk);

    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 50);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
