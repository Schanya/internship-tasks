function primeFactors(a, arr = {}, b = 2) {

    if (b > Math.sqrt(a)) {
        arr[a] == undefined ? arr[a] = 1 : arr[a] += 1;
        return arr;
    } else if (a % b == 0) {
        arr[b] == undefined ? arr[b] = 1 : arr[b] += 1;
        primeFactors(a / b, arr, b);
    } else {
        primeFactors(a, arr, ++b);
    }
    return Object.entries(arr).map(el => el[1] > 1 ? `(${el[0]}**${el[1]})` : `(${el[0]})`).join('');
}

console.log(primeFactors(86240));