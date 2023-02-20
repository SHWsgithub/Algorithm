/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map();
    const result = [];
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    return Array.from(map.entries())
        .filter(([num, count]) => count > Math.floor(nums.length / 3))
        .map(([num]) => num);
};