var maxSequence = function (arr) {

    let currentSum = 0
    let maxSum = 0

    if (arr.length === 0) {
        return 0
    }

    arr.forEach(a => {
        currentSum = Math.max(a, currentSum + a)
        maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
}

const arr = [7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43];
console.log(maxSequence(arr));