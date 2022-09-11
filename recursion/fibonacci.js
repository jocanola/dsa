function fibonacciRecursion(num) {
  if (num < 2) {
    return num;
  }
  let result = fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
  console.log(result);
  return result;
}

// let A = 0;
// let P = 0;
// let result = 0;
// let counter = 0;
// function fibonacciIterative(num) {
//   while (counter !== num + 1) {
//     A = A + counter;
//     P = A;
//     // result = A + P;
//     console.log({ A, P });
//     counter++;
//   }
// }

// fibonacciIterative(5);
fibonacciRecursion(5);
