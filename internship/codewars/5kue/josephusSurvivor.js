function josephusSurvivor(n, k) {
    let deletePosition = k > n ? (k % n) - 1 : k - 1;

    if (deletePosition == -1) { deletePosition = n - 1 };

    let array = new Array(n);
    for (let i = 0; i < array.length; i++) {
        array[i] = i + 1;
    }

    while (array.length > 1) {
        array.splice(deletePosition, 1);
        deletePosition += k - 1;
        while (deletePosition >= array.length) { deletePosition -= array.length };
    };

    return array[0];
}

console.log((7, 3));