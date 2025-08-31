// const user = {
//   name: "Azizul",
//   age: 19,
//   address: {
//     village: "Bagber",
//     dist: "sunamgonj",
//     country: "Bangladesh",
//   },
// };

// let address = user.address;
// address.dist = "Barisal";
// address = {
//   country: "BD",
// };
// console.log(address);
// console.log(user.address);

const math = require("./mathModule");
const myself = require("./myselfModule");

console.log({ math, myself });


// TOLearn : how does the require fn work ? while we every time reassigning the module.exports = {new value}