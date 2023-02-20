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
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let sortList = [];
    let cur = head;
    
    while (cur) {
        sortList.push(cur.val);
        cur = cur.next;
    }
    
    sortList.sort((a, b) => a - b);
    
    cur = head;
    
    for (let i = 0; i < sortList.length; i++) {
        cur.val = sortList[i];
        cur = cur.next;
    }
    
    return head;
};