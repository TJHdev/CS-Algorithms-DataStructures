let stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop();

let stackTwo = [];

stackTwo.unshift('google');
stackTwo.unshift('instagram');
stackTwo.unshift('youtube');

stackTwo.shift();

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;   
    this.size = 0;
  }
  push(val) {
    let newNode = new Node (val);
    if (this.size === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top; // links the new node to the old last
      this.top = newNode;  // updates the stack's top to be the newNode.
    }
    return ++this.size;
  }
  pop() {
    if(this.size === 0) return null;
    let shiftedNode = this.top;
    if(this.size === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = shiftedNode.next;
    }
    this.size--;
    return shiftedNode.val;
  }
}

let stackStealer = new Stack();
stackStealer.push('HELLO');
stackStealer.push('THERE');
stackStealer.push('MATEY');