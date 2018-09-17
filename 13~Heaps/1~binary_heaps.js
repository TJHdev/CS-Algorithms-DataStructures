class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }
  insert(val) {
    let values = this.values;
    values.push(val);
    let index = values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2); // use math to calc the parent index
    while (values[parentIndex] < values[index]) { // while the index node is in the wrong place keep looping
      let temp = values[parentIndex]; // swaps the parent with the child
          values[parentIndex] = values[index];
          values[index] = temp; // end of swap logic
      index = parentIndex; // shifts the index value up
      parentIndex = Math.floor((index - 1) / 2);
    }
    return values;
  }
  extractMax() {
    let values = this.values;
    let removedValue = values[0];
    let poppedValue = values.pop();
    if(values.length === 0) return poppedValue
    values[0] = poppedValue;

    // trickle down
    let parentIndex = 0;
    for(;;) {
      let leftChildIndex = (2 * parentIndex + 1); // use mathematic rule of the tree to find the left child
      let rightChildIndex = (2 * parentIndex + 2); // use mathematic rule of the tree to find the right child
      if(leftChildIndex >= values.length) leftChildIndex = null; // if outside bound, assign null
      if(rightChildIndex >= values.length) rightChildIndex = null; // if outside bound, assign null
      let leftChild = values[leftChildIndex];
      let rightChild = values[rightChildIndex];
      let parent = values[parentIndex];

      if(leftChild > rightChild || !rightChild) { // check which side is larger, OR if there is no right child, use left logic
        if(leftChild > parent) { // if child is larger swap
          values[leftChildIndex] = parent; // swap logic
          values[parentIndex] = leftChild;
          parentIndex = leftChildIndex; // reassign parentIndex
        } else {
          break; // if neither child is larger break out of the loop
        }
      } else {
        if(rightChild > parent) { // if child is larger swap
          values[rightChildIndex] = parent; // swap logic
          values[parentIndex] = rightChild;
          parentIndex = rightChildIndex; // reassign parentIndex
        } else {
          break; // if neither child is larger break out of the loop
        }
      }
    }
    return removedValue; // return the top value
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(27);
heap.insert(33);