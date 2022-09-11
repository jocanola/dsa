function reverseStr(str) {
  const arrString = str.split("");
  const arrlength = arrString.length;
  const newArray = [];

  for (let i = 0; i <= arrlength; i++) {
    newArray.push(arrString[arrlength - i]);
  }
  console.log(newArray.join(""));
  //   console.log(arrString);
}

function mergeSortedArr(arr1, arr2) {
  const mergeArr = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(mergeArr);
}

function mergeSortedArr2(arr1, arr2) {
  const mergeArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (!array1Item || array1Item < array2Item) {
      mergeArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergeArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  console.log(mergeArr);
}
// reverseStr("I am gonna be best in DSA");
// mergeSortedArr([1, 2, 3], []);
mergeSortedArr2([1, 2, 3], [8, 9, 60]);
