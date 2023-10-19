function countChar(str) {
    return str.split('').map(el => el.toLowerCase()).reduce((sum, el) => (sum[el] !== undefined ? sum[el] += 1 : sum[el] = 1, sum), {});
}

function isUpper(str) {
    if (str === str.toUpperCase(str)) return true;
    else return false;
}

function changeStr(str, rules) {
    return str.split('').map(el => {
        if (rules[el.toLowerCase()] !== undefined) {
            if (isUpper(el)) {
                return rules[el.toLowerCase()] % 2 == 0 ? el.toUpperCase() : el.toLowerCase();
            } else {
                return rules[el] % 2 == 0 ? el.toLowerCase() : el.toUpperCase();
            }
        }

        return el
    }).join('')
}

function workOnStrings(a, b) {
    const countAChar = countChar(a);
    const countBChar = countChar(b);

    a = changeStr(a, countBChar);
    b = changeStr(b, countAChar)

    return a + b;
}

console.log(workOnStrings("abcdeFgtrazw", "defgGgfhjkwqe"));
