debugger;

function pivot (arr, start = 0, end = arr.length - 1) {
  // it will help to accept three arguemnts, a start index, and an end index (these can default to 0 and the array length minus 1)
  // grab the pivot from the start of the array
  // store the current pivot index in a variable (this will keept track of where the pivot should end up)
  // loop through the array from the start until the end
    // if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
  // swap the starting element (i.e the pivot) with the pivot index
  // return the pivot index
} 

function pivot (arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
      console.log(arr);
    }
  }
  let temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;

  console.log(arr);
  return swapIndex;
} 


pivot([4,8,2,1,5,7,6,3]); // 5 

//           x
// [4, 2, 8, 1, 5, 7, 6, 3]
//                       x
// [4, 2, 1, 8, 5, 7, 6, 3]
//  x
// [4, 2, 1, 3, 5, 7, 6, 8]
//           x
// [3, 2, 1, 4, 5, 7, 6, 8]


function quickSort (arr) {
  // call the pivot helper on the array
  // when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
  // your base case occurs when you consider a subarray with less than 2 elements
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right); // pivot function mutates the arr and returns the pivot index.
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

debugger;
quickSort([5,1,3,17,2,1]);