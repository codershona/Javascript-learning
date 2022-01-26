Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false


SOLUTION:

## 1st solution works :

const searchMatrix = (matrix, target)  => {
  return matrix.flat().includes(target)
};

* Time Complexity : O(n)
* Space Complexity : O(n)

## 2nd solution works and it is Pure brute force method:

## Time Complexity : O(M*N) 

* They are linear and subquadratic time complexities respectively.

* For example, Suppose I've got two sets of data that I am performing some operation. Subquadratic time functions similarly but it is dependent rather than independent. For every m, you do n things or vice versa. Thus we do at most n^2 operations. It's in O(n^2) but it's probably going to be less than that but definitely more than O(n) so we use O(m*n)to make that clear. We can call O(M*N) or O(n^2) in some cases.

* So we might say that finding the union of two sets is O(m+n), where m and n are the sizes of the inputs, but finding their Cartesian product is O(m·n).

* m * n is O(n2) if m is O(n). I assume that for matrix you probably will have m = O(n) which is the number of columns while n is a number of rows. So m * n = O(n2).

* As you can see from the code, m and N represent two data sizes. We can’t evaluate the order of magnitude of M and N in advance, so we can’t simply use the addition rule to omit one of them when we express the complexity. Therefore, the time complexity of the above code is O (M + n).

In this case, the original addition rule is not correct, we need to change the addition rule to: T1 (m) + T2 (n) = O (f (m) + G (n)). But the multiplication rule continues to work: T1 (m)T2(n) = O(f(m) f(n))。


## Space Complexity : O(M*N)

* The array will take O(M*N) space.
* It was Nested loops. Means, First we'll consider loops where the number of iterations of the inner loop is independent of the value of the outer loop's index.

* The outer loop executes N times. Every time the outer loop executes, the inner loop executes M times. As a result, the statements in the inner loop execute a total of N * M times. Thus, the complexity is O(N * M). In a common special case where the stopping condition of the inner loop is j < N instead of j < M (i.e., the inner loop also executes N times), the total complexity for the two loops is O(N2).

* O(M*N) is basic complexity analysis in space complexity. It is used to analyze the growth relationship between algorithm execution efficiency and data size. It can be roughly expressed that the algorithm with higher order complexity has lower execution efficiency.

* When i = N / 2, it will run N / 2 times.

// 2nd solution works and it is Pure brute force

const searchMatrix = (matrix, target)  => {
    // declaring for loop 
    for (let i = 0; i < matrix.length; i++) {
        // declaring for loop again
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) return true;
        }
    }
    return false;
}


