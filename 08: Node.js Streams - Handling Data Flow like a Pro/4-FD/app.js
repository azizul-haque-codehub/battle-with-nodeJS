import fs from "fs";

// open a file
fs.open("./text.txt", "r", (err, fd) => {
  if (err) throw err;
  console.log(fd);
});
const fd = fs.openSync("./text.txt");
console.log(fd, "out");

// Read file with fd
fs.open("text.txt", "r", (err, fd) => {
  if (err) throw err;

  const buffer = Buffer.alloc(100); // allocate 100 bytes
  fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead, buf) => {
    if (err) throw err;
    console.log("Bytes read:", bytesRead);
    console.log("Content:", buf.toString());
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});

// fs.open("text.txt", "w", (err, fd) => {
//   if (err) throw err;

//   const text = "Hello from Node.js File Descriptor!\n";
//   fs.write(fd, text, (err, written, str) => {
//     if (err) throw err;
//     console.log("Bytes written:", written);
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   });
// });
fs.open("./text.txt", "w", (err, fd) => {
  if (err) throw err;

  fs.write(fd, "ABCD", (err, bytesWritten, str) => {
    console.log({ err, bytesWritten, str });
  });
});
