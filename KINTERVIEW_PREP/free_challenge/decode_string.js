/* Medium */

/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].

*/


SOLUTION:

const decodeString = (s) => {
    let stackVar = []; // Function is called, return value will end up in stackVar
    // using for loop of to looping over an Array
    for (let x of s) {
        // using if / else conditions
        if(x !== ']') {
            stackVar.push(x);
        } else {
            // variable 1
            let tempVar = ""; // Function is called, return value will end up in tempVar
            // using while conditions which specify condition 1 is true
            while (stackVar[stackVar.length - 1] !== '[') {
                tempVar = stackVar.pop() + tempVar;
            }
            stackVar.pop(); // for [
            // variable 2
            let countNum = ""; // Function is called, return value will end up in countNum
            // using while conditions which specify condition 2 is true
            while (stackVar.length > 0 && stackVar[stackVar.length - 1].match(/[0-9]+/)) {
                // execute the code
                countNum = stackVar.pop() + countNum;
            }
                // variable 3
                countNum = parseInt(countNum);
                let returnNum = ""; // Function is called, return value will end up in returnNum
                // using while conditions which specify condition 3 is true
                while (countNum > 0) {
                    returnNum += tempVar;
                    countNum--;
                }
                stackVar.push(returnNum);                
            }            
        }
       // variable 4
        let output = ""; // Function is called, return value will end up in output
     // using while conditions which specify condition 4 is true
        while (stackVar.length > 0) {
            output = stackVar.pop() + output;
      }
      return output; // Function returns the value with output
};  


/** 
 * K_INTERVIEW PREP :
 
 * Explanation: Here I had use decodeString variable with s parameter which execute the stackVar variable with empty Array and loop the for of over an array where x is variable and s is iterable that declare the if conditions with x variable strict unequal right square brackets with string that execute the stackVar variable member with push method x variable that is specified condition is true. Then else which specified same condition is false, where tempVar means temporary variable is equal empty string and while condition 1 specified condition is true and execute the code blocks within stackVar into stackVarmemebr with length minus 1 into array and unstrict equal is string left sqaure brackets that execute the tempVar equal stackVar member woth pop method plus tempVar and then again execute the stackVar member woth pop method.with variable 2 which is countNum with empty string. Again using while condition 2 which is stackVar memebr with length greater than 0 Logical AND with stackVar into Array stackVar minus 1 member with match method regexp into Expression grouping common slash [0-9] which find any of the digits between the brackets, plus slash closing brackets and then execute the code blocks with countNum variable which is equal stackVar member with pop method plus countNum then delcare with countNum variable equal parseInt method with countNum variable. Again calling another returnNum variable with empty string. With while conditions countNum greater than 0 that execute returnNum with assignment tempVar. Then has countNum decrement. Then stckVar with push method which is returnNum variable. We can call our variable 4 which is output while conditions with stackVar.length greater than 0 and execute the output equal stackVar member with pop method plus output which returns the value output.
 
 * EXPLANATION OF TIME & SPACE COMPLEXITY : O of n means O(n)
 * The good aspect of JS is array can store value in different types 
 
 * TIME Complexity: It is  O(n)
 
 ** Reason: We can said that, an algorithm takes linear time which is called O(n) time because it was time complexity with O(n). Basically it means the algorithm takes time to run the increases at most linearly with the size of the input. More exactly we can say that, it has constant c similarly that has running time which is accurately cn for the each and every input of the size n. 
   
 * Space Complexity: It is O(n) (stack)
 ** Reason: N in Big O Notation usually means, the size of the input which is not the value passed into the algorithm.
  
  Here in the Space complexity means, that for each input element there may be up to a fixed number of k bytes allocated, for example, the amount of the memory needs to be run the algorithm which grows no faster than linearly at k*N.
  
  In my algorithm the space complexity is O(N) because here we need to store the n items in stack at the same time then the space complexity is O(n).
 */
