debugger;
const sameFrequency = (num1, num2) => {
  num1 = num1 + '';
  num2 = num2 + '';
  if (num1.length !== num2.length) {
    return false;
  }

  const lookup = {};

  for (let char of num1) {
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }
  for (let char of num2) {
    if(!lookup[char]){
      return false
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

sameFrequency(182, 281);
sameFrequency(32,14);