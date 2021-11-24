// Minimum Window Substring (HARD)

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.

SOLUTION:

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    let map = {};
    t.split('').forEach((c) => map[c] = (map[c] || 0) + 1);
    
    // remaining the match count
    let countOne = t.length;
    let last = 0;
    let remain = 0;
    let start = 0;
    let minimumLength = Infinity;
    let length = s.length;
    // using while conditions
    while(remain < length) {
        // if conditions
        if(map[s[remain++]]-- > 0) countOne --;
        // using while conditions
        while(countOne === 0) {
            // valid: if statement
            if(remain - last < minimumLength) {
                minimumLength = remain - last;
                start = last;              
            }
            // if conditions
            if(map[s[last++]]++ === 0)
                countOne++;           
        }
        
    }
    // variablename = (condition) ? value1:value2 ----> : called condition
    return minimumLength === Infinity ? '' : s.substr(start, minimumLength);   
};


EXPLANATION: