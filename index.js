// Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.

// The Fibonacci numbers are defined as:

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 for n > 2.
// It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.


// Example 1:

// Input: k = 7
// Output: 2 
// Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
// For k = 7 we can use 2 + 5 = 7.
// Example 2:

// Input: k = 10
// Output: 2 
// Explanation: For k = 10 we can use 2 + 8 = 10.
// Example 3:

// Input: k = 19
// Output: 3 
// Explanation: For k = 19 we can use 1 + 5 + 13 = 19.



// console.log(k);






// // Math 2


// // A sequence x1, x2, ..., xn is Fibonacci-like if:

// // n >= 3
// // xi + xi+1 == xi+2 for all i + 2 <= n
// // Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

// // A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].



// // Example 1:

// // Input: arr = [1,2,3,4,5,6,7,8]
// // Output: 5
// // Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
// // Example 2:

// // Input: arr = [1,3,7,11,12,14,18]
// // Output: 3
// // Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].





const board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]] 
const click = [3,0]


// const updateBoard = (board, click) => {
//   let A = board.length;
//   let B = board[0].length;
//   let clickA = click[0];
//   let clickB = click[1];

//   if (board[clickA][clickB] === "M") {
//     board[clickA][clickB] = "X"
//     return board;
//   }

//   if (board[clickA][clickB] == "B") {
//     return board
//   }

//   let numA = clickA - 1;
//   let numB = clickB - 1;
//   let mClick = 0;

//   for (let i = numA; i < numA + 3; i++) {
//     for (let j = numB; j < numB + 3; j++) {
//       if(i < 0 || i >= A || j < 0 || j >= B) continue;
//       if(board[i][j] == "M") mClick++;
//     }
//   }

//   if(mClick != 0) {
//     board[clickA][clickB] == mClick.toString();
//     return board;
//   }
//   board[clickA][clickB] = "B"

//    for (let i = numA; i < numA + 3; i++) {
//     for (let j = numB; j < numB + 3; j++) {
//       if(i < 0 || i >= A || j < 0 || j >= B) continue;
//       board = updateBoard(board, [i][j]);
//     }
//   }
//   return board;
// }

console.log(board, click);