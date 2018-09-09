// const same = (arr1, arr2) => {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   // should return true if all values in arr1 have the squared value in arr2.
//   const arrCheck = arr1.map((element) => {
//     return element * element;
//   });
// }

const sameNaive = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1); // removes the item from the second array as a memory check.
  }
  return true
}

const sameRefactor = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  const freqCounter1 = {};
  const freqCounter2 = {};
  arr1.forEach(val => {
    freqCounter1[val] = ++freqCounter1[val] || 1;
  });
  arr2.forEach(val => {
    freqCounter2[val] = ++freqCounter2[val] || 1;
  });
  for(let key in freqCounter1) {
    if(!(key ** 2 in freqCounter2)){
      return false
    }
    if(freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false
    }
  }
  return true;
}



sameRefactor([1,2,2,3], [4,1,4,9]); // true
sameRefactor([1,2,3], [1,9]); // false
sameRefactor([1,2,3], [1,9,9]); // false
sameRefactor([1,2,1], [4,4,1]); // false (must be same frequency)