/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * 思路：每一个位置可以从其上边和和左边到达，但是第一行的位置只能从左边，
 * 第一列只能从上边。
 * 状态转移方程：点[i,j]
 * i>0,j=0, dp[i][0]=dp[i-1][0] + grid[i][0]
 * i=0,j>0, dp[0][j]=dp[0][j-1] + grid[0][j]
 * i>0,j>0, dp[i][j]=min(dp[i][j-1], dp[i-1][j]) + grid[i][j]
 */
var minPathSum = function (grid) {
  let rows = grid.length,
    columns = grid[0].length,
    dp = Array(rows)
      .fill(0)
      .map((item) => Array(columns));
  dp[0][0] = grid[0][0];

  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};
