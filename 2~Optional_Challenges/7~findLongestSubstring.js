debugger;

function findLongestSubstring (str) {
  let longest = 0;
  let lookup = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if(lookup[char]) {
      start = Math.max(start, lookup[char]);
    }
    // index - beginning of substring +1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    lookup[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('rithmschool'); //7
findLongestSubstring(''); //0
findLongestSubstring('thisisawesome'); //6
findLongestSubstring('bbbbb'); //1
findLongestSubstring('longestsubstring'); // 8