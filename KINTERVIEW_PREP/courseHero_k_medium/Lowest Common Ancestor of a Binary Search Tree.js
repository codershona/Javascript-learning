/* Lowest Common Ancestor of a Binary Search Tree */



Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2




SOLUTION:

Time Complexity: O(N)

Space Complexity: O(1)

* O(1) Complexity: We consider constant space complexity when the program doesn't contain any loop, recursive function, or call to any other functions. 

* O(n) Complexity: We consider the linear space complexity when the program contains any loops.


/**
 * k-prep
 */
const lowestCommonAncestor = (root, p, q) => {
    // while conditons
    while(root !== null) {
        // if/else/else if conditions
        if(p.val < root.val && q.val < root.val) root = root.left;
        else if (p.val > root.val && q.val > root.val) root = root.right;
        else return root;
    }    
};



