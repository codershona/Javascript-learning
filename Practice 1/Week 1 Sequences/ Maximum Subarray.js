// Maximum Subarray
// Easy


Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Solution:

var maxSubArray = function(numbers) {
    var max_far = -Infinity;
    var max_present = 0;
    
    // using for loop method
    for (var e = 0; e < numbers.length; e++) {
        const value = numbers[e];
        // max_far = Math.max(value, max_present + value);
        // max_present = Math.max(max_present, max_far);
        max_present = Math.max(value, max_present + value);
        max_far = Math.max(max_present, max_far);
    }
    return max_far;    
};

Explanation :
First of all, I am using var variables with maxSubArray name and calling function with numbers parameters. Then, declaring var with max_far which stores the value -Infinity and max_present which is storing 0 value. By using for loop method statement 1 of the var variable has e equal 0 which also  sets a variable before the loop starts, statement 2 has e less than numbers parameters dot length and this defines the condition for the loop to run and statement 3 e as a increment which basically increases a value (e++) each time the code block in the loop has been executed. 

In my second point of the view, max_present object has by usingmath object methods and here Math.max returns the has the highest value in this list of arguments with three parametrs those are value, max_present which us addition to value parameter. Again, max_far object has Math.max which returns the highest value from the list of the arguments and it also has two parameters with max_present and max_far. Finally it returns max_far. 




