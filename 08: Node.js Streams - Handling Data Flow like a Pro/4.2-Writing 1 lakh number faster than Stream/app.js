import fs from "fs";

// console.time();

// // 480ms
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     fs.writeFileSync("nums-by-writeFile.txt", `${i}, `);
//   } else {
//     fs.appendFileSync("nums-by-writeFile.txt", `${i}, `);
//   }
// }
// console.timeEnd();

// // time :
console.time();
const fd = fs.openSync("./nums.txt", "w");
for (let index = 0; index <= 100000; index++) {
  fs.writeSync(fd, `${index}, `);
}
console.timeEnd();
