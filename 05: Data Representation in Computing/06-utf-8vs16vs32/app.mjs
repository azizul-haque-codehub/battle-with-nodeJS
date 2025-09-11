import { readFile } from "fs/promises";

const buffer = await readFile("./example.txt") 

function bufToStr(buffer=[]) {
    let str = ""

    buffer.forEach(byte => {
        // console.log(byte);
        // console.log(String.fromCharCode(byte));
        str += String.fromCharCode(byte)
    })
    return str
}
 
 bufToStr(buffer)
 