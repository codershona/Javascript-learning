// Longest Repeating Character Replacement (Medium)

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length



SOLUTION:

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    let rightSide = 0;
    let leftSide = 0;
    let maxCharCount = 0;
    const object = {};
    // using while loop method
    while(rightSide < s.length) {
        const character = s[rightSide];
        object[character] = object[character] ? object[character] + 1 : 1;
        // if statement
        if (object[character] > maxCharCount) maxCharCount = object[character];
        // if statement
        if (rightSide - leftSide + 1 - maxCharCount > k) {
            //execute the code
            object[s[leftSide]]--;
            leftSide++;
        }
        rightSide++;
    }
    return rightSide - leftSide;    
};



EXPLANATION:





