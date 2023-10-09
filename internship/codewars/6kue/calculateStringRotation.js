function shiftedDiff(first, second) {
    let count = 0;

    if (first == second) return count;

    while (first != second) {
        const firstArr = first.split('');

        firstArr.unshift(firstArr.pop())

        first = firstArr.join('')
        count++;

        if (count > first.length) {
            return -1
        }
    }

    return count;
}