function merge (arr1, arr2) {
  // create an empty array, take a look at the smallest values in each input array.
  // while there are still values we havn't looked at...
    // If the value in the first array is smaller than the value in the second array, 
    // - push the value in the first array into our results and move onto the next value in the first array.
    // If the value in the first array is larger than the value in the second array,
    // - push the value in the second array into our results and move onto the next value in the second array.
    // Once we exhaust one array, push in all remaining values from the other array.
}

debugger;
function merge (arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  if(i < arr1.length) {
    results = results.concat(arr1.slice(i))
  } else {
    results = results.concat(arr2.slice(j))
  }
  return results
}

merge([1,10,50],[2,14,99,100]); // [1,2,10,14,50,99,100]


function mergeSort (arr) {
  // break up the array into halves until you have arrays that are empty or have one element
  // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length array.
  // Once the array has been merged back together, return the merged (and sorted!) array.
}

function mergeSort (arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10,24,76,73,72,1,9]); // [1,9,10,24,72,73,76]