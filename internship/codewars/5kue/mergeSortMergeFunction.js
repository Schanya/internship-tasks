// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
    const result = [];

    while (a.length > 0 && b.length > 0) {
        let temp = null;

        if (a[0] >= b[0]) {
            temp = b.shift()
        } else {
            temp = a.shift()
        }

        result.push(temp);
    }

    return result.concat(a).concat(b)
}

console.log(mergesorted([1, 2, 3], [4]));