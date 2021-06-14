/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let arr = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].codePointAt() - 97] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].codePointAt() - 97] === 1) {
      return i;
    }
  }
  return -1;
};
