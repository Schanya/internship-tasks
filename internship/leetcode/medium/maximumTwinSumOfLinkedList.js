function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let fast = head;
    let slow = head;

    while (fast) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    let left = head;
    let right = prev;

    let ans = 0;

    while (left && right) {
        ans = Math.max(ans, left.val + right.val);
        left = left.next;
        right = right.next;
    }

    return ans;
};
