const minSubArrayLen = function (s, nums) {
    let sum = 0
    let result = Infinity;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= s) {
            result = Math.min(result, end - start + 1);
            sum -= nums[start];

            start++;
        }
    }

    return result == Infinity ? 0 : result;
};

const s = 7, nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(s, nums));