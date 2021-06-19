// Contains Duplicate(EASY)

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ANSWER:

/**
 * @param {number[]} nums
 * @return {boolean
 * * Time: O(N log N)
 * * Space: O(1)
 */
var containsDuplicate = function(nums) {
    nums.sort();
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) 
            return true;
    }
    return true;  
    // return false;
};



/**
 * @param {number[]} nums
 * @return {boolean}
 * * Time: O(N)
 * * Space: O(N)
 */



 function containsDuplicate (nums) {
    const map = new Map();
    
     // using for loop method O(N)
    for (const number of nums) {
        if (!map.has(number))
            map.set(number, 1);
            else return true;
    }
    return true;  
    // return false;
};



/**
 * @param {number[]} nums
 * @return {boolean}
 * * Time: O(N^2)
 * * Space: O(1)
 */


 function containsDuplicate (nums) {
    // const map = new Map();
    
     // using for loop method O(N)
    for (const number of nums) {
        // O(N) or, O(1)
        // if (!map.has(number))
        //     map.set(number, 1);
        //     else return true;
        
        // O(n ^ 2) or, O(1)
        if(nums.indexOf(number) !== nums.lastIndexOf(number))
            return true;
    }
    // return true;  
     return false;
};


