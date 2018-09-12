

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val); // create a New node.
    if(this.head === null) {
      this.head = newNode;  // if there are no nodes in the list, make the first node the head and the tail
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // assigns inside the current tail the pointer to the new tail
      this.tail = newNode;  // inserts the new tail at the end of the list
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.length) return undefined;
    let current = this.head;
    let previous = current;
    while(current.next) { // looks for the tail
      previous = current; // keeps track of the previous node before the tail
      current = current.next; // looks ahead to so that previous node can be tracked
    }
    this.tail = previous;  // inside the list resets the tail to be the tail - 1
    this.tail.next = null;  // sets tail.next to be null breaking the pointer
    this.length--;
    if(this.length === 0) {   // edge case for when going back down to an empty list
      this.head = null;
      this.tail = null;
    }
    return current;       // returns the removed node
  }
  shift(){
    if(!this.length) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) { // edge case for when going back down to an empty list
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){
    let newHead = new Node(val); // create a New head.
    if(!this.head){ // if there is no current head
      this.head = newHead // assign head and tail to be the newly created Node
      this.tail = newHead
    } else { // if there is a current head
      newHead.next = this.head; // new head's next points to old head
      this.head = newHead; // assign new node as new head
    }
    this.length++;
    return this;
  }
  get(index){
    if (index < 0 || index >= this.length) return null; // makes sure the searching index is valid
    let current = this.head;  // assigns head to current variable
    for (let i = 0; i < index; i++) {
      current = current.next; // loops through the list until the index is found
    }
    return current; // return the Node at the specified index
  }
  set(index, val){
    let foundNode = this.get(index); // finds the node using the get method
    if (foundNode) { // update the value on the existing node
      foundNode.val = val; 
      return true;
    }  
    return false;
  }
  insert(index, val){
    if (index < 0 || index > this.length) return false;
    if (index === 0 ) return Boolean(this.unshift(val));
    if (index === this.length) return Boolean(this.push(val));
    let insertedNode = new Node(val); // create a new node
    let previousNode = this.get(index - 1);
    insertedNode.next = previousNode.next;
    previousNode.next = insertedNode;
    this.length++;
    return true;
  }
  remove(index){
    if (index < 0 || index >= this.length) return null;
    if (index === 0 ) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  // swap the head and the tail
  // create a variable called next
  // create a variable called prev
  // create a variable called node and initialise it to the head property
  // loop through the list
  // set next to be the next property on whatever node is
  // set the next property on the node to be whatever the prev is
  reverse(){
    if(this.length < 1) return null;
    let node = this.head; // switches the head and tail
    this.head = this.tail;
    this.tail = node;
    let prev = null; // assigns prev to start as null
    let next;
    for(let i = 0; i < this.length; i++) {
      next = node.next; // updates next up to be the node.next, this is put at the start of the block, to prevent an extra loop
      node.next = prev; // redirects the next pointers to reverse the list.
      prev = node; // updates previous up to be the node
      node = next; // updates node up to be next
    }
    return list;
  }
  // print function to check status of the list easily.
  print(){
    let arr = [];
    var current = this.head;
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');
