/* Merge Intervals */


Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 


Time Analysis :

Time Complexity : O(n)

Space Complexity : O(n)

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


