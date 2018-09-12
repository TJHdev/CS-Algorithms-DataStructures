class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(val){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(!this.head){ // if the list is empty assign node to the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else { // if there are existing list values
      this.tail.next = newNode; // set the old tails next to point to the new node
      newNode.prev = this.tail; // set the new tails previous to be the existing tail
      this.tail = newNode;      // set the lists tail to point to the new tail.
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length === 0) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1) { // if the list is 1 in length set the list back to being empty
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // change the lists tail to point at the previous node (new tail)
      this.tail.next = null;      // change the new tails next to be null
      poppedNode.prev = null; // sever the pointer from the poppedNode back to the list
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if(this.length === 0) return undefined;
    let shiftedNode = this.head;
    if(this.length === 1) { // if the list is 1 in length set the list back to being empty
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next; // changes the lists head to point at the shiftedHeads next.
      this.head.prev = null; // sets the new heads previous to be null
      shiftedNode.next = null; // sever the pointer from the shiftedNode back to the list
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node (val);
    if (this.length === 0) { // if list is empty set new node as both head + tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; // prev property on the head = newNode;
      newNode.next = this.head; // set next property on the new node to be the be the head property.
      this.head = newNode; // update the head to be the new node
    }
    this.length++;
    return this;
  }
  // if the index is less than 0 or greater than or equal to the length, return null
  // if the index is greater than half the length of the list
    // loop through the list starting from the tail and loop towards the middle
    // return the node once it is found
  // else
    // loop through the list starting from the head and loop towards the middle
    // return the noce once it is found.
  get(index) {
    if (index < 0 || index >= this.length) return null; // index checker
    let currentNode;
    if(index > (this.length / 2)) { // if the index is in the second half of the list, use reversed for loop
      currentNode = this.tail
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    } else { // if the index is in the first half of the list, use normal for loop
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }
  // if the index is less than zero or greater than the length return false
  // if the index is 0, unshift
  // if the index is this.length, push
  // use the get method to access the index - 1
  // set the next and previous properties on the correct nodes to link everything together
  // increment the length
  // return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(val));
    if (index === this.length) return Boolean(this.push(val));

    let insertedNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = insertedNode;
    afterNode.prev = insertedNode;
    insertedNode.next = afterNode;
    insertedNode.prev = beforeNode;
    this.length++;
    return true;
  }
  // if the index is less than zero or greater than or equal to this.length return undefined
  // if the index is 0, shift
  // if the index is length - 1, pop
  // use the get method to retrieve the item to be removed.
  // update the next and prev properties to remove the found node from the list.
  // set next and prev to null on the found node.
  // decrement the length
  // return the removed node

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift(index);  // remove from the beginning
    if(index === this.length - 1) return this.pop(index); // remove from the end

    let removedNode = this.get(index); // find the node to be removed.
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null; // sever the links on the removed node
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
list.push('!');
list.push('<3');
list.push(':)');
