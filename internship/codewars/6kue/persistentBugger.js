function persistence(num) {
    let count = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((sum, el) => (sum *= el, sum), 1)
        count++;
    }

    return count;
}

console.log(persistence(25));