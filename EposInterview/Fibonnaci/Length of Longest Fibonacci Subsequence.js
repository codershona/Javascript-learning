A sequence x1, x2, ..., xn is Fibonacci-like if:

n >= 3
xi + xi+1 == xi+2 for all i + 2 <= n
Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

 

Example 1:

Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
Example 2:

Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].



SOLUTION:

const arr = [1,2,3,4,5,6,7,8]
Expected: 5

Time Complexity: O(n^2) DP
Space Complexity: O(n^2)


const lenLongestFibSubseq = (arr) => {
    let map = {};
    let M = arr.length;
    let value = [...Array(M)].map(m => Array(M).fill(2));
    let max = 0;
    
    // for loop method 
    for(let i = 0; i < M; i++) {
        map[arr[i]] = i;
        // nested for loops
        for (let j = 0; j < i; j++) {
            // if conditions
            if(arr[i] - arr[j] < arr[j] && arr[i] - arr[j] in map) {
        value[j][i] = Math.max(value[j][i], 1 + value[map[arr[i] - arr[j]]][j]);
            }
            max = Math.max(max, value[j][i]);
        }
    }
    return max === 2 ? 0 : max;    
};




