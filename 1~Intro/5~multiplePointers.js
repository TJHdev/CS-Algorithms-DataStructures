const multiplePointers = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (right > left) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (-arr[left] > arr[right]) {
      left ++;
    } else {
      right --;
    }
  }
}


multiplePointers([-3,-2,0,1,4,6]);
multiplePointers([-3,-2,0,1,2,6]);