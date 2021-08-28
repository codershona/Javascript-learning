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

/**
 * @param {string} s
 * @return {number}
 */
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

