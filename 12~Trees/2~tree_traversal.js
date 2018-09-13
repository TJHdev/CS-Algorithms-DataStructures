class QueueNode {
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
    let newNode = new QueueNode(val);
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

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) { // iterative implementation
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    for(;;) {
      if(newNode.val === currentNode.val) return false;
      if(val > currentNode.val) { // duplicates can be handled depending on the application
        if(currentNode.right === null) { // a frequency property on the node can keep track of duplicates
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else { // doesn't need to check for equal to due to initial check
        if(currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }
  find(val) {
    if(this.root === null) return false;
    let currentNode = this.root;
    let notFound = true;
    while(currentNode && notFound) { // keeps looping until either the value is found or null is hit
      if(val > currentNode.val) {
        currentNode = currentNode.right;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        notFound = false;
      }
    }
    if(notFound) return false; // returns false instead of null if a val isn't hit
    return currentNode;
  }
  BreadthFirstSearch() {
    let queue = new Queue();
    let data = [];
    let visitedNode;
    if(this.root) {
      queue.enqueue(this.root);
    }
    while(queue.size !== 0) {
      visitedNode = queue.dequeue().val; // need to access the value not the queues node
      if(visitedNode.left) queue.enqueue(visitedNode.left);
      if(visitedNode.right) queue.enqueue(visitedNode.right);
      data.push(visitedNode.val); // only want a list of the data
    }
    return data;
  }
  DepthFirstSearchPreOrder() {
    let data = [];
    let currentNode;
    if(this.root) { // if there is no root return the empty array.
      currentNode = this.root;
    } else {
      return data;
    }
    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(currentNode); // call the recursive function
    return data;
  }
  DepthFirstSearchPostOrder() {
    let data = [];
    let currentNode;
    if(this.root) { // if there is no root return the empty array.
      currentNode = this.root;
    } else {
      return data;
    }
    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.val); // changes the order at which the node values are pushed to the array
    }
    traverse(currentNode); // call the recursive function
    return data;
  }
  DepthFirstSearchInOrder() {
    let data = [];
    let currentNode;
    if(this.root) {
      currentNode = this.root
    } else {
      return data
    }
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(currentNode);
    return data;
  }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.find(6);

tree.DepthFirstSearchInOrder();