function findOdd(arr) {
    const counts = {};

    for (let num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (let num in counts) {
        if (counts[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    return -1; // Возвращаем -1 если нет числа, которое встречается нечетное количество раз
}