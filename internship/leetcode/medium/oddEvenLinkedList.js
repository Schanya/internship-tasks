
// Definition for singly - linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next || !head.next.next) {
        return head
    }

    let cur = head
    let next = head.next

    while (next && next.next) {
        const temp = next.next
        const temp2 = cur.next

        cur.next = temp
        next.next = temp.next
        temp.next = temp2

        cur = cur.next
        next = next.next
    }

    return head
};

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))

console.log(oddEvenList(list));