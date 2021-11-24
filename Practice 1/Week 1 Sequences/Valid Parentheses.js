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



// ------- OR, ------
const isValid = (str) => {
    let closedOne = [];
    let closedTwo = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    // using strings to less the code
    let strings = str.length;
    for (let i = 0; i < strings; i++) {
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

Explanation:

Here I am using const variable function which had isValid name and had str (strings) as a parameter. To executed the code, I am using let variable which had closedOne that has empty arrays and closedTwo that has arrow functions expression to destruct with parameters and this variable does not create a new scope. Next I am using for loop method which has let variable that is calling statement 1,  as sets a variable before the loop starts (let i = 0) ,Statement 2, defines the condition for the loop to run (i must be less than < strings.length), Statement 3, increases a value (i++) each time the code block in the loop has been executed.

Next, I had use if statement which calls condition 1 as strings has i arrays which has equal value and type with '(' object and it has logical or condition 2 as strings has i arrays which has equal value and type with '{' and it has logical or condition 3 as strings has i arrays which has equal value and type with '['. We are using push method to access object methods the objectname is closedOne and the methodName has push method by calling stringss with i arrays. Otherwise I am using else if method by using condition 1 as closedTwo and closedOne object with calling pop method that is calling not equal value by accessing strings by arrays i. Then return false Otherwise, returning obejct with length aas a propertyname which has condition ? ternary operator with 0 condition (:) 1.  




