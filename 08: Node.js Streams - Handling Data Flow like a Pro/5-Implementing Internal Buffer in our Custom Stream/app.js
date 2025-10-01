import fs from "fs";
// write method usages
// const writtenBytes = buf.write("abc",0)
// console.log(writtenBytes);
// console.log(buf);
// const writtenBytes2 = buf.write("defg",3)
// console.log(writtenBytes2);
// console.log(buf);

const fd = fs.openSync("./text.txt", "w+");
const buf = Buffer.allocUnsafe(4);

let totalWrittenBytesInBuf = 0;
let remainingBytes = "";
for (let index = 0; index <= 110; index++) {
  const dataChunk = remainingBytes + `${index}, `;
  const writtenBytes = buf.write(dataChunk, totalWrittenBytesInBuf);
  totalWrittenBytesInBuf += writtenBytes;
  remainingBytes = "";
  const remainingBytesDiff = dataChunk.length - writtenBytes;
  if (remainingBytesDiff !== 0) {
    remainingBytes += dataChunk.slice(writtenBytes);
  }
  if (totalWrittenBytesInBuf === buf.byteLength) {
    fs.writeSync(fd, buf);
    totalWrittenBytesInBuf = 0;
  }
}
fs.writeSync(fd, buf.subarray(0, buf.length + remainingBytes));
