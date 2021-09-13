// FizzBuzz (Hackerrank)
Given an integer number n, for multiples of three print “Fizz” for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

OR,

Consider the following problem:

Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


OR,


Given a number n, for each integer i in the range
from 1 to n inclusive, print one value per line as
follows:
• Ifi is a multiple of both 3 and 5, print FizzBuzz.
• If iis a multiple of 3(but not 5), print Fizz.
• Ifi is a multiple of 5(but not 3), print Buzz.
• If i is not a multiple of 3 or 5, print the value of i.​


OR, 


Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line ad follows:

if i is a multiple of both 3 and 5, print FizzBuzz.
-if i is a multiple of 3, but not 5, print Fizz.
-if i is a multiple of 5, but not 3, print Buzz.
-if i is not a multiple of 3 or 5, print the value of i.
FUNCTION DESCRIPTION
fizzBuzz has the following parameter(s): int n: upper limit of values to test (inclusive)
Returns: NONE
Prints:
The function must print the appropriate response for each value i in the set {1, 2, ..., n} in ascending order, each on a separate line.
CONSTRAINTS 0< n < 2 x 10^5

INPUT FORMAT FOR CUSTOM TESTING
Input from stdin will be processed as follows and passed to the function.
The single integer n, the limit of the range to test: [1,2, ...,n].




SOLUTION:


function fizzBuzz(n) {
    let arr = [...Array(n+1).keys()];
    let [a, ...b] = arr;

    b.forEach(i => {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    });
}
