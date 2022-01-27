// Initial Question: Basic Calculator input string without parentheses
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 


SOLUTION:


Time Complexity : O(n)

* The time complexity of it is O(n) because we just need to run it once.

Space Complexity : O(1)
About Space Complexity:

* O(1) space complexity means that the amount of memory that you use is constant and does not depends on the data that it is processing.

*  If you have a traversal algorithm for traversing the list which allocate a single pointer to do so, the traversal algorithms is considered to be of O(1) space complexity.

* O(1) denotes constant space use: the algorithm allocates the same number of pointers irrespective to the list size. 

* Space Complexity(s(P)) of an algorithm is the total space taken by the algorithm to complete its execution with respect to the input size. It includes both Constant space and Auxiliary space.

S(P) = Constant space + Auxiliary space

Constant space is the one that is fixed for that algorithm, generally equals to space used by input and local variables. 

Auxiliary Space is the extra/temporary space used by an algorithm.


* A O(1) function doesn't need to use a fixed size for all inputs, it just has to have a constant upper bound (on space) for all inputs.

* For example, suppose you have a function that takes a single integer input n, and it uses 10 kB for even n and 20 kB for odd n. This function takes O(1) space, but it certainly doesn't use a fixed size. However, the upper bound is fixed, at 20 kB.








