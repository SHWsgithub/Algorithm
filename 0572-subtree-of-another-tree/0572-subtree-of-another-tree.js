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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) {
        return false;
    }
    
    
    const isEqual = (x, y) => {
        if (!x && !y) {
            return true;
        }
        if (!x || !y) {
            return false;
        }
        return x.val === y.val && isEqual(x.left, y.left) && isEqual(x.right, y.right);
    }
    
    
    if (isEqual(root, subRoot)) {
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};