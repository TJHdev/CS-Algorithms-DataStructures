debugger;

function selectionSort (arr) {
  // store the first element as the smallest value you've seen so far.
  // compare this item to the next item in the array until you find a smaller number. (index)
  // if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
  // if the 'minimum' is not the value (index) you initially began with, swap the two values.
  // repeat this with the next element until the array is sorted.
}

function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i; j < arr.length; j++) {
      if(arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if(arr[smallest] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}

selectionSort([5,3,4,1,2]);