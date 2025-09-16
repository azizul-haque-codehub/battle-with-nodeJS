import { constants } from "buffer";

const allocBuf = Buffer.alloc(4500)
const allocUnsafeBuf = Buffer.allocUnsafe(5000)

console.log(allocBuf);
console.log(allocUnsafeBuf);
 console.log(constants.MAX_LENGTH);