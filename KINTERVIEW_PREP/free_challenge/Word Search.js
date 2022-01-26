Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Follow up: Could you use search pruning to make your solution faster with a larger board?




SOLUTION:

Time Anaylsis:

Time complexity : O(n^2) 

Space complexity :O(n^2) 


## Time Complexity : O(n^2) means Quadratic time. A function with a quadratic time complexity has a growth rate of n2. If the input is size 2, it will do four operations. If the input is size 8, it will take 64, and so on.

* If we have double for loop methods in algorithm it will be double-loop of size n, so n^2.

* When we have an asymptotic analysis, we drop all constants and leave the most critical term: n^2. So, in the big O notation, it would be O(n^2).

* This function has 2 nested loops and quadratic running time: O(n2).

* Big O square means O(n^2)  or O(n/2).

* Technically, yes,  O(n/2)  is a “valid” time complexity.

* In practice, however, writing  O(n/2)  is bad form, since it is exactly the same set of functions as  O(n) .

* O(N^2) is for → 2 nested “for loops

* O(N^2) = O(N * N). For example a nested (i.e. double) for loop iterating over an array of an array.

## Space complexity :

* O(n^2) – square/polynomial complexity – space complexity grows proportionally to the square of the input size.

* Almost any algorithm can be made to use O(N^2) memory.

* To reduce runtime an obvious solution is to use a look up table of size N * N with pre calculated results. 

* In general, algorithms that are using matrices typically take N*N memory to store the matrices. For example to rotate a point in N=3 dimensions, you can use a 3x3 rotation matrix.



