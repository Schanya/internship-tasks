class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function filter(head, predicate) {
    let current = head;
    let filteredHead = null;
    let filteredTail = null;

    while (current !== null) {
        if (predicate(current.data)) {
            const newNode = new Node(current.data);

            if (filteredHead === null) {
                filteredHead = newNode;
                filteredTail = newNode;
            } else {
                filteredTail.next = newNode;
                filteredTail = newNode;
            }
        }

        current = current.next;
    }

    return filteredHead;
}

// Пример использования
const list = new Node(1, new Node(2, new Node(3)));
const filteredList = filter(list, x => x >= 2);

// Вывод результата
let current = filteredList;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}