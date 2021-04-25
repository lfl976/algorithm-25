/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
var maxProfit = function (prices) {
  let len = prices.length,
    res = 0;
  for (let i = 1; i < len; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
