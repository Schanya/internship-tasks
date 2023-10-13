function number9(n) {
    let rest = 0, sum = 0, zeros = 0.1, cur = 0;
    while (n > 0) {
        const digit = n % 10;
        const factor = cur * zeros;
        sum += digit * factor;
        if (digit == 9) {
            sum += (rest + 1);
        }
        n = (n - digit) / 10;
        rest += 10 * zeros * digit;
        cur++;
        zeros *= 10;
    }
    return sum;
}