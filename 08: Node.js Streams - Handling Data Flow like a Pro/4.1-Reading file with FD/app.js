import fs from "fs";

const fd = fs.openSync("./test.txt");
const readBuffer = Buffer.alloc(10);
readBuffer[0] = "a";
fs.read(
  fd,
  {
    buffer: readBuffer,
    position: 10,
    length: 5,
    offset: 4, // offset usages for which index to start *write* in buffer
  },
  (err, bytesRead, buf) => {
    console.log(err);
    console.log(bytesRead);
    console.log(buf.toString());
    console.log(buf);
  },
);
