const anagramCheck = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return true
  }
  const freqCounter1 = {};
  const freqCounter2 = {};
  
  for(let char of str1) {
    freqCounter1[char] = ++freqCounter1[char] || 1;
  }
  for(let char of str2) {
    freqCounter2[char] = ++freqCounter2[char] || 1;
  }
  for(let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false
    }
  }
  return true;
}

anagramCheck('test','ing1');
anagramCheck('test','test');
anagramCheck('ing','ing');

const anagramChecker = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};
  
  for(let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for(let i = 0; i < second.length; i++) {
    let letter = second[i]

    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

anagramChecker('test', 'test');