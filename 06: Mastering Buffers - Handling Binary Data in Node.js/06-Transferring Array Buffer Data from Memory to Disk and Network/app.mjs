import { writeFile } from "fs/promises";

const buf = new Uint8Array(8);
buf.forEach((ele, inx) => {
  buf[inx] = "Procodrr".charCodeAt(inx);
});
// console.log(buf);

writeFile("data-from-buffer.txt", buf); // writing data RAM to Disk
