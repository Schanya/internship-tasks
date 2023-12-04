var myAtoi = function (s) {
    let i = 0;
    let sign = 1;
    let result = 0;


    while (s[i] === ' ') {
        i++;
    }

    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && isDigit(s[i])) {
        const digit = parseInt(s[i]);
        result = result * 10 + digit;
        i++;
    }

    result = result * sign;

    result = Math.max(Math.min(result, Math.pow(2, 31) - 1), Math.pow(-2, 31));

    return result;
};

function isDigit(char) {
    return char >= '0' && char <= '9';
}