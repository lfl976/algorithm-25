/**
 * @param {string} s
 * @return {number}
 */
/**
 * 1.动态规划的状态状态转移方程
 * 当 s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]) 时，dp[i][j]=true，否则为false
 *
 * 当只有一个字符时，比如 a 自然是一个回文串。
 * 当有两个字符时，如果是相等的，比如 aa，也是一个回文串。
 * 当有三个及以上字符时，两边各去掉一个字符后如果是回文串，那么两边加上相同字符后也是，当 s[i]==s[j] 时，看 dp[i+1][j-1] 是不是一个回文串。
 *
 *
 */
var countSubstrings = function (s) {
  let dp = Array(s.length)
    .fill(0)
    .map((v) => Array(s.length).fill(0));
  let res = 0;
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        res++;
      }
    }
  }
  return res;
};
