/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    const arr = s.split('');

    let tempStr = '';
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (!tempStr.includes(el)) {
            tempStr += el
        } else {
            result.push(tempStr);
            tempStr = el;
        }
    }

    tempStr.length ? result.push(tempStr) : true;

    return result;
};

const s = "abacaba";

console.log(partitionString(s))