/**
 * @param {number} n
 * @return {string[]}
 */

// 优化方式：减去重复的分支
var generateParenthesis = function (n) {
  const res = [];
  generate(0, 0, n, "");
  function generate(left, right, n, s) {
    if (left === n && right === n) {
      res.push(s);
      return;
    }

    if (left < n) generate(left + 1, right, n, s + "(");
    if (left > right) generate(left, right + 1, n, s + ")");
  }
  return res;
};
