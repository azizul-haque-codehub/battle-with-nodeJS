

const arrBuf = new ArrayBuffer(4)
const view = new DataView(arrBuf)

// setting a value with signed value
view.setInt8(0,-2)
view.setInt8(1,-128)
console.log(view);