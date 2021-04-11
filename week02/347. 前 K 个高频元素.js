/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 思路：用map保存每个值出现的频次，然后排序，取出前k个
var topKFrequent = function (nums, k) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    }
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((a) => a[0])
    .slice(0, k);
};
