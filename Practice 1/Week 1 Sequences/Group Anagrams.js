// Group Anagrams
// Medium

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.


SOLUTION:

/**
 * @param {string[]} strs
 * @return {string[][]}
 ----------------------------
 * using array.map(function(currentValue, index, arr), thisValue) it is Array map() Method which creates a new array with the results of calling a function for every array element.
 * let array = [...value] which is Inserting the elements of one array into another and  Copying an array.
 * The spread syntax is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements.
 * The spread syntax is denoted by three dots, …
 * (...numbers) is Array to arguments means spread syntax allows elements to be passed in as individual arguments
 */
const groupAnagrams = (strs) => {
    const new_Map = {};
   // That means new_Map is with a new, empty object.
     // this is an empty object like, var colors = new Object();
    // It declares new object and equivalent to new Object();
    // {} declares an object, with no members. Like an empty data container. [] would declare an empty array.
    // Using for of loop method:
    for (let newStringVariable of strs) {
        // const keyArray = [...strs].sort().join(''); ---> this cause error.
        const keyArray = [...newStringVariable].sort().join('');
        // using if condition statement
        if (!new_Map[keyArray]) {
            new_Map[keyArray] = [];
        }
        new_Map[keyArray].push(newStringVariable);
    }
    return Object.values(new_Map);    
};

console.log(groupAnagrams);


// ------- OR ------
const groupAnagrams = (strs) => {
    // const new_Map = {};
    const new_Map = new Object();
   // That means new_Map is with a new, empty object.
     // this is an empty object like, var colors = new Object();
    // It declares new object and equivalent to new Object();
    // {} declares an object, with no members. Like an empty data container. [] would declare an empty array.
    // Using for of loop method:
    for (let newStringVariable of strs) {
        // const keyArray = [...strs].sort().join(''); ---> this cause error.
        const keyArray = [...newStringVariable].sort().join('');
        // using if condition statement
        if (!new_Map[keyArray]) {
            new_Map[keyArray] = [];
        }
        new_Map[keyArray].push(newStringVariable);
    }
    return Object.values(new_Map);    
};

console.log(groupAnagrams);


EXPLANATION:





