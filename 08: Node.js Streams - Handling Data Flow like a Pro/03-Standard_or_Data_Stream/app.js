import { spawn } from "child_process";
import { createReadStream, createWriteStream } from "fs";

const childProcess = spawn("node", ["child-app.js"]);

// childProcess.stdin.write("Parent input 123")

const writeStream = createWriteStream("./Amorf.webm")
childProcess.stdout.on("data", (chunk) => {
 writeStream.write(chunk)
});


process.stdin.write("ABV")
 
process.stdout.write("aasdf")

















// to know : /home/azizul-haque/snap/code/206/.local/share/Trash -> why its wasting my disk
