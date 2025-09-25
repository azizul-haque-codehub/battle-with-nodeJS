// process.stdin.on("data",(data)=>{
//     console.log(data.toString());
// })

import { createReadStream } from "fs";

// process.stdout.write("abcd from child")
createReadStream("/home/azizul-haque/Amorf.webm").pipe(process.stdout);
// readStream.on("data",(chunk) =>{
//     // console.log(chunk);

//     process.stdout.write(chunk)
// })
