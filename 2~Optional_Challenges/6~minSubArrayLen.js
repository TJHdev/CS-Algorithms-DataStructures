debugger;

// the function should return the shortest array possible for which the values inside are greater than or equal to the checkValue.
function minSubArrayLen (arr, checkValue) {
  let start = 0;
  let end = 0;

  let min = Infinity;
  let temp = 0;

  while (start < arr.length) {
    //if current window doesn't add up to the given sum then
      // move the window to right
    if(temp < checkValue && end < arr.length) {
      temp += arr[end];
      end++;
    } 
    // if current window adds up to at least the sum given then
      // we can shrink the window
    else if (temp >= checkValue) {
      if (end-start < min) {
        min = end-start
      }
      temp -= arr[start];
      start++;
    }
    // current total less than required total be we reach the end need this to prevent infinite loop
    else {
      break; 
    }
  }
  return min === Infinity ? 0 : min;
}


minSubArrayLen([2,1,6,5,4],9);
minSubArrayLen([2,3,1,2,4,3],7);