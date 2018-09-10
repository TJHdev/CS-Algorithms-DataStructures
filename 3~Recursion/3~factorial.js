debugger;

function factorialItter(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i
  }
  return total;
}

factorialItter(4);



function factorial(num) {
  if (num === 1) return 1; // triggers the base case
  return num * factorial(num - 1)
}

factorial(4)


// factorial(4)
//      4 * factorial(3)
//               3 * factorial(2)
//                         2 * factorial(1)


//     24                     
// factorial(4)    6
//       4 * factorial(3)   2
//                 3 * factorial(2)    1
//                             2 * factorial(1)

