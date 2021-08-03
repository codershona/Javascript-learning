// Valid Parentheses
// Easy

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.



// Solution:
// I am using stack for this to solve the problem.
/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (str) => {
    let closedOne = [];
    let closedTwo = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            // usign push method 
            closedOne.push(str[i]);
            // now I will use pop method
        // } else if (closedTwo[closedOne.pop() !== str[i]]) {
            } else if (closedTwo[closedOne.pop()] !== str[i]) {
            return false;
        }
    }
    return closedOne.length ? 0:1
};

console.log(isValid);







