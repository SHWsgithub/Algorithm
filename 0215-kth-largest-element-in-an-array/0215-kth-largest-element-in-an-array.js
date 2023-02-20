/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const pivotIndex = Math.floor(Math.random() * nums.length);
    const pivot = nums[pivotIndex];
    const left = [], right = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === pivotIndex) continue;
        if (nums[i] >= pivot) left.push(nums[i]);
        else right.push(nums[i]);
    }

    if (left.length === k - 1) return pivot;
    else if (left.length >= k) return findKthLargest(left, k);
    else return findKthLargest(right, k - left.length - 1);
};