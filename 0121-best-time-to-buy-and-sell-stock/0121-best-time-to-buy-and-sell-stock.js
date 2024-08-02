/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // a single day to buy one and choose a different day in the future to sell
    // Given: prices (array)
    // Return: maximum profit you can achieve from this transaction
    // how to determine the max profit, the price difference of each day 
    // loop through the array, find out the difference between the buy day to the sell day 
    // sliding window with two pointers
    // initiate buy day, sell day, max profit
    let buy = 0, sell = 1, maxP = 0;
    while(sell<prices.length){
        // check if it's profitable
        if(prices[buy] < prices[sell]){
            const profit = prices[sell] - prices[buy];
            // check if the profit is the max right now, if yes update the maxP
            if(profit > maxP){
                maxP = profit;
            }
        }else{
            // if it's not profitable, update the new low buy price
            buy = sell;
        }
        // update the sell day
        sell++
    }

    return maxP

};