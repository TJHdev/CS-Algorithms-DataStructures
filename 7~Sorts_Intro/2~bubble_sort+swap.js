debugger;

function bubbleSort () {
  // start looping from a variable called i at the end of the array towards the beginning. (reduces the amount of space being sorted)
  // start an inner loop with a variable called j from the beginning until i-1
  // if arr[j] is greater than arr[j+1], swap those two values.
  // return the sorted array.
}



// ES2015
const swapES15 = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}


// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort (arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    for (let j = 0; j < i; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
    // console.log('One pass complete')
  }
  return arr;
}

bubbleSort([7,2,3,4,5,6,2]);



// optimised with noSwaps
function bubbleSort (arr) {
  let noSwaps
  for (let i = arr.length - 1; i > -1; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
        noSwaps = false;
      }
      console.log(arr, arr[j], arr[j+1])
    }
    if(noSwaps) {
      break;
    }
    console.log('One pass completed')
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6]);
bubbleSort([7,2,3,4,5,6,2]);
