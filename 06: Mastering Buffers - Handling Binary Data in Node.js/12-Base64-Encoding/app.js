
import {Buffer} from 'buffer' ;
const buf = Buffer.alloc(8)
//console.log(buf.toString("base64")); // AAAAAAAAAAA= from <Buffer 00 00 00 00 00 00 00 00>

// buf.write("ABCD","base64")
// console.log(buf.toString()) // unexpected output reason is we are reading by default utf-8
// console.log(buf.toString("base64")) // ABCDAAAAAAA= unexpected output reason is in base64 000000=A , when we are created buffer here has 8 bytes 0's

buf.write("ABCD","utf-8")
console.log(buf.toString("utf-8")) // ABCD
console.log(buf.toString("base64")) // QUJDRAAAAAA=
console.log(buf);
