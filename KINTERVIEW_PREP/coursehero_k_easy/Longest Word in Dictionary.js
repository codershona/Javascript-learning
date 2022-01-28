/* Longest Word In Dictionary */

Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

 

Example 1:

Input: words = ["w","wo","wor","worl","world"]
Output: "world"
Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:

Input: words = ["a","banana","app","appl","ap","apply","apple"]
Output: "apple"
Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".



SOLUTION:

Time complexity : O(N)

Space complexity : O(N)


* sort using bucket sort

* iterate and save into hashset, only if word (excluding the last character of word) is present in the hashset.

* Assign the word to 'res', only if current's word length is more than res.length, or if it is smaller in lexicographical order;

* return res;




