/* Number of Islands */

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


Time analysis :

Time Complexity: O(mxn) or, O(m * n)

* Complexity annotation (such as O ) describes the way an algorithm's performance (e.g. time or space) is dependent on the size of the input. It is "blind" to a specific input. When you write O(m+n) it means that the algorithm will take O(m) time when m>n and O(n) when m<n.

Space Complexity : O(n) or, O(1)

* To summarise the two examples above, O(1) denotes constant space use: the algorithm allocates the same number of pointers irrespective to the list size. In contrast, O(N) denotes linear space use: the algorithm space use grows together with respect to the input size.


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
