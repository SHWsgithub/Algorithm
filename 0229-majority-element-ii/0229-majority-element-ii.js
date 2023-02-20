/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    let n = nums.length;
    let limit = Math.floor(n / 3);
    const map = nums.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    let occurences = [...map.values()], vals = [...map.keys()];
    vals = vals.filter((num, idx) => occurences[idx] > limit);
    return vals;
};
