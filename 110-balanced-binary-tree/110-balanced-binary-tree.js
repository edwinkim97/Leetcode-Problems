const checkHeight = node => {
  if (node === null) return 0;
  
  const left = checkHeight(node.left);
  const right = checkHeight(node.right);
  
  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }
  
  // height of a node
  return Math.max(left, right) + 1;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
   if (root === null) return true;
    
    return checkHeight(root) !== false;
};