/* Hard */

You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

 

Example 1:


Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation: 
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
Example 2:


Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1
Explanation: We need to eliminate at least two obstacles to find such a walk.



Solution:

/**
 * BFS
 * Time Complexity: O(m*n) --> Worst case traversing all cells
 * Space Complexity: O(m*n) --> Worst case storing all cells
 
 * Time Complexity: O(m*n) Means, complexity annotation such as O describes the way an algorithm's performance use in time and space which is dependent in the size of the input. It is blind to an specific input. When we write O(m + n) it means that the algorithm will take time O(m) time when m >(gretaer than) n  and O(n) when m <(less than) n. Here, O(m * n) is known as O(n2) or O order of n squared, if m is O(n). I assume that for matrix you probably would have the m = O(n) which is the number of columns, while n is a number of rows. So, m * n = O(n2).
 
 * Space Complexity: O(m*n) means, it is a parallel concept to time time complexity. For example, if we need to create an array of the size n, which would need O order od n means O(n) space. But when we create a two-dimensional array of size n* n or n * m this actually needs O(n2) or O oreder of n squared space.  
 Space complexity depends on a variety of things such as the programming language, the compiler, or even the machine running the algorithm.
 
 * Runtime Analysis: We are essentially constructing a graph with n * m * k nodes. Each node can have at most 4 edges (to adjacent unblocked nodes at the same level and blocked nodes at the higher level).
Thus, our graph has |V| = O(n * m * k) vertices and |E| = O(n * m * k) edges.
Then, we simply run BFS to find the shortest path which takes O(|V| + |E|) = O(n * m * k) time.

*/




