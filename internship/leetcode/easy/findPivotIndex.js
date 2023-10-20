/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalSum = nums.reduce((sum, el) => sum += el, 0)
    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - nums[i] - leftSum

        if (rightSum === leftSum) return i;

        leftSum += nums[i]
    }

    return -1
};
const nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums))