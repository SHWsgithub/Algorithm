/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (curr === 0) return acc;
      acc++;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;
        nums[i] = Math.max(nums[i] - curr, 0);
      }
      return acc;
    }, 0);
}; 