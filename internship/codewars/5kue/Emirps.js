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

function reverseNumber(num) {
    let reverse = 0;
    while (num !== 0) {
        reverse = (reverse * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reverse;
}

function findEmirp(n) {
    let counter = 0;
    let sum = 0;
    let max = 0;

    for (let i = 13; i < n; i++) {
        if (isPrime(i)) {
            const reverseNum = reverseNumber(i)

            if (reverseNum !== i) {
                if (isPrime(reverseNum)) {
                    counter++;
                    sum += i;
                    max = i
                }
            }
        }
    }

    return [counter, max, sum]
}


console.log(findEmirp(50)) //[4, 37, 98]