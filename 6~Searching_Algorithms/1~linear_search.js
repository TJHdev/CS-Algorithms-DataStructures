debugger;

// accepts an array and a value
function linearSearch (arr, val) {
  // loop through the array and check if the current array element is equal to the value
    // if it is, return the index at which the element is found
  // if the value is never found, return -1
}

// time - O(N)
// space - O(1)

function linearSearch (arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([34,56,1,2], 1) // 2
linearSearch([34,56,1,2], 3) // -1