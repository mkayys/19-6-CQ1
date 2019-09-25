// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// Example 1:
// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5 = 5
// 5 = 2 + 2 + 1
// 5 = 2 + 1 + 1 + 1
// 5 = 1 + 1 + 1 + 1 + 1

// Example 2:
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.


// Example 3:
// Input: amount = 10, coins = [10]
// Output: 1

// Note:
// You can assume that

// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32 - bit integer



// can we assume the coins will always be sorted so that the last value is the highest coin value always;
// use the highest coin and then once we exhaust it, we remove it?
var change = function(amount, coins, memo = {}) {
    let key = amount + '-' + coins;
    if (key in memo) return memo[key]
    if (amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];

    let total = 0;

    for (let qty = 0; qty * currentCoin <= amount; qty++) {
        total += change(amount - qty * currentCoin, coins.slice(0, -1), memo)
    }

    memo[key] = total
    return memo[key];

};

change(5,[1, 2, 5]);
change(3, [2]);
change(10, [10]);