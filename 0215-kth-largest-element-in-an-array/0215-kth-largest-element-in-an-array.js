/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const recursion = (arr, k) => {
        const pivotIndex = Math.floor(Math.random() * arr.length);
        const pivot = arr[pivotIndex];
        const left = [], right = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) continue;
            if (arr[i] >= pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }

        if (left.length === k - 1) return pivot;
        else if (left.length >= k) return recursion(left, k);
        else return recursion(right, k - left.length - 1);
    }
    
    return recursion(nums, k);
};