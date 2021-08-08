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

Here, we have const variable with groupAnagrams objects that has strs parameters which executed, const variable with new_Map obejcts equal empty object or we can use new Object() to declare as an empty obejct. Now, we will use for of loop method where with let newStringVariable as an variable which is used for every iteration the value of the next property is assigned to the variable. Then, using of to loop through the value which has strs it was parameter as an iterable object. Next, using const variable to declare the keyArray as an array equal ...newStringVariable which is called(spread syntax operater with value newStringVariable) as an Value which is used for inserting the elements of one array into another. Then using Array.prototype.sort() method to Creating, displaying, and sorting an array, its method sorts the elements of an array in place and returns the sorted array. Beside this, using Array.prototype.join() method to creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. ('') is actually used as an an empty string to creates an array or join an array. Now, using if conditional statement which is basicallyused for  to specify a block of code to be executed, if a specified condition is true. Moreover, if there id new_Map as an condition it will be declare as Logical not that has keyArray which was an array that creates to execute the Changing an Array Element by new_Map as array name new_Map to change the elements with keyArray as an array item with empty array. This has another condition to execute the new_Map object with keyArray to create with push method that declare newStringVariable. Finally it returns Object with value of new_Map object. 





