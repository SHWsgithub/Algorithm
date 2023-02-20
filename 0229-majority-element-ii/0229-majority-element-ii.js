/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var majorityElement = function(nums) {
    let map = new Map();
    const result = new Set();
        
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > Math.floor(nums.length / 3)) {
            result.add(num);
        }
    }
    
    
    
    return Array.from(result);
};