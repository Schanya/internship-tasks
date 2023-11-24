function recSequenceSum(n) {
    if (n == 1) return 1;

    return n + sequenceSum(n - 1)
}

function sequenceSum(n) {
    let result = n;

    for (let i = n - 1; i > 0; i--) {
        result += i
    }

    return result;
}

function formulaSequenceSum(n) {
    const firstItem = 1;
    const lastItem = n;

    return n * ((firstItem + lastItem) / 2)
}

console.log(sequenceSum(200))
console.log(recSequenceSum(200))
console.log(formulaSequenceSum(200))