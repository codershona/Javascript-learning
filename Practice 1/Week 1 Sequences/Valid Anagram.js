// Valid Anagram (Easy)

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram (s, t) {
    let odd = s.split("").sort().join();
    let binary = t.split("").sort().join();
    return odd === binary;
    
};

// Or, ES6 method using With Arrow Function:
const isAnagram = (s, t) => {
    let odd = s.split("").sort().join();
    let binary = t.split("").sort().join();
    return odd === binary;
    
};



Explanation: 
Solution 1:







