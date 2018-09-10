debugger;

function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}


sumRange(3);

// sumRange(3)
// sumRange(2)
// sumRange(1) { base case! }

//     6
// sumRange(3)       3  
//   return 3 + sumRange(2)    1
//              return 2 + sumRange(1)


// 6
//   return 3 + 3
//              return 2 + 1