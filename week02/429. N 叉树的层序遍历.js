/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
// 思路：每一次存储一层的节点到队列中，每一次也访问队列中所有节点
var levelOrder = function (root) {
  if (root === null) return [];
  let arr = [];
  let res = [];
  arr.push(root);
  while (arr.length) {
    let a = [];
    let temp = arr.map((o) => o.val);
    res.push(temp);
    for (let v of arr) {
      if (v.children) {
        a = a.concat(v.children);
      }
    }
    arr = a;
  }
  return res;
};
