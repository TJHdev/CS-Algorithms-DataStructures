const charCount = (str) => {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the 
}

const charCount = (str) => {
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND is key in object, add one to count
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    // if character is something else (space, period, etc.) don't do anything
  // return object at end
}

const charCount = (str) => {
  str = str.toLowerCase();
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for(var i = 0; i < str.length; i++){
    let char = str[i]
    if (char === ' ' || char === ',') {
      continue;
    }
    // if the char is a number/letter AND is key in object, add one to count
    if(result[char] > 0) {
      result[char] ++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
    // if character is something else (space, period, etc.) don't do anything
  }
  return result;
  // return object at end
}

const charCount = (str) => {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char] ++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

const charCount = (str) => {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
        return false;
  }
  return true;
}


console.log(charCount('My phone number, is 182763'));
charCount("aaaa"); // {a:4}
charCount("hello"); // {h: 1, e:1, l:2, o:1}
charCount("hello"); // {h: 1, e:1, l:2, o:1}

charCount("my phone number is 182763");
charCount("Hello hi");
charCount("");
charCount();
