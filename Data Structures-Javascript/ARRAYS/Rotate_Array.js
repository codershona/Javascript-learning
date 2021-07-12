// Rotate Array(Medium)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// function rotate (nums, k) {  
//     // using for loop method
//     for (let e = 0; e < k; e++) {
//         nums.unshift(nums.pop());
//     }    
// };
// time limit exceed

function rotate (nums, k) {  
    let arrayItem = 0;
    const array_sub_Item = nums.length;
    k %= array_sub_Item;    
    // using for loop method
    for (let e = 0; e < k; e++) {
        // nums.unshift(nums.pop());
        arrayItem = nums.pop();
        nums.unshift(arrayItem);
    }    
};




// OR,

var rotate = function(nums, k) {
    for(let i=0; i<k; i++){
        nums.unshift(nums.splice(nums.length-1, 1)[0])
    }
    return nums;
};



