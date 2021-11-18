// const sumNatural = () => {
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 1; i < 501; i++) {
//     let mul = i * i;
//     arr1.push(mul);
//     arr2.push(i);
//   }
//   return Math.pow(arr2.reduce((x, y) => x + y), 2) - arr1.reduce((a, b) => a + b)

// };

// console.log(sumNatural());

// The sum of the squares of the first ten natural numbers is 385.
// The square of the sum of the first ten natural is 3025, hence the difference is 2640.
// Find the difference between the sum of the squares of the first five hundred natural numbers and the squares of the sum

const sumNatural = () => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 1; i < 1001; i++) {
    let mul = i * i;
    arr1.push(mul);
    arr2.push(i);
  }
  return (
    Math.pow(
      arr2.reduce((x, y) => x + y),
      2
    ) - arr1.reduce((a, b) => a + b)
  );
};

console.log(sumNatural());
