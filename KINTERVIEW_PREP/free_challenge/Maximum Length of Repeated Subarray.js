Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

 

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5


SOLUTION:

Time Complexity :
O(AB)
O(a × b) where “a” is the size of the first array and “b” is the size of the second array.

Space Complexity :
O(AB) or O(B)
O(a × b) where “a” is the size of the first array and “b” is the size of the second array.

Time complexity: O(m * n)
Space complexity: O(m * n) -> O(n)


const findLength = (nums1, nums2) => {
    let response = 0;
    let same;
    let lastRows = Array(nums2.length);
    
    // using for loop method
    for (let i = 0; i < nums2.length; i++) {
        same = +(nums1[0] === nums2[i]);
        lastRows[i] = same;
        // using if conditions
        if(same && !response) response = 1;
    }
    
    // using for loop method again
    for (let j = 1; j < nums1.length; j++) {
        // again declaring for loop
        for (let k = nums2.length - 1; k > 0; k--) {
            same = +(nums1[j] === nums2[k]);
            // using if conditions
            if(same) {
                lastRows[k] = lastRows[k - 1] + 1;
                response = response > lastRows[k] ? response : lastRows[k];
            } else {
                lastRows[k] = 0;
            }
        }
        same = +(nums1[j] === nums2[0]);
        lastRows[0] = same;
        if (same && !response) response = 1;
    }
    return response;
};



