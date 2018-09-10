debugger;

function naiveSearch (longStr, shortStr) {
  // Loop over the longer string
  // Loop over the shorter string
  // if the characters don't match, break out of the inner loop
  // if the characters do match, keep going
  // if you complete the inner loop and find a match, incremet the count of matchs
  // return the count
}

function naiveSearch (longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if(shortStr[j] !== longStr[i+j]) {
        break;
      }
      if(j === shortStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch('lolwtfomglolomg', 'omg');
naiveSearch('testing', 'test');
