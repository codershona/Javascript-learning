// Maximum Product Subarray (Medium)

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

SOLUTION:

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    let output = -Number.MAX_VALUE;
    let minimumArray = 1;
    let maximumArray = 1;
    // using for....of method
    for (let numberVariable of nums) {
        [minimumArray, maximumArray] = [
            Math.min(numberVariable, minimumArray * numberVariable, maximumArray * numberVariable),
            Math.max(numberVariable, minimumArray * numberVariable, maximumArray * numberVariable),         
        ];
        output = Math.max(output, maximumArray);
    }
    return output;    
};

console.log(maxProduct);



EXPLANATION:
Here, we are using const variable where it has maxProduct object withnums parameter declaring arrow functions. We can noe execute where it has local variable that declares the function to access with let variable that has output object equal substraction Number.MAX_VALUE to represent the property represents the maximum numeric value representable. Then it has minimumArray with equal 1 and maximumArray with array 1. Next using for...of method where the let numberVariable as variable of the nums parameter iterations. Now we can execute with the two Array items that has minimumArray and maximumArray. Then we had used Math object to allow Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments. In Math.min it has three parameters to One or more numbers to compare. n1 is a number that compare the numberVariable parameter with n2 of minimumArray Multiplication with numberVariable and maximumArray parameters that has Multiplication with numberVariable parameters. Then using comma operator then we can use Math.max as in same process like Math.min to declare in array elements. After that, we can use output object equal Math.max() method which has output and maximumArray with two parameters. Then we can return output.






