/* Diagonal Traverse */

Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 
SOLUTION:

Time Complexity = O(n)

Space Complexity = O(n)


/**
 * k-prep
 */
const findDiagonalOrder = (mat) => {
    // if conditions 1
    if(mat.length === 0) return [];
    
    let rowS = mat.length;
    let colS = mat[0].length;
    let result = [];
    
    // using for loop method
    for(let i = 0; i < rowS + colS - 1; ++i) {
        // using if condtions 2
        if(i % 2 === 1) {
            let M = i >= colS ? i - colS + 1 : 0;
            let N = Math.min(i, colS - 1);
            // using while conditions
            while(N >= 0 && M < rowS) {
                result.push(mat[M++][N--]);
            }
        } else {
            let M = Math.min(i, rowS - 1);
            let N = i >= rowS ? i - rowS + 1 : 0;
            while(N < colS && M >= 0) {
                result.push(mat[M--][N++]);
            }
        }
    }
    return result;
};




