/* Diameter of Binary Tree */

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1



SOLUTION:

Time complexity : O(N) [dfs] 

Space complexity : O(N) 

const diameterOfBinaryTree = (root) => {
    let longerPath = 0;
    
    deep(root);
    
    return longerPath;
    // creating deep function
    function deep(node) {
        // using if conditions
        if (!node) return 0;
        
        const left = deep(node.left);
        const right = deep(node.right);
        
        longerPath = Math.max(longerPath, left + right);
        // deep root
        return Math.max(left, right) + 1;
    }
    
};

console.log(diameterOfBinaryTree);





