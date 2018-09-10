debugger;

function someRecursive (arr, cb) {
  let result = false;
  
  function helper(array, callback) {
    if(array.length === 0) {
      return
    }

    if(callback(array[0])) {
      return result = true;
    }
    helper(array.slice(1), callback);
  }

  helper(arr, cb);

  return result;
}


const isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], isOdd) // true


function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}


someRecursive([1,2,3,4], isOdd) // true