function firstNSmallest(arr, n) {
    if (n >= arr.length) {
        return arr;
    }

    let sortedArr = arr.slice().sort((a, b) => a - b);
    let smallestArr = sortedArr.slice(0, n);

    return arr.filter((num) => {
        if (smallestArr.includes(num)) {
            delete smallestArr[smallestArr.indexOf(num)];
            return true;
        }
        return false;
    });
}

console.log(firstNSmallest([7, 9, 10, 6, -10, -10, 8, 7, 2, -7, 7, 9, -5, 6, -7, 0, 7, 3, 8, 6, 9, -1, 9, 5, 3, -5, 4, -9, -2], 17))