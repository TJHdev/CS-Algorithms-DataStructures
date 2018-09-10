debugger;
// accepts a sorted array and a value
function binarySearch (arr, value) {
  // create two points - start and end which will identify the points between the search is taking place.
    // while left < right pointer keep looping
      // create a pointer in the middle
      // if you find the value you want return the index
      // if the value is too small move the left pointer up
      // if the value is too big move the right pointer down
    // if you never find the value return -1
}
debugger;

// time - O(log N)
// space - O(1)

function binarySearch (arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let center = Math.floor((start + end) / 2); // re-calcualting the center point

    if (arr[center] === value) {
      return center; // the value is found in the array
    } else if (arr[center] > value) {
      end = center - 1; // moves the top of the seach band down
    } else {
      start = center + 1; // moves the bottom of the search band up
    }
  }
  return -1; // if the value isn't found -1 is returned
}

binarySearch([1,2,3,4,5], 5); // 4
binarySearch([1,2,3,4,5], 3); // 2
binarySearch([1,2,3,4,5], 2); // 1