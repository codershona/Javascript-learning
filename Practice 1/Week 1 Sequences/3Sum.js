// 3Sum
// Medium


Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105


Solution:


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
    nums.sort((x, y) => x - y);
    // must add => (arrow function or it will show that "Syntax Error: missing ) after argument list" )
    const output = [];
    
    // using for loop method
    for (let i = 0; i < nums.length; i++) {
        let smaller = i + 1, higher = nums.length - 1, sum_total = 0;
        // using while---if--else if statement
        while (smaller < higher) {
            sum_total = nums[i] + nums[smaller] + nums[higher];
            // using if statement
            if (sum_total === 0) {
                // now we need to use push method
                output.push([nums[i], nums[smaller], nums[higher]]);
                while(nums[smaller + 1] === nums[smaller]) smaller++;
                while(nums[higher - 1] === nums[higher]) higher--;
                smaller++;
                higher--;         
            } else if (sum_total < 0) smaller++
             else higher--;
            // while(nums[i + 1] === nums[i]) i++;   
        }
        while(nums[i + 1] === nums[i]) i++;
          // return output;
    }
    return output;
};

console.log(threeSum);


Explanation:

