// Merge Intervals
// Medium

// Req -> Http (https) Request Object.
// Res -> Http (https) Response Object. 

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104



SOLUTION:


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((x, y) => x[0] - y[0]);
    const output = [intervals[0]];
    // using For Of Loop method
     for(let mergedInterval of intervals) {
         prev_Intervals = output[output.length - 1]
         // using if conditional statement
         if (prev_Intervals[1] >= mergedInterval[0]) {
             prev_Intervals[1] = Math.max(mergedInterval[1], prev_Intervals[1])
         } else {
         output.push(mergedInterval)
        }             
     } 
      return output;
};

console.log(merge);

// for of statement loops through the values of an iterable object Method

// for (variable of iterable) {
//   // code block to be executed
// }

Explanation:

Here I had const variable which has merge object and that has intervals parameters with arrow function sand this execute, but the intervals parameters is using with array.prototytpe.sort() method which has two value that are x and y using arrow function with x 0 array substraction y with 0 array. The const variable has output objects equal array intervals parameters with 0 array. Next we can use for...of loop method. Here, the let mergedInterval is a variable which is of the intervals parameter that declare iteration. To execute, the prev_Intervals objects is equal output object with output.length array of members length which returns the value with substraction 1. Now, we can use if conditional statement, where it has prev_Intervals object with 1 array >= Greater than or equal operators with mergedInterval variable with 0 array. That has another condition is prev_iNTERVALS OBJECT WITH 1 ARRAY EQUAL Math members max method whichhas two valuye items that has mergedInterval object variable with 1 array and prev_Intervals items with 1 array. Next we use else to excute the false statement with conditions that has output object member push() method and it has mergedInterval variable. Finally it returns output object. 





