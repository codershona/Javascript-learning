// two sum (easy)

// this is the most common and easy interview question:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output = [];
    // using for loop method
    for(var x=0; x < nums.length; x++) {
        for(var y=1; y < nums.length; y++) {
            if(nums[x] + nums[y] === target) {
                output.push(x);
                output.push(y);
            }
        }
        return output;
    }
};
// Accepted

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var results = [];
    for (var i = 0; i < nums.length; i++){
        var j = i + 1;
        console.log( j, 'j' );
        while (j < nums.length){
            if(nums[i] + nums[j] === target){
                results.push(i);
                results.push(j);
                return results;
            }
            j++;
        }
    }
};

// Accepted



