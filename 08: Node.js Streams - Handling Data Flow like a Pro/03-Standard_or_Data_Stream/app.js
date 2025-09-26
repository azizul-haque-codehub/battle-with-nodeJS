import { spawn } from "child_process";
import { createReadStream, createWriteStream, readFile } from "fs";

const childProcess = spawn("node", ["child-app.js"]);

// childProcess.stdin.write("Parent input 123")

const writeStream = createWriteStream("./Amorf.webm")
// childProcess.stdout.on("data", (chunk) => {
//  writeStream.write(chunk)
// });
childProcess.stdout.pipe(writeStream)



 