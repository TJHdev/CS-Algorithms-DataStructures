const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }

  let i = 0;
  for(let j = 1, length = arr.length; j < length ; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    } 
  }
  return i + 1;
} 

countUniqueValues([1,2,3,4,4,4,4]);