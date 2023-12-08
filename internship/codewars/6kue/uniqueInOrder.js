var uniqueInOrder = function (iterable) {
    if (!Array.isArray(iterable)) {
        iterable = iterable.split('');
    }

    if (!iterable.length) return [];

    const result = [iterable[0]];
    for (let i = 1; i < iterable.length; i++) {
        const el = iterable[i];

        if (iterable[i - 1] != iterable[i]) {
            result.push(iterable[i]);
        }
    }

    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));