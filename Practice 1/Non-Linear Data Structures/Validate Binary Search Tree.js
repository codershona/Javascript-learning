// Validate Binary Search Tree (Medium)

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1


SOLUTION:

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
var isValidBST = (root) => {
    if(!root)
       return true
    return depthFirstSearch(root, Number.MIN_SAFE_INTEGER, Number.MAXIMUM_SAFE_INTEGER)
    
    function depthFirstSearch(root, minimum, maximum) {
        if(!root)
            return true
        if(root.val <= minimum || root.val >= maximum)
            return false
        return depthFirstSearch(root.left, minimum, root.val) && depthFirstSearch(root.right, root.val, maximum)        
    }    
    
};




EXPLANATION:


