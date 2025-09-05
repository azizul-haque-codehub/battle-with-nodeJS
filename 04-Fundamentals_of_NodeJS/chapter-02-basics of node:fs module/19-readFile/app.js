import fs from "node:fs/promises";

// const content = fs.readFileSync("./note.html","utf8") // synchornous execution

//  fs.readFile("./note.html","hex",(err,data)=>{
//     console.log(data);
// })

const data = await fs.readFile("./app.js", "utf-8")
console.log(data);

console.log("end line executed");
  
 
