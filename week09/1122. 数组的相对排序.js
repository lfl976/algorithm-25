/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  for (let v of arr1) {
    map.set(v, (map.get(v) || 0) + 1);
  }
  let i = 0;
  for (let v of arr2) {
    for (let j = 0; j < map.get(v); j++) {
      arr1[i++] = v;
    }
    map.delete(v);
  }
  let arr = [...new Set(map.keys())].sort((a, b) => a - b);
  for (let v of arr) {
    for (let j = 0; j < map.get(v); j++) arr1[i++] = v;
  }
  return arr1;
};
