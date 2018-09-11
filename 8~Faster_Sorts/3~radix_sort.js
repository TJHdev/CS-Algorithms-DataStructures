debugger;

// string implementations

function getDigit (num, place) {
  num = num + '';
  if(num[num.length - 1 - place] === undefined) {
    return 0;
  } else {
    return Number.parseInt(num[num.length - 1 - place]);
  }
}

function digitCount (num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Maths implementations

function getDigit (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(12345,0);

function digitCount (num) {
  if (num === 0) return 1;
  num = num + '';
  return num.length;
}


digitCount(25);  // 2
digitCount(1);   // 1
digitCount(314); // 3

function mostDigits (nums) {
  let maxDigits = 0;
  for (let num of nums) {
    let calcedLength = digitCount(num);
    if (calcedLength > maxDigits) {
      maxDigits = calcedLength;
    }
  }
  return maxDigits;
}

mostDigits([1234,56,7]); // 4
mostDigits([1,1,11111,11]); // 5
mostDigits([12,34,56,78]); // 2

function radixSort (nums) {
  // figure out the largest number of digits from the array
  // loop from k = 0 up to this largest number of digits
  // for each iteration of the loop
    // create buckets for each digit (0 to 9)
    // place each number in the corrseponding bucket based on its kth digit
  // replace our existing array with values in our buckets starting with 0 and going up to 9
  // return list at the end.
}

function radixSort (nums) {
  let maxDigitCount = mostDigits(nums);
  
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({length:10}, () => []) // constructs 10 empty arrays.
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i],k);
      buckets[digit].push(nums[i]);
    }

    nums = [].concat(...buckets);  // special way to combine arrays back into a single array.
  }
  return nums;
}


radixSort([15,0,1,5]);