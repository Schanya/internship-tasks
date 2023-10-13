const chunk = function (arr, size) {
    const ans = [];
    for (let i = 0, n = arr.length; i < n; i += size) {
        ans.push(arr.slice(i, i + size));
    }
    return ans;
};

const arr = [1, 9, 6, 3, 2], size = 3;

console.log(chunk(arr, size));