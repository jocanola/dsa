// find repeat item in an Array.

function findFirstRecurItem(arr) {
  const temp = {};
  // checking if the arr is empty or is not an array
  if (!arr.length || typeof arr !== Array) return undefined;
  //looping through the array
  for (let i = 0; i < arr.length; i++) {
    //checking if item already exist in temp
    if (temp[arr[i]]) {
      console.log(arr[i]);
      return arr[i];
    } else {
      //and if the item is not present create key/pair in temp
      temp[arr[i]] = true;
    }
  }

  
}

findFirstRecurItem([3, 4, 6, 5, 6, 5]);
