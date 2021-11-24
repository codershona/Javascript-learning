// Best Time to Buy and Sell Stock(Easy)

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
    
// };

function maxProfit(prices) {
    let margin = prices[0];
    let sequel = 0;
    for(let i = 1; i < prices.length; i++) {  // > was providing error
        margin = Math.min(prices[i], margin);
        sequel = Math.max(sequel, prices[i] - margin)        
    }
    return sequel
    
};



Explanation: 
Solution 1:
We had a function which name is maxProfit and has (prices) parameters. Now If we want to execute the code, we can call the fuction using let local variables to return the value with margin and sequel value. This margin value has proces with 0 array and the sequel has only 0 numbers and strings. Now I am using for loop method where it has let variable with statement 1 with i equal 1. 

Statement i - 1 is to executed (one time) before the execution of the code block. Statement 1 sets a variable before the loop starts (let i = 0).

Next, Statement 2 defines the condition for the loop to run (i must be less than prices.length).

Finally, Statement 3 increases a value (i++) each time the code block in the loop has been executed. 

In the second point, MAth is a golobal object, which Simulate a Max Method on Arrays.

If we wan to find the smallest number (in a list of numbers) using the Math.min() method, now margin store the values using Math.min to find lowset value with i prices arrays and margin. On the other hand we canuse sequel values to store and find the maximum vakue using Math.min whuch has sequel, prices ith i array that substract the margin value. 
As a result it returns, the sequel value. 