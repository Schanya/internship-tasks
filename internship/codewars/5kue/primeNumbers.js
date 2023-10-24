function isPrime(number) {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
}

function getPrimes(s, f) {

    let start = Math.min(s, f)
    const finish = Math.max(s, f)


    const primes = [];

    if (start < 2) start = 2;

    for (let i = start; i <= finish; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }

    }

    return primes;
}

// const isPrime = n => {
//     for (let i = 2, s = Math.sqrt(n); i <= s; i++)
//         if (n % i === 0) return false;
//     return n > 1;
// }

// const getPrimes = (x, y) => {
//     [x, y] = [x, y].sort((x, y) => x - y);
//     return [...Array(y + 1).keys()].slice(x).filter(isPrime);
// }

console.log(getPrimes(30, 0));