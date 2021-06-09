// two sum (easy)

// this is the most common and easy interview question:

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



