function repeatingFractions(numerator, denominator) {
    const tempResult = String(numerator / denominator);

    const [wholeNumber, balance] = tempResult.split('.');

    if (balance) {
        return wholeNumber + '.' + balance.replace(/(.)\1+/g, '($1)');
    }

    return wholeNumber;
}

console.log(repeatingFractions(1, 1))