/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    const permFunc = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permFunc(curr.slice(), m.concat(next))
            }
        }
    }

    permFunc(nums)

    return result;
}
console.log(permute([1, 2, 3]));