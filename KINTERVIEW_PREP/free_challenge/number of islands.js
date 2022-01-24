Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

OR,

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.



SOLUTION:

/*
* 
How can we analyze the space complextiy for DFS.

Time complexity :

DFS' time complexity is proportional to the total number of vertexes and edges of the graph visited. In that case, there are N*M vertexes and slightly less than 4*N*M edges, their sum is still O(N*M).

Why so: because we process each edge exactly once in each direction. Situation where recursive call is immediately terminated does not matter as time spent for that call can be accounted for on the call site; and there is at most once call for each directed edge, hence O(N*M).

Space complexity :

Worst-case space complexity for DFS is Theta(N*M): just take any "snake-wise" maze:

......
#####.
......
.#####
......
Here DFS will be forced to traverse the path in whole before it stops and starts freeing up the stack. However, in no situation there will be more than N*M+1 elements on the stack.

Time complexity : O(n*m).
Space complexity : O(n*m).

Time complexity: O(n * m), where M and N are rows and columns, respectively.
Spatial/Space complexity: The worst case is O(M * N), when the whole grid is land, the depth of depth-first search reaches n * m.

Runtime: 159 ms, faster than 25.56% of JavaScript online submissions for Number of Islands.
Memory Usage: 41 MB, less than 99.05% of JavaScript online submissions for Number of Islands.


*/


const numIslands = (grid) => {
    let height = grid.length;
    let weight = height && grid[0].length;
    let countOne = 0;
    // using for loop method
    for(let x = 0; x < height; x++) {
        // using for loop method
        for(let y = 0; y < weight; y++) {
            // using if statement
            if (grid[x][y] === '0') 
            continue;
            countOne++;
            depthFirstSearch(x, y);            
        }
    }
    return countOne;
    
    function depthFirstSearch(x, y) {
        // if conditions
        if(x < 0 || y < 0 || x === height || y === weight)
            return;
        if (grid[x][y] === '0') 
            return;
        grid[x][y] = '0';
        depthFirstSearch(x - 1, y);
        depthFirstSearch(x + 1, y);
        depthFirstSearch(x, y - 1);
        depthFirstSearch(x, y + 1);
    }
    
};