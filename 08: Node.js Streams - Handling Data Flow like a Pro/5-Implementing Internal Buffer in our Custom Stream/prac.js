import fs from "fs";

//  1st open file where write on
const fileFd = fs.openSync("./numbs.txt", "w+");
const buf = Buffer.allocUnsafe(4);
let writtenBytesLengthInBuf = 0;
let remaingingData = "";
for (let index = 0; index <= 1008; index++) {
  const data = `${remaingingData}${index}, `;
  const writtenBytes = buf.write(data, writtenBytesLengthInBuf);
  writtenBytesLengthInBuf += writtenBytes;
  if (writtenBytesLengthInBuf === buf.length) {
    // condition mean buff full
    fs.writeSync(fileFd, buf);
    writtenBytesLengthInBuf = 0;
}
if (data.length - writtenBytes > 0) {
      remaingingData = ""; // clearing remaining data after written
    remaingingData += data.slice(writtenBytes);
  }
}
// console.log(buf.write("abcdef"));

//   fs.writeSync(fileFd, `${index}, `); // pitfall is direclty write on disk every time mean loop length
