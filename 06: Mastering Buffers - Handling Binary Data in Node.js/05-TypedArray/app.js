// TypedArrays always use the platform's native byte order.

/* Below that's all way to pass argument in TypedArrays

new Uint8Array()
new Uint8Array(length)
new Uint8Array(typedArray)
new Uint8Array(array)

new Uint8Array(buffer)
new Uint8Array(buffer, byteOffset)
new Uint8Array(buffer, byteOffset, length)

*/

// const uInt8 = new Uint8Array() // []

// const buf1 = new ArrayBuffer(8)
// const uInt8 = new Uint8Array(buf1)

// const uInt8 = new Uint8Array(8)

// const uInt8 = new Uint8Array([0xfe,0xab,33,23])

const uInt8 = new Uint8Array(8);
uInt8[0] = 0xff;
uInt8[1] = 0xfe;
uInt8[2] = 0xfd;

// console.log(uInt8);

const buf = new ArrayBuffer(4, { maxByteLength: 16 });

console.log(buf.resizable); // false

buf.resize(8)


const lastBuf = buf.transfer()

console.log(buf,lastBuf);
console.log(buf.detached); // buf detached to lastBuf