import { readFile, writeFile } from "fs/promises";

// const a = await readFile("./favicon/favicon-32x32.png","base64")

// writeFile("img-text.txt",a)
// console.log(a);

// const a = await readFile("./img-text.txt","utf-8")

// writeFile("text-img.png",a,"base64")

// const v = await readFile("./video1.webm","base64")
// writeFile("video.txt",v)

// const script = await readFile("./file.txt","base64")
// writeFile("script.txt",script)

/// base64url uses
// const base64url = await readFile("./favicon/favicon-32x32.png", "base64url");
// writeFile("img-text-base64url.txt", base64url);

// const base64text = await readFile("./video1.webm","base64");
// writeFile("base64video.txt",base64text)
// console.log("Done");

const asciiData = await readFile("./base64video.txt", "utf-8");

writeFile("converted-video.mp4", asciiData, "base64");
