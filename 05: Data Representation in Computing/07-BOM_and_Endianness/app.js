import { readFile } from "fs/promises";


const buffer = await readFile("./text.txt")

console.log(buffer.toString("utf16le"));