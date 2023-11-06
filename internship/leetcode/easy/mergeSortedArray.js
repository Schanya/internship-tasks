/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const len = m + n
    nums1.splice(len - n)
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }

    nums1 = nums1.sort((a, b) => a - b)
    return nums1
};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

console.log(merge(nums1, m, nums2, n));