import { Buffer } from "buffer";
// const buf1 = Buffer.alloc(8);
// const buf2 = Buffer.from("Hello World!");

/* Common Properties */
// buf1[0] = 0x64;
// console.log(buf2.byteOffset) // 256 -> it's showing in ArrayBuffer which index to started it;
// console.log(buf1.length, buf1.byteLength,buf1.byteOffset);
// console.log(buf2.length, buf2.byteLength,buf2.byteOffset);
// console.log(Buffer.byteLength("Hello World!"));

/*--------- Methods ---------*/

// Buffer Creation
const buf1 = Buffer.from("Hello World");
const buf2 = Buffer.from([12, 34, 23, 87]);
const buf3 = Buffer.from(buf1);
console.log(buf1, buf2, buf3);

const buf4 = Buffer.alloc(16);
const buf5 = Buffer.allocUnsafe(16);
const buf6 = Buffer.allocUnsafeSlow(16);
console.log(buf4, buf6, buf5);

// Content Reading & Writing
const content = buf1.toString();
console.log(content);

buf4.write("From JS");
console.log(buf4.toString());

// Copying & Concatenation

const src = Buffer.from("ABC");
const dest = Buffer.alloc(8);
src.copy(dest, 2, 0, src.length);
console.log(dest); // <Buffer 00 00 41 42 43 00 00 00> -> started to 2 byte offset
console.log(dest.toString());

const concated = Buffer.concat([src, dest]);
console.log(concated.toString());

// Comparison
console.log(Buffer.compare(Buffer.from("A"), Buffer.from("B"))); // -1 (A < B)
console.log(Buffer.compare(Buffer.from("B"), Buffer.from("A"))); // 1 (B > A)

console.log(buf1.equals(buf2)); // false

// slicing
// ->.slice() Create a new buffer referencing the same memory (not a copy).
const mainBuf = Buffer.from("Hello world!");

const sliceOfMainBuf = mainBuf.slice(0, mainBuf.length / 2);
console.log(sliceOfMainBuf.toString());
mainBuf[5] = 0x76;
console.log(sliceOfMainBuf.toString());

const subArray = mainBuf.subarray(mainBuf.length / 2, mainBuf.length);
console.log(subArray.toString());