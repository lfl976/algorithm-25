/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归的方式
var preorder = function (root) {
  let res = [];
  const visit = (node) => {
    if (node) {
      res.push(node.val);
      if (node.children) {
        for (let v of node.children) {
          visit(v);
        }
      }
    }
  };
  visit(root);
  return res;
};

// 迭代的方式
var preorder = function (root) {
  if (root === null) return [];
  let arr = [];
  let res = [];
  arr.push(root);
  while (arr.length) {
    let node = arr.shift();
    res.push(node.val);
    if (node.children) {
      arr.unshift(...node.children);
    }
  }
  return res;
};

// 测试
