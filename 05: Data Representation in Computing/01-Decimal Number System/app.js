const digitsList = [2, 4, 6, 5];
let num = 0;
digitsList.forEach((digit, placeIndex) => {
  num += digit * 10 ** placeIndex;
});
console.log(num);

// Decimal Number System Based:
const expansion = digitsList.map(
  (digit, placeIndex) => ({}[placeIndex] = digit * 10 ** placeIndex), // here 10 is base
);

console.table(expansion);
console.log(
  `Number is : ${Object.values(expansion).reduce(
    (acc, curr) => acc + curr,
    0,
  )}`,
);
