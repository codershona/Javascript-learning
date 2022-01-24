/* Medium */
/* Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.


Example 1:


Input: grid = [[0,1],[1,0]]
Output: 2
Example 2:


Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
*/




SOLUTION:

/**
 * K-Interview Prep
 * BFS
 * * Time Complexity: O(N)
 * * Space Complexity: O(N)
 */
// Runtime: 108 ms, faster than 86.30% of JavaScript online submissions for Shortest Path in Binary Matrix.
// Memory Usage: 45.5 MB, less than 96.71% of JavaScript online submissions for Shortest Path in Binary Matrix.

/* 
  * === means strict equal
  * q means queue
  * n 
  * for of loop methods to pass the value of the iterable objects
  * && measn Logical AND
  * || measn Logical OR
  * !== means strict unequal
  * < means less than
  * >= means greater than or, equal
  * 
*/

const shortestPathBinaryMatrix = (grid) => {
    const order = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1]
    ];
    
    // if conditions 1
    if (grid[0][0] === 1) 
        return -1;
    
    // declaring variable 
    const n = grid.length;
    const q = [[0, 0, 1]];
    // using while condition where q.length is queue conditions
    while(q.length) {
        let [rows, column, pass] = q.shift();
        
        // if conditions 2
        if (rows === n - 1 && column === n - 1) 
            return pass;
        
        // using for of loop statement loops through the values of an iterable object
        for(let [orderX, orderY] of order) {
            let i = rows + orderX;
            let j = column + orderY;
            
            // if invalid continue
            if (i < 0 || i >= n) continue;
            if (j < 0 || j >= n) continue;
            if (grid[i][j] !== 0) continue;
            
            q.push([i, j, pass + 1]);
            grid[i][j] = 1;             
        }                        
    }    
    return -1;
};

# Time Complexity: O(N)
# Space Complexity: O(N)

Runtime: 113 ms
Memory Usage: 45.7 MB

Runtime: 108 ms, faster than 92.20% of JavaScript online submissions for Shortest Path in Binary Matrix.

Memory Usage: 45.7 MB, less than 94.27% of JavaScript online submissions for Shortest Path in Binary Matrix.


