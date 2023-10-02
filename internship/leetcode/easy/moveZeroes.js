/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let zero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[zero++] = nums[i];
        }
    }


    for (let i = zero; i < nums.length; i++) {
        nums[i] = 0
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));