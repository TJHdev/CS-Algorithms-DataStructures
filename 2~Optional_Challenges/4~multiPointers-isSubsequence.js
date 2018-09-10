debugger;
// O(N + M) time
// O(1) space

function isSubsequence (str1, str2) {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        i++;
      }
      if (str1.length === i) {
        return true
      }
    }
  return false
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence (str1, str2) { 
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while(j < str2.length) { // loops through the second string, if it matches the currently looked for item in str1 move along to the next.
    if(str2[j] === str1[i]) i++
    if(i === str1.length) return true;
    j++
  }
  return false;
}


isSubsequence('abc', 'acb'); // false (order matters)
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true

// resursive solution

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
