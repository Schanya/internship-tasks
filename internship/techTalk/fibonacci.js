function fibonacciSlow(n) {
    if (n <= 1) return n;

    return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
}

function fibonacciFastEasy(n) {
    let a = 1,
        b = 1;

    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b]
    }

    return b
}

function fibonacciFast(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];

        result.push(prevNum1 + prevNum2);
    }

    return result[n]
}

console.log(fibonacciSlow(10))
console.log(fibonacciFast(10))
console.log(fibonacciFastEasy(10))