debugger;

function reverse (str) {
  let result = '';

  function helper (string) {
    if (string.length <= 1) return str;
    result = result + string[string.length - 1];
    helper(string.slice(0, string.length - 1))
  }
  
  helper(str);

  return result;
}

reverse('awesome');