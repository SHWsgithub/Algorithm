/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], i);
            continue;
        };
        if(i - map.get(nums[i]) <= k) return true;
        map.set(nums[i], i);
    }
    
    return false;
};