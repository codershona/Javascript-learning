Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab"


SOLUTION:

Time Complexity : O(n)

Space Complexity: O(n)


const findAnagrams = (s, p) => {
    let sStr = s.length;
    let pStr = p.length;
    let result = [];
    
    let sArr = new Array(26).fill(0);
    let pArr = new Array(26).fill(0);
    
    // using for loop method 1
    for (let i = 0; i < pStr; i++) {
        sArr[s.charCodeAt(i) - 97]++;
        pArr[p.charCodeAt(i) - 97]++;
    }
    
    // using for loop method 2
    for (let i = 0; i < sStr; i++) {
        // using if conditions
        if (wasAnagram(sArr, pArr)) {
            result.push(i);
        }
            sArr[s.charCodeAt(i) - 97]--
            sArr[s.charCodeAt(i + pStr) - 97]++;
    }    
    // creating wasAnagram ES5 function
    function wasAnagram(sArr ,pArr) {
        // using for loop method 3
        for (let i = 0; i < pArr.length; i++) {
            // using only if conditions
            if(sArr[i] !== pArr[i]) {
                return false;
            }
        }
        return true;
    }
    return result;    
};

console.log(([0,1,2]));
console.log(([0,6]));
