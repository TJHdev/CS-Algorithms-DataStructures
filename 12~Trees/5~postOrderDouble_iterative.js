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
var postOrderIterativeDoubleStack = function(root) {
  if(!root) null;
  let result = [];
  let callStack1 = [];
  let callStack2 = [];
  let curr = root;

  callStack1.push(curr);

  while(callStack1.length !== 0) {

    curr = callStack1.pop();
    callStack2.push(curr);

    if(curr.left) {
      callStack1.push(curr.left);
    }
    if(curr.right) {
      callStack1.push(curr.right);
    }

  }
  while(callStack2.length !== 0) {
    result.push(callStack2.pop().val);
  }
  
  return result;
}
postOrderIterativeDoubleStack(tree1); // expect [3,8,6,20,15,10]


