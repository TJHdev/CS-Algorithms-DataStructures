class Node{
  constructor(val){
    this.val = val
    this.next = null;      
    this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(val){
    this.head = null
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.length === 0) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if(this.length === 0) return undefined;
    let shiftedNode = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      // sever links
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let currentNode;
    if(index > (this.length / 2)) {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    } else {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let node = this.get(index);
    if(node){
      node.val = val;
      return true
    }
    return false;
  }
  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let removedNode = this.get(index);

    removedNode.next.prev = removedNode.prev;
    removedNode.prev.next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if(index === 0) return Boolean(this.unshift(val));
    if(index === this.length) return Boolean(this.push(val));
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    let insertedNode = new Node(val);

    beforeNode.next = insertedNode;
    afterNode.prev = insertedNode;
    insertedNode.prev = beforeNode;
    insertedNode.next = afterNode;

    this.length++;
    return true;
  }
  reverse() {
    if (this.length === 0) return undefined;
    let currentNode = this.head;
    let nextNode = this.head;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = nextNode.next // updates the next node as th next node
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode; // updates the prev node as the current node
      currentNode = nextNode; // updates the current node as the next node
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }
}

let list = new DoublyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');
