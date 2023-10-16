function loop_size(node) {
    let size = 1;
    let seenNode = getNodeInLoop(node);
    let pointer = seenNode.next;

    while (pointer !== seenNode) {
        size++;
        pointer = pointer.next;
    }

    return size;
}

function getNodeInLoop(node) {
    let slow = node;
    let fast = node.next;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}