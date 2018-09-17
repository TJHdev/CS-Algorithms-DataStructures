class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.insertTime = Date.now(); could be used to compare nodes of the same priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let insertedNode = new Node(val, priority);
    const values = this.values;
    values.push(insertedNode);
    let insertedIndex = values.length - 1;
    let parentIndex = Math.floor((insertedIndex - 1) / 2);
    if(!values[parentIndex]) {
      return values;
    }
    while(parentIndex >= 0 && values[parentIndex].priority > values[insertedIndex].priority) {
      let temp = values[parentIndex];
          values[parentIndex] = values[insertedIndex];
          values[insertedIndex] = temp;
      insertedIndex = parentIndex;
      parentIndex = Math.floor((insertedIndex - 1) / 2);
    }
    return values;
  }
  dequeue() {
    const values = this.values;
    const removedNode = values[0];
    const poppedValue = values.pop();
    if(values.length === 0) return poppedValue;
    values[0] = poppedValue;

    let parentIndex = 0;
    for(;;) {
      let leftChildIndex = (2 * parentIndex + 1);
      let rightChildIndex = (2 * parentIndex + 2);
      if(leftChildIndex >= values.length) leftChildIndex = null; 
      if(rightChildIndex >= values.length) rightChildIndex = null;
      let leftChild = values[leftChildIndex];
      let rightChild = values[rightChildIndex];
      let parent = values[parentIndex];

      if(!leftChild && !rightChild) break; //checks that the children exist before looking at priority properties

      if(rightChild && leftChild.priority > rightChild.priority) { 
        if(rightChild.priority < parent.priority) { // if child is larger, swap
          values[rightChildIndex] = parent;
          values[parentIndex] = rightChild;
          parentIndex = rightChildIndex;
        } else {
          break;
        }
      } else {
        if(leftChild.priority < parent.priority) { // if child is smaller, swap
          values[leftChildIndex] = parent; // swap logic
          values[parentIndex] = leftChild; 
          parentIndex = leftChildIndex; // reassign parentIndex 
        } else {
          break;
        }
      }
    }
    return removedNode;
  }
}

let priority = new PriorityQueue();
priority.enqueue('Swolen face', '5');
priority.enqueue('Exploded heart', '0');
priority.enqueue('Exploded heart', '2');
priority.enqueue('Exploded heart', '3');
priority.enqueue('Exploded heart', '4');
priority.enqueue('Missing leg', '1');
priority.enqueue('Hmmmm', '1');