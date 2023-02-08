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
var isSymmetric = function(root) {
    // 빈배열 시 true;
    if(!root) return true;
    
    // isSymmetric은 매개변수가 하나이므로 재귀함수 하나 생성
    // 대칭하면 true
    // root.left === root.right
    function recursion (left, right) {
        // 둘 다 null === true 
        if(!left && !right) return true;
        // 둘 중 하나만 null or 밸류가 같으면 false;
        // 같으면은 빠져야 함
        if(!left || !right || left.val !== right.val) return false;
        return recursion(left.left, right.right) && recursion(left.right, right.left)
    }
    return recursion(root.left, root.right);
};