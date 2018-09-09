debugger;
const maxSubarraySum = (arr, windowLength) => {
  if (windowLength > arr.length) {
    return null
  }

  let max = -Infinity;
  let temp = 0;
  
  for(let i = 0; i < windowLength; i++) {
    temp += arr[i];
  }
  max = temp;

  for(let i = windowLength; i < arr.length; i++) {
    temp = temp -arr[i - windowLength] + arr[i];
    if(temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([1,2,3,4], 4);

maxSubarraySum([1,4,8,2,1,1,1,22], 3); // 14