function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(first, second) {
    this.first = first;
    this.second = second;
}

function alternatingSplit(head) {
    if (head === null || head.next === null) {
        throw new Error('Invalid input. The list must contain at least two nodes.');
    }

    let current = head;
    let first = new Node(current.data);
    let second = new Node(current.next.data);
    let firstHead = first;
    let secondHead = second;
    current = current.next.next;

    while (current !== null) {
        first.next = new Node(current.data);
        if (current.next !== null) {
            second.next = new Node(current.next.data);
        } else {
            second.next = null;
        }
        first = first.next;
        second = second.next;
        current = current.next ? current.next.next : null;
    }

    return new Context(firstHead, secondHead);
}

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

const result = alternatingSplit(list);
console.log(result.first); // 1 -> 3 -> 5 -> null
console.log(result.second); // 2 -> 4 -> null