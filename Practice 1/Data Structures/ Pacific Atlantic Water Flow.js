//  Pacific Atlantic Water Flow (Medium)

//  javascript easy dfs (depth first search)

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105




SOLUTION:

var pacificAtlantic = function(heights) {
    let result = [];
    let minimum = -Infinity;
    let rowSide = heights.length;
    let columnSide = heights[0].length;
    let pacificOcean = new Array(rowSide).fill().map(() => new Array(columnSide).fill(0));
    let atlanticOcean = new Array(rowSide).fill().map(() => new Array(columnSide).fill(0));
    // using for loop method left and right
    for(let rowStatement = 0; rowStatement < rowSide; rowStatement++) {
        depthFirstSearch(heights, rowStatement, 0, minimum, pacificOcean)
        // put rowStatement must otherwise cause errors
        depthFirstSearch(heights, rowStatement, heights[0].length - 1, minimum, atlanticOcean)
    }
    // using for loop method top and bottom
    for(let columnStatement = 0; columnStatement < columnSide; columnStatement++) {
        depthFirstSearch(heights, 0, columnStatement, minimum, pacificOcean)
        depthFirstSearch(heights, heights.length - 1, columnStatement, minimum, atlanticOcean)
    }
    // using for loop method
    for(let rowStatement = 0; rowStatement < rowSide; rowStatement++) {
        // using for loop method
        for(let columnStatement = 0; columnStatement < columnSide; columnStatement++) {
            // if conditions
            if(pacificOcean[rowStatement][columnStatement] == 1 && atlanticOcean[rowStatement][columnStatement] == 1) {
                result.push([rowStatement, columnStatement])
            }
        }
    }
    return result;
};

const depthFirstSearch = (heights, x, y, previousValue, Ocean) => {
    // using if conditions
    if (x < 0 || y < 0 || x > heights.length - 1 || y > heights[0].length - 1) return;
    if(heights[x][y] < previousValue) return;
    if(Ocean[x][y] == 1) return;
    // process call 
    Ocean[x][y] = 1;
    // called function as needed
    depthFirstSearch(heights, x - 1, y, heights[x][y], Ocean);
    depthFirstSearch(heights, x + 1, y, heights[x][y], Ocean);
    depthFirstSearch(heights, x, y - 1, heights[x][y], Ocean);
    depthFirstSearch(heights, x, y + 1, heights[x][y], Ocean);
}



EXPLANATION:

Here, when we have a var variable which has pacificAtlantic as using function and its name as it has heights parameters which can be executed with let variable. And it has result variable that has empty array, next it has minimum variable equal -Infinity that is called global object and scope, so the value Infinity (positive infinity) is greater than any other number. rowSide variable has Array.prototype as heights parameter member with length. It has columnSide variable that has heights parameters as array zero member with Return of the length. Then it has pacificOcean and atlanticOcean variables equal to new Array() constructor which creates Array objects and it has single parametrs which is called rowSide and it was a variable as well as filled with empty Array.prototype.fill(). moreover, it has Array.prototype.map() method uses Arrow function which again crates a new Array that has single parameters called columnSide variable and it filled with 0 parameter. 

 Now if we use for loop method in left and right where it has let variable with rowStatement condition that is equal 0; same condition whihc is less than rowSide variable; and condition 3 has increment. If we execute the statements, dfs means depth first serach has heights parameters, rowStatement condition as a parameters, 0 parameter, minimum variable as a parameter and pacificOcean variable as a parameter. Then, this another dfs has heights parameter, rowStatement condition as a parameter, heights array 0 member with length which is substract with 1, minimum parameterand atlanticOcean variable as a parameter. 
   
   Next if we use our second for...loop method conditions for the top and bottom method, where it has let variable with condition 1 as columnStatement equal 0; condition 2 less than columnSide variable and condition 3 has increment. If we execute the code, first dfs top has heigths parameter, 0 parameter, columnStatement condition as an parameter, minimum parameter and atlanticOcean variable parameter. In the second dfs of the bottom it has heights parameter, heigths parameter as an array member with length that has minus 1,  columnStatement condition as an parameter, minimum parameter and atlanticOcean variable as parameter. 

By using third for...loop method  it has let variable with rowStatement condition equak 0; condition 2 has less than rowSide variable and rowStatement condition increment. If we execute we hae another condition same the columnSide and columnStatement condition 1, 2, and 3. Now the condition declare that, pacificOcean variable has rowStatement array and columnStatement array which is equal to 1 and Logical AND of the atlanticOcean variable and this has rowStatement array and columnStatement array equal to 1. If we execute its result variable member with push () method that has rowStatement and columnStatement array. Finally it returns results variable. 


Moreover, the const variable  has dfs function which which calls five parameters those are, heights, x, y,previousValue, Ocean. Now we can execute that, if conditions has x less than 0 which is Logical OR y parameter less than 0 Logical OR x parameter greater than heights parameter array member with length substract 1 Logical OR y parameter greater than heights array woth 0 member with length minus 1. Then expression grouping has been closed by returning. Next second if conditions has heights parameter with x and y parameter array less than previousValue parameter expression grouping ends with return. This return statements all break the function execution. Because it does not have any [expression]. Basically, The return statement ends function execution and specifies a value to be returned to the function caller. Next third if condition has Ocean parameter whihc has x and y parameter array equal to 1 reutrn the statement  which breaks all the function execution. So that, the Ocean parameter has x and y array equal 1. Now the four dfs calls function which has four parameter whihc is heights and Ocean and heights arrays with x and y parameter. But here the first dfs has x parameter minus 1 and y parameter. Second, dfs has x + 1 parameter and y parameter. Third dfs has x parameter and y - 1 parameter. And last forth parameter x parameter and y + 1 parameter.  


