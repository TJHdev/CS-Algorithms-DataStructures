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

function inOrder (root) {
  if(!root) return null;
  let result = [];
  let callStack = [];
  let pointerNode = root;

  while(true) {
    while(Boolean(pointerNode)) {
      callStack.push(pointerNode)
      pointerNode = pointerNode.left;
    }
    if(callStack.length === 0) break;

    pointerNode = callStack.pop();
    result.push(pointerNode.val);
    pointerNode = pointerNode.right;
    
  }
  return result;
}

inOrder(tree1);
