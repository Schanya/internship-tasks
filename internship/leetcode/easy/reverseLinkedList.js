var reverseList = function (head) {
    if (head === null) return null;
    if (head.next === null) return head;

    var newHead = reverseList(head.next);
    var temp = newHead;
    while (temp.next !== null) {
        temp = temp.next;
    }

    head.next = null;
    temp.next = head;

    return newHead;

};