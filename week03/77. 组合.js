/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  dfs(1, n, k, []);
  function dfs(cur, n, k, temp) {
    if (temp.length + (n - cur + 1) < k) {
      return;
    }

    if (temp.length == k) {
      ans.push(temp);
      return;
    }
    dfs(cur + 1, n, k, [...temp, cur]);
    dfs(cur + 1, n, k, temp);
  }
  return ans;
};
