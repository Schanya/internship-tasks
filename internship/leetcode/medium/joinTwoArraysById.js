/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const result = {};
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];
        } else {
            result[arr2[i].id] = arr2[i];
        }
    }

    return Object.values(result);
};

const arr1 = [
    { "id": 2, "x": 9 },
    { "id": 1, "x": 1 },
],
    arr2 = [
        { "id": 3, "x": 5 }
    ]

console.log(join(arr1, arr2))
console.log('-----------------------------------------------')

const arr3 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
],
    arr4 = [
        { "id": 3, "x": 0, "y": 0 },
        { "id": 2, "x": 10, "y": 20 },

    ]

console.log(join(arr3, arr4))