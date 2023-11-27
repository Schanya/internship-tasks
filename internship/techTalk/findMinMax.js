function findMinMax(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        const el = array[i];

        if (el < min) min = el;
        if (el > max) max = el;
    }

    return [min, max]
}

function findMinMax2(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        const el = array[i];

        if (el < min) min = el;
    }

    for (let i = 1; i < array.length; i++) {
        const el = array[i];

        if (el > max) max = el;
    }

    return [min, max]
}

console.log(findMinMax([1, 2, 40, 55, 15, 18, -10]))

console.log(findMinMax2([1, 2, 40, 55, 15, 18, -10]))