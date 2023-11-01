/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const obj = {};

    arr.reduce((sum, el) => (sum[el] == undefined ? sum[el] = 1 : sum[el] += 1, sum), obj)

    const countArr = Object.values(obj);

    return !countArr.sort((a, b) => a - b).some((el, i, arr) => arr[i] == arr[i + 1])
};

// let uniqueOccurrences = function (arr) {
//     // Let's use map to count numbers' occurance in arr
//     let map = new Map();

//     for (let item of arr) {
//         //at first map.get(item)+1 is undefined so we set 1 instead
//         map.set(item, map.get(item) + 1 || 1)
//     }

//     // map values are occurances of each element
//     // we create set of elements' occurances(map.values()) to have unique occurances
//     let set = new Set(map.values());

//     // check if set.size(unique occurances) equals map.size(actual occurances)
//     return set.size === map.size
// };

const arr = [1, 2, 2, 1, 1, 3]

console.log(uniqueOccurrences(arr));