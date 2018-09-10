debugger;

function insertionSort () {
  // start by picking the second element in the array
  // now compare the second element with the one before it and swap if necessary
  // contine to the next element and if it in the incorrect order, iterate through the sorted portion (i.e the left side) to place the elemt in the correct place
  // repeat until the array is sorted
}


function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // stores the value being looked at so we don't need to swap multiple times
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
      console.log(arr)
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4]);

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // stores the value being looked at so we don't need to swap multiple times
    let j;
    for (j = i - 1; j >= 0; j--) {
      if(arr[j] > currentVal) {
        arr[j+1] = arr[j];
      } else {
        break
      }
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4]);