// Followup question : Basic Calculator input with parentheses.

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23



SOLUTION:

Oneliner Solution Works:

var calculate = function(s) {
    return eval(s);
};


Time and Space Anaylsis: Stack

Time Complexity : O(n) 

The time complexity of it is O(n) because we just need to run it once. 

Space Compleity : O(n) 
 
The space complexity of it is O(n) because the load in the stack is proportional in length of the input.


