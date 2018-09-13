let queueArray = [];

queueArray.push('google');
queueArray.push('instagram');
queueArray.push('youtube');

queueArray.shift();
queueArray.shift();
queueArray.shift();


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.back = newNode; 
      this.front = newNode; 
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if(this.size === 0) return null;
    let removedNode = this.front;
    if(this.size === 1) {
      this.back = null; // there is no requirement for this.front to be set to null as removedNode.next = null
    } 
    this.front = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

let queue = new Queue();
queue.enqueue('HELLO');
queue.enqueue('GOOD');
queue.enqueue('DAY');
queue.enqueue('SIR');

queue.dequeue();