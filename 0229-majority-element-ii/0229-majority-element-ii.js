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
    
    map.forEach((val, key) => {
        if(val > Math.floor(nums.length / 3)) {
            result.push(key);
        }
    })
    
    
    
    return result;
};