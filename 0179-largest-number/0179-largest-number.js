/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {   
    nums = nums.map(num => num.toString());
    
    nums.sort((a, b) => {
        let exam1 = a + b;
        let exam2 = b + a;
        if(exam1 > exam2) return -1;
        else return 1;        
    });

    if (nums[0] === '0') {
        return '0';
    }

    return nums.join('');
}