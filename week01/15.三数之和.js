// https://leetcode-cn.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let res = [];
  nums.sort((a, b) => a - b);
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue; // 和上一次的数字没有重复
    let i = k + 1,
      j = nums.length - 1;

    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]); // 找不一样的数字
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return res;
};

// 输入：[-1,0,1,2,-1,-4,-2,-3,3,0,4]
// 输出：[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]

let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
threeSum(nums);
