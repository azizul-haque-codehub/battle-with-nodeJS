 
import asyncFs from 'fs/promises';
import syncFs from 'fs';    

setTimeout(()=>{
    console.log("I am start");
},0)

const filecontent = await asyncFs.readFile("./I-O ops.txt","utf8")
syncFs.readFile("./I-O ops.txt",(err,data)=>{
    console.log("dat");
})
console.log(filecontent.slice(0,10));
console.log("I am End");

// as simple as , I/O operations generally synchronous , but javascript runtime has asychronous nature to do any task . This is using for handling I/O operations . that's called async I/O ops