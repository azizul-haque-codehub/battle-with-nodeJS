import { spawn } from "child_process";
import fsProms from "fs/promises";

const fileHandle = await fsProms.open("./chapter.txt", "r");
const readStream = fileHandle.createReadStream({ highWaterMark: 4 })
readStream.setEncoding("utf8")
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// })
const fileHandle2 = await fsProms.open("./chapter..txt","w")
const writeStream = fileHandle2.createWriteStream()
const status =  readStream.pipe(writeStream)
if(!status.flush){
    console.log("Done");
}
//  const gitProcess = spawn("git",["add ."])
//  console.log("hi",gitProcess);
 spawn("git",["commit -m 'working with promise fs'"])