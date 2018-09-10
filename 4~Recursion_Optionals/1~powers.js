debugger;

// should mimic the Math.pow() function



function power (num, exponent) {
  if(exponent === 0) return 1;
  return num * power(num, exponent - 1);
}

power(2,3)







// first attempt with a helper function

function power (num, power) {
  function helper(power) {
    if(power === 0) return 1;
    return num * helper(power - 1)
  }

  return helper(power);
}

power(2,3)
