/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0;
    let start = 0;
    let end = 0;
    while (end < nums.length - 1) {
        let maxEnd = end;
        for (let i = start; i <= end; i++) {
            if (i + nums[i] >= nums.length - 1) {
                return steps + 1;
            }
            maxEnd = Math.max(maxEnd, i + nums[i]);
        }
        start = end + 1;
        end = maxEnd;
        steps++;
    }
    return steps;
};