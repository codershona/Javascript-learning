// Palindromic Substrings (Medium)

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.
Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.

SOLUTION:
const countSubstrings = (s) => {
    let countSubstringResult = 0;
    let length = s.length;
    // using for loop method 
    for(let x = 0; x < length; x++) {
        // for loop method
        for(let y = x; y < x + 2; y++) {
            let lastString = x;
            let returnString = y;
            // using while conditions
            while(lastString >= 0 && returnString < length && s[lastString] === s[returnString]) {
                countSubstringResult++;
                lastString--;
                returnString++;                
            }
            
        }
    }
    return countSubstringResult;
};

EXPLANATION:
Here we had const with countSubstrings variable which is arrow function that calls s parameter. Now we can execute the code, here let variable has countSubstringResult variable equal 0 and length variable has s parameter array member with length. Now we are using for loop method, so if we had let variable that has statement x equal 0 here, the statement 1, x execute 0 time before the execution of the code block and it starts the set of the variable before the loop starts, statement 2, has x must be less than length variable where that defines the condition to execute the code block. Then statement 3, has x increment where it can execute by increases of a value everytime after the code block is executed. Here if we nesetd the for loops method, we can Loop through the elements in each sub-array. So, let variable has y execute equal x time means the statement 1 has starts the set of the variable before the loop starts. Statement 2, y must be less than x addition 2 variable where it defines the condition to execute the block. Statment 3, x has increment which increases the value everytime after the code block is executed. 
Now, if we have let variable lastString equal x statement and returnString equal y statement. By using while conditions, the condition 1, lastString variable is Greater than or equal with 0 conditions, Logical AND with returnString variable must be less than length Logical AND s parameter has array with lastString variable strict equal s parameter with returnString variable. The loops through a block of code as long as a specified condition is true, countSubString is postfix increment, lastString variable has postfix decrement and returnString has postfix increment. Finally it return to end the statement by the expression of countSubstringResult variable.  
