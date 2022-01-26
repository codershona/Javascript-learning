Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.



SOLUTION:

Space Complexity : O(n)
Time Complexity : O(n)

* In Tine Complexity, When a function has a single loop, it usually translates into a running time complexity of O(n).

var longestCommonSubsequence = function(text1, text2) {
    const distance = new Array(text2.length + 1).fill(0);
    let prevText = distance.slice();
    
    // using for loop methods
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            // using if/else conditions
            if (text1[i - 1] == text2[j - 1]) {
                distance[j] = 1 + prevText[j - 1];
            } else {
                distance[j] = Math.max(distance[j], distance[j - 1]);
            }
        }
        prevText = distance.slice();
    }
    return distance[text2.length];
};


