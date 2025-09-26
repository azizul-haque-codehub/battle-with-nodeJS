import { createWriteStream } from "fs";

// const writeStream = createWriteStream("./stdin.txt");
// process.stdin.on("data", (data) => {
//   writeStream.write(data);
// });

process.stdout.write("Std out is writable stream")

