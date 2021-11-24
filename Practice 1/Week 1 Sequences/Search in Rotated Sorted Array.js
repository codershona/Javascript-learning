// Search in Rotated Sorted Array(Medium)

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104





SOLUTION:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let length = nums.length;
    // execute the code
    if (length === 0) return -1;   
    let indexOne = -1;
    let head = 0;
    let tail = length - 1;
    let middle;    
    // using loop while statement 
    while(head <= tail) {
        middle = Math.floor((head + tail) / 2);
        // if condition
        if (nums[middle] === target) {
            // execute the code
            indexOne = middle;
            break;
        } else if ((nums[head] <= target && target < nums[middle]) || (nums[head] > nums[middle] && (nums[head] <= target || target < nums[middle]))) {
            // execute the code
            tail = middle - 1;
        } else {
            head = middle + 1;
        }        
    } 
    return indexOne;
};


EXPLANATION: Here, if we had const variable which ahs search object by calling with two parameters which was nums and target with the arrow function now if we execute the code, the let variable has length equal nums member with length. Now we use if conditional statement the length object value is equal value type or strict equal to 0 value of the conditions that returns with minus 1. Next, we had let variable that has indexOne object equal minus 1, head object equal 0, tail object that is equal length minus 1 and middle object. Now, we can use while conditional statement that has head object as a condition that is Less than or equal tail conditional object. Now if we execute the code block the middle object has Math.floor() function returns the largest integer less than or equal to a given number. Here, head is a parameters value addition to tail parameters value that is divided into 2. Now, we can use if conditional statement, so that we can use the block of code to be executed if the condition is true. Here the nums parameter which is declaring with middle obejct as an array that is Strict equal into target parameter. nOW WE CAN EXECUTE THE CODE BLOCK WHERE ITS CONDITION IS TRUE. The indexOne object is equal middle object. Now we can use break statement "jumps out" of a loop. (break use labelname.) Then, else if the condition 2 statement, block of code to be executed if the condition1 is false and condition2 is true. Here, Condition 2 has the nums parameters that has head object a an array less than or equal target parameter which is Logical AND with target parameters and that is less than nums parameter with middle obejct array and it is	Logical OR with Expression grouping by the nums parametr with head as an array that is greater than nums parameters with middle array adn logical AND with Expression groupng with nums parametrs with head array that is less tah equal target parameters whih is logical OR with target parameter again it is less than nums parameters with middle array. Now if we execut ethe code block if the condition1 is false and condition2 is true so that, the tail object will be equal middle object minus 1. Otherwise, else statatement , if we execute the the code block if the condition1 is false and condition2 is false, here the head object equal middle object addition 1. Finally it returns indexOne object which was equal -1. 







