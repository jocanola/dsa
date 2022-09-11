//factorial

// function factorials(num) {
//   let result = 1;
//   for (let index = num; index > 0; index--) {
//     result = result * index;
//   }
//   console.log(result);
//   return result;
// }

// factorials(100);

// Factorial using recursion
let counter = 1;
let result = 1;
function factorialRec(num) {
  if (counter === num + 1) {
    return result;
  }
  result = result * counter;
  counter++;
  return factorialRec(num);
}

factorialRec(10);
