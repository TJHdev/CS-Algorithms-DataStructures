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
function inOrderIterative(root) {
  
  var callStack = [];
  var curr = root;
  var result = [];

  while (true) {

    while (Boolean(curr)) {
      callStack.push(curr);
      curr = curr.left;
    } // loop until you hit null

    if (callStack.length === 0) break; // if there is no current node and callstack is empty

    curr = callStack.pop(); // go back up one from null
    result.push(curr.val); // push that onto the results
    curr = curr.right; // go to the right
  }
  return result;
}
inOrderIterative(tree1); // expect [3,6,8,10,15,20]
