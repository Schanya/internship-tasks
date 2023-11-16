function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function hasPrimeDigit(num) {
    const digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        if (isPrime(digit)) {
            return true;
        }
    }
    return false;
}

function solve(n) {
    let count = 0;
    let num = 1;

    while (count <= n) {
        if (!isPrime(num) && !hasPrimeDigit(num)) {
            if (count === n) {
                return num;
            }
            count++;
        }
        num++;
    }

    return -1; // Return -1 if the index is out of range
}

// Пример использования
console.log(solve(0)); // 1
console.log(solve(2)); // 6