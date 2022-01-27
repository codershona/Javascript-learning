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


const calculate = (s) => {
    let result = 0;
    let str = 1;
    let stack = [];
    let eval = [];
    
    // using for loop method
    for (let i = 0; i < s.length; i++) {
        let curStr = s.charAt(i);
        // if/else if conditions
        if (curStr === '') {
            continue;
        } else if (curStr === '+') {
            str = 1;
        } else if (curStr === '-') {
            str = -1;
        } else if (curStr >= '0' && curStr <= '9') {
            let digit = curStr;
            // using while conditions
            while (i + 1 < s.length && s.charAt(i + 1) >= '0' && s.charAt(i + 1) <= '9') {
                digit += s.charAt(i + 1);
                i++;
            }
            result += str * parseInt(digit);
        } else if (curStr === '(') {
            stack.push(result);
            result = 0;
            eval.push(str);
            str = 1;
        } else if (curStr === ')') {
            result = eval.pop() * result + stack.pop();
            str = 1;
        }                        
    }
    return result;
    
};


console.log(calculate);
console.log(calculate("1 + 1"));
// console.log('(1+(4+5+2)-3)+(6+8'.charCodeAt(0));
console.log(calculate(" 2-1 + 2 "));
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));