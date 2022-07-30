// const pairs = ["a", "b", "c", "d", "e"];

// const logPairs = (pairs) => {
//   for (let i = 0; i < pairs.length; i++) {
//     for (let j = 0; j < pairs.length; j++) {
//       console.log(`${pairs[i]}${pairs[j]}`);
//     }
//   }
// };

// logPairs(pairs);

// const array1 = ["a", "b", "c"];
// const array2 = ["c", "d", "e", "f"];

// function isPairSameItem(arrayA, arrayB) {
//   for (let i = 0; i < array2.length; i++) {
//     // for (let j = 0; j < array1.length; j++) {
//       if (array2[i] === array1[j]) {
//         console.log("contains same pairs", true);
//         return true;
//       }
//       console.log("did not contains same pairs", false);
//     // }
//     // if(array1[i] === array2[i]){

//     // }
//   }
// }
const array1 = ["a", "b", "c"];
const array2 = ["j", "d", "a", "f"];

function isContainPair(arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (!map[item]) {
      map[item] = true;
    }
  }

  //map = { a: true, b: true, c: true }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log("found", true);
      return true;
    }
  }

  return false;
}

// isPairSameItem(array1, array2);
isContainPair(array1, array2);
