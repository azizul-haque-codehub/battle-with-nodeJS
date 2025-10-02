import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/webm");
  
  const fileHandle = await fs.open(
    "/home/azizul-haque/Music/Rauf & Faik — детство (Official video) [m-el0pQLQE4].webm",
    "r+",
  );

  const readStream = fileHandle.createReadStream();
  readStream.on("data", (chunk) => {
    res.write(chunk);
  });
  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started port: 4000");
});
