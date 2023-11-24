function flattenSlow(arr) {
    let result = [];

    function recursiveFlatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                recursiveFlatten(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    recursiveFlatten(arr);
    return result;
}

function flattenFast(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenFast(val)) : acc.concat(val), []);
}

// Пример использования
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenSlow(nestedArray)); // [1, 2, 3, 4, 5, 6]
console.log(flattenFast(nestedArray)); // [1, 2, 3, 4, 5, 6]