// Best Time to Buy and Sell Stock

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
        sequel = Math.max(sequel, prices[i]-margin)        
    }
    return sequel
    
};





