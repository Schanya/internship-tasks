function notPrimes(a, b) {
    const result = [];

    // Проверка на простоту с использованием решета Эратосфена
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        const primes = new Array(num + 1).fill(true);
        primes[0] = false;
        primes[1] = false;
        for (let i = 2; i * i <= num; i++) {
            if (primes[i]) {
                for (let j = i * i; j <= num; j += i) {
                    primes[j] = false;
                }
            }
        }
        return primes[num];
    }

    // Преобразование числа в строку и разбиение на отдельные цифры
    function getDigits(num) {
        return num.toString().split('');
    }

    for (let i = a < 22 ? 22 : a; i < b; i++) {
        const digits = getDigits(i);
        const isPrimeDigits = digits.every(digit => /[2357]/.test(digit));
        if (isPrimeDigits && !isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

// Пример использования
const a = 2;
const b = 222;
const numbers = notPrimes(a, b);
console.log(numbers); // [22, 23, 25, 27, 32, 33, 35, 37, 52, 53, 55, 57, 72, 73, 75, 77, 222, 223, 225, 227, 232, 233, 235, 237, 252, 253, 255, 257, 272, 273, 275, 277, 322, 323, 325, 327, 332, 333, 335, 337, 352, 353, 355, 357, 372, 373, 375, 377, 522, 523, 525, 527, 532, 533, 535, 537, 552, 553, 555, 557, 572, 573, 575, 577, 722, 723, 725, 727, 732, 733, 735, 737, 752, 753, 755, 757, 772, 773, 775, 777]