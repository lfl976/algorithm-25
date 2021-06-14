/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  var arr = s.split("");
  for (let start = 0; start < arr.length; start += 2 * k) {
    let i = start,
      j = Math.min(i + k - 1, arr.length - 1);
    while (i < j) {
      let tem = arr[i];
      arr[i++] = arr[j];
      arr[j--] = tem;
    }
  }
  return arr.join("");
};
