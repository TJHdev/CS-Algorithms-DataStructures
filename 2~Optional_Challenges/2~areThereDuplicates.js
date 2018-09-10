debugger;
// frequency counter implementation
//O(N)
function areThereDuplicates () {
  const lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    if(!lookup[arguments[i]]) {
      lookup[arguments[i]] = 1;
    } else {
      return true;
    }
  }
  return false
}

areThereDuplicates(1,2,2);
areThereDuplicates(1,2,3);


//O(N log(N))
function areThereDuplicatesMultiple (...args) {
  args.sort((a,b) => {
    return a - b;
  });
  let start = 0;
  let next = 1;
  while(next < args.length) {
    if(args[start] === args[next]) {
      return true
    }
    start ++;
    next ++;
  }
  return false;
}


areThereDuplicatesMultiple(1,2,2);
areThereDuplicatesMultiple(1,2,3);



//O(N2)
function areThereDuplicatesNested () {
  if(arguments.length === (0 || 1)) {
    return false
  }

  for (let i = 0, length = arguments.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if(arguments[i] === arguments[j]) {
        return true
      }
    }
  }
  return false;
}

areThereDuplicatesNested(1,2,2);
areThereDuplicatesNested(1,2,3);