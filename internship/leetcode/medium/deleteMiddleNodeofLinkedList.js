/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


var deleteMiddle = function (head) {
    if (!head || !head.next) return null;
    let fast = head.next,
        slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}

let root = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(6, null)))))));

console.log(deleteMiddle(root));
