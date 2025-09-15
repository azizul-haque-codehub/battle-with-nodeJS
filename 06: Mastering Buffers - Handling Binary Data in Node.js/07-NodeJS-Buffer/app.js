import { Buffer } from "node:buffer";

const uint8 = new Uint8Array(4);

// const nodebuf = new Buffer(4)
// const nodebuf = Buffer.alloc(4);

const a = new ArrayBuffer(4);
const nodebuf =  Buffer.from(a)
nodebuf[0] = 65
nodebuf[1] = 66
nodebuf[2] = 67
nodebuf[3] = 68

console.dir(uint8);
console.dir(nodebuf.toString());
