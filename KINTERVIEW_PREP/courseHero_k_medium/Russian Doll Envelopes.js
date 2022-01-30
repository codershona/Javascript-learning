/* Russian Doll Envelopes */
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

 

Example 1:

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
Example 2:

Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1


SOLUTION:


Time Complexity : O(nlogn)

* O(log n) work O(n) times and have a time complexity of O(n log n).

* Technically, algorithms with complexity O(n + log n) and complexity O(n) are the same, as the log n term becomes negligible when n grows.

* O(n) grows linearly. The slope is constant.

* O(n log n) grows super-linearly. The slope increases (slowly).

* O(n log n) + O(n) and O(n log n + n) are equal, and both are equal to O(n log n)

* as log(n) > 1 for large n, so O(nlog(n)) is a superset of O(n).a
* Its best or average case in sorting like quick or merge sort.


Space Complexity: O(logn) 

Stack Complexity : O(n) 

* Space complexity is O(logn) in best and average case and that is due to stack space usage of the algorithm. (Quick Sort)

* O(nlogn) is known as loglinear complexity. O(nlogn) implies that logn operations will occur n times.

* Merge Sort has O(nlogn) time complexity in best, average and worst case. Space Complexity of Merge Sort is of order O(n) in all the cases, where as the stack space consumed is of order O(logn) because it always divides the array into two parts.

* Heap Sort has O(nlogn) time complexity in best, average and worst case same as with the Merge Sort. Space Complexity of Heap Sort is O(n) in all the cases where as the maximum stack space consumption at a particular
time is of order O(logn).

* This is algorithm is I assume heap or merge sort.algorithm

/**
 * k - prep
 */
const maxEnvelopes = (envelopes) => {
    envelopes.sort((b, a) => b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]);
    
    let stack = [];
    let maximum = 0;
    
    // using for loop of method
    for (let i of envelopes) {
        let largeEnvelope = stack.findIndex(each => each >= i[1]);
        
        // using if/else conditions
        if(largeEnvelope === -1) {
           stack.push(i[1]);
            maximum++;
        }
        else stack[largeEnvelope] = i[1];
    }
    return maximum;
};

