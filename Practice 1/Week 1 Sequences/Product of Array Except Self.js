// Product of Array Except Self
// Medium

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

SOLUTION:


var productExceptSelf = (nums) => {
    let product = [];
    nums.reduce((sumOne, valueOne) => {
      product.push(sumOne)
      sumOne *= valueOne
      return sumOne        
    }, 1);

    product.reduceRight((sumOne, valueOne, indexOne) => {
      product[indexOne] = product[indexOne] * sumOne
      sumOne *= nums[indexOne]
    return sumOne
    }, 1);
    return product;
};


Explanation: 

I had use variable as es6 arrow function which has productExceptSelf name and nums is a parameter. let variable has empty array. num.reduce is a array.prototype.reduce method and its a Array reduce() function and this will executes a reducer function for each value of an array. This function has 2 arguments like sumOne, valueOne which is calling Arrow Functions Return Value by using push method or Array.prototype.push() method which will adds one or more elements to the end of an array and returns the new length of the array like, product is a object or array prototype that is using push to add the sumOne elements which will end of the each array and return the new length in the array. Then sumOneis multiplication assignment valueOne that returns sumOne with 1. 


Object or arrayprototype product reduceRight() method executes a reducer function for each value of an array , from right to left. It has three arguments thats calls the return value. product object has inedexOne as an array which is equal prodect with indexOne array multiplication sumOne and this sumOne multiplication assignment with nums parameter with indeOne array and returns sumOne with 1 and again return product which was an empty array.
