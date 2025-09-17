import { readFile, writeFile } from "fs/promises";

// const a = await readFile("./favicon/favicon-32x32.png","base64")

// writeFile("img-text.txt",a)
// console.log(a);


// const a = await readFile("./img-text.txt","utf-8")

// writeFile("text-img.png",a,"base64")


const v = await readFile("./video1.webm","base64")
writeFile("video.txt",v)


const script = await readFile("./file.txt","base64")
writeFile("script.txt",script)