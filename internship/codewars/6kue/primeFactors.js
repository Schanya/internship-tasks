function primeFactors(num) {
    const factors = [];
    let divisor = 2;

    while (num >= 2) {
        if (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

// Пример использования
console.log(primeFactors(1)); // []
console.log(primeFactors(3)); // [3]
console.log(primeFactors(8)); // [2, 2, 2]
console.log(primeFactors(9)); // [3, 3]
console.log(primeFactors(12)); // [2, 2, 3]