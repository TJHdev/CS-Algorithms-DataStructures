debugger;

function maxSubarraySum (arr, windowLength) {
  let start = 0;
  let end = windowLength;

  if(arr.length < windowLength) {
    return null
  }

  let temp = 0;
  let max = -Infinity;

  // first loop through to add up the initial window
  for (let i = start; i < windowLength; i++) {
    temp += arr[i]
  }
  max = temp;

  // second loop through moves the window, adding and subtracting the new first and last items
  for (let i = end; i < arr.length; i++) {
    temp = temp - arr[i - end] + arr[i];
    if (temp > max) {
      max = temp
    }
  }

  return max;
}

maxSubarraySum([100,200,300,400],2); // 700