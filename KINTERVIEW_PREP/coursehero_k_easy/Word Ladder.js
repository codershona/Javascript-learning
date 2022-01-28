/* Word Ladder */

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.



SOLUTION:

Time complexity : O(N)

Space complexity : O(N^2)

const ladderLength = (beginWord, endWord, wordList) => {
    let wordDic = new Set(wordList);
    let startWord = [beginWord];
    let task = 1;
    
    // using while conditions
    while(startWord.length) {
        let later = [];
        
        // using for loop of method
        for(let x of startWord) {
            // using if conditions
            if (x == endWord) return task;
            // using for loop method
            for (let i = 0; i < x.length; i++) {
                // using for loop again
                for (let j = 0; j < 26; j++) {
                    let x2 = x.slice(0, i) + String.fromCharCode(97 + j) + x.slice(i + 1);
                    // using if condtions again
                    if(wordDic.has(x2)) {
                        later.push(x2);
                        wordDic.delete(x2);
                    }
                }
            }
        }
        startWord = later;
        ++task;
    }
    return 0;
};



