const buf = new ArrayBuffer(8);
const view = new DataView(buf);

// we can set signed value -128 to +127 in 1byte/8bits
// view.setInt8(0, 127);
// view.setInt8(1, -128);
// console.log(view.getInt8(1));

// memorize: The Endianness become when 1 data/number need multi-byte mean more than 1 byte just 1 thing but its taking more than 1 byte such as we can't write greater than 127 signed value so we need use 2 byte below usages:
// by deafult view.set.. method usages Big Endian
// if we write in Big Endian obviously in read time we need to use Big Endian
// if we write in Big Endian but we read in little Endian that's return a reverse value

// view.setInt16(0,140,true)
// view.setInt16(2,141) /// here byteoffset is 2 because the first number 140 is taking 2 byte that's why its started from 2
// console.log(view.getInt16(0,true),buf);
//  console.log(view.getInt16(2),buf);


view.setInt32(0,0xffffffff)
view.setInt32(4,0xfffaef,true) // its just change the byte serial mean 1 byte block not full 4 byte

console.log(view.getInt32(0),buf);















































































































