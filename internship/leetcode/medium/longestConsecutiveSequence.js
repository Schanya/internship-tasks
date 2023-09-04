/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    if (!nums.length) return 0;

    let currentLength = 1;
    let max = 1;

    nums.sort((a, b) => a - b)

    for (let i = 1; i < nums.length; i++) {
        const currentEl = nums[i];
        const previousEl = nums[i - 1];

        if (currentEl - previousEl == 1) {
            currentLength++;

            max = Math.max(currentLength, max)
        } else if (nums[i] == nums[i - 1]) {
            continue;
        } else {
            currentLength = 1;
        }
    }

    return max;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));