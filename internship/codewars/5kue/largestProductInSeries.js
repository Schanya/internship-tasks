function greatestProduct(digits) {
    let maxProduct = 0;
    for (let i = 0; i < digits.length - 4; i++) {
        const product = parseInt(digits[i]) * parseInt(digits[i + 1]) * parseInt(digits[i + 2]) * parseInt(digits[i + 3]) * parseInt(digits[i + 4]);
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

// Пример использования
console.log(greatestProduct("123834539327238239583")); // должно вернуть 3240