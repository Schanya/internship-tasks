class PrimeFactorizer {
    constructor(number) {
        this.factor = this.calculateFactor(number);
    }

    calculateFactor(number) {
        const factor = {};
        let divisor = 2;

        while (number > 1) {
            if (number % divisor === 0) {
                if (factor[divisor]) {
                    factor[divisor]++;
                } else {
                    factor[divisor] = 1;
                }
                number = number / divisor;
            } else {
                divisor++;
            }
        }

        return factor;
    }
}

// Пример использования
const factorizer = new PrimeFactorizer(24);
console.log(factorizer.factor); // { '2': 3, '3': 1 }