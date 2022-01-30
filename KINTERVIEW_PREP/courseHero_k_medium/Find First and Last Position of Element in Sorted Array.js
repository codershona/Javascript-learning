/* Find First and Last Position of Element in Sorted Array */

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]






SOLUTION:

Oneliner code:

function searchRange(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}




Time Complexity:

* O(n) time complexity in the worst case.

* the worst-case time complexity of linear search would be Θ(n).a
* In the worst-case analysis, we calculate the upper bound on the running time of an algorithm. We must know the case that causes a maximum number of operations to be executed. For Linear Search, the worst case happens when the element to be searched (x in the above code) is not present in the array. When x is not present, the search() function compares it with all the elements of arr[] one by one.

* O(n)  worst case algorithm may be slower.

Space Complexity: O(n)

* In the above algorithm, we’re calling the method only once for each input number. Thus, we reduced complexity to O(n). 

/**
 * k- prep
 */
const searchRange = (nums, target) => {
    let w = 0;
    let y = nums.length;
    let int = -1;
    
    // using while conditions 1
    while(w < y) {
        let max = Math.floor((w + y) / 2);
        
        // using if/else conditions 1
        if(nums[max] === target) {
            int = max;
            break;
        } if(nums[max] < target) {
            w = max + 1;
        } else {
            y = max;
        }
    }
    // using if conditions 2
    if(int < 0) {
        return [-1, -1];     
    }
    
     w = y = int; 
    // using while conditions 2
    while(nums[w] === nums[int]) w--;
    while(nums[y] === nums[int]) y++;
    return [w + 1, y - 1];   
};

