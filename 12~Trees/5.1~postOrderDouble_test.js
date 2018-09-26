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
function postOrderDouble (root) {
  if(!root) return null;
  let result = [];
  let callStack = [];
  let curr;

  callStack.push(root);

  while(callStack.length !== 0) {
    curr = callStack.pop();
    result.push(curr.val);

    if(curr.left) {
      callStack.push(curr.left);
    }
    if(curr.right) {
      callStack.push(curr.right);
    }
  }
  result.reverse();
  return result;
}


postOrderDouble(tree1); // expect [3,8,6,20,15,10]