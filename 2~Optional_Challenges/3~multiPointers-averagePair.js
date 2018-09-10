debugger;
// O(N)
function averagePair (arr, targetAverage) {
  let left = 0
  let right = arr.length - 1;

  while (right > left) {
    let calcedAverage = (arr[left] + arr[right]) / 2;
    if (calcedAverage === targetAverage) {
      return true
    }
    if (calcedAverage > targetAverage) {
      do {
        right--;
      } while (arr[right] === arr[right - 1])
    } else {
      do {
        left++;
      } while (arr[left] === arr[left + 1]);
    }
  }
  return false;
}

averagePair([1,2,2], 2.5);
averagePair([1,,3], 2.5);