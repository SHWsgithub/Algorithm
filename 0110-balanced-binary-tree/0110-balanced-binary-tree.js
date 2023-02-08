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
    if (!root) return true;
    
    function recur(node) {
        if (!node) return 0;
        return Math.max(recur(node.left), recur(node.right)) + 1;
    }
    
    let leftHeight = recur(root.left);
    let rightHeight = recur(root.right);
    
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    
    return isBalanced(root.left) && isBalanced(root.right);
};