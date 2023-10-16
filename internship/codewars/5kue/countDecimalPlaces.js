function decimalPlaces(n) {
    let result = 0;

    if (n < 0) n *= -1;

    let strN = n.toString();

    if (!strN.includes('.') && !strN.includes('e')) return 0;

    if (strN.includes('e')) {

        result += +strN.split('-')[1]
        strN = strN.split('e')[0]
    }

    const strSecondPart = strN.split('.')[1] ?? '';

    result += strSecondPart.length;

    return result
}

console.log(decimalPlaces(3.14));
console.log(decimalPlaces(-2.2e-14));