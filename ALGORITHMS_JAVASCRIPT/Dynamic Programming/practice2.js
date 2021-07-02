// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233....

let calculate = 0;
function fibonacci(v) {
  calculate++;
  if (v < 2) {
    return v
  }
  return fibonacci(v-1) + fibonacci(v-2);
}

fibonacci(6) 
fibonacci(7) // increasing 
fibonacci(21) // increasing 
fibonacci(1) // decreasing




// dynamic programming tips:

// Dynamic Programming = Divide & Conquer + Memoization

// Can be divided into sub-problem?
// Recursive Solution
// Are there repetitive subproblems?
// Memorize Subproblems.
// Demand a raise from your boss.




