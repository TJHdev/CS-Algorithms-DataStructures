function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let tree1 = new TreeNode(10);
tree1.left = new TreeNode(6);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(8);
tree1.right = new TreeNode(15);
tree1.right.right = new TreeNode(20);
/*
    10
   /  \
  6    15
 / \     \
3   8    20
*/
var postOrderIterativeSingleStack = function(root) {
  if(!root) null;
  let result = [];
  let stack = [];
  let curr = root;
  do {
    while(curr) { // move to left most node
      if(curr.right) { // pushes right child to stack if it exists
        stack.push(curr.right);
      }
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop(); // pop item from stack and set as current.

    // if popped item has right child and the right child is not processed yet, 
    // make sure right child is proccessed before current.
    if(curr.right && stack[stack.length - 1] === curr.right) {
      stack.pop();
      stack.push(curr);  // if top of the stack is the same as current.right, remove it and replace with current
      curr = curr.right;
    } else { // else print curr data and set root as null
      result.push(curr.val);
      curr = null;
    }
  } while (stack.length !== 0);
  return result;
}

postOrderIterativeSingleStack(tree1); // expect [3,8,6,20,15,10]

var postOrderIterativeSingleStack = function(root) {
  let prev = null;
  let stack = [];
  let result = [];

  stack.push(root);
  
  while(stack.length !== 0) {
    let currentNode = stack[stack.length - 1];

    // Just think about going down the tree in this "if"
    // block, either left side or the right side
    // (but not both sides)
    // If a node has both left and right children, this "if" block
    //  will put only the left in the stack

    if(prev === null || prev.left === currentNode || prev.right === currentNode) {
      if(currentNode.left !== null) { // traverse left first
        stack.push(currentNode.left);
      } else if (currentNode.right !== null) {
        //  If both sides are present, right child is NOT pushed onto stack at this point
        // That right child is handled on line 39 after we have already finished left traversal
        stack.push(currentNode.right);
      } else {
        result.push(currentNode.val);
        stack.pop();
      }

    } else if (currentNode.left === prev) { // Coming up from the left side
      if(currentNode.right !== null) {
        stack.push(currentNode.right);
      } else {
        result.push(currentNode.val);
        stack.pop();
      }

    } else if (currentNode.right === prev) { // Coming up from the right side
      result.push(currentNode.val);
      stack.pop();
    }
    prev = currentNode;
  }
  return result;
};

postOrderIterativeSingleStack(tree1); // expect [3,8,6,20,15,10]