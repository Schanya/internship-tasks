function flatten(array) {
    var l = array.length;
    while (l--) {
        if (array[l].some(el => Array.isArray(el))) {
            flatten(array[l]);
            array.splice(l, 1, ...array[l]);
        }
    }

    return array.map(el => el.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0])
}

console.log(flatten([[[1, 2, 3], [9, 10]], [[4, 5], [6, 7, 8]]]));