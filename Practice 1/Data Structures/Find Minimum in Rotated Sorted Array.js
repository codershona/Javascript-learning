// Find Minimum in Rotated Sorted Array (Medium)

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.


SOLUTION:
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
    let indexOne = 0;
    let indexTwo = nums.length - 1;
    // using while statement
    while (indexOne < indexTwo) {
        const maximum = Math.floor((indexOne + indexTwo) / 2);
        // using if statement condition.
        // if (nums[maximum] < nums[indexTwo])
         if (nums[maximum] > nums[indexTwo])
            indexOne = maximum + 1;
        else indexTwo = maximum;
    }
    return nums[indexOne];
};



EXPLANATION:

Here, we have const findMin as a variable which call with arrow function to executed with let indexOne and indexTwo variable equal 0 as well as nums parameter member with length array substraction 1. Using while statement , condition 1 indexOne is less than condition 2 indexTwo. To executed code block, maximum has const variable equal Math.floor array prototype floor method which declare indexOne condition 1 addition to indexTwo condition 2 divided by 2. We can if conditional statement, it has nums parameter with maximum variable that is greater than nums parameter indexTwo conditional 2 array as well as indexOne condition 1 equal maximum variable addition to 1. Otherwise, else the indexTwo condition 2 is equal maximum variable. Finally it would be return the nums parameter of indexOne variable expression. 

