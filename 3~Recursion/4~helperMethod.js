debugger;

function outer(input) {
  var outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable;
}

function collectOdds(nums) {
  let result = []; // every time we call collectOdds it is going to result to an empty array
  
}

debugger;
function collectOddValues(arr) {
    let result = [];

    function helper (helperInput) {
      if(helperInput.length === 0) {  // base case
        return;
      }

      if(helperInput[0] % 2 !== 0) {
        result.push(helperInput[0])   // pushing into the array
      }

      helper(helperInput.slice(1));  // recursive function with the begining removed
    }

    helper(arr);

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);