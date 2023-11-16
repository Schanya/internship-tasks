function isPrime(num) {
    console.log(num)
    let numbersOnly = [];

    if (isNaN(Number(num))) {
        const regex = /prime/i;

        if (regex.test(num)) {
            return true
        } else {
            numbersOnly = num.replace(/[^\d]/g, ' ').split(' ')
        };
    } else {
        numbersOnly.push(num)
    }

    if (numbersOnly.length) {
        for (let i = 0; i < numbersOnly.length; i++) {
            if (prime(numbersOnly[i])) {
                return true;
            }
        }
    }

    return false
}

function prime(num) {
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

console.log(isPrime('11aaagg4'))

