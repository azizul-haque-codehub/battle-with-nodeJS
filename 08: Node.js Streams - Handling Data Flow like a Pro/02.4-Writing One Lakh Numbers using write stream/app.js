import fs from "fs";

console.time();

// 50ms
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     fs.writeFileSync("./numbers.txt", `${i}`);
//   } else {
//     fs.appendFileSync("numbers.txt", `${i} `);
//   }
// }
// console.timeEnd();
// stream
// time : 12ms
const writeStream = fs.createWriteStream("streamNumbers.txt");
for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i} `);
}
writeStream.end();

writeStream.on("finish", () => {
  console.timeEnd();
});
