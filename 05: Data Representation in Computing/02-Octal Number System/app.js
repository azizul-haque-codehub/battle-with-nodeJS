// const octalNum = "723123724"; // convert into decimal number system rules

// let decimalNum = 0;

// Below this works as good as but its not applied number system rules
// octalNum.split("").forEach((num, index) => {
//   decimalNum += +num * 8 ** (octalNum.length - (index + 1));
// });

// its is the applied the mathemathical number system rules
// octalNum
//   .split("")
//   .reverse()
//   .forEach((digit, index) => {
//     decimalNum += digit * 8 ** index;
//   });

// console.log(decimalNum);

// const octalToDecimal = (num, radix = 10) => {
//   const strNum = typeof num !== "string" ? num.toString() : num;
//   const isOctal = strNum.split("").some((digit) => digit >= 8);
//   if (isOctal) throw Error("Provide a octal number");
//   let decNum = 0;
//   strNum
//     .split("")
//     .reverse()
//     .forEach((digit, placeIndex) => {
//       decNum += digit * radix ** placeIndex;
//     });
//   return decNum;
// };

// console.log(octalToDecimal(979));

// const digitsList1 = [3,2,4,7,5]
      
