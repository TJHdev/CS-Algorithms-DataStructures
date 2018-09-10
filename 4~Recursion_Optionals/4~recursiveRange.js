debugger;

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

recursiveRange(6) // 21
recursiveRange(10) // 55