
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
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(5);
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(15);

tree.find(5);




// MY IMPLEMENTATION - RECURSION

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(val) {
//     let newNode = new Node(val);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       this.nodeCheck(this.root, newNode);
//     }
//     return this;
//   }
//   nodeCheck(currentNode, newNode){
//     if (newNode.val > currentNode.val) {
//       if(currentNode.right === null) {
//         currentNode.right = newNode;
//       } else {
//         this.nodeCheck(currentNode.right, newNode);
//       }
//     } else {
//       if(currentNode.left === null) {
//         currentNode.left = newNode;
//       } else {
//         this.nodeCheck(currentNode.left, newNode);
//       }
//     }
//   }
// }