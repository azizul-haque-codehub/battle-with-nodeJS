import { readFile, writeFile, appendFile } from "fs/promises";
const [nodeLoc, cwd, arg1, arg2, arg3] = process.argv;
// fs.appendFile("/home/azizul-haque/node-file.txt", await fs.readFile("./file.txt"))
// console.log("done");

// const bufcontent = await readFile(sspng);
// console.log(bufcontent);
// writeFile("/home/azizul-haque/node-image.png", bufcontent);
// console.log("done");

try {
  const bufcontent = await readFile("./sss.png");
  writeFile(bufcontent);
  console.log("done");
} catch (err) {
  appendFile(
    "error.log",
    `\n\n${new Date().toLocaleString("en-GB", { hour12: true })} 
    ${err.stack}
    `,
  );
}
