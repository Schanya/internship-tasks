function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}

function sortedMerge(list1, list2) {
    let dummyNode = new Node();
    let tail = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1 !== null) {
        tail.next = list1;
    }

    if (list2 !== null) {
        tail.next = list2;
    }

    return dummyNode.next;
}


var list = { value: 1, next: { value: 5, next: { value: 6, next: { value: 2, next: { value: 3, next: null } } } } };
console.log(mergeSort(list)); 