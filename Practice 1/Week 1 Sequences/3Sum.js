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

// solution
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
<br/>
Here using const variable with the object threeSum which has nums parameters with arrow function that execute, with Array.sort method andusing compare function by sung nums parameter and sort() and the x, y is comparsioning a two value and this value returns (negative, zero, positive) value. If the result is negative x is sorted before y.If the result is positive y is sorted before x.If the result is 0 no changes are done with the sort order of the two values. The compare function compares all the values in the array, two values at a time (x, y) and using arrow function syntax,  function calculates 40 - 100 (x - y), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100. It defines the comparison function using the arrow function syntax. So, x is negative and lowest value and y is positive and has highest value we can imagine this as a n example. Next, using const variables output as a object equal empty arrays. Then using for loop method where Statement 1 sets  a let variable before the loop starts (let i = 0). Statement 2 defines the condition for the loop to run (i must be less < than nums.length). Statement 3 increases a value (i++) each time the code block in the loop has been executed. Here nums parameter is working as an array becuase it is Array.prototype.length method and the length property sets or returns the number of elements in an array. That means nums.length = it returns the length of an array. nums = array and it return length as the numbers of the elements. Next, using let variable which has smaller statement equal the loops start with i addition 1, higher statement as equal array.prototype.length substraction 1 and sum_total statement as equal 0. Then using javascript while loop method where the loops through a block of code as long as a specified condition is true. So, condition are smaller(variable) is less than higher(variable)  which code execute the sum_total object equal nums parameter has i as an array elements addition to nums parameters that has smaller array elements to access addition to similar higher arrays elements. Using if statement which specify a block of code to be executed, if a specified condition is true so, the condition 1 has sum_total equal value 0 and using push method with output object. If I make a compare with the rest of the elements in the array. Using nums parameter with 3 array with i, smaller and higher. In the while method the condition has nums parameter with smaller + 1 array which is equal value nums array smaller and smaller has increment and it is similar like higehr array. Higher has substraction 2 equal value higher array and higher has decrement. Smaller has increment which increases a value (smaller++) each time the code block in the loop has been executed and Higher has decrement which decreases a value (higher--) each time the code block in the loop has been executed. Next about else if method whoch has condition 2 that has block of code to be executed if the condition1 is false and condition2 is true. So, condition 2 has sum_total is lesser than 0 and smaller value and increment. Then has else method block of code to be executed if the condition1 is false and condition2 is false that has higher decrement. Then while has condition nums parameter with array i value + 1 eual value nums parameter with i array and array has increment. Finally it returns output object.

