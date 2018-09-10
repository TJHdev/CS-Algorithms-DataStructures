debugger;

function isPalindrome (str) {
  let originalStr = str;
  let result = '';

  function helper (string) {
    if (string.length < 1) {
      return
    }
    result = result + string[string.length - 1];
    helper(string.slice(0, string.length - 1))
  }


  helper(str);

  return originalStr === result;
}

isPalindrome('amanaplanacanalpanama');
isPalindrome('tacocat');
isPalindrome('awesome');

function isPalindrome(str){
  if(str.length === 1) return true; // base case 1
  if(str.length === 2) return str[0] === str[1]; // base case 2
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))  // recursively runs from the begining and end
  return false; 
}