// Fibonacci Number =====

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


SOLUTION:


const fib = (n) => {
    const fibArr = [0, 1];
    // for loop
    for (let i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
    return fibArr[n];
};


Time Complexity: O(n);
Space Complexity: O(n);




MY solution:

const n = 2
expected : 1
const n = 3
expected: 2
const n = 4
expected: 3


console.log(n);

const fib = (n) => {
  const fibArr = [0, 1];
  // for loop
  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr[n];
}
console.log(fib(n)); // expected 1

const fib2 = (n) => {
  const fibArr2 = [2, 1];
  // for loop
  for (let i = 2; i <= n; i++) {
    fibArr2.push(fibArr2[i - 2] + fibArr2[i - 1]);
  }
  return fibArr2[n];
}
console.log(fib2(n)); // expected 3


const fib3 = (n) => {
  const fibArr3 = [1, 1];
  // for loop
  for (let i = 2; i <= n; i++) {
    fibArr3.push(fibArr3[i - 2] + fibArr3[i - 1]);
  }
  return fibArr3[n];
}
console.log(fib3(n)); // expected 2



// ====== Oneliner ====
const n = 2
expected : 1
const n = 3
expected: 2
const n = 4
expected: 3

console.log(n);
const n = 2
const fib = (n) => {
  return n == 0 ? 0 : n == 1 ? 1 : fib(n - 1) + fib(n - 2);
}
console.log(fib(n)); // expected 1

const n = 3
const fib = (n) => {
  return n == 0 ? 0 : n == 1 ? 1 : fib(n - 1) + fib(n - 2);
}
console.log(fib(n));  // expected 2

const n = 4
const fib = (n) => {
  return n == 0 ? 0 : n == 1 ? 1 : fib(n - 1) + fib(n - 2);
}
console.log(fib(n)); //expected 4





