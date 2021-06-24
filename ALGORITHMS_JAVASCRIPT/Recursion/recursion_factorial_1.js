// Factorial recursion:
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.

function findFactorialRecursive(number) {
  // code here
  if (number === 2) {
    return 2;
  }

  // return answer;
   return number * findFactorialRecursive(number-1);
    // return number * findFactorialRecursive(4);
}

findFactorialRecursive(5);

function findFactorialIterative(number) {
  // code here
  let answer = 1;
  // simple conditional check
  if (number === 2) {
    answer = 2;
  }
  // for (let i = 2; i < number; i++) { // 24
  for (let i = 2; i <= number; i++) { // 120
   answer = answer * i;
  }
  return answer;
}

// findFactorialRecursive(5);
// findFactorialIterative(5);

// Recursion: 5! = 5 * 4 * 3 * 2 * 1
// Recursion: 5! = 5 * 4!
// Recursion: 5! = 5 * 4 * 3!
// Recursion = Stop -----> Recursion---> Stop -----> Recursion ----> Stop ---> Recursion
// factorial(5) ----> 5 ----> x ----> factorial(4) -----> 4 -----> x ----> factorial(3) ----> 3 ----> x ----> factorial(2) ------> 2 ----> factorial(0)

