/* Substring with Concatenation of All Words */

You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]



SOLUTION:



Time Complexity : O(N)


Space Complexity : O(N)

For N= length of string, M=number of words, K=length of a word. That is like O(N K^2 M log M).


O(N K^2 M log M) : 

* Yes. Terms of a big-oh expression can be separated into individual big-oh expressions, so O(2m+n) = O(2m) + O(n) = O(m) + O(n) = O(m+n)

* if k is constant then O(n*k) = O(n) // constants become insignificant when considering the final time complexity

* If K is Constant. O(n*K) = O(n). O(n log n) is subset of O(n) where O(n) is linear in time. O(n) is any day faster or better in Time Complexity.

* O(n) function is bounded by a linear function for sufficiently large n, but an O(n log n) function may not be.

Also, O(k*n) is the same thing as O(n), assuming that k is a constant

* If k is a constant then O(n•k) is better. Because logn progresses, very slowly though, to infinity.

* It depends on what k is. If log n grows faster than k (for example, if k is a constant), then O(nk) is asymptotically smaller. If k grows faster than log n, then O(n log n) is asymptotically smaller. If they grow equally fast, then they're equal.

/**
 * k-prep
 */
const findSubstring = (s, words) => {
    let mergeCount = words.toString().split(',').join("").length;
    
    let wordsOne = words.map(l => l[0]);
    let result = [];
    
    // using for loop methods
    for (let i = 0; i < (s.length - mergeCount + 1); i++) {
        let subString = s.substring(i, i+mergeCount);
        // using if conditions 1
        if (!wordsOne.includes(subString[0])) continue;
        
        let subStringArray = subString.match(new RegExp(`.{1,${words[0].length}}`, 'g')); // do not put space between regexp in 1and words array 0 length.
        
        // if conditions 2
        // if(subStringArray.sort().toString() === words.sort().toString()) result.push(i);
        if(subStringArray.sort().toString() === words.sort().toString()) result.push(i);
    }
    return result;
};



