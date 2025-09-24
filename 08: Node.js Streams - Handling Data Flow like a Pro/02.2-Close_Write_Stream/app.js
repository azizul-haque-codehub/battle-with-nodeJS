import fs from "fs";

const writeStream = fs.createWriteStream("./file.txt");
const writeStream2 = fs.createWriteStream("./file.txt");

writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");

// its open file but not close
writeStream.on("open", (fd) => {
  console.log("fd",fd);
});
writeStream2.on("open", (fd) => {
  console.log("fd",fd);
});

writeStream.end(" end argument")

writeStream.on("finish", () => {
  console.log("finished");
});

writeStream.on("end", (arg) => {
  console.log("ended arg", arg);
});
