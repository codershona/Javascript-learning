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




