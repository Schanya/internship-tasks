// Should return a string representing the ranges
function toRange(arr) {
    arr = arr.sort((a, b) => a - b)
    let result = [];
    let tempReng = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];

        if (el - arr[i - 1] == 1) {
            tempReng[1] = el
        } else if (el - arr[i - 1] == 0) {
            continue;
        } else {
            result.push(tempReng.join('_'));
            tempReng = [el];
        }
    }

    result.push(tempReng.join('_'));

    return result.join(',')
}

// Should return an array
function toArray(str) {
    const result = [];
    const arr = str.split(',')

    if (!str.length) return result;

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (isNaN(Number(el))) {
            const arr = el.split('_')
            const temp = [];

            for (let i = Number(arr[0]); i <= Number(arr[1]); i++) {
                temp.push(i)
            }

            result.push(...temp)
            continue;
        }
        result.push(Number(el))
    }

    return result.sort((a, b) => a - b)
}


console.log(toRange([1, 1, 2, 3, 3, 4, 5, 5]));
console.log(toArray(''));