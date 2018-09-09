const anagramCheck = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
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

anagramCheck('test','test');
anagramCheck('test','ing1');
anagramCheck('ing','ing');