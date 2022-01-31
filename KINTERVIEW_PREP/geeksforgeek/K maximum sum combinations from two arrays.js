/* K maximum sum combinations from two arrays */


Given two equally sized arrays (A, B) and N (size of both arrays).
A sum combination is made by adding one element from array A and another element of array B.
Display the maximum K valid sum combinations from all the possible sum combinations.
Examples:

Input : A[] : {3, 2}
 B[] : {1, 4}
 K : 2 [Number of maximum sum
 combinations to be printed]
Output : 7 // (A : 3) + (B : 4)
 6 // (A : 2) + (B : 4)
Input : A[] : {4, 2, 5, 1}
 B[] : {8, 0, 3, 5}
 K : 3
Output : 13 // (A : 5) + (B : 8)
 12 // (A : 4) + (B : 8)
 10 // (A : 2) + (B : 8)



Idea:
Sort both arrays array A and array B so that we can start from the beginning of the two arrays to
push sums to a heap.
Create a max heap to store the sum combinations along with the indices of elements from both
arrays A and B which make up the sum. Heap is ordered by the sum.
Pop the largest (i, j) and push two candidates (i+1, j) and (i, j+1) until K == 0.
Time: O(NlogN) , assuming K <= N , Space: O(K) .




SOLUTION:


Approach 1 (Naive Algorithm) : 
We can use Brute force through all the possible combinations that can be made by taking one element from array A and another from array B and inserting them to a max heap. In a max heap maximum element is at the root node so whenever we pop from max heap we get the maximum element present in the heap. After inserting all the sum combinations we take out K elements from max heap and display it.
Below is the implementation of the above approach. 


Time Complexity: O(N2)

<script>
// Javascript program to find K
// maximum combinations
// from two arrays,
 
// function to display first K
// maximum sum combinations
function KMaxCombinations(A, B, N, K)
{
 
    // max heap.
    let pq = [];
 
    // Insert all the possible
    // combinations in max heap.
    for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
        pq.push(A[i] + B[j]);
 
    // Pop first N elements
    // from max heap and
    // display them.
    let count = 0;
    pq.sort((a, b) => a - b).reverse();
    while (count < K)
    {
    document.write(pq[0] + "<br>");
    pq.shift();
    count++;
    }
}
 
// Driver Code
    let A = [ 4, 2, 5, 1 ];
    let B = [ 8, 0, 5, 3 ];
    let N = A.length;
    let K = 3;
 
    // Function Call
    KMaxCombinations(A, B, N, K);
 
 
// This code is contributed by gfgking
</script>



