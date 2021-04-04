// https://leetcode-cn.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return null;
  let p = head;
  let p2;

  while (p) {
    let newNode = new ListNode(p.val);
    if (p2) {
      newNode.next = p2;
    }
    p2 = newNode;
    p = p.next;
  }
  return p2;
};
