// The comparator looks at a pair of elements (a and b)
// • If it returns a negative number, a should come before b.
// • If it returns a positive number, a should come after b.
// • If it returns 0, a and b are the same as far as the sort is concerned. 

function numberCompare(num1, num2) {
  return num1 - num2;
}

[2,12,1,10].sort(numberCompare);