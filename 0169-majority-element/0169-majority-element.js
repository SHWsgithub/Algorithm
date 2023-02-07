/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let expect = null;
    
    for (let i = 0; i < nums.length; i++) {
        if(count === 0) {
            expect = nums[i];
        }
        nums[i] === expect ? count++ : count--;
    }
    return expect;
};

/**
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
};
 */
