function decomp(n) {
    const obj = {};

    for (let j = 2; j < n + 1; j++) {
        let k = 2;
        let i = j;
        while (i > 1) {
            while (i % k == 0) {
                obj[k] == undefined ? obj[k] = 1 : obj[k] += 1;
                i /= k;

            }
            k += 1

        }

    }


    return Object.entries(obj).map(el => el[1] > 1 ? `${el[0]}^${el[1]}` : el[0]).join(' * ');
}

console.log(test(12));