import { appendFileSync, createReadStream, writeFileSync } from "fs";
const readStream = createReadStream("./chars.txt", { highWaterMark: 4 });


console.log(readStream.readableFlowing);  // null -> reason is "data" eventlistener not attached 
console.log(readStream.readableFlowing); // true -> while only "data" eventlistener attached 
console.log(readStream.readableFlowing); // false -> when readstream paused by pause() method

console.log(readStream.isPaused()); // false -> while the resume() method invoked
console.log(readStream.isPaused()); // true -> while the pause() method invoked

readStream.on("end",()=>{
    console.log(readStream.readableEnded); // when its work in "end" eventlistener
})

// readStream.on("data", (chunk) => {
//   if (readStream.bytesRead === readStream.readableHighWaterMark) {
    //     writeFileSync("./chunk.txt", "");
    //   } else {
        //     appendFileSync("./chunk.txt", chunk);
        //     readStream.pause();
        //   }
        //   setTimeout(() => {
//     readStream.resume();
//   }, 100);
// });